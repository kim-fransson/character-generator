import { assetsReducer, initialState } from "@/reducers/assetsReducer";
import { Assets } from "@/types/characterGenerator";
import {
  PropsWithChildren,
  RefObject,
  createContext,
  useMemo,
  useReducer,
} from "react";

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

  const updateCanvasRef = (
    key: keyof Assets,
    canvasRef: RefObject<HTMLCanvasElement>,
  ) => {
    dispatch({
      type: "UPDATE_CANVAS_REF",
      payload: {
        key,
        canvasRef,
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
      updateCanvasRef,
    };
  }, [state]);

  return (
    <AssetContext.Provider value={memoizedValue}>
      {children}
    </AssetContext.Provider>
  );
};
