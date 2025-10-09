import logo from '../../images/Homepage/SunsetBlendsLogo.png';

const WelcomeSection = () => (
  <section
    className="w-full flex justify-center items-center py-32"
    style={{ background: "#D7BDA6" }}
  >
    <div className="flex flex-row items-center justify-center w-full max-w-screen-xl rounded-2xl"
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0 flex justify-center items-top mr-12">
        <img
          src={logo}
          alt="Sunset Blends Logo"
          className="w-[440px] h-auto rounded-lg shadow-sm"
          style={{ minWidth: "220px" }}
        />
      </div>
      {/* Right: Text */}
      <div className="flex flex-col justify-center max-w-2xl ml-4" style={{ minWidth: "440px" }}>
        <h2 className="font-bold uppercase tracking-widest text-2xl text-[#211511] mb-6"
          style={{ letterSpacing: '0.08em' }}>
          SUNSET BLENDS
        </h2>
        <div
          className="text-[#211511] text-lg font-normal leading-relaxed space-y-6"
          style={{
            textAlign: "justify",
            fontSize: "22px",
            fontFamily: "Nunito, Arial, sans-serif"
          }}
        >
          <p>Welcome to Sunset Blends, your cozy spot for coffee and pastries that warm the heart.</p>
          <p>We craft every cup and bake with care — from bold espresso classics and refreshing iced brews to buttery croissants, rich brownies, and indulgent cakes. Each item on our menu is made to bring comfort, energy, and a little sweetness to your day.</p>
          <p>At Sunset Blends, we believe coffee isn’t just a drink — it’s an experience. Whether you’re fueling up for work, catching up with friends, or taking a quiet moment for yourself, we’re here to serve flavors that match every mood.</p>
          <p>Dine in and enjoy our inviting atmosphere, grab a quick order to go, or explore our online menu for a seamless ordering experience. However you choose to enjoy Sunset Blends, we’ll make sure every sip and bite leaves you satisfied.</p>
          <p>Because here, every blend tells a story — and every pastry is a piece of comfort.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;