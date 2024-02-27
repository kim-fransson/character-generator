import { tv } from "tailwind-variants";

export const focus = tv({
  base: ["outline-none"],
  variants: {
    isFocusVisible: {
      true: ["outline-2 outline outline-dark-blue outline-offset-2"],
    },
  },
});
