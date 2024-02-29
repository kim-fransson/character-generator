import { assetsReducer, initialState } from "@/reducers/assetsReducer";
import { Assets } from "@/types/characterGenerator";
import {
  PropsWithChildren,
  RefObject,
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import isEqual from "lodash/isEqual";
import { parse, stringify } from "flatted";

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

  useEffect(() => {
    if (localStorage.getItem("character")) {
      dispatch({
        type: "INIT_STORED_STATE",
        value: parse(localStorage.getItem("character") as string),
      });
    }
  }, []);

  useEffect(() => {
    if (!isEqual(state, initialState)) {
      localStorage.setItem("character", stringify(state));
    }
  }, [state]);

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
