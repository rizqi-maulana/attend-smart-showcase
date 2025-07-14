
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, MapPin, Map, Smartphone, ShieldCheck, BarChart3, Clock, Users, Settings, FileText } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  const detailedFeatures = [
    {
      category: "Core Features",
      items: [
        {
          icon: QrCode,
          title: "QR Code Based Attendance",
          description: "Generate unique QR codes for each attendance session. Users simply scan to mark their presence instantly.",
          benefits: ["Contactless attendance marking", "Unique codes for each session", "Instant verification", "Reduce manual errors"]
        },
        {
          icon: MapPin,
          title: "Location-Based Verification",
          description: "Ensure attendance is marked only at designated institution locations using GPS verification.",
          benefits: ["Prevent proxy attendance", "GPS-based validation", "Configurable location radius", "Real-time location tracking"]
        },
        {
          icon: Map,
          title: "Field Work Support",
          description: "Track attendance for field work and remote assignments with flexible location settings.",
          benefits: ["Remote work tracking", "Multiple location support", "Flexible location radius", "Field assignment management"]
        }
      ]
    },
    {
      category: "Security & Privacy",
      items: [
        {
          icon: ShieldCheck,
          title: "Secure Data Storage",
          description: "Your data is safely stored on your own dedicated server infrastructure with enterprise-grade security.",
          benefits: ["Own server deployment", "End-to-end encryption", "Regular security updates", "Data backup & recovery"]
        },
        {
          icon: Users,
          title: "Role-Based Access Control",
          description: "Manage user permissions with granular role-based access control system.",
          benefits: ["Multiple user roles", "Permission management", "Secure admin access", "User activity logs"]
        }
      ]
    },
    {
      category: "Management & Reporting",
      items: [
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "Generate comprehensive reports and analytics with real-time data visualization.",
          benefits: ["Real-time dashboards", "Custom report generation", "Data export options", "Attendance trends analysis"]
        },
        {
          icon: Clock,
          title: "Time Management",
          description: "Track work hours, overtime, and generate detailed time sheets for payroll processing.",
          benefits: ["Automatic time calculation", "Overtime tracking", "Break time management", "Payroll integration ready"]
        },
        {
          icon: FileText,
          title: "Comprehensive Reporting",
          description: "Export detailed attendance reports in multiple formats for further analysis.",
          benefits: ["Multiple export formats", "Scheduled reports", "Custom date ranges", "Department-wise reports"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Features for Complete Attendance Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how ScanHadir's powerful features can transform your organization's attendance tracking and management processes.
            </p>
          </div>
        </section>

        {/* Detailed Features */}
        {detailedFeatures.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Technical Specifications */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-xl opacity-90">Built with modern technology for reliable performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <Smartphone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mobile Application</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Android 5.0 or higher</li>
                  <li>• Camera access required</li>
                  <li>• GPS/Location services</li>
                  <li>• Internet connectivity</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <Settings className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Desktop Dashboard</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Windows 10 or higher</li>
                  <li>• .NET Framework 4.7.2+</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• Network connectivity</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <ShieldCheck className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Server Requirements</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Linux/Windows Server</li>
                  <li>• Database support</li>
                  <li>• SSL/TLS encryption</li>
                  <li>• Backup capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
