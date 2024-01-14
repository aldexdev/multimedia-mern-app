// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const threeGesture = new GestureDescription("three");

// index
threeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
threeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

// middle
threeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.8);
threeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);

// ring
threeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.8);
threeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.8);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Pinky]) {
  threeGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  threeGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}
