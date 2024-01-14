// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// Define Gesture Description
export const thumbsDownGesture = new GestureDescription("thumbs_down");

// thumb
thumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

thumbsDownGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalDownLeft,
  0.9
);
thumbsDownGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalDownRight,
  0.9
);

// rest of the fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
