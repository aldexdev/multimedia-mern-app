import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as fp from "fingerpose";

import { useInterval } from "./hooks";
import { setHandDetector, drawhand } from "./utils";
import useStyles from "./styles";

export default function Camera() {
  const classes = useStyles();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [net, setNet] = useState(false);
  const [emoji, setEmoji] = useState(null);

  const detect = async (net) => {
    // check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // get video properties
      const { video } = webcamRef.current;
      const { videoWidth } = webcamRef.current.video;
      const { videoHeight } = webcamRef.current.video;

      // set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // make detections
      const hand = await net.estimateHands(video);
      console.log(hand[0]?.score);
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ]);
        const gesture = await GE.estimate(hand[0]?.score, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(emoji);
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawhand(hand, ctx);
    }
  };
  useEffect(() => {
    const runHandPose = async () => {
      // Load the MediaPipe handpose model.
      // net은 신경망 모델을 의미한다.
      const net = await setHandDetector();
      console.log("Handpose model Loaded");
      setNet(net);
      // Loop and Detect hands > 지속적인 감지 필요
    };
    runHandPose();
  }, []);

  useInterval(() => {
    if (net) {
      detect(net);
    }
  }, 10);

  return (
    <div>
      <Webcam ref={webcamRef} className={classes.image} />
      <canvas ref={canvasRef} className={classes.image} />
    </div>
  );
}
