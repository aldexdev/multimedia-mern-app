// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const oneGesture = new GestureDescription("one");

// index
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  oneGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  oneGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
