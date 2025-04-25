import React from "react";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "nikkamarino8@gmail.com",
      link: "mailto:nikkamarino8@gmail.com",
    },
    {
      icon: "🔗",
      label: "Facebook",
      value: "Nikka Aira Villanueva Mariño",
      link: "https://web.facebook.com/avnixm",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/avnixm",
      link: "https://github.com/avnixm",
    },
  ];

  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-[#8b949e]">avnixm/</span>
            <span className="text-[#c9d1d9] font-semibold">contact.md</span>
          </div>
          <button className="p-1 text-[#8b949e] hover:text-[#c9d1d9]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 border border-[#30363d] rounded-md hover:bg-[#161b22] transition-colors group"
            >
              <div className="text-2xl mr-4">{item.icon}</div>
              <div>
                <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9]">{item.label}</p>
                <p className="text-[#c9d1d9] font-medium group-hover:text-[#58a6ff]">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}