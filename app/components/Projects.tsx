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

  const projects = [
    {
      id: 1,
      title: "CIELOES-LMS",
      description: "An e-learning platform designed for elementary students featuring quizzes, leaderboards, and gamified learning.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
      details: "CIELOES is a comprehensive Learning Management System that aims to make education more engaging for elementary students. The platform includes interactive quizzes, a gamified reward system, and real-time leaderboards to encourage healthy competition. Teachers can create custom learning paths and track student progress through an intuitive dashboard.",
    },
    {
      id: 2,
      title: "Post-it",
      description: "An anonymous note-sharing app with rich text formatting, anonymous sharing, and secure authentication.",
      technologies: ["React", "Tailwind CSS", "PostgreSQL", "NextAuth.js"],
      details: "Post-it allows users to share thoughts and ideas anonymously. The platform features rich text formatting, image uploads, and secure authentication to protect user privacy. Notes can be categorized, searched, and filtered based on topics or popularity. The clean, intuitive interface makes it easy for users to navigate and engage with content.",
    },
    {
      id: 3,
      title: "Subdivision Visitor Tracking System",
      description: "A system designed to log and monitor visitors entering a residential area.",
      technologies: ["ASP.NET", "C#", "MySQL", "Bootstrap"],
      details: "This visitor tracking system enhances security in residential subdivisions by digitizing the visitor registration process. Features include QR code generation for quick check-ins, real-time notifications for homeowners, visitor history logs, and analytics for security personnel. The system helps reduce manual paperwork and improves overall security management.",
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

        <div className="space-y-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-[#30363d] rounded-md overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#c9d1d9] mb-2">{project.title}</h3>
                <p className="text-[#8b949e] mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-[#21262d] text-[#8b949e] rounded-full text-xs"
                    >
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