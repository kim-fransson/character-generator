import BasicCharacter from "@assets/character-images-left-side/default/basic-character.png";
import { CustomizationTabs } from "./components/navigation";

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
            <CustomizationTabs />
          </div>
        </div>
      </div>
    </main>
  );
}
