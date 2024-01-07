// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const fourGesture = new GestureDescription("four");

// index
fourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
fourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
fourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

// middle
fourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
fourGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.8);
fourGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);

// ring
fourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
fourGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.8);
fourGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.8);

// pinky
fourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
fourGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);
fourGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.8);

// thumb
fourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
fourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
