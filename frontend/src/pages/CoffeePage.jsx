import NavBar from "../components/NavBar";
import HotCoffeeList from "../components/Coffeepage/HotCoffeeList";
import ColdCoffeeSlider from "../components/Coffeepage/ColdCoffeeSlider";
import darkMochaHot from "../images/Coffee/HotDarkMocha.png";
import americanoHot from "../images/Coffee/HotAmericano.png";
import spanishLatteHot from "../images/Coffee/HotSpanishLatte.png";
import darkMochaCold from "../images/Coffee/ColdDarkMocha.png";
import americanoCold from "../images/Coffee/ColdAmericano.png";
import spanishLatteCold from "../images/Coffee/ColdSpanishLatte.png";
import saltedCaramelCold from "../images/Coffee/ColdSaltedCaramel.png";
import caramelMacchiatoCold from "../images/Coffee/ColdCaramelMacchiato.png";

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

const hotDrinks = [
  { id: "hot-dark-mocha", name: "Dark Mocha", image: darkMochaHot },
  { id: "hot-americano", name: "Americano", image: americanoHot },
  { id: "hot-spanish-latte", name: "Spanish Latte", image: spanishLatteHot },
];
const coldDrinks = [
  { id: "cold-dark-mocha", name: "Dark Mocha", image: darkMochaCold },
  { id: "cold-americano", name: "Americano", image: americanoCold },
  { id: "cold-spanish-latte", name: "Spanish Latte", image: spanishLatteCold },
  { id: "cold-salted-caramel", name: "Salted Caramel", image: saltedCaramelCold },
  { id: "cold-caramel-macchiato", name: "Caramel Macchiato", image: caramelMacchiatoCold },
];

const CoffeePage = () => (
  <div
    className="min-h-screen w-full"
    style={{
      background: "#F3E9DC",
    }}
  >
    <NavBar />
    <div className="max-w-7xl mx-auto px-4">
      {/* Hot Drinks */}
      <h2 
        className="uppercase tracking-widest text-3xl font-semibold text-[#322315] mb-6 mt-10 text-left"
        style={{ marginLeft: "100px" }} // Add left gap here!
      >
        Hot
      </h2>
      <HotCoffeeList drinks={hotDrinks} cardStyle={cardStyle} imgStyle={imgStyle} />

      {/* Cold Drinks */}
      <h2 
        className="uppercase tracking-widest text-3xl font-semibold text-[#322315] mb-16 mt-4 text-left"
        style={{ marginLeft: "100px" }} // Add left gap here!
      >
        Cold
      </h2>
      <ColdCoffeeSlider drinks={coldDrinks} cardStyle={cardStyle} imgStyle={imgStyle} visibleCards={3} cardGap={CARD_GAP} />
    </div>
  </div>
);

export default CoffeePage;
