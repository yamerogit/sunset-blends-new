import NavBar from "../components/NavBar";
import BreadSlider from "../components/Pastrypage/BreadSlider";
import CookieSlider from "../components/Pastrypage/CookieSlider";
import OtherConfectionSlider from "../components/Pastrypage/OtherConfectionSlider";
import chocoBliss from "../images/Pastry/ChocoBliss.png";
import chocoWaltz from "../images/Pastry/ChocoWaltz.PNG";
import matchaDream from "../images/Pastry/MatchaDream.PNG";
import crimsonCrave from "../images/Pastry/CrimsonCrave.PNG";
import milkyCheese from "../images/Pastry/MilkyCheese.PNG";
import doubleCheese from "../images/Pastry/DoubleCheese.PNG";
import cinnamonRoll from "../images/Pastry/CinnamonRoll.png";
import chocoBrownie from "../images/Pastry/ChocoBrownie.PNG";
import crimsonCreams from "../images/Pastry/CrimsonCreams.PNG";
import bananaMuffin from "../images/Pastry/BananaMuffin.PNG";
import chocoDreamCake from "../images/Pastry/ChocoDreamCake.PNG";

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

const breads = [
  { id: "milky-cheese", name: "Milky Cheese Bread", image: milkyCheese },
  { id: "double-cheese", name: "Double Cheese Bread", image: doubleCheese },
  { id: "cinnamon-roll", name: "Cinnamon Roll", image: cinnamonRoll },
];
const cookies = [
  { id: "choco-bliss", name: "Choco Bliss", image: chocoBliss },
  { id: "choco-waltz", name: "Choco Waltz", image: chocoWaltz },
  { id: "matcha-dream", name: "Matcha Dream", image: matchaDream },
  { id: "crimson-crave", name: "Crimson Crave", image: crimsonCrave },
];
const otherConfections = [
  { id: "choco-brownie", name: "Choco Brownie", image: chocoBrownie },
  { id: "crimson-creams", name: "Crimson Creams", image: crimsonCreams },
  { id: "banana-muffin", name: "Banana Muffin", image: bananaMuffin },
  { id: "choco-dream-cake", name: "Chocolate Dream Cake", image: chocoDreamCake },
];

const PastryPage = () => (
  <div
    className="min-h-screen w-full"
    style={{
      background: "#D7BDA6",
    }}
  >
    <NavBar />
    <div className="max-w-7xl mx-auto px-4">
      {/* Breads */}
      <h2
        className="uppercase tracking-widest text-3xl font-semibold text-[#322315] mb-6 mt-10 text-left"
        style={{ marginLeft: "100px" }}
      >
        Bread
      </h2>
      <BreadSlider drinks={breads} cardStyle={cardStyle} imgStyle={imgStyle} visibleCards={3} cardGap={CARD_GAP} />

      {/* Cookies */}
      <h2
        className="uppercase tracking-widest text-3xl font-semibold text-[#322315] mb-6 mt-10 text-left"
        style={{ marginLeft: "100px" }}
      >
        Cookies
      </h2>
      <CookieSlider drinks={cookies} cardStyle={cardStyle} imgStyle={imgStyle} visibleCards={3} cardGap={CARD_GAP} />

      {/* Other Confections */}
      <h2
        className="uppercase tracking-widest text-3xl font-semibold text-[#322315] mb-16 mt-4 text-left"
        style={{ marginLeft: "100px" }}
      >
        Other Confections
      </h2>
      <OtherConfectionSlider drinks={otherConfections} cardStyle={cardStyle} imgStyle={imgStyle} visibleCards={3} cardGap={CARD_GAP} />
    </div>
  </div>
);

export default PastryPage;
