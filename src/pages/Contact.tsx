import { Mail, Send } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { personalInfo } from "@/data/portfolio-data";

// Custom icons for TikTok and Facebook
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Contact = () => {
  const socialLinks = [
    { icon: TikTokIcon, href: personalInfo.social.tiktok, label: "TikTok", handle: "@codebyluke" },
    { icon: FacebookIcon, href: personalInfo.social.facebook, label: "Facebook", handle: "@codebyluke" },
    { icon: Send, href: personalInfo.social.telegram, label: "Telegram", handle: "@Luke_PlayZ" },
    { icon: Mail, href: `mailto:${personalInfo.emails.primary}`, label: "Email", handle: personalInfo.emails.primary },
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
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </a>
              ))}

              {/* Secondary email */}
              <a
                href={`mailto:${personalInfo.emails.secondary}`}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email (Personal)</p>
                  <p className="text-sm text-muted-foreground">{personalInfo.emails.secondary}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
