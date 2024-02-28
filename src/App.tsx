import { CustomizationTabs } from "./components/navigation";
import { useEffect, useRef } from "react";
import { useAssets } from "./hooks";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      context.fillStyle = assets.background;
      context.fillRect(0, 0, canvas.width, canvas.height);

      const loadAndDrawImage = async (assetSrc: string) => {
        return new Promise<void>((resolve, reject) => {
          const image = new Image();
          image.onload = () => {
            context.drawImage(image, 0, 0);
            resolve();
          };
          image.onerror = reject;
          image.src = assetSrc;
        });
      };

      const drawSequentially = async () => {
        for (const key of Object.keys(assets).filter(
          (k) => k !== "background",
        ) as (keyof Omit<Assets, "background">)[]) {
          const assetUrl = assets[key];
          if (typeof assetUrl === "string") {
            await loadAndDrawImage(assetUrl);
          }
        }
      };

      drawSequentially();
    }
  }, [assets]);

  return (
    <main className="min-h-dvh flex p-4 lg:items-center lg:justify-center">
      <div className="lg:space-y-10 space-y-4">
        <h1 className="lg:text-6xl text-3xl font-bold">CHARACTER GENERATOR</h1>
        <div className="grid lg:grid-cols-[max-content_1fr] lg:gap-16 gap-4">
          <canvas ref={canvasRef} width={514} height={546}></canvas>
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl text-lg font-bold">Customize Look</h2>
            <CustomizationTabs className="flex-1" />
          </div>
        </div>
      </div>
    </main>
  );
}
