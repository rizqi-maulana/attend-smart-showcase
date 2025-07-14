
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Award, Code, Server } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About ScanHadir
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to revolutionizing attendance management through innovative technology, 
              making it simple, secure, and efficient for organizations of all sizes.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To provide organizations with the most efficient, secure, and user-friendly 
                    attendance management solution that eliminates manual processes and reduces administrative overhead.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To become the leading global platform for smart attendance management, 
                    enabling organizations to focus on what matters most while we handle their attendance tracking needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Innovation, security, simplicity, and reliability are at the core of everything we do. 
                    We believe in creating solutions that make work life easier and more productive.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose ScanHadir */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose ScanHadir?
              </h2>
              <p className="text-xl text-gray-600">
                We understand the challenges of traditional attendance systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Traditional Problems We Solve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Manual Attendance Tracking</h4>
                      <p className="text-gray-600">Time-consuming paper-based systems prone to errors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proxy Attendance</h4>
                      <p className="text-gray-600">Difficulty in verifying actual presence of employees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complex Reporting</h4>
                      <p className="text-gray-600">Difficulty in generating accurate attendance reports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Security Concerns</h4>
                      <p className="text-gray-600">Lack of secure data storage and backup</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Smart Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">QR Code Technology</h4>
                      <p className="text-gray-600">Quick, contactless attendance marking in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location Verification</h4>
                      <p className="text-gray-600">GPS-based validation ensures authentic presence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Automated Reporting</h4>
                      <p className="text-gray-600">Real-time reports with comprehensive analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure Infrastructure</h4>
                      <p className="text-gray-600">Enterprise-grade security on your own servers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Development Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced developers passionate about creating innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {siteData.developers.map((developer, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                      {/* Replace with actual developer photo: */}
                      {/* <img src={developer.image} alt={developer.name} className="w-32 h-32 rounded-full object-cover" /> */}
                    </div>
                    <CardTitle className="text-xl">{developer.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {developer.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{developer.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-xl text-gray-600">
                We use cutting-edge technologies to ensure performance, security, and scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React Native for mobile applications</li>
                    <li>• Electron for desktop applications</li>
                    <li>• Modern UI/UX design principles</li>
                    <li>• Responsive and intuitive interfaces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Server className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Backend Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scalable server architecture</li>
                    <li>• Secure API endpoints</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Automated backup systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
