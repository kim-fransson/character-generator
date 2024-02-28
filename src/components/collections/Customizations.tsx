import { CustomizationList } from "./CustomizationList";

const hairsImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/hair/*.svg",
  {
    query: "?url",
    import: "default",
    eager: true,
  },
);

const hairs = Object.entries(hairsImport).map(([, module], index) => ({
  id: index + 1,
  url: module,
}));

const accessoriesImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/accessories/*.svg",
  { query: "?url", import: "default", eager: true },
);

const earsImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/ears/*.svg",
  { query: "?url", import: "default", eager: true },
);

const eyesImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/eyes/*.svg",
  { query: "?url", import: "default", eager: true },
);

const mouthImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/mouth/*.svg",
  { query: "?url", import: "default", eager: true },
);

const noseImport = import.meta.glob(
  "../../assets/customize-look-preview-icons-right-side/nose/*.svg",
  { query: "?url", import: "default", eager: true },
);

const accessories = Object.entries(accessoriesImport).map(
  ([, module], index) => ({
    id: index + 1,
    url: module,
  }),
);

const ears = Object.entries(earsImport).map(([, module], index) => ({
  id: index + 1,
  url: module,
}));

const eyes = Object.entries(eyesImport).map(([, module], index) => ({
  id: index + 1,
  url: module,
}));

const mouth = Object.entries(mouthImport).map(([, module], index) => ({
  id: index + 1,
  url: module,
}));

const nose = Object.entries(noseImport).map(([, module], index) => ({
  id: index + 1,
  url: module,
}));

export const Accessories = () => {
  return <CustomizationList items={accessories} aria-label="accessories" />;
};

export const Ears = () => {
  return <CustomizationList items={ears} aria-label="ears" />;
};

export const Eyes = () => {
  return <CustomizationList items={eyes} aria-label="eyes" />;
};

export const Hairs = () => {
  return <CustomizationList items={hairs} aria-label="hairs" />;
};

export const Mouth = () => {
  return <CustomizationList items={mouth} aria-label="mouth" />;
};

export const Nose = () => {
  return <CustomizationList items={nose} aria-label="nose" />;
};
