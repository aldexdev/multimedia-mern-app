// Import dependencies
import { Finger, FingerCurl, GestureDescription } from "fingerpose";

export const palmGesture = new GestureDescription("palm");

// rest of the fingers
for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  palmGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}
