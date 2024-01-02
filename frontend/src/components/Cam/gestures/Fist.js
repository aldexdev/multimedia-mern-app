// Import dependencies
import {
  Finger,
  FingerCurl,
  GestureDescription,
} from "fingerpose";

export const fistGesture = new GestureDescription("fist");

// rest of the fingers
for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  fistGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
