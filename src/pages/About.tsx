import { Link } from "react-router-dom";
import { Heart, Award, Users, Leaf, ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import storefrontImg from "@/assets/gallery-storefront-2.png";
import interiorVideo from "@/assets/WhatsApp Video 2026-03-06 at 11.15.35 AM.mp4";

const values = [
  { icon: Heart, title: "Community First", desc: "Proudly serving the Kempton Park and greater Tembisa communities since 2013." },
  { icon: Award, title: "Professional Care", desc: "Qualified pharmacy professionals providing trusted advice and ethical healthcare." },
  { icon: Leaf, title: "Affordable Healthcare", desc: "Quality healthcare products and services at accessible prices for all." },
  { icon: Users, title: "Personalized Guidance", desc: "Every customer receives personalized care and professional guidance from our team." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <img src={storefrontImg} alt="Storefront" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="text-herb text-sm font-semibold uppercase tracking-wider">Our Story</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-2 mb-4" style={{ color: "white" }}>
              About Kempton Place Pharmacy
            </h1>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Your trusted partner in quality healthcare since 2013.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <video
                src={interiorVideo}
                className="rounded-2xl shadow-2xl w-full"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-display font-bold mb-5 text-foreground">Established in 2013</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kempton Place Pharmacy was established in 2013 with the goal of providing accessible, 
                  reliable, and professional pharmaceutical care to the Kempton Park and Tembisa communities.
                </p>
                <p>
                  Over the years we have built a reputation for trusted advice, friendly service, and 
                  affordable healthcare solutions. Our pharmacy strives to ensure that every customer 
                  receives personalized care and professional guidance.
                </p>
                <p>
                  Located in the heart of Kempton Park and proudly serving the greater Tembisa community, 
                  we are committed to providing ethical, professional, and affordable healthcare to all our customers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="glass-card hover-lift rounded-2xl p-7 flex gap-5 h-full">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <v.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-5 text-foreground">Community Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kempton Place Pharmacy is proud to serve the Kempton Park and greater Tembisa communities. 
                Our mission is not only to dispense medication but to support the wellbeing of the families 
                and individuals who rely on us for trusted healthcare advice and services.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold mb-4" style={{ color: "white" }}>Visit Us Today</h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              Whether you need a prescription filled, healthcare advice, or everyday wellness products, our team is here to help.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-card text-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get Directions <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
