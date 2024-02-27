import { focus } from "@/styles/common";
import { Tab, TabList, Tabs } from "react-aria-components";
import { tv } from "tailwind-variants";

const tab = tv({
  extend: focus,
  base: [
    "rounded-full inline-block py-1 px-4 border-2 cursor-pointer border-light-blue text-light-blue capitalize",
    "transition-all duration-100",
  ],
  variants: {
    isSelected: {
      true: ["bg-dark-blue text-white border-dark-blue"],
    },
    isHovered: {
      true: ["animate-wiggle animate-thrice animate-duration-[400ms]"],
    },
  },
});

export const CustomizationTabs = () => {
  return (
    <Tabs>
      <TabList
        aria-label="character customization"
        className="flex flex-wrap lg:gap-4 gap-2 items-center"
      >
        {[
          "hair",
          "eyes",
          "ears",
          "nose",
          "mouth",
          "background",
          "accessories",
        ].map((tabValue) => (
          <Tab className={(states) => tab(states)} id={tabValue}>
            {tabValue}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
