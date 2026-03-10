import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";

type GalleryItem = {
  src: string;
  title: string;
  category: "exterior" | "interior" | "products";
};

const fileNameToTitle = (filePath: string) => {
  const fileName = filePath.split("/").pop() ?? filePath;
  return decodeURIComponent(fileName)
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/^WhatsApp Image\s*/i, "")
    .replace(/\s*\(\d+\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const categories = ["all", "exterior", "interior", "products"] as const;

const indexToCategory = (index: number): GalleryItem["category"] => {
  const n = index % 3;
  if (n === 0) return "exterior";
  if (n === 1) return "interior";
  return "products";
};

const galleryItems: GalleryItem[] = Object.entries(
  import.meta.glob<string>("../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => ({
    src,
    title: fileNameToTitle(path),
    category: indexToCategory(index),
  }));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };
  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

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
            src={galleryItems[0]?.src}
            alt="Gallery hero background"
            className="absolute inset-0 h-full w-full object-cover"
            animate={{ scale: [1.05, 1.12, 1.05], x: [0, -18, 0], y: [0, 10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.35), transparent 60%)" }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.32), transparent 62%)" }}
            animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 opacity-35"
            style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.10), transparent 35%, rgba(255,255,255,0.08))" }}
            animate={{ x: ["-20%", "20%", "-20%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="text-herb text-sm font-semibold uppercase tracking-wider">Take a Look</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-2 mb-4" style={{ color: "white" }}>
              Our Gallery
            </h1>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Explore moments from Kempton Place Pharmacy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, y: 26, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.2), ease: "easeOut" }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <p className="font-display font-semibold text-lg" style={{ color: "white" }}>{item.title || "Gallery"}</p>
                      <span className="text-sm capitalize" style={{ color: "rgba(255,255,255,0.7)" }}>{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
              style={{ color: "white" }}
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
              style={{ color: "white" }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
              style={{ color: "white" }}
            >
              <ChevronRight size={28} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center" style={{ color: "white" }}>
              <p className="font-display text-lg font-semibold">{filtered[lightboxIndex].title}</p>
              <p className="text-sm opacity-70">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
