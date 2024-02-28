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

export const ears = transformAssets(earsImport, "ears");
export const eyes = transformAssets(eyesImport, "eyes");
export const accessories = transformAssets(accessoriesImport, "accessories");
export const hairs = transformAssets(hairsImport, "hair");
export const mouths = transformAssets(mouthsImport, "mouth");
export const noses = transformAssets(nosesImport, "nose");
