import BasicCharacter from "@assets/character-images-left-side/default/basic-character.png";
import Hair2 from "@assets/character-images-left-side/hair/hair-2.png";
import { CustomizationTabs } from "./components/navigation";
import { useEffect, useRef } from "react";
import { useObjectState } from "@uidotdev/usehooks";

const initialState = {
  background: "#d2d2d2",
  base: BasicCharacter,
  hair: Hair2,
  eyes: undefined,
  ears: undefined,
  nose: undefined,
  mouth: undefined,
  accessories: undefined,
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [assets, setAssets] = useObjectState<Assets>(initialState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      if (assets.background) {
        context.fillStyle = assets.background;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      const loadAndDrawImage = (assetSrc: string) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => {
            context.drawImage(image, 0, 0); // Adjust as needed
            resolve(assetSrc);
          };
          image.onerror = (error) => {
            console.error(`Failed to load the image: ${assetSrc}`, error);
            reject(error);
          };
          image.src = assetSrc;
        });
      };

      const drawSequentially = async () => {
        for (const key of Object.keys(assets)) {
          const url = assets[key] as string;
          if (url) {
            await loadAndDrawImage(url);
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
          {/* <div className="bg-gray inline-block">
            <img width={513} height={546} src={BasicCharacter} />
          </div> */}
          <canvas ref={canvasRef} width={514} height={546}></canvas>
          <div className="flex flex-col gap-4 border-2 border-teal-500">
            <h2 className="lg:text-2xl text-lg font-bold">Customize Look</h2>
            <CustomizationTabs className="flex-1" />
          </div>
        </div>
      </div>
    </main>
  );
}
