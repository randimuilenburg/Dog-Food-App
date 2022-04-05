const books = [
  { title: "It", author: "Stephen King" },
  { title: "Shiver", author: "Maggie Stiefvater" },
  { title: "Whatever", author: "Person" },
];

books[0].name;
import logo from "./logo.svg";
import "./App.css";
import Kayak from "./components/Kayak";
import Airlines from "./components/Airlines";
import CheckboxHeader from "./components/CheckboxHeader";
import Checkboxes from "./components/Checkboxes";
import Card from "./components/Card";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [checkBoxObjs, setCheckBoxObjs] = useState([
    {
      name: "Oneworld",
      abbrev: "OW",
      isChecked: false,
    },
    {
      name: "Sky Team",
      abbrev: "ST",
      isChecked: false,
    },
    {
      name: "Star Alliance",
      abbrev: "SA",
      isChecked: false,
    },
  ]);
  const [cards, setCards] = useState(tempData);
  const [checkedCheckBoxes, setCheckedCheckBoxes] = useState([]);

  function updateIsChecked(key) {
    // let localCheckBoxObjs = checkBoxObjs;
    // let updatedObjIndex = localCheckBoxObjs.findIndex((x) => x.name === key);
    // localCheckBoxObjs[updatedObjIndex].isChecked =
    //   !localCheckBoxObjs[updatedObjIndex].isChecked;
    // setCheckBoxObjs(localCheckBoxObjs);
    let localCheckedCheckBoxes = checkedCheckBoxes;
    if (key in localCheckedCheckBoxes) {
      localCheckedCheckBoxes.pop(key);
    } else {
      localCheckedCheckBoxes.push(key);
    }
    setCheckedCheckBoxes(localCheckedCheckBoxes);
    let localCards = cards;
    localCards.filter((x) => x.alliance in checkedCheckBoxes);
    setCards(localCards);
    console.log(checkedCheckBoxes);
    console.log(localCards);
  }

  function filteredCards(cards) {
    let selectedCheckBoxes = checkBoxObjs
      .filter((x) => x.isChecked)
      .map((x) => x.name);
    if (selectedCheckBoxes.length === 0) {
      return cards;
    }
    let filteredCards = cards.filter((x) => x.alliance in selectedCheckBoxes);
    return filteredCards;
  }

  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
        // height: "100%",
      }}
      className="container"
    >
      <Kayak />
      <Airlines />
      <CheckboxHeader />
      <Checkboxes
        style={{ display: "flex", flexWrap: "wrap" }}
        boxOptions={checkBoxObjs}
        handleOnChange={updateIsChecked}
      />
      {/* <Card /> */}
      <Cards
        airlineData={cards}
        style={{ display: "flex", flexWrap: "wrap" }}
      />
    </div>
  );
}

// let checkboxObjs = [
//   {
//     name: "Oneworld",
//     isChecked: false,
//   },
//   {
//     name: "Sky Team",
//     isChecked: false,
//   },
//   {
//     name: "Star Alliance",
//     isChecked: false,
//   },
// ];

let tempData = [
  {
    site: "https://www.AA.com",
    code: "AA",
    alliance: "OW",
    phone: "+1 800 433 7300",
    name: "American Airlines",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/AA.png?crop=false&width=108&height=92&fallback=default2.png&_v=8c6d0e40bdbaad9c51e737b05c12347f",
  },
  {
    site: "https://www.delta.com",
    code: "DL",
    alliance: "ST",
    phone: "+1 888 750 3284",
    name: "Delta",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/DL.png?crop=false&width=108&height=92&fallback=default1.png&_v=02a9af26513d796d51e54147426d15b5",
  },
  {
    site: "https://flyUIA.com/ii/en/home",
    code: "PS",
    alliance: "none",
    phone: "+38 (044) 581-50-50",
    name: "Ukraine International Airlines",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/PS.png?crop=false&width=108&height=92&fallback=default2.png&_v=d9d949b58188e00fcfa02d4139ecbc2e",
  },
  {
    site: "https://www.ana.co.jp",
    code: "NH",
    alliance: "SA",
    phone: "+81-3-6741-6683",
    name: "ANA",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/NH.png?crop=false&width=108&height=92&fallback=default1.png&_v=490f70db04865cfc412d80166efdefc3",
  },
  {
    site: "https://www.emirates.com",
    code: "EK",
    alliance: "none",
    phone: "+971 600 555 555",
    name: "Emirates",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/EK.png?crop=false&width=108&height=92&fallback=default1.png&_v=c871d68692a355e7e426e7a7a41976ce",
  },

  {
    site: "https://www.lufthansa.com",
    code: "LH",
    alliance: "SA",
    phone: "+49 69 86 799 799",
    name: "Lufthansa",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/LH.png?crop=false&width=108&height=92&fallback=default2.png&_v=a1e3a69579474969d2b123789717863f",
  },
  {
    site: "https://www.singaporeair.com",
    code: "SQ",
    alliance: "SA",
    phone: "+65 6223 8888",
    name: "Singapore Airlines",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/SQ.png?crop=false&width=108&height=92&fallback=default3.png&_v=0ff33e55a8f21c7c3192f0394e8dfdb2",
  },
  {
    site: "https://flyUIA.com/ii/en/home",
    code: "PS",
    alliance: "none",
    phone: "+38 (044) 581-50-50",
    name: "Ukraine International Airlines",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/PS.png?crop=false&width=108&height=92&fallback=default2.png&_v=d9d949b58188e00fcfa02d4139ecbc2e",
  },
  {
    site: "https://www.finnair.com/int/gb/",
    code: "AY",
    alliance: "OW",
    phone: "+358 600 140 140",
    name: "Finnair",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab",
  },
  {
    site: "https://www.alaskaair.com",
    code: "AS",
    alliance: "OW",
    phone: "+1 800 252 75 22",
    name: "Alaska Airlines",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/AS.png?crop=false&width=108&height=92&fallback=default2.png&_v=7e7c4110616a97db4d99676711cb7247",
  },
  {
    site: "https://www.avianca.com/otr/en",
    code: "AV",
    alliance: "SA",
    phone: "+57 18000 953 434",
    name: "Avianca",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/AV.png?crop=false&width=108&height=92&fallback=default2.png&_v=4b0e0000efbc54f535fc6b466987c6b0",
  },
  {
    site: "https://www.swiss.com",
    code: "LX",
    alliance: "SA",
    phone: "+41 61 582 36 56",
    name: "SWISS",
    usName: null,
    __clazz: "com.r9.harmony.httpd.mobileapis.AirlineMobile",
    defaultName: null,
    logoURL:
      "/rimg/provider-logos/airlines/v/LX.png?crop=false&width=108&height=92&fallback=default3.png&_v=fa51cb755e76e9f221e488bb98999eeb",
  },
];

export default App;
