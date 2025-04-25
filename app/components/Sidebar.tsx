/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      name: "About", 
      href: "about",
      icon: (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2">
          <path d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939V.75Z"></path>
        </svg>
      )
    },
    { 
      name: "Skills", 
      href: "skills",
      icon: (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
        </svg>
      )
    },
    { 
      name: "Education", 
      href: "education",
      icon: (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2">
          <path d="M8 0l8 4-8 4-8-4 8-4z"/>
          <path d="M16 8.5l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5z"/>
        </svg>
      )
    },
    { 
      name: "Projects", 
      href: "projects",
      icon: (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2">
          <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
        </svg>
      )
    },
    { 
      name: "Contact", 
      href: "contact",
      icon: (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-2">
          <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM14.5 4.07v-.32a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v.32l6.5 4.33zm0 1.441-6.5 4.33-6.5-4.33v6.739c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117]">
      <header className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-[#30363d]">
        <div className="flex items-center">
          <button className="text-[#c9d1d9] p-1 hover:bg-[#30363d] rounded-md">
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true" fill="currentColor">
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
          </button>
          <div className="flex items-center ml-4">
            <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="currentColor" className="text-white">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Type / to search"
              className="w-72 bg-[#0d1117] border border-[#30363d] rounded-md py-1 px-3 text-sm text-[#c9d1d9] placeholder-[#6e7681] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6e7681] text-xs border border-[#30363d] rounded px-1">/</div>
          </div>
          <button className="text-[#c9d1d9] hover:text-white">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor">
              <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
            </svg>
          </button>
        </div>
      </header>

      <nav className="px-4 py-3">
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.href}`}
                className="flex items-center text-sm text-[#c9d1d9] hover:text-white"
              >
                {item.icon}
                {item.name}
                {'count' in item && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-[#30363d] text-[#c9d1d9] rounded-full">
                    {item.count?.toString()}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}