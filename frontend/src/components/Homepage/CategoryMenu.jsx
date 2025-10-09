import beansLeft from '../../images/Homepage/CoffeeBeansLeft.png';
import beansRight from '../../images/Homepage/CoffeeBeansRight.png';

const categories = [
  { label: "Hot Coffee", icon: "☕" },
  { label: "Cold Coffee", icon: "🧊" },
  { label: "Dessert", icon: "🍪" },
];

const CategoryMenu = () => (
  // Make parent section relative so beans can be absolutely placed
  <section className="bg-[#B37E4D] py-5 relative" style={{ minHeight: "100px" }}>
    {/* Beans: absolute, large, different z-index */}
    <img
      src={beansLeft}
      alt="Coffee beans left"
      className="absolute top-[-200px] left-[-275px] w-[600px] pointer-events-none select-none"
      style={{ zIndex: 2 }}
    />
    <img
      src={beansRight}
      alt="Coffee beans right"
      className="absolute top-[-200px] right-[-225px] w-[600px] pointer-events-none select-none"
      style={{ zIndex: 2 }}
    />
    <div className="flex justify-center gap-12 max-w-xl mx-auto">
      {categories.map(cat => (
        <button
          key={cat.label}
          className="flex flex-col items-center w-40 h-24 bg-[#D9BFA6] border-[#e5c8b3] shadow rounded-full gap-2 justify-center hover:bg-[#ede0d1] transition"
        >
          <span className="text-3xl">{cat.icon}</span>
          <span className="font-semibold text-[#000000]">{cat.label}</span>
        </button>
      ))}
    </div>
  </section>
);

export default CategoryMenu;