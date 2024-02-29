import { accessories, ears, eyes, hairs, mouths, noses } from "@/data/assets";
import { getRandomIndex } from "@/utils";
import BasicCharacter from "@assets/basic-character.png";

export const initialState: AssetsState = {
  updateAsset: () => {},
  randomize: () => {},
  assets: {
    background: "#d2d2d2",
    base: BasicCharacter,
  },
};

export const assetsReducer = (
  state: AssetsState,
  action: AssetAction,
): AssetsState => {
  const { type } = action;

  switch (type) {
    case "UPDATE_ASSET":
      return {
        ...state,
        assets: {
          ...state.assets,
          [action.payload.key]: action.payload.value,
        },
      };
    case "RANDOMIZE":
      return {
        ...state,
        assets: {
          ...state.assets,
          ["hair"]: hairs[getRandomIndex(hairs.length)].image,
          ["eyes"]: eyes[getRandomIndex(eyes.length)].image,
          ["ears"]: ears[getRandomIndex(ears.length)].image,
          ["nose"]: noses[getRandomIndex(noses.length)].image,
          ["mouth"]: mouths[getRandomIndex(mouths.length)].image,
          ["accessory"]: accessories[getRandomIndex(accessories.length)].image,
        },
      };
    default:
      return state;
  }
};
