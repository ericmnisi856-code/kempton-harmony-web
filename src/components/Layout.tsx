import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
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
