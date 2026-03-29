"use client"

import React, { useState } from "react"
import { Book, Code, Leaf, MapPin, Tent, Utensils, Beaker, Headphones, GraduationCap, BookOpen } from "lucide-react"
import { FaAws } from "react-icons/fa"
import { SiScrimba } from "react-icons/si"
import { motion } from "framer-motion"

const interests = [
  { name: "STEM", icon: Beaker, color: "bg-blue-500 dark:bg-blue-700" },
  { name: "Reading", icon: Book, color: "bg-amber-500 dark:bg-amber-700" },
  { name: "Logic puzzles", icon: Code, color: "bg-green-500 dark:bg-green-700" },
  { name: "Gardening", icon: Leaf, color: "bg-emerald-500 dark:bg-emerald-700" },
  { name: "Travelling", icon: MapPin, color: "bg-red-500 dark:bg-red-700" },
  { name: "Camping", icon: Tent, color: "bg-teal-500 dark:bg-teal-700" },
  { name: "Foodie", icon: Utensils, color: "bg-orange-500 dark:bg-orange-700" },
]

const learningItems = [
  {
    category: "Courses",
    icon: GraduationCap,
    items: [
      { name: "Advanced JavaScript", source: "Scrimba", icon: SiScrimba },
      { name: "Introduction to Clean Code", source: "Scrimba", icon: SiScrimba },
      { name: "Cloud Practitioner Essentials", source: "AWS", icon: FaAws },
    ],
  },
  {
    category: "Reading",
    icon: BookOpen,
    items: [{ name: "Small Pieces Loosely Joined: A Unified Theory Of The Web", source: "Book", icon: Book }],
  },
  {
    category: "Listening",
    icon: Headphones,
    items: [{ name: "Women in STEM podcast", source: "Podcast", icon: Headphones }],
  },
]

export function InterestsLearningSection() {
  const [activeInterest, setActiveInterest] = useState<string | null>(null)

  return (
    <section id="interests-learning" className="space-y-12 py-16">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white text-center mb-8">
        Interests & Continuous Learning
      </h2>

      {/* Interests Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-purple-600 dark:text-teal-300 text-center">Interests</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {interests.map((interest) => (
            <motion.div
              key={interest.name}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 
                ${activeInterest === interest.name ? "ring-2 ring-purple-500 scale-105" : ""}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveInterest(activeInterest === interest.name ? null : interest.name)}
            >
              <div className={`absolute inset-0 opacity-20 ${interest.color}`}></div>
              <div className="relative p-6 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-80 h-full flex flex-col items-center justify-center text-center space-y-3 border border-gray-200 dark:border-gray-700">
                <interest.icon className="w-8 h-8 text-gray-800 dark:text-white" />
                <span className="font-medium text-gray-800 dark:text-white">{interest.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Section */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-purple-600 dark:text-teal-300 text-center">
          Continuous Learning
        </h3>

        <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="space-y-8">
            {learningItems.map((category) => (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-3 pl-7">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-purple-600 dark:text-purple-400">
                        {typeof item.icon === "function" ? (
                          React.createElement(item.icon, { className: "w-4 h-4" })
                        ) : (
                          <item.icon className="w-4 h-4" />
                        )}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
