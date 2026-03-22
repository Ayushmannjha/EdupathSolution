import { Link } from 'react-router';
import {
  Target,
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  MapPin,
  Globe2,
  TrendingUp,
  CheckCircle,
  Users,
  ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const mainServices = [
    {
      icon: <Target className="size-20 text-orange-500" />,
      title: 'Career Counseling',
      description:
        'Personalized career guidance to help you identify your strengths, interests, and the best career path for your future success.',
      features: [
        'One-on-one counseling sessions',
        'Psychometric assessments',
        'Career path mapping',
        'Industry insights and trends',
        'Expert guidance from professionals',
      ],
      price: '₹5,000',
    },
    {
      icon: <GraduationCap className="size-20 text-orange-500" />,
      title: 'College Admission Assistance',
      description:
        'Complete support throughout the admission process from college selection to final enrollment in your dream institution.',
      features: [
        'Access to 500+ colleges database',
        'Application form assistance',
        'Document verification & submission',
        'Interview preparation',
        'Admission follow-up',
      ],
      price: '₹8,000',
    },
    {
      icon: <BookOpen className="size-20 text-orange-500" />,
      title: 'Entrance Exam Preparation',
      description:
        'Comprehensive coaching and study materials for various competitive entrance examinations including JEE, NEET, CAT, CLAT.',
      features: [
        'Expert faculty guidance',
        'Mock tests and practice papers',
        'Study material and resources',
        'Performance tracking',
        'Doubt clearing sessions',
      ],
      price: '₹15,000',
    },
    {
      icon: <Globe2 className="size-20 text-orange-500" />,
      title: 'Study Abroad Consultation',
      description:
        'Expert guidance for students planning to pursue higher education at top universities overseas in USA, UK, Canada, Australia.',
      features: [
        'University selection worldwide',
        'Visa application support',
        'IELTS/TOEFL preparation',
        'SOP and LOR writing',
        'Pre-departure briefing',
      ],
      price: '₹20,000',
    },
    {
      icon: <Award className="size-20 text-orange-500" />,
      title: 'Scholarship Guidance',
      description:
        'Assistance in identifying and applying for scholarships and financial aid programs to support your educational journey.',
      features: [
        'Scholarship database access',
        'Application support',
        'Essay and proposal writing',
        'Financial planning advice',
        'Merit scholarship guidance',
      ],
      price: '₹4,000',
    },
    {
      icon: <FileText className="size-20 text-orange-500" />,
      title: 'Documentation Support',
      description:
        'Complete assistance with all documentation requirements for college admissions, ensuring error-free submission.',
      features: [
        'Document preparation',
        'Form filling assistance',
        'Certificate verification',
        'Affidavit support',
        'Timeline management',
      ],
      price: '₹3,000',
    },
  ];

  const whyChooseUs = [
    'Expert counselors with 15+ years experience',
    'Personalized attention to each student',
    '95% success rate in admissions',
    'Partnerships with 500+ colleges',
    'Comprehensive support from start to finish',
    'Affordable and transparent pricing',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQwODQ5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive educational consultation services designed to help you achieve your academic goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-orange-500">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance and support for all your educational needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all p-8 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Key Features:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Starting from</span>
                    {/* <span className="text-2xl font-bold text-orange-500">{service.price}</span> */}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full bg-orange-500 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-500">Edupath Solutions?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We are committed to providing the best educational guidance to help students achieve their academic goals and career aspirations.
              </p>
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Learn More About Us <ArrowRight className="size-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Users className="size-16 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
                <div className="text-gray-600">Students Guided</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-8">
                <GraduationCap className="size-16 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Partner Colleges</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <TrendingUp className="size-16 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-8">
                <Award className="size-16 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation to discuss your educational goals and find the perfect service package for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            Book Free Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
}
