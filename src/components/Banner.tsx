import banner from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <section
      className="container mx-auto overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `url(${bgShadow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex min-h-105 flex-col items-center justify-center bg-black/40 px-4 py-10 text-center">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Cricket Banner"
          className="mb-5 w-32"
        />

        {/* Heading */}
        <h1 className="mb-3 max-w-4xl text-2xl font-bold leading-tight text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Description */}
        <p className="mb-5 text-sm text-gray-200">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button className="rounded-lg border border-yellow-400 bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Banner;