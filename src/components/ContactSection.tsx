import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bhaskarilla175@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "bhaskarilla175@gmail.com",
      link: "mailto:bhaskarilla175@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-6301207309",
      link: "tel:+916301207309",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "illa-bhaskararao",
      link: "https://linkedin.com/in/illa-bhaskararao-46854a29b",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Bhaskar388",
      link: "https://github.com/Bhaskar388",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to create amazing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient-secondary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => window.open(contact.link, '_blank')}>
                      <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                        <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                            {contact.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Location</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    India • Available for Remote & Office Work
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gradient-secondary mb-6">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-white"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="shadow-card hover:shadow-glow transition-smooth group cursor-pointer" onClick={() => window.location.href = 'mailto:bhaskarilla175@gmail.com'}>
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email Me</h4>
              <p className="text-sm text-muted-foreground">Drop me an email for project inquiries</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-smooth group cursor-pointer" onClick={() => window.open('https://linkedin.com/in/illa-bhaskararao-46854a29b', '_blank')}>
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Connect on LinkedIn</h4>
              <p className="text-sm text-muted-foreground">Let's connect professionally</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-smooth group cursor-pointer" onClick={() => window.open('https://github.com/Bhaskar388', '_blank')}>
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">View My Code</h4>
              <p className="text-sm text-muted-foreground">Check out my projects on GitHub</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};