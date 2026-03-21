import { Link } from 'react-router';
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  FileText,
  TrendingUp,
  Globe2,
  Building2,
  Briefcase
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const topColleges = [
    {
      name: 'Indian Institute of Technology (IIT)',
      location: 'Multiple Locations',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNvbGxlZ2UlMjBidWlsZGluZyUyMGluZGlhfGVufDF8fHx8MTc3NDA3OTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'All India Institute of Medical Sciences (AIIMS)',
      location: 'Multiple Locations',
      image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3Mzk5NjcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Indian Institute of Management (IIM)',
      location: 'Multiple Locations',
      image: 'https://images.unsplash.com/photo-1770115499876-b2c8e2f6b050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNjaG9vbCUyMGNhbXB1cyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDA3OTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'National Institute of Technology (NIT)',
      location: 'Multiple Locations',
      image: 'https://images.unsplash.com/photo-1637433496890-ee4eb1aecf4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc0MDAyMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    {
      icon: <Target className="size-16 text-orange-500" />,
      title: 'Career Counseling',
      description: 'Expert guidance to help you discover the right career path based on your interests, skills, and aspirations.',
    },
    {
      icon: <GraduationCap className="size-16 text-orange-500" />,
      title: 'College Admission',
      description: 'Complete assistance in the admission process from application to enrollment in your dream college.',
    },
    {
      icon: <FileText className="size-16 text-orange-500" />,
      title: 'Documentation Help',
      description: 'Get help with all documentation, form filling, and paperwork required for college admissions.',
    },
    {
      icon: <BookOpen className="size-16 text-orange-500" />,
      title: 'Entrance Exam Coaching',
      description: 'Comprehensive coaching for JEE, NEET, CAT, CLAT and other competitive entrance examinations.',
    },
    {
      icon: <Globe2 className="size-16 text-orange-500" />,
      title: 'Study Abroad',
      description: 'Expert consultation for students planning to pursue higher education in foreign universities.',
    },
    {
      icon: <Award className="size-16 text-orange-500" />,
      title: 'Scholarship Guidance',
      description: 'Find and apply for scholarships and financial aid to support your educational journey.',
    },
  ];

  const courses = [
    { name: 'Engineering (B.Tech)', icon: <Building2 className="size-8" /> },
    { name: 'Medical (MBBS/BDS)', icon: <Award className="size-8" /> },
    { name: 'Management (MBA/BBA)', icon: <Briefcase className="size-8" /> },
    { name: 'Law (LLB)', icon: <FileText className="size-8" /> },
    { name: 'Arts & Humanities', icon: <BookOpen className="size-8" /> },
    { name: 'Commerce', icon: <TrendingUp className="size-8" /> },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      college: 'IIT Delhi',
      course: 'B.Tech Computer Science',
      text: 'EduCare made my dream of getting into IIT a reality. Their guidance was invaluable throughout my preparation journey.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      college: 'AIIMS Mumbai',
      course: 'MBBS',
      text: 'The counselors at EduCare are extremely knowledgeable and supportive. They helped me at every step of the admission process.',
      rating: 5,
    },
    {
      name: 'Aditya Singh',
      college: 'IIM Bangalore',
      course: 'MBA',
      text: 'From entrance exam prep to final admission, EduCare was with me throughout. Highly recommended for aspiring students.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwZ3JvdXAlMjBlZHVjYXRpb258ZW58MXx8fHwxNzc0MDg0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6">
            Shape Your Future with <br />
            <span className="text-orange-500">Right Education</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Expert Guidance for College Admissions, Career Counseling & Entrance Exam Preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-1">5000+</div>
              <div className="text-sm opacity-90">Students Counseled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-90">Partner Colleges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-orange-500">EduCare Consultancy</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are one of India's leading educational consultancy services, dedicated to helping students 
                achieve their academic and career goals. With over 15 years of experience, we have successfully 
                guided thousands of students to their dream colleges and universities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of expert counselors provides personalized guidance for college selection, entrance 
                exam preparation, documentation, and career planning. We understand that every student is unique, 
                and we tailor our services to meet individual needs and aspirations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">Personalized Career Counseling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">Expert Admission Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">Entrance Exam Preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">Scholarship Assistance</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716337563114-365568c4db60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdyYWR1YXRlJTIwc3R1ZGVudCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzc0MDg0OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduate student"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594754276102-d37d31af0d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY291bnNlbG9yJTIwZ3VpZGFuY2V8ZW58MXx8fHwxNzc0MDg0OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Counseling session"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational consultation services to guide you at every step
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-orange-500">Courses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide guidance for all major courses and programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-500 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Colleges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top <span className="text-orange-500">Colleges</span> We Cover
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get admission guidance for India's premier educational institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topColleges.map((college, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48">
                  <ImageWithFallback
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {college.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="size-4" />
                    <span>{college.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-orange-500">Students Say</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Success stories from students who achieved their dreams with our guidance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-orange-500">{testimonial.college}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl mb-8">
            Book a free consultation with our expert counselors today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone className="size-5" />
              Call Now: +91 98765 43210
            </Link>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Mail className="size-5" />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
