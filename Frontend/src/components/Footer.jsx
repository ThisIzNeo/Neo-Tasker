export default function Footer() {
  return (
    <>
      <footer className="bg-gray-950 rounded-tr-3xl text-gray-200 py-6">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center ">
            {/* Left Section */}
            <div className="mb-4 md:mb-0 w-6/12 justify-center">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm text-gray-400 mt-2">
                I'm Younes, a web developer with a strong focus on the MERN
                stack. I specialize in building dynamic, user-friendly websites
                using React, Node.js, Express, and MongoDB. I’m passionate about
                creating efficient, scalable solutions and always eager to learn
                and tackle new challenges
              </p>
            </div>

            {/* Right Section */}
            <div className="flex gap-6 w-6/12 justify-end">
              <a
                href="https://www.thisizneo.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                Protofolio
              </a>
              <a
                href="https://www.instagram.com/thisizneo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/thisizneo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/menasri-younes-560aa2319/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-primary hover:opacity-70 transition-all">
                <a href="https://github.com/ThisIzNeo">ThisIzNeo</a>
              </span>{" "}
              All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
