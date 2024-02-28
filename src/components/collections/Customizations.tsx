import { useAssets } from "@/hooks";
import { AssetList, BackgroundList } from "./CustomizationLists";

const transformAssets = (
  importResult: Record<string, unknown>,
  assetType: string,
) => {
  const basePublicPath = `/character-images-left-side/${assetType}`;
  return Object.entries(importResult).map(([path, module]) => {
    const fileName = path.split("/").pop()?.split(".").shift();
    const pngPath = `${basePublicPath}/${fileName}.png`;
    return {
      preview: module as string,
      image: pngPath,
    };
  });
};

const hairsImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/hair/*.svg",
  {
    query: "?url",
    import: "default",
    eager: true,
  },
);

const accessoriesImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/accessories/*.svg",
  { query: "?url", import: "default", eager: true },
);

const mouthsImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/mouth/*.svg",
  { query: "?url", import: "default", eager: true },
);

const nosesImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/nose/*.svg",
  { query: "?url", import: "default", eager: true },
);

const earsImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/ears/*.svg",
  { query: "?url", import: "default", eager: true },
);

const eyesImport = import.meta.glob(
  "@assets/customize-look-preview-icons-right-side/eyes/*.svg",
  { query: "?url", import: "default", eager: true },
);

const ears = transformAssets(earsImport, "ears");
const eyes = transformAssets(eyesImport, "eyes");
const accessories = transformAssets(accessoriesImport, "accessories");
const hairs = transformAssets(hairsImport, "hair");
const mouths = transformAssets(mouthsImport, "mouth");
const noses = transformAssets(nosesImport, "nose");

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
