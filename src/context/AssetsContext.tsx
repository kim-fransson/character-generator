import { assetsReducer, initialState } from "@/reducers/assetsReducer";
import { PropsWithChildren, createContext, useMemo, useReducer } from "react";

export const AssetContext = createContext(initialState);

export const AssetsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(assetsReducer, initialState);

  const updateAsset = (key: keyof Assets, value: string) => {
    dispatch({
      type: "UPDATE_ASSET",
      payload: {
        key,
        value,
      },
    });
  };

  const randomize = () => {
    dispatch({
      type: "RANDOMIZE",
    });
  };

  const memoizedValue = useMemo(() => {
    return {
      ...state,
      updateAsset,
      randomize,
    };
  }, [state]);

  return (
    <AssetContext.Provider value={memoizedValue}>
      {children}
    </AssetContext.Provider>
  );
};
