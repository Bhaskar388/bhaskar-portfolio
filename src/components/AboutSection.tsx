import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "NIST University",
      duration: "2021 - 2025",
      grade: "CGPA: 8.3",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Class XII",
      institution: "Samskara Bharathi Jr. College",
      duration: "2021",
      grade: "52.4%",
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: "Class X",
      institution: "Srinivasa Vidya Nilayam",
      duration: "2019",
      grade: "CGPA: 8.8",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gradient-secondary">
              Passionate Developer & Tester
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to my portfolio! I'm Illa Bhaskararao, and I'm excited to share my journey with you. 
              As a passionate Computer Science graduate from NIST University, I've dedicated myself to 
              mastering software testing and web development. Through this website, I want to show you 
              who I am - someone who's skilled with tools like Selenium, Postman, and JIRA, and who 
              specializes in creating robust, user-friendly, and AI-integrated solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What drives me? A keen eye for detail and an unwavering passion for quality assurance. 
              I believe in combining technical expertise with creative problem-solving to build 
              exceptional digital experiences. I'm here to tell you that I'm ready for new challenges 
              and opportunities, whether remote or office-based work.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gradient-secondary">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>{edu.duration}</span>
                          <span className="font-medium text-accent">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};