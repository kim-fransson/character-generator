import BasicCharacter from "@assets/character-images-left-side/default/basic-character.png";
import { Tab, TabList, Tabs } from "react-aria-components";
import { tv } from "tailwind-variants";

const focus = tv({
  base: ["outline-none"],
  variants: {
    isFocusVisible: {
      true: ["outline-2 outline outline-dark-blue outline-offset-2"],
    },
  },
});

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

const tabs = [
  "hair",
  "eyes",
  "ears",
  "nose",
  "mouth",
  "background",
  "accessories",
];

export default function App() {
  return (
    <main className="min-h-dvh flex lg:items-center lg:justify-center p-8">
      <div className="lg:space-y-10 space-y-4">
        <h1 className="lg:text-6xl text-3xl font-bold">CHARACTER GENERATOR</h1>
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10">
          <div className="bg-gray inline-block">
            <img width={513} height={546} src={BasicCharacter} />
          </div>
          <div className="space-y-4">
            <h2 className="lg:text-2xl text-lg font-bold">Customize Look</h2>
            <Tabs>
              <TabList
                aria-label="character customization"
                className="flex flex-wrap lg:gap-4 gap-2 items-center"
              >
                {tabs.map((tabValue) => (
                  <Tab className={(states) => tab(states)} id={tabValue}>
                    {tabValue}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
