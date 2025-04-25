/* eslint-disable @typescript-eslint/no-unused-vars */


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "about";
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* GitHub-style header */}
      <header className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <button className="text-[#c9d1d9] p-2 hover:bg-[#30363d] rounded-md">
                <svg height="24" viewBox="0 0 16 16" version="1.1" width="24" fill="currentColor">
                  <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                </svg>
              </button>
              <div className="flex items-center ml-4">
                <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" fill="currentColor" className="text-white">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span className="text-white ml-2">avnixm</span>
              </div>
            </div>

            <div className="ml-auto flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type / to search"
                  className="w-64 bg-[#0d1117] border border-[#30363d] rounded-md py-1 px-3 text-sm text-[#c9d1d9] placeholder-[#6e7681]"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6e7681] text-xs">/</div>
              </div>
              <button className="text-[#c9d1d9] hover:text-white">+</button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary navigation */}
      <div className="bg-[#0d1117] border-b border-[#30363d]">
        <div className="max-w-[1280px] mx-auto px-4">
          <nav className="flex">
            <a href="#about" className={`px-4 py-3 border-b-2 ${activeSection === "about" ? "border-[#f78166] text-white" : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"}`}>
              <div className="flex items-center">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                </svg>
                Overview
              </div>
            </a>
            <a href="#projects" className={`px-4 py-3 border-b-2 ${activeSection === "projects" ? "border-[#f78166] text-white" : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"}`}>
              <div className="flex items-center">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm11.75 11.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5ZM5.5 9.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h3.5ZM9 6.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h7Zm4.5-3.25a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5h11Z"></path>
                </svg>
                Projects
              </div>
            </a>
            <a href="#skills" className={`px-4 py-3 border-b-2 ${activeSection === "skills" ? "border-[#f78166] text-white" : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"}`}>
              <div className="flex items-center">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                </svg>
                Skills
              </div>
            </a>
            <a href="#education" className={`px-4 py-3 border-b-2 ${activeSection === "education" ? "border-[#f78166] text-white" : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"}`}>
              <div className="flex items-center">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                </svg>
                Education
              </div>
            </a>
            <a href="#contact" className={`px-4 py-3 border-b-2 ${activeSection === "contact" ? "border-[#f78166] text-white" : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"}`}>
              <div className="flex items-center">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM14.5 4.07v-.32a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v.32l6.5 4.33zm0 1.441-6.5 4.33-6.5-4.33v6.739c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                </svg>
                Contact
              </div>
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-[1280px] mx-auto px-4">
        <div className="flex gap-8 pt-10">
          {/* Left column - Profile */}
          <div className="w-[296px] flex-shrink-0">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={596}
                height={596}
                className="rounded-full border-4 border-[#0d1117]"
                priority
              />
              <div className="absolute bottom-12 right-2 p-1.5 rounded-full bg-[#0d1117] border-4 border-[#0d1117]">
                <div className="p-1.5 bg-[#238636] rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-4">
              <h1 className="text-[26px] leading-[1.25] font-semibold text-[#c9d1d9]">
                Nikka Aira Mariño
              </h1>
              <div className="text-[20px] font-light text-[#8b949e]">
                avnixm
              </div>
            </div>

            <div className="mt-4">
              <button className="w-full py-1 px-3 text-sm bg-[#21262d] border border-[#363b42] rounded-md text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e]">
                Edit profile
              </button>
            </div>

            <div className="mt-4 text-[#8b949e]">
              <p>A 3rd year BSIT student from the Philippines</p>
            </div>

            <div className="mt-4 flex items-center text-sm text-[#8b949e]">
              <span className="mr-3">1 follower</span>
              <span>0 following</span>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="flex-1">
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
}