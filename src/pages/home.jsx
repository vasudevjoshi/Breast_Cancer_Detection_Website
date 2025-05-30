import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";
import "../styles/animations.css";

const ChatbotSupport = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi there 💗 I'm here for emotional support. How can I help you today?",
    },
  ]);
  const responses = {
    diagnosed:
      "You are not alone. It's normal to feel overwhelmed. Try talking to a doctor and lean on loved ones for support.",
    screening:
      "You can get screened at nearby clinics and hospitals. Early detection saves lives.",
    scared:
      "It's okay to feel scared. You're brave for seeking help. Talking to a mental health professional can be very helpful.",
  };

  const handleUserInput = (text) => {
    setMessages([...messages, { from: "user", text }]);
    setTimeout(() => {
      let reply = "I'm here with you. Please tell me more.";
      if (text.toLowerCase().includes("diagnosed")) reply = responses.diagnosed;
      else if (text.toLowerCase().includes("screen"))
        reply = responses.screening;
      else if (text.toLowerCase().includes("scared")) reply = responses.scared;
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="mt-16 p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircleHeart className="text-pink-600 w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-800">
          Emotional Support Chatbot
        </h3>
      </div>
      <div className="border p-4 h-64 overflow-y-auto bg-pink-50 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.from === "user"
                ? "text-right text-gray-700"
                : "text-left text-pink-700"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleUserInput("I just got diagnosed")}
          className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
        >
          "I just got diagnosed"
        </button>
        <button
          onClick={() => handleUserInput("Where can I get screened?")}
          className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
        >
          "Where can I get screened?"
        </button>
        <button
          onClick={() => handleUserInput("I feel scared")}
          className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
        >
          "I feel scared"
        </button>
      </div>
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pink-100 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-pink-200 opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-72 h-72 rounded-full bg-pink-300 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [50, 0, 50],
          y: [-50, 0, -50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const RibbonAnimation = () => (
  <motion.div
    className="absolute right-10 top-20 w-24 h-24 opacity-20"
    animate={{
      rotate: 360,
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"
        fill="#EC4899"
      />
      <circle cx="50" cy="50" r="15" fill="#EC4899" />
    </svg>
  </motion.div>
);

export default function Home() {
  return (
    <div className="bg-white/70 text-gray-800 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <RibbonAnimation />
        <motion.h1
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 50%, #ec4899 75%, #f43f5e 100%)",
            backgroundSize: "300% 300%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Early Detection Saves Lives
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Learn the signs, stay informed, and take action. Breast cancer
          awareness starts with knowledge and proactive care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
  to="/awareness"
  className="px-6 py-3 rounded-full shadow font-semibold transition bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 text-white hover:brightness-110"
  style={{
    backgroundImage: "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 100%)"
  }}
>
  Learn More
</Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 text-center bg-pink-50/80 backdrop-blur-sm relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <RibbonAnimation />
        <h2 className="text-4xl font-semibold text-pink-600 mb-4">
          About This Project
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Our mission is to create awareness about breast cancer and provide a
          free online tool for early prediction using AI. Empower yourself with
          knowledge and take steps to protect your health.
        </p>
      </motion.section>

      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Ready to Take a Step?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore symptoms or Steps to protect your health.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://68394acc51d080153ed68bf3--breastcare.netlify.app/symptoms"
            className="bg-white border-2 border-pink-500 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition"
          >
            View Symptoms
          </a>
          <a
            href="https://68394acc51d080153ed68bf3--breastcare.netlify.app/awareness"
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Awareness
          </a>
        </div>
      </motion.section>

      <ChatbotSupport />
    </div>
  );
}