import "./App.css";
import Paws from "./components/Paws";
import BrandsHeader from "./components/BrandsHeader";
import CheckboxHeader from "./components/CheckboxHeader";
import Checkboxes from "./components/Checkboxes";
import Cards from "./components/Cards";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
      }}
      className="container"
    >
      <Paws />
      <BrandsHeader />
      <CheckboxHeader />
      <Checkboxes
        style={{ display: "flex", flexWrap: "wrap" }}
        boxOptions={checkboxObjs}
      />
      <Cards
        dogFoodBrandData={tempData}
        style={{ display: "flex", flexWrap: "wrap" }}
      />
    </div>
  );
}

let checkboxObjs = [
  {
    name: "Grain-Free",
    isChecked: false,
  },
  {
    name: "Grain-Inclusive",
    isChecked: false,
  },
  // {
  //   name: "Available in Both",
  //   isChecked: false,
  // },
];

let tempData = [
  {
    site: "https://www.merrickpetcare.com/",
    // code: "BT",
    // alliance: "Grain-Inclusive and Grain-Free",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-664-7387",
    name: "Merrick",
  },
  {
    site: "https://bluebuffalo.com/",
    // code: "BT",
    // alliance: "Grain-Inclusive and Grain-Free",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-919-2833 ",
    name: "Blue Buffalo",
  },
  {
    site: "https://www.stellaandchewys.com/",
    // code: "BT",
    // alliance: "Grain-Inclusive and Grain-Free",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 888-477-8977",
    name: "Stella and Chewy's",
  },
  {
    site: "https://zignature.com",
    // code: "GF",
    // alliance: "Grain-Free",
    isGrainFree: true,
    isGrainInclusive: false,
    phone: "Live Chat Only",
    name: "Zignature",
  },
  {
    site: "https://www.naturalbalanceinc.com/",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-829-4493",
    name: "Natural Balance",
  },

  {
    site: "https://nutrisourcepetfoods.com/",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-525-9155",
    name: "NutriSource",
  },
  {
    site: "https://vetdiet.com",
    // code: "GI",
    // alliance: "Grain-Inclusive",
    isGrainFree: false,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "Message Form Only",
    name: "VetDiet",
  },
  {
    site: "https://www.frommfamily.com/",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-325-6331",
    name: "Fromm",
  },
  {
    site: "https://www.earthbornholisticpetfood.com",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "Message Form Only",
    name: "Earthborn",
  },
  {
    site: "https://www.tasteofthewildpetfood.com/",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 800-342-4808",
    name: "Taste of the Wild",
  },
  {
    site: "https://openfarmpet.com",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "+1 833-399-3403",
    name: "Open Farm",
  },
  {
    site: "https://www.farmina.com",
    // code: "BT",
    // alliance: "Grain-Free and Grain-Inclusive",
    isGrainFree: true,
    isGrainInclusive: true,
    hasGrains: "Grain-inclusive brand!",
    phone: "Message Form Only",
    name: "Farmina",
  },
];

export default App;
