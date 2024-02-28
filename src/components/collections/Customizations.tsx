import { useAssets } from "@/hooks";
import { AssetList, BackgroundList } from "./CustomizationLists";
import { accessories, ears, eyes, hairs, mouths, noses } from "@/data/assets";

export const Accessories = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("accessory", Array.from(selection)[0] as string)
      }
      items={accessories}
      aria-label="accessories"
    />
  );
};

export const Ears = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("ears", Array.from(selection)[0] as string)
      }
      items={ears}
      aria-label="ears"
    />
  );
};

export const Eyes = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("eyes", Array.from(selection)[0] as string)
      }
      items={eyes}
      aria-label="eyes"
    />
  );
};

export const Hairs = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("hair", Array.from(selection)[0] as string)
      }
      items={hairs}
      aria-label="hairs"
    />
  );
};

export const Mouths = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("mouth", Array.from(selection)[0] as string)
      }
      items={mouths}
      aria-label="mouths"
    />
  );
};

export const Noses = () => {
  const { updateAsset } = useAssets();
  return (
    <AssetList
      onSelectionChange={(selection) =>
        updateAsset("nose", Array.from(selection)[0] as string)
      }
      items={noses}
      aria-label="noses"
    />
  );
};

export const Backgrounds = () => {
  const { updateAsset } = useAssets();
  return (
    <BackgroundList
      onSelectionChange={(selection) =>
        updateAsset("background", Array.from(selection)[0] as string)
      }
      items={[
        { color: "#d2d2d2" },
        { color: "#565dff" },
        { color: "#c956ff" },
        { color: "#53c436" },
        { color: "#d5d92a" },
        { color: "#d9882a" },
      ]}
      aria-label="backgrounds"
    />
  );
};
