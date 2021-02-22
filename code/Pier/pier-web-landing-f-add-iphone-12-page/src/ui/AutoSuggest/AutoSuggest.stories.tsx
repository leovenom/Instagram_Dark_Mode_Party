import { useState } from "react";

import Autosuggest from ".";

import { storiesOf } from "@storybook/react";

const suggestions = [
  { label: "Acura", value: ["acura", "Acura"] },
  { label: "Agrale", value: ["agrale", "Agrale"] },
  { label: "Alfa Romeo", value: ["alfa-romeo", "Alfa Romeo"] },
  { label: "AM Gen", value: ["am-gen", "AM Gen"] },
  { label: "Asia Motors", value: ["asia-motors", "Asia Motors"] },
  { label: "ASTON MARTIN", value: ["aston-martin", "ASTON MARTIN"] },
  { label: "Audi", value: ["audi", "Audi"] },
  { label: "Baby", value: ["baby", "Baby"] },
  { label: "BMW", value: ["bmw", "BMW"] },
  { label: "BRM", value: ["brm", "BRM"] },
  { label: "Bugre", value: ["bugre", "Bugre"] },
  { label: "Cadillac", value: ["cadillac", "Cadillac"] },
  { label: "CBT Jipe", value: ["cbt-jipe", "CBT Jipe"] },
  { label: "CHANA", value: ["chana", "CHANA"] },
  { label: "CHANGAN", value: ["changan", "CHANGAN"] },
  { label: "CHERY", value: ["chery", "CHERY"] },
  { label: "Chrysler", value: ["chrysler", "Chrysler"] },
  { label: "Citroën", value: ["citroen", "Citroën"] },
  { label: "Cross Lander", value: ["cross-lander", "Cross Lander"] },
  { label: "Daewoo", value: ["daewoo", "Daewoo"] },
  { label: "Daihatsu", value: ["daihatsu", "Daihatsu"] },
  { label: "Dodge", value: ["dodge", "Dodge"] },
  { label: "EFFA", value: ["effa", "EFFA"] },
  { label: "Engesa", value: ["engesa", "Engesa"] },
  { label: "Envemo", value: ["envemo", "Envemo"] },
  { label: "Ferrari", value: ["ferrari", "Ferrari"] },
  { label: "Fiat", value: ["fiat", "Fiat"] },
  { label: "Fibravan", value: ["fibravan", "Fibravan"] },
  { label: "Ford", value: ["ford", "Ford"] },
  { label: "FOTON", value: ["foton", "FOTON"] },
  { label: "Fyber", value: ["fyber", "Fyber"] },
  { label: "GEELY", value: ["geely", "GEELY"] },
  { label: "GM - Chevrolet", value: ["gm-chevrolet", "GM - Chevrolet"] },
  { label: "GREAT WALL", value: ["great-wall", "GREAT WALL"] },
  { label: "Gurgel", value: ["gurgel", "Gurgel"] },
  { label: "HAFEI", value: ["hafei", "HAFEI"] },
  { label: "HITECH ELECTRIC", value: ["hitech-electric", "HITECH ELECTRIC"] },
  { label: "Honda", value: ["honda", "Honda"] },
  { label: "Hyundai", value: ["hyundai", "Hyundai"] },
  { label: "Isuzu", value: ["isuzu", "Isuzu"] },
  { label: "IVECO", value: ["iveco", "IVECO"] },
  { label: "JAC", value: ["jac", "JAC"] },
  { label: "Jaguar", value: ["jaguar", "Jaguar"] },
  { label: "Jeep", value: ["jeep", "Jeep"] },
  { label: "JINBEI", value: ["jinbei", "JINBEI"] },
  { label: "JPX", value: ["jpx", "JPX"] },
  { label: "Kia Motors", value: ["kia-motors", "Kia Motors"] },
  { label: "Lada", value: ["lada", "Lada"] },
  { label: "LAMBORGHINI", value: ["lamborghini", "LAMBORGHINI"] },
  { label: "Land Rover", value: ["land-rover", "Land Rover"] },
  { label: "Lexus", value: ["lexus", "Lexus"] },
  { label: "LIFAN", value: ["lifan", "LIFAN"] },
  { label: "LOBINI", value: ["lobini", "LOBINI"] },
  { label: "Lotus", value: ["lotus", "Lotus"] },
  { label: "Mahindra", value: ["mahindra", "Mahindra"] },
  { label: "Maserati", value: ["maserati", "Maserati"] },
  { label: "Matra", value: ["matra", "Matra"] },
  { label: "Mazda", value: ["mazda", "Mazda"] },
  { label: "Mclaren", value: ["mclaren", "Mclaren"] },
  { label: "Mercedes-Benz", value: ["mercedes-benz", "Mercedes-Benz"] },
  { label: "Mercury", value: ["mercury", "Mercury"] },
  { label: "MG", value: ["mg", "MG"] },
  { label: "MINI", value: ["mini", "MINI"] },
  { label: "Mitsubishi", value: ["mitsubishi", "Mitsubishi"] },
  { label: "Miura", value: ["miura", "Miura"] },
  { label: "Nissan", value: ["nissan", "Nissan"] },
  { label: "Peugeot", value: ["peugeot", "Peugeot"] },
  { label: "Plymouth", value: ["plymouth", "Plymouth"] },
  { label: "Pontiac", value: ["pontiac", "Pontiac"] },
  { label: "Porsche", value: ["porsche", "Porsche"] },
  { label: "RAM", value: ["ram", "RAM"] },
  { label: "RELY", value: ["rely", "RELY"] },
  { label: "Renault", value: ["renault", "Renault"] },
  { label: "Rolls-Royce", value: ["rolls-royce", "Rolls-Royce"] },
  { label: "Rover", value: ["rover", "Rover"] },
  { label: "Saab", value: ["saab", "Saab"] },
  { label: "Saturn", value: ["saturn", "Saturn"] },
  { label: "Seat", value: ["seat", "Seat"] },
  { label: "SHINERAY", value: ["shineray", "SHINERAY"] },
  { label: "smart", value: ["smart", "smart"] },
  { label: "SSANGYONG", value: ["ssangyong", "SSANGYONG"] },
  { label: "Subaru", value: ["subaru", "Subaru"] },
  { label: "Suzuki", value: ["suzuki", "Suzuki"] },
  { label: "TAC", value: ["tac", "TAC"] },
  { label: "Toyota", value: ["toyota", "Toyota"] },
  { label: "Troller", value: ["troller", "Troller"] },
  { label: "Volvo", value: ["volvo", "Volvo"] },
  { label: "VW - VolksWagen", value: ["vw-volkswagen", "VW - VolksWagen"] },
  { label: "Wake", value: ["wake", "Wake"] },
  { label: "Walk", value: ["walk", "Walk"] },
];

storiesOf("Autosuggest", module).add("Basic example", () => {
  const [model, setModel] = useState("");
  return (
    <Autosuggest
      title="Selecione o Fabricante"
      label="Fabricante"
      suggestions={suggestions}
      onSelectSuggestion={setModel}
      selectedValue={model}
      id="make"
      page="Any Page"
    />
  );
});
