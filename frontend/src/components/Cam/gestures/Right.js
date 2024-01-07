// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const rightGesture = new GestureDescription("right");

// index
rightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rightGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
rightGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rightGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  rightGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}
