import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";

import { drawHand } from "./utilities";
import useStyles from "./styles";
import { loveYouGesture } from "./gestures/LoveYou";
import { thumbsDownGesture } from "./gestures/ThumbsDown";
import { okGesture } from "./gestures/Ok";
import { fistGesture } from "./gestures/Fist";
import { palmGesture } from "./gestures/Palm";
import { oneGesture } from "./gestures/One";
import { thumbsUpGesture } from "./gestures/ThumbsUp";
import { victoryGesture } from "./gestures/Victory";

function Cam() {
  const classes = useStyles();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  loop and detect hands
    setInterval(() => {
      detect(net);
    }, 2000);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          victoryGesture,
          thumbsUpGesture,
          loveYouGesture,
          thumbsDownGesture,
          okGesture,
          fistGesture,
          palmGesture,
          oneGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          console.log(gesture.gestures);
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);
          // console.log(gesture.gestures[maxConfidence].name);
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div>
      <Webcam ref={webcamRef} className={classes.image} />
      <canvas ref={canvasRef} className={classes.image} />
    </div>
  );
}

export default Cam;
