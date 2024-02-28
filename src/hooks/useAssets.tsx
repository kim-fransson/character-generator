import { AssetContext } from "@/context/AssetsContext";
import { useContext } from "react";

export const useAssets = () => {
  const context = useContext(AssetContext);

  if (context === undefined || context === null) {
    throw new Error("useAssets was used outside of its Provider");
  }

  return context;
};
