/* eslint-disable @typescript-eslint/no-explicit-any */


import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // GitHub username
    const username = 'avnixm';
    
    // GitHub GraphQL API endpoint
    const endpoint = 'https://api.github.com/graphql';
    
    // GitHub Personal Access Token (you'll need to set this in your environment variables)
    const token = process.env.GITHUB_TOKEN;
    
    if (!token) {
      throw new Error('GitHub token not found');
    }
    
    // GraphQL query to fetch contribution data and languages
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
          repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    
    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }
    
    const calendar = data.data.user.contributionsCollection.contributionCalendar;
    const totalContributions = calendar.totalContributions;
    
    // Process the contribution data
    const contributions: { date: string; count: number; level: number }[] = [];
    const months = new Set();
    
    calendar.weeks.forEach((week: { contributionDays: any[] }) => {
      week.contributionDays.forEach(day => {
        const date = new Date(day.date);
        const monthName = date.toLocaleString('default', { month: 'short' });
        months.add(monthName);
        
        let level = 0;
        if (day.contributionCount > 0) {
          if (day.contributionCount <= 3) level = 1;
          else if (day.contributionCount <= 6) level = 2;
          else if (day.contributionCount <= 9) level = 3;
          else level = 4;
        }
        
        contributions.push({
          date: date.toLocaleDateString(),
          count: day.contributionCount,
          level,
        });
      });
    });
    
    // Process language data
    const languageMap = new Map();
    const repositories = data.data.user.repositories.nodes;
    
    repositories.forEach((repo: any) => {
      if (repo.languages && repo.languages.edges) {
        repo.languages.edges.forEach((edge: any) => {
          const { name, color } = edge.node;
          const size = edge.size;
          
          if (languageMap.has(name)) {
            languageMap.set(name, {
              size: languageMap.get(name).size + size,
              color
            });
          } else {
            languageMap.set(name, { size, color });
          }
        });
      }
    });
    
    // Convert to array and sort by size
    const languages = Array.from(languageMap.entries())
      .map(([name, { size, color }]) => ({ name, size, color }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 8); // Get top 8 languages
    
    // Calculate percentages
    const totalSize = languages.reduce((sum, lang) => sum + lang.size, 0);
    const languagesWithPercentage = languages.map(lang => ({
      ...lang,
      percentage: Math.round((lang.size / totalSize) * 100)
    }));
    
    return NextResponse.json({
      totalContributions,
      contributions,
      months: Array.from(months),
      languages: languagesWithPercentage
    });
    
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contribution data' },
      { status: 500 }
    );
  }
}