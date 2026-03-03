import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Sparkles, IceCream, Cake, Candy, Users, Award, Clock, Shield, Star } from 'lucide-react';
import axios from 'axios';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PHONE_NUMBERS = [
  { number: '9141882689', display: '+91 91418 82689' },
  { number: '8197204882', display: '+91 81972 04882' }
];

const HERO_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', alt: 'Elegant wedding celebration setup' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3', alt: 'Premium dessert counter display' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622', alt: 'Traditional Indian wedding decor' }
];

const UPLOADED_ASSETS = {
  beedaImage: 'https://customer-assets.emergentagent.com/job_2612c337-32e4-46ef-a78b-f615136bb17c/artifacts/2n2dendb_WhatsApp%20Image%202026-02-28%20at%206.28.31%20PM%20-%20Copy.jpeg',
  video1: 'https://customer-assets.emergentagent.com/job_2612c337-32e4-46ef-a78b-f615136bb17c/artifacts/v7dek4tp_WhatsApp%20Video%202026-02-28%20at%206.23.45%20PM.mp4',
  video2: 'https://customer-assets.emergentagent.com/job_2612c337-32e4-46ef-a78b-f615136bb17c/artifacts/z9l6wdcd_WhatsApp%20Video%202026-02-28%20at%206.24.27%20PM.mp4'
};

function App() {
  const [activeMenu, setActiveMenu] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event_type: '',
    event_date: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const menuCategories = {
    beeda: [
      'Sada Beeda', 'Sweet Beeda', 'Banaras Beeda', 'Calcutta Beeda',
      'Magai Beeda', 'Jodi Magai Beeda', 'Chocolate Beeda', 'Karjoora Beeda', 'Pan Shot'
    ],
    icecream: [
      'Vanilla', 'Strawberry', 'Butterscotch', 'Orange', 'Pineapple',
      'Custard Apple', 'Jackfruit', 'Mango', 'Chikoo', 'Chocolate',
      'Guava', 'Black Currant', 'Kiwi', 'Karjura', 'Pista',
      'Tutti Frutti', 'Anjoora', 'Badam', 'Dry Fruits', '2 in 1'
    ],
    kids: [
      'Popcorn', 'Cotton Candy', 'Ice Gola', 'Chocolate Fountain', 'Sweet Corn Masala'
    ],
    traditional: [
      'Khova', 'Khalakand', 'Paneer', 'Mushroom', 'Green Peas',
      'Sweet Corn', 'Baby Corn', 'Milk Cream', 'Cooking Butter',
      'Ghee', 'Milk Maid', 'French Fries'
    ]
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      await axios.post(`${API}/inquiries`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', event_type: '', event_date: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const handleWhatsApp = (number) => {
    window.open(`https://wa.me/91${number}?text=Hello! I would like to inquire about your event catering services.`, '_blank');
  };

  const handleCall = (number) => {
    window.location.href = `tel:+91${number}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="slideshow-container">
          {HERO_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={img.alt}
              className="slideshow-image"
            />
          ))}
        </div>
        
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base uppercase tracking-widest mb-6 text-[#D4AF37] font-medium">Darshan Lovely Events</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-none mb-6">
              Sweet Moments.<br />Beautiful Celebrations.
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/90">
              Premium Beeda & Dessert Counters for Weddings and Special Events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#contact"
                data-testid="hero-book-event-btn"
                className="bg-[#E35F26] text-white px-10 py-4 rounded-full font-medium hover:bg-[#c44e1e] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Your Event
              </a>
              <a
                href="#menu"
                data-testid="hero-explore-menu-btn"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-[#2D2420] transition-all duration-300"
              >
                View Our Menu
              </a>
            </div>
            <a
              href={`https://wa.me/919141882689?text=Hello! I would like to inquire about your event catering services.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-link"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm md:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: 9141882689</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#2D2420]">
              Tradition Meets Excellence
            </h2>
            <p className="text-base md:text-lg text-[#5C5552] leading-relaxed mb-6">
              At Darshan Lovely Events, we bring the warmth of traditional Indian celebrations to life. Every event is a canvas for creating beautiful memories, and we paint it with authentic flavors, hygienic preparation, and heartfelt service.
            </p>
            <p className="text-base md:text-lg text-[#5C5552] leading-relaxed">
              From the finest beeda varieties crafted with fresh ingredients to premium ice cream counters that delight every guest, we ensure your celebration is as sweet as the moments you share.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420]">
              Signature Experiences
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Sparkles, title: 'Royal Beeda Counter', desc: 'Traditional varieties crafted with authentic ingredients and heritage recipes.', color: '#2E5C38' },
              { icon: IceCream, title: 'Live Ice Cream Station', desc: 'Premium flavors served fresh with endless customization options.', color: '#E35F26' },
              { icon: Candy, title: 'Kids Special Corner', desc: 'Cotton candy, popcorn, and chocolate fountains to delight young guests.', color: '#D4AF37' },
              { icon: Cake, title: 'Fruit & Dessert Bar', desc: 'Fresh fruit salads and chocolate-dipped treats for elegant gatherings.', color: '#2E5C38' },
              { icon: Users, title: 'Welcome Drink Setup', desc: 'Traditional welcome beverages that set the perfect tone for your event.', color: '#E35F26' },
              { icon: Star, title: 'Custom Packages', desc: 'Tailored solutions for weddings, temple events, and celebrations.', color: '#D4AF37' }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                data-testid={`signature-experience-${idx}`}
                className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:shadow-lg group"
              >
                <exp.icon className="w-10 h-10 md:w-12 md:h-12 mb-4" style={{ color: exp.color, strokeWidth: 1.5 }} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-3 md:mb-4 text-[#2D2420]">{exp.title}</h3>
                <p className="text-sm md:text-base text-[#5C5552] leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">Explore Our Offerings</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420]">
              Complete Menu
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'beeda', label: 'Beeda Varieties' },
              { id: 'icecream', label: 'Ice Cream' },
              { id: 'kids', label: 'Kids Special' },
              { id: 'traditional', label: 'Traditional Items' }
            ].map((cat) => (
              <button
                key={cat.id}
                data-testid={`menu-category-${cat.id}`}
                onClick={() => setActiveMenu(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeMenu === cat.id
                    ? 'bg-[#E35F26] text-white shadow-md'
                    : 'bg-white text-[#2D2420] hover:bg-[#E35F26]/10 border border-[#D4AF37]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {Object.entries(menuCategories).map(([category, items]) => (
              (activeMenu === 'all' || activeMenu === category) && items.map((item, idx) => (
                <div
                  key={`${category}-${idx}`}
                  data-testid={`menu-item-${category}-${idx}`}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                >
                  <p className="text-sm md:text-base font-medium text-[#2D2420]">{item}</p>
                </div>
              ))
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">See Us In Action</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420]">
              Video Showcase
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              data-testid="video-showcase-1"
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <video controls className="w-full h-auto">
                <source src={UPLOADED_ASSETS.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              data-testid="video-showcase-2"
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <video controls className="w-full h-auto">
                <source src={UPLOADED_ASSETS.video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">Our Events</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420]">
              Gallery
            </h2>
          </motion.div>

          <div className="gallery-masonry">
            {[
              UPLOADED_ASSETS.beedaImage,
              'https://images.unsplash.com/photo-1760787517754-c73c7ee1f077',
              'https://images.unsplash.com/photo-1737218087115-eeda5a61dc47',
              'https://images.unsplash.com/photo-1698786039564-269353fef4b1',
              'https://images.unsplash.com/photo-1653075184239-c4970c3ad278',
              'https://images.unsplash.com/photo-1650419741906-1cdead9c9b4f',
              'https://images.unsplash.com/photo-1544718426-17dea2c0b7ca',
              'https://images.unsplash.com/photo-1711595434151-68da4f87c594'
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                data-testid={`gallery-image-${idx}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420]">
              Why Choose Darshan Lovely Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: 'Hygienic Preparation', desc: 'Strict quality standards and cleanliness protocols' },
              { icon: Award, title: 'Authentic Taste', desc: 'Traditional recipes passed down generations' },
              { icon: Users, title: 'Professional Setup', desc: 'Expert team ensuring flawless execution' },
              { icon: Clock, title: 'On-Time Service', desc: 'Punctual delivery for your special moments' }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                data-testid={`why-choose-${idx}`}
                className="text-center p-4 md:p-6"
              >
                <reason.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#E35F26]" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#2D2420]">{reason.title}</h3>
                <p className="text-xs md:text-sm text-[#5C5552] leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-[#5C5552] mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2D2420] mb-6">
              Book Your Celebration
            </h2>
            <p className="text-base md:text-lg text-[#5C5552] max-w-2xl mx-auto">
              Call now to plan your unforgettable event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-serif mb-6 text-[#2D2420]">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {PHONE_NUMBERS.map((phone, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#E35F26] flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-[#2D2420] mb-2">{phone.display}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleCall(phone.number)}
                          data-testid={`call-btn-${idx}`}
                          className="bg-[#E35F26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#c44e1e] transition-all"
                        >
                          Call Now
                        </button>
                        <button
                          onClick={() => handleWhatsApp(phone.number)}
                          data-testid={`whatsapp-btn-${idx}`}
                          className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-all flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif mb-6 text-[#2D2420]">Send Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  data-testid="contact-form-name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:border-[#E35F26] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  data-testid="contact-form-phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:border-[#E35F26] focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  data-testid="contact-form-event-type"
                  placeholder="Event Type (Wedding, Birthday, etc.)"
                  required
                  value={formData.event_type}
                  onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:border-[#E35F26] focus:outline-none transition-colors"
                />
                <input
                  type="date"
                  data-testid="contact-form-event-date"
                  required
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:border-[#E35F26] focus:outline-none transition-colors"
                />
                <textarea
                  data-testid="contact-form-message"
                  placeholder="Additional Details (Optional)"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:border-[#E35F26] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  data-testid="contact-form-submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-[#E35F26] text-white px-8 py-4 rounded-full font-medium hover:bg-[#c44e1e] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </button>
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center" data-testid="form-success-message">
                    <p className="text-green-700 font-medium">Thank you! We'll contact you soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center" data-testid="form-error-message">
                    <p className="text-red-700 font-medium">Something went wrong. Please try again.</p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2420] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-serif mb-3">Darshan Lovely Events</h3>
            <p className="text-sm text-gray-400 mb-6">Making Every Celebration Memorable</p>
            <div className="h-px w-24 bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Darshan Lovely Events. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => handleWhatsApp(PHONE_NUMBERS[0].number)}
        data-testid="floating-whatsapp-btn"
        className="whatsapp-float bg-[#25D366] text-white p-4 rounded-full transition-all"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;