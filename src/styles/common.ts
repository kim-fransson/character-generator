import { tv } from "tailwind-variants";

export const focus = tv({
  base: ["outline-none"],
  variants: {
    isFocusVisible: {
      true: ["outline-2 outline outline-dark-blue outline-offset-2"],
    },
  },
});

export const button = tv({
  extend: focus,
  base: [
    "pressed:scale-95 transition-all rounded-2xl px-4 py-3 flex items-center justify-center gap-2",
  ],
  variants: {
    variant: {
      random: ["bg-dark-blue text-white hover:bg-[#144198]"],
      download: [
        "border-2 border-black-60 text-black-60 bg-light-gray hover:bg-gray",
      ],
    },
  },
});
