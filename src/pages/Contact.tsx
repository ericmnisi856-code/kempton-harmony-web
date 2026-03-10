import { Phone, MapPin, Clock, Mail, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Shop 90, Kempton Square Shopping Centre, Cnr Voortrekker Road and Wolffe Street, Kempton Park" },
  { icon: Phone, label: "Phone", value: "011 394 0309", href: "tel:0113940309" },
  { icon: Phone, label: "WhatsApp", value: "066 259 8261", href: "https://wa.me/27662598261" },
  { icon: Mail, label: "Email", value: "kemptonpharm@gmail.com", href: "mailto:kemptonpharm@gmail.com" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
  { day: "Sunday", time: "8:00 AM – 2:00 PM" },
  { day: "Public Holidays", time: "8:00 AM – 2:00 PM" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! My name is ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    window.open(`https://wa.me/27662598261?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 sm:py-32 gradient-hero">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-herb text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-2 mb-4" style={{ color: "white" }}>
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              We'd love to hear from you. Reach out for enquiries, orders, or just to say hello.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Reach Us</h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Opening Hours */}
                <div className="mt-8">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-primary" /> Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="text-foreground font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      <Send size={16} />
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4!2d28.2292!3d-26.1025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzA5LjAiUyAyOMKwMTMnNDUuMSJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kempton Place Pharmacy Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
