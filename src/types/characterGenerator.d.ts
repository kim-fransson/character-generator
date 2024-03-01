type AssetsState = {
  assets: Assets;
  updateAsset: (key: AssetKey, value: string) => void;
  randomize: () => void;
};

type Assets = Asset[];

type AssetKey =
  | "background"
  | "base"
  | "hair"
  | "eyes"
  | "ears"
  | "nose"
  | "mouth"
  | "accessory";

type Asset = {
  value?: string;
  key: AssetKey;
};

type UpdateAssetAction = {
  type: "UPDATE_ASSET";
  payload: {
    key: AssetKey;
    value?: string;
  };
};

type Randomize = {
  type: "RANDOMIZE";
};

type InitStoredState = {
  type: "INIT_STORED_STATE";
  value: Assets;
};

type AssetAction = UpdateAssetAction | Randomize | InitStoredState;
