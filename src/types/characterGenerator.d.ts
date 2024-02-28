type AssetsState = {
  assets: Assets;
  updateAsset: (key: keyof Assets, value: string) => void;
};

type Assets = {
  background: string;
  base: string;
  hair?: string;
  eyes?: string;
  ears?: string;
  nose?: string;
  mouth?: string;
  accessory?: string;
};

type UpdateAssetAction = {
  type: "UPDATE_ASSET";
  payload: {
    key: keyof Assets;
    value: string;
  };
};

type AssetAction = UpdateAssetAction;
