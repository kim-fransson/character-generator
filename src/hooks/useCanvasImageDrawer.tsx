import { RefObject, useEffect } from "react";

export const useCanvasImageDrawer = (
  canvasRef: RefObject<HTMLCanvasElement>,
  imageUrl?: string,
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      if (imageUrl) {
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [imageUrl, canvasRef]);

  return canvasRef;
};
