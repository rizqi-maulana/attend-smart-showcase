
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Monitor, CheckCircle, ExternalLink } from 'lucide-react';
import { siteData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download ScanHadir
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get started with ScanHadir today. Download the mobile app for users and the desktop dashboard for administrators.
            </p>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Mobile App */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{siteData.appName} Mobile</CardTitle>
                  <CardDescription className="text-base">
                    Android application for users to mark attendance using QR codes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">QR code scanning for attendance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Location-based verification</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Attendance history tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Offline support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">System Requirements:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Android 5.0 (API level 21) or higher</li>
                      <li>• Camera permission for QR scanning</li>
                      <li>• Location services enabled</li>
                      <li>• Internet connection for sync</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.android.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.android.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-5 w-5" />
                          Download from Play Store
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        Coming Soon to Play Store
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Desktop Dashboard */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{siteData.adminAppName}</CardTitle>
                  <CardDescription className="text-base">
                    Windows desktop application for administrators and managers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">User management and roles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">QR code generation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Advanced reporting and analytics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Data export capabilities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">System Requirements:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Windows 10 or Windows 11</li>
                      <li>• .NET Framework 4.7.2 or higher</li>
                      <li>• 4GB RAM (8GB recommended)</li>
                      <li>• 500MB available disk space</li>
                      <li>• Internet connection</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.windows.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.windows.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-5 w-5" />
                          Download for Windows
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Installation Guide
              </h2>
              <p className="text-xl text-gray-600">
                Get up and running in minutes with our simple installation process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span>Mobile App Setup</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Download and install from Play Store</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Grant camera and location permissions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Enter organization details provided by admin</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Complete profile setup and start using</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span>Desktop Dashboard Setup</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Download installer and run as administrator</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Follow installation wizard steps</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Configure server connection settings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Create admin account and start managing</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Need help with installation? Check our detailed documentation.
              </p>
              <Button variant="outline" asChild>
                <a href="/docs">View Documentation</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DownloadPage;
