import { accessories, ears, eyes, hairs, mouths, noses } from "@/data/assets";
import { AssetAction, AssetsState } from "@/types/characterGenerator";
import { getRandomIndex } from "@/utils";
import BasicCharacter from "@assets/basic-character.png";

export const initialState: AssetsState = {
  updateAsset: () => {},
  updateCanvasRef: () => {},
  randomize: () => {},
  assets: {
    background: { value: "#d2d2d2" },
    base: { value: BasicCharacter },
    hair: { value: "/character-images-left-side/hair/hair-1.png" },
    eyes: { value: "/character-images-left-side/eyes/eyes-1.png" },
    ears: { value: "/character-images-left-side/ears/ears-4.png" },
    nose: { value: "/character-images-left-side/nose/nose-2.png" },
    mouth: { value: "/character-images-left-side/mouth/mouth-4.png" },
    accessory: {
      value: "/character-images-left-side/accessories/accessory-2.png",
    },
  },
};

export const assetsReducer = (
  state: AssetsState,
  action: AssetAction,
): AssetsState => {
  const { type } = action;

  switch (type) {
    case "INIT_STORED_STATE":
      return action.value;
    case "UPDATE_ASSET":
      return {
        ...state,
        assets: {
          ...state.assets,
          [action.payload.key]: {
            ...state.assets[action.payload.key],
            value: action.payload.value,
          },
        },
      };
    case "UPDATE_CANVAS_REF":
      return {
        ...state,
        assets: {
          ...state.assets,
          [action.payload.key]: {
            ...state.assets[action.payload.key],
            canvasRef: action.payload.canvasRef,
          },
        },
      };
    case "RANDOMIZE":
      return {
        ...state,
        assets: {
          ...state.assets,
          hair: {
            ...state.assets.hair,
            value: hairs[getRandomIndex(hairs.length)].image,
          },
          eyes: {
            ...state.assets.eyes,
            value: eyes[getRandomIndex(eyes.length)].image,
          },
          ears: {
            ...state.assets.ears,
            value: ears[getRandomIndex(ears.length)].image,
          },
          nose: {
            ...state.assets.nose,
            value: noses[getRandomIndex(noses.length)].image,
          },
          mouth: {
            ...state.assets.mouth,
            value: mouths[getRandomIndex(mouths.length)].image,
          },
          accessory: {
            ...state.assets.accessory,
            value: accessories[getRandomIndex(accessories.length)].image,
          },
        },
      };
    default:
      return state;
  }
};
