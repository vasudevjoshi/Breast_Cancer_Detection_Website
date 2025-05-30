import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Salad, Wine, Users, Calendar, Activity, HeartPulse, Weight,MessageCircleHeart } from "lucide-react";

const riskData = {
  nonModifiable: [
    {
      title: "Age",
      Icon: Calendar,
      desc: "The risk of breast cancer increases as you get older, especially after age 50.",
    },
    {
      title: "Genetics (BRCA1/BRCA2)",
      Icon: HeartPulse,
      desc: "Inherited mutations in genes like BRCA1 and BRCA2 significantly raise breast cancer risk.",
    },
    {
      title: "Family History",
      Icon: Users,
      desc: "Having close relatives with breast cancer (especially mother, sister, daughter) increases your likelihood.",
    },
  ],
  modifiable: [
    {
      title: "Diet",
      Icon: Salad,
      desc: "High-fat diets and lack of fiber may increase breast cancer risk.",
      tip: "Incorporate a plant-based, high-fiber, low-fat diet to lower risk."
    },
    {
      title: "Alcohol & Smoking",
      Icon: Wine,
      desc: "Even small amounts of alcohol raise risk. Smoking also contributes significantly.",
      tip: "Limit alcohol and avoid smoking entirely for better long-term health."
    },
    {
      title: "Obesity",
      Icon: Weight,
      desc: "Post-menopausal obesity leads to increased estrogen, raising breast cancer risk.",
      tip: "Maintain a healthy BMI through regular exercise and balanced meals."
    },
    {
      title: "Lack of Physical Activity",
      Icon: Activity,
      desc: "Being inactive lowers immune defense and hormonal balance, increasing risk.",
      tip: "Aim for at least 150 minutes of moderate exercise each week."
    },
  ],
};

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-4 bg-white shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3 items-center">
          <item.Icon className="w-6 h-6 text-pink-600" />
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-pink-600"
        >
          ▼
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 ml-9"
          >
            <p className="text-gray-600 text-sm">{item.desc}</p>
            {item.tip && (
              <p className="text-pink-600 text-sm mt-2 font-medium">💡 {item.tip}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RiskFactorsSection() {
  return (
    <section className="py-16 px-6 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Breast Cancer Risk Factors
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Some risk factors are out of our control, while others are lifestyle-related. Knowing both can help you take steps to protect your health.
        </p>

        {/* Non-modifiable Section */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-Modifiable Risk Factors</h3>
        {riskData.nonModifiable.map((item, idx) => (
          <AccordionItem key={idx} item={item} />
        ))}

        {/* Modifiable Section */}
        <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">Modifiable Risk Factors</h3>
        {riskData.modifiable.map((item, idx) => (
          <AccordionItem key={idx} item={item} />
        ))}

      </div>
    </section>
  );
}
