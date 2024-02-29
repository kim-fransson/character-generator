import { RefObject } from "react";

type AssetsState = {
  assets: Assets;
  updateAsset: (key: keyof Assets, value: string) => void;
  updateCanvasRef: (
    key: keyof Assets,
    canvasRef: RefObject<HTMLCanvasElement>,
  ) => void;
  randomize: () => void;
};

type Assets = {
  background: Asset;
  base: Asset;
  hair?: Asset;
  eyes?: Asset;
  ears?: Asset;
  nose?: Asset;
  mouth?: Asset;
  accessory?: Asset;
};

type Asset = {
  value: string;
  canvasRef?: RefObject<HTMLCanvasElement>;
};

type UpdateAssetAction = {
  type: "UPDATE_ASSET";
  payload: {
    key: keyof Assets;
    value?: string;
  };
};

type UpdateCanvasRef = {
  type: "UPDATE_CANVAS_REF";
  payload: {
    key: keyof Assets;
    canvasRef?: RefObject<HTMLCanvasElement>;
  };
};

type Randomize = {
  type: "RANDOMIZE";
};

type AssetAction = UpdateAssetAction | Randomize | UpdateCanvasRef;
