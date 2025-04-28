"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeCard, setActiveCard] = useState('small');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const featuresRef = useRef(null);
  const digitalRef = useRef(null);
  const techFieldsRef = useRef(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isDigitalInView = useInView(digitalRef, { once: true });
  const isTechFieldsInView = useInView(techFieldsRef, { once: true });

  const features = [
    {
      title: "Secure Online Banking",
      icon: "/lock.png",
      style: "border",
      span: 2,
      direction: "left"
    },
    {
      title: "Automatic Bill Payment",
      icon: "/lock.png",
      style: "orange",
      span: 1,
      direction: "right"
    },
    {
      title: "No Hidden Fees",
      icon: "/lock.png",
      style: "orange",
      span: 1,
      direction: "left"
    },
    {
      title: "Card Payments Anytime",
      icon: "/lock.png",
      style: "border",
      span: 2,
      direction: "right"
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col w-full p-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#4c27ae] h-full flex-1 rounded-[2rem]"
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-center pt-4 px-6 md:px-16 lg:px-24"
        >
          <div className="flex-1"></div>
          <Link href="/" className="flex-1 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black rounded-full py-4 px-12"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-bold text-xl tracking-wider">CASH-TRACK</span>
              </div>
            </motion.div>
          </Link>
          <div className="flex-1 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white z-50 cursor-pointer"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-1.5 bg-white rounded"></div>
                <div className="w-8 h-1.5 bg-white rounded"></div>
                <div className="w-8 h-1.5 bg-white rounded"></div>
              </div>
            </motion.button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed right-0 top-0 h-full w-80 bg-[#4c27ae] z-50 p-8"
              >
                <div className="flex flex-col gap-6 mt-16">
                  <Link 
                    href="/login"
                    className="text-white text-2xl font-bold hover:text-[#ED7E02] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup"
                    className="text-white text-2xl font-bold hover:text-[#ED7E02] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <section className="relative px-6 grid grid-cols-3 md:px-16 lg:px-24  md:my-24">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="col-span-2 relative z-10 max-w-3xl"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold "
            >
              TRACK YOUR FINANCE
              <br />
              WITH AI
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-lg md:text-xl mt-8 max-w-2xl"
            >
              We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer
              experiences.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="#" className="inline-block mt-12 bg-black text-[#fff] font-bold text-xl py-4 px-10 rounded-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  <span>GET STARTED</span>
                  <span className="text-2xl"></span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute col-span-1 bottom-[-100px] right-0 h-full"
          >
            <Image src="/hero.png"
              width={500}
              height={600}
              alt="Decorative element"
              className="w-full object-contain"
            />
          </motion.div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#000] h-full flex-1 rounded-[2rem] mt-8"
      >
        <section ref={featuresRef} className="relative px-6 md:px-16 lg:px-24 mt-32 pb-24 bg-black rounded-[2rem]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            className="text-white text-4xl md:text-5xl font-bold mb-16 pt-16"
          >
            ALL FEATURES YOU NEED
            <br />
            IN ONE PLACE
          </motion.h2>


          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: feature.direction === "left" ? -20 : 20 }}
                animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className={`
                  col-span-${feature.span} 
                  ${feature.style === "border"
                    ? "border-4 border-dashed border-[#6B3EE8]"
                    : "bg-[#ED7E02]"
                  } 
                  rounded-3xl p-8 py-[3rem] flex items-center gap-6
                `}
              >
                <Image
                  src={feature.icon}
                  width={80}
                  height={80}
                  alt={feature.title}
                  className="object-contain"
                />
                <h3 className="text-white text-3xl font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section ref={digitalRef} className="relative px-6 md:px-16 lg:px-24 pb-[10rem]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDigitalInView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-3xl p-12 py-[5rem] flex items-center justify-between"
          >
            <div className="flex items-center gap-12">
              <Image
                src="/bank.png"
                width={200}
                height={200}
                alt="Digital Banking"
                className="object-contain"
              />
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-black text-4xl md:text-5xl font-bold mb-6"
                >
                  GO DIGITAL NOW!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-700 text-lg max-w-xl"
                >
                  Our digital platform allows you to access your money from anywhere, anytime. With our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today
                </motion.p>
              </div>
            </div>
            <Link href="#" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ED7E02] text-white font-bold text-xl py-4 px-10 rounded-full flex items-center gap-2"
              >
                GET STARTED
                <span className="text-2xl">➔</span>
              </motion.div>
            </Link>
          </motion.div>
        </section>

        <section ref={techFieldsRef} className="relative px-6 md:px-16 lg:px-24 pb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isTechFieldsInView ? { opacity: 1, y: 0 } : {}}
            className="text-white text-4xl md:text-5xl font-bold mb-16"
          >
            DESIGNED FOR ALL
            <br />
            TECH FIELDS
          </motion.h2>

          <div className="grid grid-cols-10 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTechFieldsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              onClick={() => setActiveCard('small')}
              className={`${activeCard === 'small'
                  ? 'col-span-4 w-full bg-[#4c27ae]'
                  : 'col-span-3 border-2 border-dashed border-[#6B3EE8]'
                } rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500`}
            >
              <div className={`relative ${activeCard === 'small' ? 'w-64 h-64' : 'w-64 h-64'} mb-6 transition-all duration-500`}>
                <Image
                  src="/person1.png"
                  fill
                  alt="Small Business"
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-2xl font-semibold">DEVELOPERS</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTechFieldsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onClick={() => setActiveCard('startup')}
              className={`${activeCard === 'startup'
                  ? 'col-span-4 bg-[#4c27ae]'
                  : 'col-span-3 border-2 border-dashed border-[#6B3EE8]'
                } rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500`}
            >
              <div className={`relative ${activeCard === 'startup' ? 'w-64 h-64' : 'w-64 h-64'} mb-6 transition-all duration-500`}>
                <Image
                  src="/person2.png"
                  fill
                  alt="Startup"
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-2xl font-semibold">DESIGNERS</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTechFieldsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveCard('enterprise')}
              className={`${activeCard === 'enterprise'
                  ? 'col-span-4 bg-[#4c27ae]'
                  : 'col-span-3 border-2 border-dashed border-[#6B3EE8]'
                } rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-500`}
            >
              <div className={`relative ${activeCard === 'enterprise' ? 'w-64 h-64' : 'w-64 h-64'} mb-6 transition-all duration-500`}>
                <Image
                  src="/person3.png"
                  fill
                  alt="Enterprise"
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-2xl font-semibold">WEB3 GUYS</h3>
            </motion.div>
          </div>
        </section>

        <footer className="relative px-[5rem]  bg-black border-t-4 border-[#4c27ae] mt-auto">
          

          <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
            <p className="text-gray-400 text-center w-full text-sm">
              Cash Track built by{" "}
              <Link 
                href="https://robinsonhonour.me" 
                target="_blank" 
                className="text-[#4c7Eae] hover:text-[#6B3EE8] transition-colors"
              >
                @codewithhonour
              </Link>
            </p>
           
          </div>
        </footer>
      </motion.div>
    </main>
  )
}
