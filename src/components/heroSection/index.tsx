export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="max-w-[1000px]  ml-5 sm:ml-10 pt-52 lg:mx-auto space-y-10"
    >
      <h1 className="space-y-2  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
        <div>Come to Prayer Come to Success</div>
        <div>Prayer platform</div>
        <div className="text-[#0D9BA3]">-made in OMAN-</div>
      </h1>
      <div className="ml-3 outline cursor-pointer select-none uppercase md:text-2xl outline-offset-[10px] w-max outline-white/90 text-white/90 hover:outline-white/70 active:outline-white/80 outline-2 py-1 px-10">
        <a href="#prayerCards">let&apos;s pray</a>
      </div>
    </section>
  );
};
