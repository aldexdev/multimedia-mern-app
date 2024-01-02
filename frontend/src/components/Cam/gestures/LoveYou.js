// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const loveYouGesture = new GestureDescription("i_love_you");

// index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);

// pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);

// rest of the fingers
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring]) {
  loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  loveYouGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}
