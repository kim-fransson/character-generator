import BasicCharacter from "@assets/character-images-left-side/default/basic-character.png";

export const initialState: AssetsState = {
  updateAsset: () => {},
  assets: {
    background: "#d2d2d2",
    base: BasicCharacter,
  },
};

export const assetsReducer = (
  state: AssetsState,
  action: AssetAction,
): AssetsState => {
  const {
    type,
    payload: { key, value },
  } = action;

  switch (type) {
    case "UPDATE_ASSET":
      return {
        ...state,
        assets: {
          ...state.assets,
          [key]: value,
        },
      };
    default:
      return state;
  }
};
