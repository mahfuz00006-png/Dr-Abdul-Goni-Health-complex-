import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const sendToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const date = formData.get('date') as string;

    const message = `Hello Dr Abdul Goni Health Complex! 🏥\n\nI would like to book an appointment.\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🩺 *Service:* ${service}\n📅 *Date:* ${date}\n\nPlease confirm my slot.`;

    const whatsappNumber = "01704477055";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased">
      {/* 🚨 EMERGENCY BANNER (Sticky Top) */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm md:text-base font-bold sticky top-0 z-50 shadow-md flex flex-wrap justify-center gap-x-4">
        <div className="flex items-center">
          <i className="fa-solid fa-truck-medical mr-2 hover:animate-pulse"></i> 
          24/7 Emergency Care: <a href="tel:01704477055" className="underline decoration-white underline-offset-2 ml-1">Call 01704-477055</a>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-ambulance mr-2"></i>
          Ambulance: <a href="tel:999" className="underline decoration-white underline-offset-2 ml-1">Call 999</a>
        </div>
      </div>

      {/* 🏥 NAVBAR */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-[40px] z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-notes-medical text-blue-900 text-3xl"></i>
            <h1 className="font-heading font-bold text-xl md:text-2xl text-blue-900 leading-tight">
              Dr Abdul Goni<br/><span className="text-sm font-medium text-gray-500">Health Complex</span>
            </h1>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-900 transition">Services</a>
            <a href="#about" className="hover:text-blue-900 transition">About</a>
            <a href="#reviews" className="hover:text-blue-900 transition">Reviews</a>
          </nav>
          {/* CTA */}
          <a href="#book" className="hidden md:flex bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-lg">
            Book Appointment
          </a>
          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-blue-900 text-2xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 font-medium text-gray-600 border-t">
             <a href="#services" className="hover:text-blue-900 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
             <a href="#about" className="hover:text-blue-900 transition" onClick={() => setIsMenuOpen(false)}>About</a>
             <a href="#reviews" className="hover:text-blue-900 transition" onClick={() => setIsMenuOpen(false)}>Reviews</a>
             <a href="#book" className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-lg text-center" onClick={() => setIsMenuOpen(false)}>
               Book Appointment
             </a>
          </div>
        )}
      </header>

      {/* 🚀 HERO SECTION (CRO Focused) */}
      <section className="relative bg-blue-50 py-16 px-6 md:py-24 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            Expert Healthcare You Can Trust, Right Here.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Affordable, world-class medical support for your family. From specialized treatments to 24/7 emergency care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* WhatsApp CTA (Primary) */}
            <a href="https://wa.me/01704477055?text=Hello%20Dr%20Abdul%20Goni%20Health%20Complex,%20I%20need%20help." target="_blank" rel="noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2">
              <i className="fa-brands fa-whatsapp text-2xl"></i> Chat on WhatsApp
            </a>
            {/* Call CTA */}
            <a href="#book" className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2">
              <i className="fa-regular fa-calendar-check text-xl"></i> Book Online
            </a>
          </div>
          <p className="text-sm text-red-600 mt-4 font-medium animate-pulse">
            <i className="fa-solid fa-bolt"></i> Limited slots available for today. No waiting in line.
          </p>
        </div>
      </section>

      {/* 🛡️ TRUST BAR */}
      <section className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-700">
          <div className="py-2"><i className="fa-solid fa-user-doctor text-3xl mb-2 text-blue-300"></i><h3 className="font-heading font-bold text-xl">25+ Years</h3><p className="text-blue-200 text-sm">Medical Experience</p></div>
          <div className="py-2"><i className="fa-solid fa-certificate text-3xl mb-2 text-blue-300"></i><h3 className="font-heading font-bold text-xl">Certified Doctors</h3><p className="text-blue-200 text-sm">Govt. Registered</p></div>
          <div className="py-2"><i className="fa-solid fa-face-smile text-3xl mb-2 text-blue-300"></i><h3 className="font-heading font-bold text-xl">10,000+</h3><p className="text-blue-200 text-sm">Happy Patients</p></div>
        </div>
      </section>

      {/* 🩺 SERVICES SECTION */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Medical Services</h2>
          <p className="text-gray-600">Comprehensive healthcare solutions under one roof.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 text-2xl mb-4 group-hover:bg-blue-900 group-hover:text-white transition">
              <i className="fa-solid fa-stethoscope"></i>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">General Medicine</h3>
            <p className="text-gray-600 text-sm mb-4">Comprehensive check-ups and treatments for everyday health issues.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 text-2xl mb-4 group-hover:bg-blue-900 group-hover:text-white transition">
              <i className="fa-solid fa-microscope"></i>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Diagnostics</h3>
            <p className="text-gray-600 text-sm mb-4">Accurate, fast-delivered lab results with modern technology.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 text-2xl mb-4 group-hover:bg-blue-900 group-hover:text-white transition">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Specialized Care</h3>
            <p className="text-gray-600 text-sm mb-4">Expert treatments for chronic conditions and specialist consultations.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl mb-4 group-hover:bg-red-600 group-hover:text-white transition">
              <i className="fa-solid fa-kit-medical"></i>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Pharmacy</h3>
            <p className="text-gray-600 text-sm mb-4">In-house pharmacy stocked with genuine, affordable medicines.</p>
          </div>
        </div>
      </section>

      {/* 📅 SMART BOOKING SYSTEM (Form-to-WhatsApp Logic) */}
      <section id="book" className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side: Info */}
          <div className="bg-blue-900 text-white p-10 md:w-2/5 flex flex-col justify-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Skip the Line</h2>
            <p className="mb-8 text-blue-200">Book your appointment in under 60 seconds. Our staff will confirm your slot instantly via WhatsApp.</p>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-xl"></i> 
                <a href="https://maps.app.goo.gl/cqfx7nJpF5MVfS9R8" target="_blank" rel="noreferrer" className="hover:underline">Malibaag More, Bakshiganj, Jamalpur 2140</a>
              </p>
              <p className="flex items-center gap-3"><i className="fa-solid fa-clock text-xl"></i> Open 9:00 AM - 10:00 PM</p>
            </div>
          </div>
          {/* Right Side: Form */}
          <div className="p-10 md:w-3/5">
            <form id="bookingForm" onSubmit={sendToWhatsApp}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Patient's Name *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">WhatsApp Number *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition" placeholder="017XXXXXX" />
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="service">Service Needed</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 transition bg-white">
                    <option>Doctor Consultation</option>
                    <option>Blood Test / Lab</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" required min={minDate} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 transition" />
                </div>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-green-600 transition shadow-lg mt-4 flex justify-center items-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl"></i> Confirm via WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center mt-4"><i className="fa-solid fa-lock"></i> Your data is secure and will only be used for booking.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 💬 FLOATING WHATSAPP BUTTON (Global CRO) */}
      <a href="https://wa.me/01704477055" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50 animate-bounce">
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* 🗺️ MAP SECTION */}
      <section className="w-full h-64 md:h-96">
        <iframe 
          title="Dr Abdul Goni Health Complex Location"
          src="https://maps.google.com/maps?q=Malibaag+More,+Bakshiganj,+Jamalpur+2140&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-heading font-bold text-2xl mb-4">Dr Abdul Goni<br/>Health Complex</h3>
            <p className="text-sm">Providing trusted, affordable, and world-class healthcare to the community for over two decades.</p>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#book" className="hover:text-white transition">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li><i className="fa-solid fa-phone text-green-500 mr-2"></i> 01704-477055</li>
              <li><i className="fa-solid fa-truck-medical text-green-500 mr-2"></i> Ambulance: 999</li>
              <li><i className="fa-solid fa-envelope text-green-500 mr-2"></i> mithukh9@gmail.com</li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-map-pin text-green-500 mt-1"></i> 
                <a href="https://maps.app.goo.gl/cqfx7nJpF5MVfS9R8" target="_blank" rel="noreferrer" className="hover:text-white transition">Malibaag More, Bakshiganj, Jamalpur 2140</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Dr Abdul Goni Health Complex. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
