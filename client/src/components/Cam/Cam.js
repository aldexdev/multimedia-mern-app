import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";

import useStyles from "./styles";
import * as actionType from "../../constants/actionTypes";

// importing gestures
import { loveYouGesture } from "./gestures/LoveYou";
import { thumbsDownGesture } from "./gestures/ThumbsDown";
import { palmGesture } from "./gestures/Palm";
import { oneGesture } from "./gestures/One";
import { thumbsUpGesture } from "./gestures/ThumbsUp";
import { victoryGesture } from "./gestures/Victory";
import { actions } from "./actions";
import { rightGesture } from "./gestures/Right";
import { leftGesture } from "./gestures/Left";
import { useSelector } from "react-redux";
import { threeGesture } from "./gestures/Three";
import { fourGesture } from "./gestures/Four";

function Cam({ change }) {
  const classes = useStyles();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
  };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  loop and detect hands
    setInterval(() => {
      detect(net, posts);
    }, 5000);
  };

  const detect = async (net, posts) => {
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
          palmGesture,
          oneGesture,
          rightGesture,
          leftGesture,
          threeGesture,
          fourGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          actions(gesture.gestures[maxConfidence].name, change, posts, logout);
        }
      }
    }
  };

  useEffect(() => {
    runHandpose();
    // controlling memory leak on promises
    return () => {
      setUser(null);
    };
  }, [posts]);

  return (
    <div>
      <Webcam ref={webcamRef} className={classes.image} />
      <canvas ref={canvasRef} className={classes.image} />
    </div>
  );
}

export default Cam;
