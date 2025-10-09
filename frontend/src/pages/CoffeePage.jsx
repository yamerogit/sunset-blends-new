import NavBar from "../components/NavBar";

import darkMochaHot from '../images/Coffee/HotDarkMocha.png';
import americanoHot from '../images/Coffee/HotAmericano.png';
import spanishLatteHot from '../images/Coffee/HotSpanishLatte.png';
import darkMochaCold from '../images/Coffee/ColdDarkMocha.png';
import americanoCold from '../images/Coffee/ColdAmericano.png';
import spanishLatteCold from '../images/Coffee/ColdSpanishLatte.png';
import saltedCaramelCold from '../images/Coffee/ColdSaltedCaramel.png';
import caramelMacchiatoCold from '../images/Coffee/ColdCAramelMacchiato.png';

import { useRef } from "react";

const hotDrinks = [
  { name: "Dark Mocha", image: darkMochaHot },
  { name: "Americano", image: americanoHot },
  { name: "Spanish Latte", image: spanishLatteHot },
];

const coldDrinks = [
  { name: "Dark Mocha", image: darkMochaCold },
  { name: "Americano", image: americanoCold },
  { name: "Spanish Latte", image: spanishLatteCold },
  { name: "Salted Caramel", image: saltedCaramelCold },
  { name: "Caramel Macchiato", image: caramelMacchiatoCold },
];

const cardStyle = {
  width: "340px",
  height: "390px",
  boxShadow: "0 12px 32px 2px rgba(100,72,42,0.11)",
  justifyContent: "center",
  paddingTop: "42px",
  paddingBottom: "32px",
};
const imgStyle = {
  width: "148px",
  height: "148px",
  objectFit: "contain",
  marginBottom: "24px"
};

const CoffeePage = () => {
  const coldRef = useRef();
  const scrollCold = (direction) => {
    if (coldRef.current) {
      coldRef.current.scrollBy({
        left: direction === "right" ? 370 : -370,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ background: "#e5c8b3" }}>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="uppercase tracking-[0.14em] text-lg font-bold text-[#322315] mb-6 ml-3 mt-4">
          Hot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center">
          {hotDrinks.map((d) => (
            <div
              key={d.name}
              className="flex flex-col items-center justify-center bg-[#eed7be] rounded-2xl shadow-xl"
              style={cardStyle}
            >
              <img
                src={d.image}
                alt={d.name}
                style={imgStyle}
              />
              <span className="font-bold text-2xl text-[#211511] font-mono mt-4"
                style={{ letterSpacing: "0.04em", textAlign: "center" }}>
                {d.name}
              </span>
            </div>
          ))}
        </div>
        <h2 className="uppercase tracking-[0.14em] text-lg font-bold text-[#322315] mb-6 ml-3 mt-12">
          Cold
        </h2>
        <div className="relative w-full">
          <button
            onClick={() => scrollCold("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#eed7be] text-[#322315] rounded-full shadow-lg px-2 py-1 z-20"
            style={{ fontSize: "2rem" }}
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <div
            ref={coldRef}
            className="flex gap-14 px-4 py-1 overflow-x-auto scrollbar-hide"
            style={{ maxWidth: "100%" }}>
            {coldDrinks.map((d) => (
              <div
                key={d.name}
                className="flex flex-col items-center justify-center bg-[#eed7be] rounded-2xl shadow-xl"
                style={cardStyle}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  style={imgStyle}
                />
                <span className="font-bold text-2xl text-[#211511] font-mono mt-4"
                  style={{ letterSpacing: "0.04em", textAlign: "center" }}>
                  {d.name}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollCold("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#eed7be] text-[#322315] rounded-full shadow-lg px-2 py-1 z-20"
            style={{ fontSize: "2rem" }}
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;