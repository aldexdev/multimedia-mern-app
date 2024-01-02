// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const okGesture = new GestureDescription("ok");

// thumb
okGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl);
okGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9);

// index
okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
okGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
okGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.9);

// do this for all other fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}
