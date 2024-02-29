/* eslint-disable react-hooks/exhaustive-deps */
import {
  useAssets,
  useCanvasBackgroundDrawer,
  useCanvasImageDrawer,
} from "@/hooks";
import { useEffect, useRef } from "react";

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
  const { assets, updateCanvasRef } = useAssets();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCanvasImageDrawer(canvasRef, assets.base.value);
  useEffect(() => {
    updateCanvasRef("base", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="base" ref={canvasRef}></canvas>;
};

const Background = () => {
  const { assets, updateCanvasRef } = useAssets();
  const canvasRef = useCanvasBackgroundDrawer(assets.background.value);
  useEffect(() => {
    updateCanvasRef("background", canvasRef);
  }, [canvasRef]);
  return (
    <canvas width={514} height={546} id="background" ref={canvasRef}></canvas>
  );
};

const Hair = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.hair?.value);
  useEffect(() => {
    updateCanvasRef("hair", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="hair" ref={canvasRef}></canvas>;
};

const Eyes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.eyes?.value);
  useEffect(() => {
    updateCanvasRef("eyes", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="eyes" ref={canvasRef}></canvas>;
};

const Ears = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.ears?.value);
  useEffect(() => {
    updateCanvasRef("ears", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="ears" ref={canvasRef}></canvas>;
};

const Nose = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.nose?.value);
  useEffect(() => {
    updateCanvasRef("nose", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="nose" ref={canvasRef}></canvas>;
};

const Mouth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.mouth?.value);
  useEffect(() => {
    updateCanvasRef("mouth", canvasRef);
  }, [canvasRef]);
  return <canvas width={514} height={546} id="mouth" ref={canvasRef}></canvas>;
};

const Accessory = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { assets, updateCanvasRef } = useAssets();
  useCanvasImageDrawer(canvasRef, assets.accessory?.value);
  useEffect(() => {
    updateCanvasRef("accessory", canvasRef);
  }, [canvasRef]);
  return (
    <canvas width={514} height={546} id="accessory" ref={canvasRef}></canvas>
  );
};
