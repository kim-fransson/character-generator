import {
  useAssets,
  useCanvasBackgroundDrawer,
  useCanvasImageDrawer,
} from "@/hooks";
import { useRef } from "react";

export const Character = () => {
  return (
    <div className="relative *:absolute w-[514px] h-[546px]">
      <Background />
      <Base />
      <Hair />
      <Eyes />
      <Ears />
      <Nose />
      <Mouth />
      <Accessory />
    </div>
  );
};

const Base = () => {
  const { assets } = useAssets();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "base")?.value);
  return <canvas width={514} height={546} id="base" ref={canvasRef}></canvas>;
};

const Background = () => {
  const { assets } = useAssets();
  const canvasRef = useCanvasBackgroundDrawer(
    assets.find((a) => a.key === "background")?.value || "black",
  );
  return (
    <canvas width={514} height={546} id="background" ref={canvasRef}></canvas>
  );
};

const Hair = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "hair")?.value);
  return <canvas width={514} height={546} id="hair" ref={canvasRef}></canvas>;
};

const Eyes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "eyes")?.value);
  return <canvas width={514} height={546} id="eyes" ref={canvasRef}></canvas>;
};

const Ears = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "ears")?.value);
  return <canvas width={514} height={546} id="ears" ref={canvasRef}></canvas>;
};

const Nose = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "nose")?.value);
  return <canvas width={514} height={546} id="nose" ref={canvasRef}></canvas>;
};

const Mouth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.find((a) => a.key === "mouth")?.value);
  return <canvas width={514} height={546} id="mouth" ref={canvasRef}></canvas>;
};

const Accessory = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets } = useAssets();
  useCanvasImageDrawer(
    canvasRef,
    assets.find((a) => a.key === "accessory")?.value,
  );
  return (
    <canvas width={514} height={546} id="accessory" ref={canvasRef}></canvas>
  );
};
