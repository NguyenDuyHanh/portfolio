import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { ScrollReveal, StaggerContainer, StaggerItem, buttonHoverProps } from "../../../animations";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@NguyenDuyHanh",
    url: "https://github.com/NguyenDuyHanh",
    icon: FaGithub,
    color: "text-foreground",
    hoverBorder: "hover:border-border-hover",
  },
  {
    name: "Facebook",
    handle: "@NguyenDuyHanh",
    url: "https://www.facebook.com/share/1ASxDcgsKX/?mibextid=wwXIfr",
    icon: FaFacebook,
    color: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]",
  },
  {
    name: "Instagram",
    handle: "@_ndh_204",
    url: "https://www.instagram.com/_ndh_204?igsh=djBxbGNoajl5ejJo&utm_source=qr",
    icon: FaInstagram,
    color: "text-[#E4405F]",
    hoverBorder: "hover:border-[#E4405F]",
  },
  {
    name: "LinkedIn",
    handle: "@NguyenDuyHanh",
    url: "https://www.linkedin.com/in/hanh-nguy%E1%BB%85n-21781733b/",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Follow me on social media or drop me a message — I'd love to collaborate and share creative ideas!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Social Networks Grid */}
          <ScrollReveal className="p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Social Networks
            </h3>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <StaggerItem
                    key={index}
                    hoverLift={-4}
                    className="block"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl border border-border bg-muted/50 flex items-center gap-4 transition-all duration-300 ${social.hoverBorder}`}
                    >
                      <div className="p-2.5 rounded-xl bg-card shadow-xs flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-sm font-bold text-foreground truncate">
                          {social.name}
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          {social.handle}
                        </span>
                      </div>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          {/* Right Column: Send a Message Form */}
          <ScrollReveal delay={0.15} className="p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-foreground">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Thank you for reaching out. I will get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-muted/50 text-sm text-foreground focus:outline-none focus:border-border-hover transition-all resize-none"
                  />
                </div>

                <motion.button
                  {...buttonHoverProps}
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
