import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./../../logo.svg";
import heroDesktop from "./../../hero-img-desktop.png";
import fed from "./../../fed.svg";
import ecom from "./../../ecom.svg";
import dydc from "./../../dydc.svg";
import delhiImage from "./../../delhi.svg";
import image1 from "./../../img1.svg";
import imag2 from "./../../second-banner.svg";
import land from "./../../land.svg";
import sea from "./../../sea.svg";
import air from "./../../air.svg";
import footer from "./../../footer.svg";
import heroImageMobile from "./../../hero-mobile.svg";
import banner from "./../../banner.svg";
import { Modal, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [navBg, setNavBg] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = (method) => {
    if (method === "email") {
      window.location.href = "mailto:xihangcourierservice@gmail.com";
    } else if (method === "phone") {
      window.location.href = "tel:+1(615)-623-1375";
    }
    setModalContact(false); // Close the modal after action
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-auto overflow-y-auto">
      <Modal
        show={modalContact}
        size="md"
        onClose={() => setModalContact(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              How do you want to contact us?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="blue" onClick={() => handleContact("email")}>
                By Email
              </Button>
              <Button color="gray" onClick={() => handleContact("phone")}>
                By Phone
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          navBg ? "bg-white shadow-md" : "bg-transparent shadow-none"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center justify-between w-full relative">
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="md:w-14 w-10 relative z-10"
                  src={logo}
                  alt="Logo"
                />
              </motion.div>
              <div className="ml-4">
                <div className="company-name-container">
                  <div className="text-gray-700 text-xl font-bold">
                    Xihang Courier Service
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <motion.div
                    onClick={() => scrollToSection("whoWeAre")}
                    className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    About us
                  </motion.div>
                  <motion.div
                    className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    onClick={() => scrollToSection("services")}
                    whileHover={{ scale: 1.1 }}
                  >
                    Our Services
                  </motion.div>
                  <motion.div
                    className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setModalContact(true)}
                  >
                    Contact us
                  </motion.div>
                </div>
              </div>
            </div>
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white shadow-lg z-40 md:hidden">
                <div className="flex flex-col items-center mt-12">
                  <button
                    className="self-end mr-6 mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col space-y-4">
                    <motion.div
                      onClick={() => {
                        scrollToSection("whoWeAre");
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      About us
                    </motion.div>
                    <motion.div
                      onClick={() => {
                        scrollToSection("services");
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      Our Services
                    </motion.div>
                    <motion.div
                      onClick={() => {
                        setModalContact(true);
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      Contact us
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gradient-to-r from-[#7D83FF] to-[#2D598A] text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <motion.div
        className="relative w-full min-h-[700px] md:px-20 px-6 md:flex justify-between bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[50%] w-[100%] md:px-10 px-2 sm:px-6 lg:px-8 md:mt-[70px] mt-[120px] flex flex-col md:flex-row items-center relative z-10">
          <div>
            <motion.h1
              className="md:text-[48px] text-[32px] md:font-bold font-black text-gray-700 md:text-gray-900"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Delivering Your Dreams, One Parcel at a Time
            </motion.h1>
            <motion.p
              className="mt-4 md:text-[22px] text-[16px] text-gray-500"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Xihang Courier Service, we deliver excellence. Our mission is to
              provide swift, secure, and reliable courier services for
              individuals and businesses. From small packages to large
              shipments, we ensure your parcels arrive on time, every time.
              Trust us to handle your deliveries with care and professionalism.
            </motion.p>
            <div className="mt-6 flex flex-col md:flex-row gap-4 md:space-x-4">
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-[#7D83FF] to-[#2D598A] text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/splash")}
              >
                Track Shipment
              </motion.button>
              <motion.button
                className="px-8 py-4 w-full md:w-auto bg-gray-200 text-gray-700 font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalContact(true)}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
        <motion.img
          src={heroDesktop}
          className="w-[1200px] md:absolute md:block hidden right-0 top-0"
          alt=""
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={heroImageMobile}
          className="w-[100%] md:hidden relative mt-10"
          alt=""
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={banner}
          className="absolute right-[500px] h-[80px] bottom-3"
          alt="banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="w-full md:justify-between justify-start wrap gap-1 flex md:px-28 px-4 mt-[10px] md:mt-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[fed, ecom, dydc, delhiImage].map((image, index) => (
          <motion.div
            key={index}
            className="md:w-[250px] w-[40%] h-auto border rounded-lg flex md:py-14 md:px-14 px-4 py-4 justify-center items-center shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={image} className="w-full" />
          </motion.div>
        ))}
      </motion.div>
      <motion.section
        className="w-full flex md:px-28 px-8 md:flex-row flex-col-reverse md:justify-between mt-[50px] gap-10 md:gap-0 md:mt-[200px]"
        initial={{ opacity: 0 }}
        id="whoWeAre"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[550px] w-[100%] flex items-center justify-center">
          <motion.img
            src={image1}
            className="w-full"
            alt="image1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="md:w-[50%] w-[100%]">
          <div className="flex flex-col gap-4 mt-12">
            <motion.h6
              className="md:text-[40px] text-[32px]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Who we are?
            </motion.h6>
            <motion.p
              className="md:text-[22px] text-[16px] text-gray-500"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Xihang Courier Service is your trusted partner in delivery. With a
              commitment to speed, security, and reliability, we cater to both
              individuals and businesses. Whether it's a tiny package or a bulky
              shipment, we get it there on time, every time. Experience the
              Xihang difference – where every delivery is handled with precision
              and care.
            </motion.p>
          </div>
        </div>
      </motion.section>
      <motion.div
        className="w-full flex md:px-28 px-8 flex-col md:flex-row md:justify-between mt-[50px] gap-10 md:gap-0 md:mt-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[50%] w-[100%]">
          <div className="flex flex-col gap-4 md:mt-12 mt-2">
            <motion.h6
              className="md:text-[40px] text-[32px]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              We deliver very carefully
            </motion.h6>
            <motion.p
              className="md:text-[22px] text-[16px] text-gray-500"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Xihang Courier Service, we deliver very carefully. As your
              trusted partner in delivery, we pride ourselves on speed,
              security, and reliability for both individuals and businesses.
              Whether it's a small package or a large shipment, we ensure it
              arrives on time, every time, with the utmost care.
            </motion.p>
          </div>
        </div>
        <div className="md:w-[550px] w-[100%] flex items-center justify-center">
          <motion.img
            src={imag2}
            alt="imag2"
            className="w-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
      <motion.section
        className="w-full flex md:px-28 px-8 flex-col md:justify-between items-center mt-[80px] gap-10 md:gap-0 md:mt-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="services"
      >
        <h6 className="md:text-[40px] md:text-center text-left text-[28px]">
          OUR SERVICES
        </h6>
        <div className="flex w-full gap-8 flex-col md:flex-row items-center justify-center md:justify-around mt-0 md:mt-10">
          {[land, sea, air].map((service, index) => (
            <motion.div
              className="flex items-center justify-center"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service}
                className="md:w-[250px] w-[70%]"
                alt={service}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className="w-full flex md:px-28 px-8 flex-col-reverse md:flex-row md:justify-between mt-[50px] gap-10 md:gap-0 md:mt-[150px] mb-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[550px] w-[100%] flex items-center justify-center">
          <motion.img
            src={footer}
            className="w-full"
            alt="footer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="md:w-[50%] w-full">
          <div className="flex flex-col gap-4 mt-12">
            <motion.h6
              className="md:text-[48px] text-[32px] md:font-bold font-bold text-gray-700 md:text-gray-900"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Network serve <br />
              globally
            </motion.h6>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="md:text-[22px] text-[16px] text-gray-500">
                With a vast and efficient global network, we ensure your
                packages reach every corner of the world. From bustling cities
                to remote locations, our reliable connections and dedicated
                service guarantee timely and secure deliveries, no matter where
                your destination is.
              </p>
            </motion.div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 md:space-x-4">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-[#7D83FF] to-[#2D598A] text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/splash")}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-4 w-full md:w-auto bg-gray-200 text-gray-700 font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalContact(true)}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.footer
        className="bg-gray-800 text-white py-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Xihang Courier Service</h2>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:xihangcourierservice@gmail.com"
                className="text-blue-400 hover:underline"
              >
                xihangcourierservice@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Phone:{" "}
              <a
                href="tel:+1(615)-623-1375"
                className="text-blue-400 hover:underline"
              >
                +1(615)-623-1375
              </a>
            </p>
            <p className="text-gray-400">
              © 2025 Xihang Courier Service. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
