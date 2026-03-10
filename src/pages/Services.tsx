import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pill, Leaf, Heart, Shield, Baby, Droplets, ArrowRight, MessageCircle, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";

import servicePresImg from "@/assets/service-prescription.jpg";
import serviceOtcImg from "@/assets/service-otc.jpg";
import serviceChronicImg from "@/assets/service-chronic.jpg";
import serviceVitaminsImg from "@/assets/service-vitamins.jpg";
import serviceHerbalImg from "@/assets/service-herbal.jpg";
import serviceBabyImg from "@/assets/service-baby.jpg";
import serviceWellnessImg from "@/assets/service-wellness.jpg";

import presDispensingImg from "@/assets/gallery/WhatsApp Image 2026-03-09 at 11.30.30 AM (1).jpeg";
import chronicSupportImg from "@/assets/gallery/WhatsApp Image 2026-03-09 at 11.30.30 AM (3).jpeg";
import wellnessAdviceImg from "@/assets/gallery/WhatsApp Image 2026-03-09 at 11.30.32 AM (1).jpeg";

import servicesHeroBg from "@/assets/gallery/WhatsApp Image 2026-03-09 at 11.30.30 AM (2).jpeg";

const services = [
  {
    icon: Pill,
    title: "Prescription Dispensing",
    desc: "Professional dispensing of chronic and acute prescriptions with expert pharmacist oversight and medical aid processing.",
    features: ["Chronic medication management", "Acute prescriptions", "Generic alternatives advice", "Medical aid processing"],
    image: presDispensingImg,
  },
  {
    icon: Shield,
    title: "Over-the-Counter Medication",
    desc: "A comprehensive range of OTC medication for everyday health needs, available without a prescription.",
    features: ["Pain relief", "Cold & flu remedies", "Allergy medication", "First aid supplies"],
    image: serviceOtcImg,
  },
  {
    icon: RefreshCw,
    title: "Chronic Medication Support",
    desc: "Convenient management of chronic medication with repeat prescription services and professional counselling.",
    features: ["Chronic medication dispensing", "Medical aid prescription processing", "Repeat prescription management", "Professional medication counselling"],
    image: chronicSupportImg,
  },
  {
    icon: Heart,
    title: "Vitamins & Supplements",
    desc: "Premium vitamins, minerals, and nutritional supplements to support your health at every stage of life.",
    features: ["Multivitamins", "Minerals & trace elements", "Nutritional supplements", "Immune boosters"],
    image: serviceVitaminsImg,
  },
  {
    icon: Leaf,
    title: "Homeopathic Remedies",
    desc: "Natural and homeopathic solutions for holistic health and wellness needs.",
    features: ["Herbal remedies", "Natural health products", "Traditional solutions", "Wellness tonics"],
    image: serviceHerbalImg,
  },
  {
    icon: Baby,
    title: "Mother & Baby Products",
    desc: "Complete range of mother and baby care products from feeding essentials to hygiene and skincare.",
    features: ["Baby hygiene products", "Feeding essentials", "Maternity care", "Pediatric supplements"],
    image: serviceBabyImg,
  },
  {
    icon: Droplets,
    title: "Health & Wellness Advice",
    desc: "Our knowledgeable team provides personalized health and wellness guidance on a range of topics.",
    features: ["Cold & flu prevention", "Healthy living & nutrition", "Managing chronic conditions", "Vitamins & supplements guidance"],
    image: wellnessAdviceImg,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 gradient-hero">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={servicesHeroBg}
            alt="Services hero background"
            className="absolute inset-0 h-full w-full object-cover"
            animate={{ scale: [1.05, 1.12, 1.05], x: [0, -18, 0], y: [0, 10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="text-herb text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-2 mb-4" style={{ color: "white" }}>
              Our Services
            </h1>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              We provide a wide range of pharmaceutical and wellness services. Our knowledgeable team is always ready to assist with expert guidance and care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`grid lg:grid-cols-5 gap-8 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={`lg:col-span-3 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <s.icon size={22} className="text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-herb shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:col-span-2 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Health Tips */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Stay Informed</span>
              <h2 className="text-3xl font-display font-bold mt-2 mb-4 text-foreground">Health Tips & Wellness</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe that good health starts with the right information. Our pharmacy regularly shares useful health advice on topics such as cold and flu prevention, healthy living and nutrition, managing chronic conditions, mother and baby care, and vitamins and supplements.
              </p>
              <p className="text-foreground font-medium">Stay informed and take proactive steps towards better health.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Need Expert Advice?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team is ready to help. Visit us or reach out via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27662598261"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
