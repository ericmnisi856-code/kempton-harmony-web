import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const sheenY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 15%, rgba(16,185,129,0.22), transparent 55%), radial-gradient(circle at 85% 30%, rgba(59,130,246,0.18), transparent 52%), radial-gradient(circle at 45% 85%, rgba(20,184,166,0.18), transparent 56%), linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "auto, auto, auto, 44px 44px, 44px 44px",
            backgroundPosition: "center, center, center, center, center",
          }}
        />
        <motion.div
          className="absolute inset-[-20%] opacity-[0.12]"
          style={{
            y: sheenY,
            background:
              "linear-gradient(110deg, rgba(255,255,255,0.0) 20%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.0) 70%)",
          }}
        />
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.18), transparent 60%)" }}
          animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 -right-48 h-[620px] w-[620px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 70% 40%, rgba(59,130,246,0.14), transparent 62%)" }}
          animate={{ x: [0, -90, 0], y: [0, 40, 0], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-56 left-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 40% 70%, rgba(20,184,166,0.14), transparent 60%)" }}
          animate={{ x: [0, 70, 0], y: [0, -55, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.14), transparent 35%, rgba(255,255,255,0.10))" }}
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <Navbar />
      <main className="flex-1 relative">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
