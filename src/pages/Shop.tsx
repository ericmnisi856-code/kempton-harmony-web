import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, ArrowRight, Leaf, Pill, Heart, Droplets, Baby, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";

import productMpesu from "@/assets/product-mpesu.jpg";
import productJoints from "@/assets/product-joints.jpg";
import productAllergy from "@/assets/product-allergy.jpg";
import productGut from "@/assets/product-gut.jpg";
import productLibido from "@/assets/product-libido.jpg";
import productSlimming from "@/assets/product-slimming.jpg";
import productWater from "@/assets/product-water.jpg";
import productDetox from "@/assets/product-detox.jpg";
import productVitamin from "@/assets/product-vitamin.jpg";
import productGoodlife from "@/assets/product-goodlife.jpg";
import productNappies from "@/assets/product-nappies.jpg";
import productCancerbush from "@/assets/product-cancerbush.jpg";

const categories = [
  { name: "All", icon: Star },
  { name: "Herbal Remedies", icon: Leaf },
  { name: "OTC Medicines", icon: Pill },
  { name: "Supplements", icon: Heart },
  { name: "Beverages", icon: Droplets },
  { name: "Baby Care", icon: Baby },
];

const products = [
  { id: 1, name: "Mega Mpesu Original", category: "Herbal Remedies", price: 189, desc: "Traditional vitality booster for men's health.", badge: "Bestseller", image: productMpesu },
  { id: 2, name: "Joints & Bones Tonic", category: "Herbal Remedies", price: 159, desc: "Natural support for joint mobility and bone health.", image: productJoints },
  { id: 3, name: "Allergy Survival Pack", category: "OTC Medicines", price: 249, desc: "Complete allergy relief kit with natural antihistamines.", badge: "Popular", image: productAllergy },
  { id: 4, name: "Gut Health Survival Pack", category: "OTC Medicines", price: 229, desc: "Comprehensive gut and urinary health support.", image: productGut },
  { id: 5, name: "Venda Libido Booster", category: "Herbal Remedies", price: 169, desc: "Traditional herbal formula for enhanced vitality.", image: productLibido },
  { id: 6, name: "Fat Off Slimming Tonic", category: "Herbal Remedies", price: 139, desc: "Natural weight management support tonic.", image: productSlimming },
  { id: 7, name: "Alkaline Water 5L", category: "Beverages", price: 45, desc: "Premium high pH alkaline water for optimal hydration.", image: productWater },
  { id: 8, name: "Detox Herbal Mixture", category: "Herbal Remedies", price: 119, desc: "Full-body cleansing and detoxification blend.", image: productDetox },
  { id: 9, name: "Re-Joovena Vitamin Mix", category: "Supplements", price: 199, desc: "Multi-vitamin complex for daily wellness.", image: productVitamin },
  { id: 10, name: "GoodLife Herbal Tonic", category: "Herbal Remedies", price: 149, desc: "All-purpose herbal wellness tonic.", image: productGoodlife },
  { id: 11, name: "KissKids Nappies", category: "Baby Care", price: 89, desc: "Soft, absorbent nappies for your little one.", image: productNappies },
  { id: 12, name: "Cancerbush Tea", category: "Herbal Remedies", price: 79, desc: "Premium Sutherlandia tea, chemical & pesticide free.", image: productCancerbush },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (product: typeof products[0]) => {
    const msg = encodeURIComponent(`Hi! I'd like to order: ${product.name} (R${product.price})`);
    window.open(`https://wa.me/27662598261?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 sm:py-32 gradient-hero">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="text-herb text-sm font-semibold uppercase tracking-wider">Online Store</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mt-2 mb-4" style={{ color: "white" }}>
              Shop Our Products
            </h1>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Browse and order our curated selection of health products. Order via WhatsApp for fast delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Search */}
          <ScrollReveal>
            <div className="max-w-md mx-auto mb-10 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
          </ScrollReveal>

          {/* Categories */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === cat.name
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-card hover-lift rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-herb text-herb-foreground text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                    <h3 className="font-display font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">R{product.price}</span>
                      <button
                        onClick={() => handleWhatsAppOrder(product)}
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        <ShoppingCart size={14} />
                        Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found. Try a different search or category.</p>
            </div>
          )}

          {/* Info banner */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl gradient-primary p-8 sm:p-12 text-center">
              <h3 className="text-2xl font-display font-bold mb-3" style={{ color: "white" }}>
                How to Order
              </h3>
              <p className="max-w-xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>
                Click "Order" on any product to place your order via WhatsApp. We'll confirm availability and arrange delivery or collection at our Kempton Square store.
              </p>
              <a
                href="https://wa.me/27662598261"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-card text-foreground font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Chat With Us <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
