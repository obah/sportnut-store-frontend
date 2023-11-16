import React from "react";

function AlphabetMenu() {
  const letters = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="mb-4 flex flex-wrap justify-center text-sm text-primary lg:text-base">
      {letters.map((letter) => (
        <p
          key={letter}
          className="w-6 border-r border-r-black text-center last:border-r-0 hover:cursor-pointer"
        >
          {letter}
        </p>
      ))}
    </div>
  );
}

export default AlphabetMenu;
