import { Link } from "react-router-dom";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Send, href: personalInfo.social.telegram, label: "Telegram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold text-foreground">
              {personalInfo.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
