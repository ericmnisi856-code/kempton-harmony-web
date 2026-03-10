import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Pill, Heart, Shield, Users, Star, ArrowRight, Clock, MapPin, Phone, MessageCircle, CheckCircle, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import heroImg from "@/assets/gallery-storefront-1.png";
import interiorImg from "@/assets/gallery-interior-2.jpg";
import herbalImg from "@/assets/gallery-herbal.jpg";

const services = [
  { icon: Pill, title: "Prescription Dispensing", desc: "Professional dispensing of chronic and acute prescriptions with expert pharmacist oversight." },
  { icon: Leaf, title: "Homeopathic Remedies", desc: "Natural and homeopathic solutions for holistic health and wellness." },
  { icon: Heart, title: "Health & Wellness Advice", desc: "Personalized guidance from our knowledgeable pharmacy team." },
  { icon: Shield, title: "Chronic Medication Support", desc: "Convenient management of chronic medication and repeat prescriptions." },
  { icon: Users, title: "Mother & Baby Products", desc: "Complete range of mother and baby care essentials." },
  { icon: Star, title: "Vitamins & Supplements", desc: "Premium vitamins, minerals, and nutritional supplements for every need." },
];

const whyChooseUs = [
  { title: "Trusted Since 2013", desc: "Serving the community with reliable healthcare services." },
  { title: "Professional Advice", desc: "Qualified pharmacy professionals you can trust." },
  { title: "Affordable Healthcare", desc: "Quality healthcare products at accessible prices." },
  { title: "Friendly Service", desc: "A welcoming team ready to assist you." },
  { title: "Convenient Location", desc: "Easily accessible in Kempton Park." },
];

const testimonials = [
  { text: "Friendly staff and excellent service.", author: "Satisfied Customer" },
  { text: "Professional pharmacy with helpful advice.", author: "Loyal Patient" },
  { text: "Kempton Place Pharmacy has been our family pharmacy for years.", author: "Community Member" },
];

const prescriptionSteps = [
  { step: "1", title: "Send Your Prescription", desc: "Send your prescription via WhatsApp or email." },
  { step: "2", title: "We Prepare Your Medication", desc: "Our pharmacist prepares your medication with care." },
  { step: "3", title: "Collect When Ready", desc: "We notify you when it is ready for collection." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kempton Place Pharmacy storefront" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-herb/20 text-herb text-sm font-medium mb-6 border border-herb/30">
                🌿 Your Trusted Partner Since 2013
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              style={{ color: "white" }}
            >
              Kempton Place{" "}
              <span className="text-herb">Pharmacy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Your trusted partner in quality healthcare. Located in the heart of Kempton Park and proudly serving the greater Tembisa community, we are committed to providing ethical, professional, and affordable healthcare to all.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/27662598261?text=Hi%2C%20I%27d%20like%20to%20fill%20a%20prescription."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Fill a Prescription <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 font-semibold hover:bg-primary-foreground/10 transition-colors"
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
              <a
                href="https://maps.google.com/?q=Shop+90+Kempton+Square+Kempton+Park"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
                style={{ color: "white" }}
              >
                <MapPin size={18} /> Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-4 text-foreground">
                Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide a wide range of pharmaceutical and wellness services. Our knowledgeable team is always ready to assist with expert guidance and care.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1} direction="scale">
                <div className="glass-card hover-lift rounded-2xl p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={interiorImg}
                  alt="Inside Kempton Place Pharmacy"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center animate-float">
                  <Leaf size={36} className="text-primary-foreground" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-5 text-foreground">
                Serving Our Community Since 2013
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kempton Place Pharmacy was established in 2013 with the goal of providing accessible, reliable, and professional pharmaceutical care to the Kempton Park and Tembisa communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the years we have built a reputation for trusted advice, friendly service, and affordable healthcare solutions. Our pharmacy strives to ensure that every customer receives personalized care and professional guidance.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prescription Refill & WhatsApp Orders */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Convenience</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-4 text-foreground">
                Prescription Refill & WhatsApp Orders
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For your convenience, send prescriptions via WhatsApp or email. This service saves you time and makes your pharmacy experience more convenient.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {prescriptionSteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.15}>
                <div className="text-center glass-card rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 text-primary-foreground font-display text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <a
                href="https://wa.me/27662598261?text=Hi%2C%20I%27d%20like%20to%20send%20my%20prescription."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} /> Send Prescription via WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4" style={{ color: "white" }}>
                Why Choose Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl flex items-start gap-4" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                  <CheckCircle size={22} className="text-herb shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1" style={{ color: "white" }}>{item.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.8)" }} className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-4 text-foreground">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground">We value the trust our community has placed in us.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-7 h-full relative">
                  <Quote size={28} className="text-primary/20 mb-3" />
                  <p className="text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="text-sm text-muted-foreground font-medium">— {t.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Community</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-5 text-foreground">
                Community Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kempton Place Pharmacy is proud to serve the Kempton Park and greater Tembisa communities. Our mission is not only to dispense medication but to support the wellbeing of the families and individuals who rely on us for trusted healthcare advice and services.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground">
                Visit Kempton Place Pharmacy Today
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need a prescription filled, healthcare advice, or everyday wellness products, our team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/27662598261?text=Hi%2C%20I%27d%20like%20to%20fill%20a%20prescription."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Fill a Prescription <ArrowRight size={18} />
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
