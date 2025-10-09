import darkMocha from '../../images/Coffee/HotDarkMocha.png';
import caramelMacchiato from '../../images/Coffee/ColdCAramelMacchiato.png';
import chocoBliss from '../../images/Pastry/ChocoBliss.png';
import cinnamonRoll from '../../images/Pastry/CinnamonRoll.png';

const bestSellers = [
  {
    name: "Dark Mocha",
    image: darkMocha,
  },
  {
    name: "Caramel Macchiato",
    image: caramelMacchiato,
  },
  {
    name: "Choco Bliss",
    image: chocoBliss,
  },
  {
    name: "Cinnamon Roll",
    image: cinnamonRoll,
  },
];

const BestSellers = () => (
  <section className="w-full bg-[#D7BDA6] py-48 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center mb-10 tracking-wide text-[#211511] uppercase"
        style={{ letterSpacing: '0.12em' }}>
      Best Sellers
    </h2>
    <div
      className="
        w-full
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-x-12
        gap-y-8
        px-8
        py-4
        md:px-16
        lg:px-32
        "
      style={{ maxWidth: '1800px' }}
    >
      {bestSellers.map(item => (
        <div
          key={item.name}
          className="
            flex flex-col items-center
            bg-[#ffffff69]
            rounded-3xl
            shadow
            py-10
            px-6
            min-h-[340px]
            w-full
            "
          style={{
            margin: '0 auto',
            minWidth: '270px',
            maxWidth: '370px'
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[250px] h-[250px] object-contain"
            style={{ maxHeight: '225px', maxWidth: '225px' }}
          />
          <span
            className="font-bold text-[1.2rem] tracking-tighter text-[#211511]"
            style={{ fontFamily: 'Fira Mono, monospace, Arial', letterSpacing: '0.05em' }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default BestSellers;