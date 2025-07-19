import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, TestTube, Palette, Users, Lightbulb } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Core Java", "OOPs"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Testing Tools",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Selenium", "Postman", "JIRA", "Manual Testing", "Automation Testing"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Design & AI",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "STITCH AI", "UI/UX Design", "Web Design"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Communication", "Leadership", "Project Management", "Problem Solving"],
      color: "from-amber-500 to-orange-600"
    }
  ];

  const getSkillLevel = (skill: string) => {
    const levels: { [key: string]: number } = {
      "HTML": 90, "CSS": 85, "JavaScript": 80, "Core Java": 75, "OOPs": 75,
      "Selenium": 85, "Postman": 80, "JIRA": 75, "Manual Testing": 90, "Automation Testing": 80,
      "Figma": 70, "STITCH AI": 65, "UI/UX Design": 75, "Web Design": 80,
      "Communication": 85, "Leadership": 80, "Project Management": 75, "Problem Solving": 90
    };
    return levels[skill] || 70;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic learning and hands-on projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill}</span>
                        <span className="text-sm text-muted-foreground">{getSkillLevel(skill)}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${getSkillLevel(skill)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gradient-primary">Key Strengths</h3>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Specialized in end-to-end testing methodologies, automation frameworks, and AI-integrated web development. 
                Passionate about delivering high-quality, user-centric solutions with a strong focus on performance and reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};