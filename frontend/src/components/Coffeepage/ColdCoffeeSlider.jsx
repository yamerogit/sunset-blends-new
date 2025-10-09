import { Link } from "react-router-dom";
import { useState } from "react";

const ColdCoffeeSlider = ({
  drinks,
  cardStyle,
  imgStyle,
  visibleCards = 3,
  cardGap = 48,
  leftGap = 90
}) => {
  const [startIdx, setStartIdx] = useState(0);
  const CARD_WIDTH = parseInt(cardStyle.width);
  const maxIdx = drinks.length - visibleCards;

  const scrollCold = (dir) => {
    if (dir === "right" && startIdx < maxIdx) setStartIdx(startIdx + 1);
    if (dir === "left" && startIdx > 0) setStartIdx(startIdx - 1);
  };

  // The background fills parent container space
  const backgroundStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "48px",
    background: "transparent", // if you want it see-through
    borderRadius: "38px",
    overflow: "hidden",    // clip overflow
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  };

  // The slider "window" container size
  const sliderWindowWidth = CARD_WIDTH * visibleCards + cardGap * (visibleCards - 1);

  // Use a full contain style for the images
  const coffeeImageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
    width: "100%",
    height: "100%",
    objectFit: "contain",    // show entire image, don't crop
    marginBottom: "18px",
    borderRadius: "24px"
  };

  return (
    <div style={backgroundStyle}>
      <button
        onClick={() => scrollCold("left")}
        className="absolute bg-[#ffd394] text-[#322315] rounded-full shadow-md px-5 py-2 z-20"
        style={{
          fontSize: "2rem",
          left: "5px",    // horizontal gap from left
          top: "43%",     // move upward
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
          overflow: "hidden", // clips visible cards only!
          marginLeft: `${leftGap}px`
        }}
      >
        <div
          className="flex"
          style={{
            gap: `${cardGap}px`,
            transition: "transform 0.4s cubic-bezier(.38,1.73,.48,.9)",
            transform: `translateX(-${startIdx * (CARD_WIDTH + cardGap)}px)`,
            justifyContent: "flex-start",
            width: "max-content"
          }}
        >
          {drinks.map((d, idx) => (
            <Link
              key={d.id}
              to={`/product/${d.id}`}
              style={{
                ...cardStyle,
                cursor: "pointer"
              }}
              className="hover:shadow-2xl"
              aria-label={`${d.name} details`}
            >
              <img
                src={d.image}
                alt={d.name}
                style={coffeeImageStyle}
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
        onClick={() => scrollCold("right")}
        className="absolute bg-[#ffd394] text-[#322315] rounded-full shadow-md px-5 py-2 z-20"
        style={{
          fontSize: "2rem",
          right: "5px",   // horizontal gap from right
          top: "43%",     // move upward
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

export default ColdCoffeeSlider;
