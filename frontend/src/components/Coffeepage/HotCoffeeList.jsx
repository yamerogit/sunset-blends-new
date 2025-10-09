import { Link } from "react-router-dom";

const HotCoffeeList = ({
  drinks,
  cardStyle,
  imgStyle,
  leftGap = 230 // explicitly settable left gap!
}) => {
  const CARD_WIDTH = parseInt(cardStyle.width);
  const cardGap = 48;
  const numCards = drinks.length;
  const gridWidth = CARD_WIDTH * numCards + cardGap * (numCards - 1);

  const backgroundStyle = {
    position: "relative",
    width: "100vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    paddingTop: "16px",
    paddingBottom: "48px",
    background: "transparent",
    borderRadius: "38px",
    overflow: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  };

  // Updated style for fit-to-container, not cropped
  const coffeeImageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
    width: "100%",
    height: "100%",
    objectFit: "contain",    // show full image, never cropped
    marginBottom: "18px",
    borderRadius: "24px"
  };

  return (
    <div style={backgroundStyle}>
      <div
        className="flex"
        style={{
          gap: `${cardGap}px`,
          width: `${gridWidth}px`,
          marginLeft: `${leftGap}px`,
          justifyContent: "flex-start"
        }}
      >
        {drinks.map((d) => (
          <Link
            key={d.id}
            to={`/product/${d.id}`}
            style={{
              ...cardStyle,
              cursor: "pointer",
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
  );
};

export default HotCoffeeList;
