// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const leftGesture = new GestureDescription("left");

// index
leftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
leftGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
leftGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  leftGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  leftGesture.addCurl(finger, FingerCurl.HalfCurl, 0.7);
}
