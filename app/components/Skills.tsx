"use client";

import { useState, useEffect } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("development");
  const [contributionData, setContributionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Fetch GitHub contribution data
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/github-contributions');
        const data = await response.json();
        setContributionData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGitHubData();
  }, []);
  
  const skillCategories = {
    development: {
      title: "Web Development",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript/TypeScript", level: 75 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    database: {
      title: "Database Management",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Drizzle ORM", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Database Design", level: 70 },
      ],
    },
    security: {
      title: "Cybersecurity",
      skills: [
        { name: "Vulnerability Scanning", level: 70 },
        { name: "CTF Challenges", level: 65 },
        { name: "Security Best Practices", level: 75 },
      ],
    },
    management: {
      title: "Project Management",
      skills: [
        { name: "Feature-Driven Development", level: 80 },
        { name: "Agile Principles", level: 75 },
        { name: "Team Collaboration", level: 85 },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        { name: "PM2", level: 70 },
        { name: "Nginx", level: 65 },
        { name: "DigitalOcean", level: 75 },
        { name: "Git/GitHub", level: 85 },
      ],
    },
  };

  type CategoryKey = keyof typeof skillCategories;

  return (
    <div className="border border-[#30363d] rounded-md bg-[#0d1117]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-[#8b949e]">avnixm/</span>
            <span className="text-[#c9d1d9] font-semibold">skills.md</span>
          </div>
          <button className="p-1 text-[#8b949e] hover:text-[#c9d1d9]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeTab === category
                    ? "bg-[#238636] text-white"
                    : "bg-[#21262d] text-[#8b949e] hover:bg-[#30363d]"
                }`}
              >
                {skillCategories[category as CategoryKey].title}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {skillCategories[activeTab as CategoryKey].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#c9d1d9]">{skill.name}</span>
                  <span className="text-[#8b949e]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#238636] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* GitHub Contribution Graph */}
          <div className="mt-10 border-t border-[#30363d] pt-6">
            <h3 className="text-[#c9d1d9] text-lg font-semibold mb-4">GitHub Contribution Activity</h3>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-pulse text-[#8b949e]">Loading contribution data...</div>
              </div>
            ) : contributionData ? (
              <>
                <div className="overflow-x-auto">
                  <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}>
                    {contributionData.contributions.map((day: any, i: number) => {
                      let bgColor;
                      switch(day.level) {
                        case 0: bgColor = "bg-[#161b22]"; break;
                        case 1: bgColor = "bg-[#0e4429]"; break;
                        case 2: bgColor = "bg-[#006d32]"; break;
                        case 3: bgColor = "bg-[#26a641]"; break;
                        case 4: bgColor = "bg-[#39d353]"; break;
                        default: bgColor = "bg-[#161b22]";
                      }
                      return (
                        <div 
                          key={i} 
                          className={`w-3 h-3 rounded-sm ${bgColor}`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-[#8b949e] mt-2">
                  {contributionData.months.map((month: string, i: number) => (
                    <span key={i}>{month}</span>
                  ))}
                </div>
                <div className="flex items-center mt-4 text-xs text-[#8b949e]">
                  <span className="mr-2">Contribution level:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
                  </div>
                  <span className="ml-2">{contributionData.totalContributions} contributions in the last year</span>
                </div>
                
                {/* Most Used Languages */}
                {contributionData.languages && contributionData.languages.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-[#c9d1d9] text-md font-semibold mb-3">Most Used Languages</h4>
                    <div className="h-4 w-full rounded-full overflow-hidden bg-[#21262d] flex">
                      {contributionData.languages.map((lang: any, i: number) => (
                        <div 
                          key={i}
                          className="h-full" 
                          style={{ 
                            width: `${lang.percentage}%`, 
                            backgroundColor: lang.color || '#8b949e'
                          }}
                          title={`${lang.name}: ${lang.percentage}%`}
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {contributionData.languages.map((lang: any, i: number) => (
                        <div key={i} className="flex items-center text-xs">
                          <span 
                            className="w-3 h-3 rounded-full mr-1" 
                            style={{ backgroundColor: lang.color || '#8b949e' }}
                          />
                          <span className="text-[#c9d1d9]">{lang.name}</span>
                          <span className="text-[#8b949e] ml-1">{lang.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-[#8b949e] py-4">
                Unable to load GitHub contribution data.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}