
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Smartphone, Monitor, QrCode, MapPin, Map, ShieldCheck, BarChart3 } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const iconMap = {
  'qr-code': QrCode,
  'map-pin': MapPin,
  'map': Map,
  'smartphone': Smartphone,
  'shield-check': ShieldCheck,
  'bar-chart-3': BarChart3,
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {siteData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {siteData.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/download">
                    <Download className="mr-2 h-5 w-5" />
                    {siteData.hero.ctaText}
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <img 
                    src="/lovable-uploads/c3ca4101-5aea-4fbd-bab5-ca60d71a64ee.png" 
                    alt="ScanHadir Logo"
                    className="h-32 mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ScanHadir</h3>
                    <p className="text-gray-600">Smart Attendance System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of attendance management with our comprehensive suite of features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mobile & Desktop Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ScanHadir provides both mobile application for users and desktop dashboard for administrators, 
                ensuring comprehensive attendance management across all platforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Android mobile application for users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Windows desktop dashboard for admins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Secure data synchronization</span>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link to="/download">Download Applications</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse-slow">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">ScanHadir Mobile</h3>
                <p className="text-sm text-gray-600">User-friendly mobile app for quick attendance marking</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse-slow" style={{animationDelay: '1s'}}>
                <Monitor className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">ScanHadir Dashboard</h3>
                <p className="text-sm text-gray-600">Comprehensive admin panel for management and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Attendance Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of organizations already using ScanHadir for efficient attendance tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/docs">
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
