import React from "react";

export default function About() {
  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117]">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-[#8b949e]">avnixm/</span>
            <span className="text-[#c9d1d9] font-semibold">README.md</span>
          </div>
          <button className="p-1 text-[#8b949e] hover:text-[#c9d1d9]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#c9d1d9] mb-4">Hi, I'm Nikka!</h2>
          <p className="text-[#8b949e] mb-4">A tired IT student from the Philippines</p>
          
          <ul className="space-y-2 text-[#8b949e]">
            <li className="flex items-center">
              <span className="mr-2">💻</span>
              I'm currently working on CIELOES (Computer Instructed English Lessons for OLSHCO Elementary Students)
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌱</span>
              I'm currently learning ASP.NET, PHP, and Javascript
            </li>
            <li className="flex items-center">
              <span className="mr-2">📫</span>
              How to reach me <a href="mailto:nikkamarino8@gmail.com" className="text-[#58a6ff] hover:underline">nikkamarino8@gmail.com</a>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-4">Languages and Tools:</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40"/>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-4">Connect with me:</h3>
            <div className="flex gap-4">
              <a href="https://twitter.com/yourusername" className="text-[#58a6ff] hover:text-[#58a6ff]/80">
                <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" width="30" height="30"/>
              </a>
              <a href="https://facebook.com/yourusername" className="text-[#58a6ff] hover:text-[#58a6ff]/80">
                <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="Facebook" width="30" height="30"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}