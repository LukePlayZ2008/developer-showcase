import { Github, Linkedin, Mail, Send } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { personalInfo } from "@/data/portfolio-data";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Send, href: personalInfo.social.telegram, label: "Telegram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h2>
            <p className="text-muted-foreground mb-8">
              You can also find me on these platforms. I'll do my best to respond as quickly as possible.
            </p>

            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <social.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {social.label === "Email" ? personalInfo.email : `@${social.href.split("/").pop()}`}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
