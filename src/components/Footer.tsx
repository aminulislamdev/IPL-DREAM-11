import logoImage from "../assets/logo-footer.png";

const FooterSection = () => {
  return (
    <footer className="relative w-full bg-[#0a0f1c] pt-28 pb-6 font-sans text-white sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Newsletter Card ================= */}
        <div className="absolute left-1/2 top-0 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/30 bg-white/10 p-2 shadow-2xl backdrop-blur-xl sm:p-3">
          <div className="relative overflow-hidden rounded-xl border border-white/50 bg-white/90 p-5 text-center shadow-2xl sm:rounded-2xl sm:p-8 md:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-300/50 blur-3xl sm:h-64 sm:w-64" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-300/50 blur-3xl sm:h-64 sm:w-64" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">
                Subscribe to our Newsletter
              </h2>

              <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base md:text-lg">
                Get the latest updates and news right in your inbox!
              </p>

              <form
                className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-orange-400 sm:px-6 sm:py-3.5 sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-xl bg-linear-to-r from-[#e56b9f] via-[#f29c54] to-[#f4c343] px-6 py-3 font-bold text-gray-900 shadow-md transition hover:opacity-90 sm:px-8 sm:py-3.5"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= Main Footer ================= */}
        <div>
          <div className="mx-auto mt-16 mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-gray-700 bg-gray-800 shadow-lg sm:mt-14 sm:mb-5 sm:h-28 sm:w-28 md:mt-12 md:mb-4 md:h-30 md:w-30">
            <img
              src={logoImage}
              alt="Cricket Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="py-10 sm:py-14 md:py-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">

              <div className="md:col-span-4">
                <h3 className="mb-3 text-lg font-bold sm:mb-4">About Us</h3>
                <p className="max-w-sm text-sm leading-relaxed text-gray-400">
                  We are a passionate team dedicated to providing
                  the best services to our customers.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="w-full max-w-50">
                  <h3 className="mb-3 text-lg font-bold sm:mb-4">Quick Links</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li>
                      <a href="#" className="flex items-center transition-colors hover:text-white">
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-500" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center transition-colors hover:text-white">
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-500" />
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center transition-colors hover:text-white">
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-500" />
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center transition-colors hover:text-white">
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-500" />
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-4">
                <h3 className="mb-3 text-lg font-bold sm:mb-4">Subscribe</h3>
                <p className="mb-4 max-w-sm text-sm text-gray-400">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <form
                  className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:overflow-hidden sm:rounded-lg sm:border sm:border-gray-700 sm:bg-white"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-white px-4 py-3 text-sm text-gray-800 outline-none sm:rounded-none sm:border-0"
                    required
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-lg bg-linear-to-r from-[#e56b9f] via-[#f29c54] to-[#f4c343] px-6 py-3 text-sm font-bold text-gray-900 transition hover:opacity-90 sm:rounded-none"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:pt-8 sm:text-sm">
            <p>@2026 Your Company All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;