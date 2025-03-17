"use client";

import { useState } from "react";

export default function Education() {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const educationItems = [
    {
      id: 1,
      institution: "Our Lady of the Sacred Heart College of Guimba",
      degree: "Bachelor of Science in Information Technology (BSIT)",
      period: "2022 - 2026 (Expected)",
      description: "Focusing on web development, database management, and cybersecurity. Actively participating in tech-related extracurricular activities and projects.",
    },
    {
      id: 2,
      institution: "Bartolome Sangalang National High School",
      degree: "Secondary Education",
      period: "2018 - 2022",
      description: "Completed secondary education with honors, participating in various technology and programming competitions.",
    },
    {
      id: 3,
      institution: "Guimba East Elementary School",
      degree: "Primary Education",
      period: "2012 - 2018",
      description: "Completed primary education with distinction, developing early interest in mathematics and science.",
    },
  ];


  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-[#8b949e]">avnixm/</span>
            <span className="text-[#c9d1d9] font-semibold">education.md</span>
          </div>
          <button className="p-1 text-[#8b949e] hover:text-[#c9d1d9]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {educationItems.map((item) => (
            <div 
              key={item.id} 
              className="border border-[#30363d] rounded-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-[#161b22] transition-colors"
              >
                <div>
                  <h3 className="font-medium text-[#c9d1d9]">{item.institution}</h3>
                  <p className="text-sm text-[#8b949e]">{item.degree} | {item.period}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-[#8b949e] transition-transform ${
                    expandedItem === item.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {expandedItem === item.id && (
                <div className="p-4 bg-[#161b22] border-t border-[#30363d]">
                  <p className="text-[#8b949e]">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}