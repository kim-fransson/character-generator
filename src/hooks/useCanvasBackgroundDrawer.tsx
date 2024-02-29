import { useEffect, useRef } from "react";

export const useCanvasBackgroundDrawer = (color: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [color]);

  return canvasRef;
};
