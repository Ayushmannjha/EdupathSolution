import { Link } from 'react-router';
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const stats = [
    { number: '9+', label: 'Years of Excellence', icon: <Award className="size-8" /> },
    { number: '5000+', label: 'Students Guided', icon: <Users className="size-8" /> },
    { number: '500+', label: 'Partner Colleges', icon: <Target className="size-8" /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="size-8" /> },
  ];

  const values = [
    {
      icon: <Shield className="size-12 text-orange-500" />,
      title: 'Integrity',
      description:
        'We maintain the highest standards of honesty and transparency in all our interactions with students and parents.',
    },
    {
      icon: <Heart className="size-12 text-orange-500" />,
      title: 'Student-Centric',
      description:
        'Every decision we make is focused on what is best for our students and their future success.',
    },
    {
      icon: <Lightbulb className="size-12 text-orange-500" />,
      title: 'Innovation',
      description:
        'We continuously update our methods and tools to provide the best and most relevant guidance possible.',
    },
    {
      icon: <Award className="size-12 text-orange-500" />,
      title: 'Excellence',
      description:
        'We strive for excellence in every aspect of our service delivery and student support.',
    },
  ];

  // const team = [
  //   {
  //     name: 'Dr. Rajesh Kumar',
  //     role: 'Founder & CEO',
  //     qualification: 'Ph.D. in Education',
  //     experience: '20+ years',
  //   },
  //   {
  //     name: 'Priya Menon',
  //     role: 'Head of Counseling',
  //     qualification: 'M.A. in Psychology',
  //     experience: '15+ years',
  //   },
  //   {
  //     name: 'Amit Sharma',
  //     role: 'Career Consultant',
  //     qualification: 'MBA, Career Coach',
  //     experience: '12+ years',
  //   },
  //   {
  //     name: 'Sneha Desai',
  //     role: 'Study Abroad Specialist',
  //     qualification: 'M.Ed., International Education',
  //     experience: '10+ years',
  //   },
  // ];

  const achievements = [
    '5000+ students successfully placed',
    'Partnerships with top 500 colleges',
    '95% admission success rate',
    'Award-winning consultancy services',
    'Recognized by education boards',
    'ISO certified consultancy',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3Mzk5NjcwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="University campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Edupath Solutions</h1>
          <p className="text-xl">
            Empowering students to achieve their educational dreams since 2017
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 2017, Edupath Solutions Consultancy was born from a simple yet powerful vision: 
                  to help every student find their ideal educational path and achieve their dreams.
                </p>
                <p>
                  Over the past 9 years, we have grown from a small consulting firm to one of 
                  India's most trusted educational consultancies, successfully guiding over 5,000 students to 
                  their dream colleges and careers.
                </p>
                <p>
                  Our team of experienced counselors combines deep industry knowledge with a 
                  genuine passion for education. We understand that every student is unique, 
                  and we take pride in providing personalized guidance that considers individual 
                  strengths, interests, and aspirations.
                </p>
                <p>
                  Today, we continue to evolve and adapt to the changing educational landscape, 
                  ensuring our students always receive the most relevant and effective guidance to achieve their goals.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwZ3JvdXAlMjBlZHVjYXRpb258ZW58MXx8fHwxNzc0MDg0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <Target className="size-20 text-orange-500 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide comprehensive, personalized educational guidance that empowers students 
                to make informed decisions about their academic and career paths. We are committed 
                to helping every student discover their potential and achieve their educational goals 
                through expert counseling, comprehensive resources, and unwavering support.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <Eye className="size-20 text-orange-500 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be India's most trusted educational consultancy, recognized for our commitment 
                to student success and excellence in guidance. We envision a future where every 
                student has access to quality educational counseling and the opportunity to pursue 
                their dreams, regardless of their background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Achievements</span>
            </h2>
            <p className="text-xl text-blue-100">
              Milestones that define our journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="size-6 text-orange-500 shrink-0 mt-1" />
                  <span className="text-lg">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-40 flex items-center justify-center">
                  <Users className="size-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{member.qualification}</p>
                    <p className="text-gray-500">{member.experience} experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful students who trusted us with their educational future.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
