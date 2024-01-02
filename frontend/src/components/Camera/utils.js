import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

const setHandDetector = async () => {
  const hands = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: "mediapipe",
    solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
    modelType: "full",
    maxHands: 2,
  };
  return await handPoseDetection.createDetector(hands, detectorConfig);
};

const drawhand = (predictions, ctx) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const { keypoints } = prediction;
      for (let i = 0; i < keypoints.length; i += 1) {
        // Get x point
        const x = keypoints[i].x;
        // Get y point
        const y = keypoints[i].y;
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        // Set line color
        ctx.fillStyle = "indigo";
        ctx.fill();
      }
    });
  }
};

export { setHandDetector, drawhand };
