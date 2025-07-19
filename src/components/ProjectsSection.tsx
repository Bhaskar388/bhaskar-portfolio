import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, TestTube, Code, Database } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Medical Image Analysis using ML/DL",
      description: "Built a comprehensive deep learning model and web application for detecting skin diseases using advanced CNN architectures like DenseNet.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tech: ["Deep Learning", "DenseNet", "CNN", "Web Development", "Medical AI"],
      features: [
        "Advanced CNN architecture implementation",
        "Real-time skin disease detection",
        "User-friendly web interface",
        "High accuracy medical analysis",
        "Comprehensive dataset training"
      ],
      category: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      github: "https://github.com/Bhaskar388",
      demo: "#"
    },
    {
      title: "Sri Mandir - Puja & Chadhava App Testing",
      description: "Conducted comprehensive white-box testing, validated navigation logic, and reported critical UI/UX bugs for improvement of the religious application.",
      image: "/src/assets/sri-mandir-app.png",
      tech: ["Manual Testing", "White-box Testing", "UI/UX Testing", "JIRA", "Bug Reporting"],
      features: [
        "Comprehensive white-box testing strategy",
        "Navigation logic validation",
        "UI/UX bug identification and reporting",
        "Functional testing across all modules",
        "Detailed test case documentation"
      ],
      category: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      color: "from-green-500 to-emerald-600",
      github: "https://github.com/Bhaskar388",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world projects in AI/ML development and comprehensive software testing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth group overflow-hidden">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${project.color} p-2 rounded-lg text-white`}>
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Code className="h-4 w-4 text-primary mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-muted-foreground text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Database className="h-4 w-4 text-accent mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Interested in More Projects?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just highlights of my work. I'm constantly working on new projects and expanding my skills in AI/ML and software testing.
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://github.com/Bhaskar388', '_blank')}
                className="text-white"
              >
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};