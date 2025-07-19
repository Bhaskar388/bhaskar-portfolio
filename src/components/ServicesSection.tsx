import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, Globe, CheckCircle, Code, Zap, Shield } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Manual & Automation Testing",
      description: "End-to-end testing with UI/UX validation, backend logic verification, and functionality testing using industry-standard tools.",
      features: [
        "Comprehensive test case design and execution",
        "UI/UX validation and user experience testing",
        "Backend logic verification and API testing",
        "Selenium-based automation frameworks",
        "Cross-browser and cross-platform testing",
        "Bug reporting and tracking with JIRA"
      ],
      tools: ["Selenium", "Postman", "JIRA", "TestNG"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Developed a DL-based medical image analysis web app using modern frameworks and intuitive design principles.",
      features: [
        "Responsive web application development",
        "AI/ML integration for medical image analysis",
        "Modern JavaScript frameworks and libraries",
        "Clean, maintainable code architecture",
        "User-centered design approach",
        "Performance optimization and testing"
      ],
      tools: ["HTML", "CSS", "JavaScript", "React", "AI/ML"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive testing solutions and modern web development services with a focus on quality and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth group overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Code className="h-5 w-5 text-accent mr-2" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Get Started
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gradient-primary">Quality Assurance Promise</h3>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                Every project is delivered with comprehensive testing, detailed documentation, and ongoing support. 
                I ensure your applications are not just functional, but reliable, scalable, and user-friendly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% Test Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Detailed Reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Ongoing Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};