import { CustomizationTabs } from "./components/navigation";
import { useAssets } from "./hooks";
import { Button } from "react-aria-components";
import RandomIcon from "@assets/icons/random-icon.svg?react";
import DownloadIcon from "@assets/icons/download-icon.svg?react";
import { button } from "./styles/common";
import { Character } from "./components/displays/Character";
import { Assets } from "./types/characterGenerator";

export default function App() {
  const { assets, randomize } = useAssets();

  return (
    <main className="min-h-dvh flex p-4 lg:items-center lg:justify-center">
      <div className="lg:space-y-10 space-y-4">
        <h1 className="lg:text-6xl text-3xl font-bold">CHARACTER GENERATOR</h1>
        <div className="grid lg:grid-cols-[max-content_1fr] lg:gap-16 gap-4">
          <div className="grid gap-4">
            <Character />
            <div className="grid grid-cols-2 gap-4">
              <Button
                onPress={randomize}
                className={button({ variant: "random" })}
              >
                <RandomIcon />
                Random
              </Button>
              <Button
                onPress={() => downloadCharacterAsPNG(assets)}
                className={button({ variant: "download" })}
              >
                <DownloadIcon />
                Download
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl text-lg font-bold">Customize Look</h2>
            <CustomizationTabs className="flex-1" />
          </div>
        </div>
      </div>
    </main>
  );
}

const downloadCharacterAsPNG = async (assets: Assets) => {
  const combinedCanvas = document.createElement("canvas");
  combinedCanvas.width = 514;
  combinedCanvas.height = 546;
  const ctx = combinedCanvas.getContext("2d");

  const canvases = Object.values(assets)
    .map((asset) => asset.canvasRef?.current)
    .filter((curr) => curr) as HTMLCanvasElement[];

  console.log({ canvases });

  canvases.forEach((canvas) => {
    ctx!.drawImage(canvas, 0, 0);
  });

  const imageURL = combinedCanvas.toDataURL("image/png");

  const downloadLink = document.createElement("a");
  downloadLink.href = imageURL;
  downloadLink.download = "character.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
