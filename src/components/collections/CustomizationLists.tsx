import { ListBox, ListBoxItem, ListBoxProps } from "react-aria-components";

import CheckIcon from "@assets/icons/check-icon.svg?react";
import { tv } from "tailwind-variants";
import { focus } from "@/styles/common";

const customizationOption = tv({
  extend: focus,
  base: ["relative group cursor-pointer flex items-center justify-center"],
});

export const AssetList = <T extends { preview: string; image: string }>(
  props: ListBoxProps<T>,
) => {
  return (
    <ListBox
      {...props}
      selectionMode="single"
      layout="grid"
      className="grid grid-cols-3 gap-x-8 gap-y-12 h-full"
    >
      {(item) => (
        <ListBoxItem
          id={item.image}
          textValue={item.preview as string}
          className={(states) => customizationOption(states)}
        >
          <img src={item.preview as string} alt="" />
          <div className="group-selected:flex hidden absolute top-1 size-6 p-0.5 items-center justify-center rounded-full right-1 bg-gray">
            <CheckIcon />
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
};

export const BackgroundList = <T extends { color: string }>(
  props: ListBoxProps<T>,
) => {
  return (
    <ListBox
      {...props}
      disallowEmptySelection
      selectionMode="single"
      layout="grid"
      className="grid grid-cols-3 gap-x-8 gap-y-12 h-full"
    >
      {(item) => (
        <ListBoxItem
          id={item.color}
          textValue={item.color}
          className={(states) => customizationOption(states)}
          style={{ background: item.color }}
        >
          <div className="group-selected:flex hidden absolute top-1 size-6 p-0.5 items-center justify-center rounded-full right-1 bg-gray">
            <CheckIcon />
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
};
