import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1xl_m-G7S4GlPujp9e2UzczO_IPTalLWa/view?usp=drive_link', '_blank');
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-60"></div>
            <img
              src="/lovable-uploads/69ae9dc8-4396-4e70-b9ad-5bf3c63803b8.png"
              alt="Illa Bhaskararao"
              className="relative w-full h-full object-cover rounded-full shadow-glow border-4 border-card"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">Illa Bhaskararao</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Software Tester & AI Web Developer
          </p>
          <p className="text-lg text-accent max-w-2xl mx-auto mb-6">
            "Crafting bug-free experiences & AI-powered web solutions."
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Remote & Office Work
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8 animate-slide-up">
          <Button
            variant="glass"
            size="icon"
            onClick={() => window.open('https://github.com/Bhaskar388', '_blank')}
            className="hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            onClick={() => window.open('https://linkedin.com/in/illa-bhaskararao-46854a29b', '_blank')}
            className="hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            onClick={() => window.open('mailto:bhaskarilla175@gmail.com', '_blank')}
            className="hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToProjects}
            className="text-white"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={handleResumeDownload}
            className="group"
          >
            <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};