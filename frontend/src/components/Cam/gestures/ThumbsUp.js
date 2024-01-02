// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const thumbsUpGesture = new GestureDescription("thumbs_up");

// thumb
thumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.7);
thumbsUpGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  0.7
);

// rest of the fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsUpGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
