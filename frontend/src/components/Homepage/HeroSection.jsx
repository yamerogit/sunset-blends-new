import mainCoffee from '../../images/Homepage/MainCoffee.png';

const HeroSection = () => (
  <section className="w-full flex items-center justify-center py-0 bg-white relative overflow-visible">
    <div
      className="w-full max-w-screen-3xl mx-auto flex flex-row items-center justify-between px-20 py-12"
      style={{
        background: "#D7BDA6",
        minHeight: "500px",
        position: "relative",
        zIndex: 2,
      }}
    >

      {/* Left column for all text */}
      <div
        className="flex flex-col items-start justify-center"
        style={{ minWidth: "700px", maxWidth: "1000px" }}
      >
        <div
          className="uppercase tracking-widest text-[#211511] font-medium mb-7 text-xl"
          style={{ letterSpacing: '0.25em' }}
        >
          Welcome
        </div>
        {/* Main headline */}
        <h1
          className="font-serif font-extrabold text-[85px] leading-[1.06] text-[#211511] mb-2"
          style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}
        >
          Not Just Coffee,
        </h1>
        <h1
          className="font-serif font-extrabold text-[85px] leading-[1.06] mb-8"
          style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', color: '#AB8574' }}
        >
          An Experience.
        </h1>
        {/* Subheadline */}
        <div className="text-[#211511] text-xl mb-8 font-medium"
          style={{ fontSize: '18px', lineHeight: '25px', maxWidth: '540px', letterSpacing: '0.10em'  }}>
          Indulge in the richness of expertly brewed coffee,<br />
          made with only the finest beans.
        </div>
        <button
          className="bg-[#AB8574] text-white px-9 py-4 rounded-full font-semibold text-xl shadow hover:bg-[#85525a] transition"
          style={{
            boxShadow: "0 4px 22px -7px rgba(64,44,37,.16)",
            fontSize: '22px'
          }}
        >
          Get Yours Now
        </button>
      </div>

      {/* Coffee splash: much bigger, right aligned */}
      <div className="flex flex-1 items-center justify-end h-full">
        <img
          src={mainCoffee}
          alt="Coffee splash"
          className="object-contain"
          style={{
            width: "700px",
            maxHeight: "600px",
            marginRight: "20px",
            marginTop: "-100px",
            marginBottom: "-64px",
            zIndex: 3,
            filter: "drop-shadow(0 10px 22px rgba(0,0,0,.14))",
          }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;