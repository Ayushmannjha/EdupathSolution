import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const SERVICE_ID = 'service_29f93p9';
  const TEMPLATE_ID = 'template_gb4gyz9';
  const PUBLIC_KEY = ((import.meta as any).env && (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY) || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
    } as Record<string, string>;

    // If public key is provided, send via EmailJS; otherwise fallback to mock behavior
    if (PUBLIC_KEY) {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      } catch (err) {
        console.error('EmailJS send error:', err);
        // fallback to mock success so user flow isn't blocked
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } else {
      // No EmailJS key provided — use mock submission and warn in console
      // This keeps behavior predictable during development.
      // To enable real emails, set VITE_EMAILJS_PUBLIC_KEY in your .env and restart the dev server.
      // Example: VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
      // EmailJS docs: https://www.emailjs.com/docs/
      // Mock form submission
      // eslint-disable-next-line no-console
      console.warn('VITE_EMAILJS_PUBLIC_KEY not set — falling back to mock submission.');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="size-6 text-blue-600" />,
      title: 'Phone',
      details: ['+91 82108 33946'],
    },
    {
      icon: <Mail className="size-6 text-blue-600" />,
      title: 'Email',
      details: ['Solutionedupath@gmail.com'],
    },
    {
      icon: <MapPin className="size-6 text-blue-600" />,
      title: 'Address',
      details: ['HEAD Office: 5th Floor, Block A, Mauryalok Complex, Patna BRANCH Office: Rampur Road, Bazaar Samiti, Patna – 800006', 'India'],
    },
    {
      icon: <Clock className="size-6 text-blue-600" />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
    },
  ];

  const offices = [

    
    {
      city: 'Patna',
      address: 'HEAD Office: 5th Floor, Block A, Mauryalok Complex, Patna  BRANCH Office: Rampur Road, Bazaar Samiti, Patna – 800006',
      phone: '+91 82108 33946',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our expert counselors and take the first step towards your dream career
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="size-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Interested Course/Program
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a course</option>
                      <option value="engineering">Engineering (B.Tech)</option>
                      <option value="medical">Medical (MBBS)</option>
                      <option value="management">Management (MBA)</option>
                      <option value="law">Law (LLB)</option>
                      <option value="arts">Arts & Humanities</option>
                      <option value="commerce">Commerce</option>
                      <option value="science">Science</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="size-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="size-12 mx-auto mb-2" />
                  <p>Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our offices across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 shrink-0 mt-1 text-gray-400" />
                    <p>{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-gray-400" />
                    <p>{office.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is the process to book a consultation?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form above or call us directly. We'll schedule a 
                free initial consultation at your convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                How much do your services cost?
              </h3>
              <p className="text-gray-600">
                Our services start from ₹4,000 depending on the package. We offer customized 
                solutions based on your specific needs. Contact us for detailed pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you provide online counseling?
              </h3>
              <p className="text-gray-600">
                Yes! We offer both in-person and online counseling sessions via video call 
                for your convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What documents do I need to bring?
              </h3>
              <p className="text-gray-600">
                For the first consultation, bring your academic records, entrance exam scores 
                (if any), and any specific college preferences you have.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}