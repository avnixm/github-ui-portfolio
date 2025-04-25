/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectsProps {
  projectId?: number;
}

export default function Projects({ projectId }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(projectId || null);

  // Update expanded project when projectId prop changes
  useEffect(() => {
    if (projectId) {
      setExpandedProject(projectId);
    }
  }, [projectId]);

  const seriousProjects = [
    {
      id: 1,
      title: "CIELOES-LMS",
      description: "An e-learning platform designed for elementary students featuring quizzes, leaderboards, and gamified learning.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
      details: "CIELOES is a comprehensive Learning Management System that aims to make education more engaging for elementary students. The platform includes interactive quizzes, a gamified reward system, and real-time leaderboards to encourage healthy competition. Teachers can create custom learning paths and track student progress through an intuitive dashboard.",
    },
    {
      id: 3,
      title: "Subdivision Visitor Tracking System",
      description: "A system designed to log and monitor visitors entering a residential area.",
      technologies: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
      details: "This visitor tracking system enhances security in residential subdivisions by digitizing the visitor registration process. Features include QR code generation, real-time notifications, and visitor history logs to improve overall security management.",
    },
  ];

  const hobbyProjects = [
    {
      id: 4,
      title: "Murmr",
      description: "A question-and-answer platform where Twitter users can ask each other questions anonymously.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Clerk.js"],
      details: "Murmr provides an anonymous Q&A platform inspired by CuriousCat. It integrates with Twitter, allowing users to ask questions anonymously. The interface is minimalist and mobile-friendly, with support for likes and public profiles.",
    },
    {
      id: 5,
      title: "Pomoki",
      description: "A simple productivity app designed to help users manage tasks using the Pomodoro technique.",
      technologies: ["React", "Tailwind CSS"],
      details: "Pomoki is a focused productivity timer app that implements the Pomodoro technique. It includes task tracking, break timers, and progress visualization to boost productivity without overwhelming users.",
    },
    {
      id: 6,
      title: "BlurredLines",
      description: "An experimental storytelling platform mixing anonymous social posts with fiction.",
      technologies: ["Next.js", "Tailwind CSS", "Supabase"],
      details: "BlurredLines allows users to submit real or fictional stories anonymously. Stories are presented with a clean UI, blurred authorship, and tagging system to invite interpretation and discussion around anonymity and authenticity.",
    },
  ];

  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-[#8b949e]">avnixm/</span>
            <span className="text-[#c9d1d9] font-semibold">projects.md</span>
          </div>
          <button className="p-1 text-[#8b949e] hover:text-[#c9d1d9]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        {/* Serious Projects */}
        <div className="space-y-4 mb-6">
          <h2 className="text-[#c9d1d9] font-semibold text-xl mb-4">Serious Projects</h2>
          {seriousProjects.map((project) => (
            <div key={project.id} className="border border-[#30363d] rounded-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#c9d1d9] mb-2">{project.title}</h3>
                <p className="text-[#8b949e] mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-[#21262d] text-[#8b949e] rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="text-[#58a6ff] hover:text-[#58a6ff]/80 text-sm font-medium flex items-center"
                >
                  {expandedProject === project.id ? "Show less" : "Learn more"}
                  <svg
                    className={`h-4 w-4 ml-1 transition-transform ${
                      expandedProject === project.id ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {expandedProject === project.id && (
                <div className="p-4 bg-[#161b22] border-t border-[#30363d]">
                  <p className="text-[#8b949e]">{project.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hobby Projects */}
        <div className="space-y-4">
          <h2 className="text-[#c9d1d9] font-semibold text-xl mb-4">Hobby Projects</h2>
          {hobbyProjects.map((project) => (
            <div key={project.id} className="border border-[#30363d] rounded-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#c9d1d9] mb-2">{project.title}</h3>
                <p className="text-[#8b949e] mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-[#21262d] text-[#8b949e] rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="text-[#58a6ff] hover:text-[#58a6ff]/80 text-sm font-medium flex items-center"
                >
                  {expandedProject === project.id ? "Show less" : "Learn more"}
                  <svg
                    className={`h-4 w-4 ml-1 transition-transform ${
                      expandedProject === project.id ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {expandedProject === project.id && (
                <div className="p-4 bg-[#161b22] border-t border-[#30363d]">
                  <p className="text-[#8b949e]">{project.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
