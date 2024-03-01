import { assetsReducer, initialState } from "@/reducers/assetsReducer";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

export const AssetContext = createContext(initialState);

export const AssetsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(assetsReducer, initialState);

  const updateAsset = (key: AssetKey, value: string) => {
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

  useEffect(() => {
    if (localStorage.getItem("assets")) {
      dispatch({
        type: "INIT_STORED_STATE",
        value: JSON.parse(localStorage.getItem("assets") as string),
      });
    }
  }, []);

  useEffect(() => {
    if (state.assets !== initialState.assets) {
      localStorage.setItem("assets", JSON.stringify(state.assets));
    }
  }, [state]);

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
