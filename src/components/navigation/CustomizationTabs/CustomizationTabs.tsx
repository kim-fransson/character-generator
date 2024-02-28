import {
  Accessories,
  Ears,
  Eyes,
  Hairs,
  Mouth,
  Nose,
} from "@/components/collections/Customizations";
import { focus } from "@/styles/common";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { tv } from "tailwind-variants";

const tab = tv({
  extend: focus,
  base: [
    "rounded-full inline-block py-1 px-4 border-2 cursor-pointer border-light-blue text-light-blue capitalize",
    "transition-all duration-100 shadow-sm",
  ],
  variants: {
    isSelected: {
      true: ["bg-dark-blue text-white border-dark-blue"],
    },
    isHovered: {
      true: ["animate-wiggle animate-thrice animate-duration-[400ms]"],
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      isHovered: true,
      class: "animate-none cursor-default",
    },
  ],
});

export const CustomizationTabs = ({ className }: { className: string }) => {
  return (
    <Tabs className={`border-2 flex flex-col ${className}`}>
      <TabList
        aria-label="character customization"
        className="flex flex-wrap lg:gap-4 gap-2 items-center"
      >
        {[
          "hairs",
          "eyes",
          "ears",
          "nose",
          "mouth",
          "background",
          "accessories",
        ].map((tabValue) => (
          <Tab key={tabValue} className={(states) => tab(states)} id={tabValue}>
            {tabValue}
          </Tab>
        ))}
      </TabList>
      {[
        { id: "hairs", Component: Hairs },
        { id: "eyes", Component: Eyes },
        { id: "ears", Component: Ears },
        { id: "nose", Component: Nose },
        { id: "mouth", Component: Mouth },
        { id: "accessories", Component: Accessories },
      ].map(({ id, Component }) => (
        <TabPanel className="flex-1 border-2 border-red-500" key={id} id={id}>
          <Component />
        </TabPanel>
      ))}
    </Tabs>
  );
};
