import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold">Kempton Place Pharmacy</div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner in quality healthcare since 2013. Proudly serving Kempton Park and the greater Tembisa community.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Shop", path: "/shop" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="hover:opacity-100 transition-opacity">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li>Prescription Dispensing</li>
              <li>Over-the-Counter Medication</li>
              <li>Chronic Medication Support</li>
              <li>Vitamins & Supplements</li>
              <li>Homeopathic Remedies</li>
              <li>Mother & Baby Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Shop 90, Kempton Square, Cnr Voortrekker Rd & Wolffe St, Kempton Park
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                011 394 0309
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                066 259 8261
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                Mon–Fri 8am–6pm · Sat–Sun 8am–2pm
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                kemptonpharm@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Kempton Place Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
