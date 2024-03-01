import { accessories, ears, eyes, hairs, mouths, noses } from "@/data/assets";
import { getRandomIndex } from "@/utils";
import BasicCharacter from "@assets/basic-character.png";

export const initialState: AssetsState = {
  updateAsset: () => {},
  randomize: () => {},
  assets: [
    { value: "#d2d2d2", key: "background" },
    { value: BasicCharacter, key: "base" },
    { value: "/character-images-left-side/hair/hair-1.png", key: "hair" },
    { value: "/character-images-left-side/eyes/eyes-1.png", key: "eyes" },
    { value: "/character-images-left-side/ears/ears-4.png", key: "ears" },
    { value: "/character-images-left-side/nose/nose-2.png", key: "nose" },
    { value: "/character-images-left-side/mouth/mouth-4.png", key: "mouth" },
    {
      value: "/character-images-left-side/accessories/accessory-2.png",
      key: "accessory",
    },
  ],
};

export const assetsReducer = (
  state: AssetsState,
  action: AssetAction,
): AssetsState => {
  const { type } = action;

  switch (type) {
    case "INIT_STORED_STATE": {
      return {
        ...state,
        assets: action.value,
      };
    }
    case "UPDATE_ASSET":
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset.key === action.payload.key) {
            return {
              ...asset,
              value: action.payload.value,
            };
          }
          return asset;
        }),
      };
    case "RANDOMIZE":
      return {
        ...state,
        assets: state.assets.map((asset) => {
          let newValue;
          switch (asset.key) {
            case "hair":
              newValue = hairs[getRandomIndex(hairs.length)].image;
              break;
            case "eyes":
              newValue = eyes[getRandomIndex(eyes.length)].image;
              break;
            case "ears":
              newValue = ears[getRandomIndex(ears.length)].image;
              break;
            case "nose":
              newValue = noses[getRandomIndex(noses.length)].image;
              break;
            case "mouth":
              newValue = mouths[getRandomIndex(mouths.length)].image;
              break;
            case "accessory":
              newValue = accessories[getRandomIndex(accessories.length)].image;
              break;
            default:
              newValue = asset.value;
          }
          return {
            ...asset,
            value: newValue,
          };
        }),
      };

    default:
      return state;
  }
};
