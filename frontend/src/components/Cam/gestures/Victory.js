// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const victoryGesture = new GestureDescription("victory");

// index
victoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl);
victoryGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
victoryGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
victoryGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle
victoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl);
victoryGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);
victoryGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
victoryGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
  victoryGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  victoryGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
