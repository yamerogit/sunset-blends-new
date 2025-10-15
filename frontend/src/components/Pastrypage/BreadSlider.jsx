import { Link } from "react-router-dom";
import { useState } from "react";
import milkyCheese from "../../images/Pastry/MilkyCheese.PNG";
import doubleCheese from "../../images/Pastry/DoubleCheese.PNG";
import cinnamonRoll from "../../images/Pastry/CinnamonRoll.png";

const bread = [
  { id: "milky-cheese", name: "Milky Cheese Bread", image: milkyCheese },
  { id: "double-cheese", name: "Double Cheese Bread", image: doubleCheese },
  { id: "cinnamon-roll", name: "Cinnamon Roll", image: cinnamonRoll },
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 380;
const CARD_GAP = 48;

const cardStyle = {
  width: `${CARD_WIDTH}px`,
  height: `${CARD_HEIGHT}px`,
  background: "#fff3e6",
  borderRadius: "30px",
  boxShadow: "0 8px 28px 2px rgba(100,72,42,0.13)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "8px",
  transition: "box-shadow 0.2s",
};

const imgStyle = {
  width: "150px",
  height: "150px",
  objectFit: "cover",
  marginBottom: "18px",
};

const BreadSlider = ({
  drinks = bread,
  cardStyleProp = cardStyle,
  imgStyleProp = imgStyle,
  visibleCards = 3,
  cardGap = CARD_GAP,
  leftGap = 90
}) => {
  const [startIdx, setStartIdx] = useState(0);
  const CARD_WIDTH_LOCAL = parseInt(cardStyleProp.width);
  const maxIdx = drinks.length - visibleCards;

  const scrollBread = (dir) => {
    if (dir === "right" && startIdx < maxIdx) setStartIdx(startIdx + 1);
    if (dir === "left" && startIdx > 0) setStartIdx(startIdx - 1);
  };

  const backgroundStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "48px",
    background: "transparent",
    borderRadius: "38px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  };

  const sliderWindowWidth = CARD_WIDTH_LOCAL * visibleCards + cardGap * (visibleCards - 1);

  const breadImageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    marginBottom: "18px",
    borderRadius: "24px"
  };

  return (
    <div style={backgroundStyle}>
      <button
        onClick={() => scrollBread("left")}
        className="absolute bg-[#ffd394] text-[#322315] rounded-full shadow-md px-5 py-2 z-20"
        style={{
          fontSize: "2rem",
          left: "5px",
          top: "43%",
          transform: "translateY(-50%)"
        }}
        aria-label="Scroll left"
        disabled={startIdx === 0}
      >
        ←
      </button>
      <div
        style={{
          position: 'relative',
          width: `${sliderWindowWidth}px`,
          overflow: "hidden",
          marginLeft: `${leftGap}px`
        }}
      >
        <div
          className="flex"
          style={{
            gap: `${cardGap}px`,
            transition: "transform 0.4s cubic-bezier(.38,1.73,.48,.9)",
            transform: `translateX(-${startIdx * (CARD_WIDTH_LOCAL + cardGap)}px)`,
            justifyContent: "flex-start",
            width: "max-content"
          }}
        >
          {drinks.map((d, idx) => (
            <Link
              key={d.id}
              to={`/product/${d.id}`}
              style={{
                ...cardStyleProp,
                cursor: "pointer"
              }}
              className="hover:shadow-2xl"
              aria-label={`${d.name} details`}
            >
              <img
                src={d.image}
                alt={d.name}
                style={breadImageStyle}
                className="rounded-3xl"
              />
              <span
                className="font-bold text-2xl text-[#211511] font-mono mt-4"
                style={{
                  letterSpacing: "0.04em",
                  textAlign: "center",
                }}
              >
                {d.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollBread("right")}
        className="absolute bg-[#ffd394] text-[#322315] rounded-full shadow-md px-5 py-2 z-20"
        style={{
          fontSize: "2rem",
          right: "5px",
          top: "43%",
          transform: "translateY(-50%)"
        }}
        aria-label="Scroll right"
        disabled={startIdx === maxIdx}
      >
        →
      </button>
    </div>
  );
};

export default BreadSlider;
