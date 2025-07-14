
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Download, Settings, Users, BarChart3, Shield, Smartphone, Monitor } from 'lucide-react';
import { docsData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Docs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guides and documentation for installing, configuring, and using ScanHadir effectively in your organization.
            </p>
          </div>
        </section>

        {/* Main Documentation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="installation" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="user-guide">User Guide</TabsTrigger>
                <TabsTrigger value="admin-guide">Admin Guide</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              </TabsList>

              {/* Installation Tab */}
              <TabsContent value="installation" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Guides</h2>
                  <p className="text-lg text-gray-600">Step-by-step installation instructions for all platforms</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Android Installation */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6 text-primary" />
                        <CardTitle>{docsData.installation.android.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {docsData.installation.android.steps.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>

                  {/* Windows Installation */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Monitor className="h-6 w-6 text-primary" />
                        <CardTitle>{docsData.installation.windows.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {docsData.installation.windows.steps.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                {/* Auto-startup Configuration */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-primary" />
                      <CardTitle>{docsData.installation.autoStart.title}</CardTitle>
                    </div>
                    <CardDescription>
                      Configure ScanHadir Dashboard to start automatically when Windows boots
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {docsData.installation.autoStart.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* User Guide Tab */}
              <TabsContent value="user-guide" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">User Guide</h2>
                  <p className="text-lg text-gray-600">Learn how to use ScanHadir mobile app effectively</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {docsData.userGuide.sections.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {section.content}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed User Instructions */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>How to Mark Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3 text-gray-600">
                        <li>1. Open ScanHadir mobile app</li>
                        <li>2. Tap on "Scan QR Code" button</li>
                        <li>3. Point your camera at the QR code displayed by your instructor/manager</li>
                        <li>4. Wait for location verification (if enabled)</li>
                        <li>5. Confirm your attendance when prompted</li>
                        <li>6. You'll see a success message confirming your attendance</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Viewing Attendance History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3 text-gray-600">
                        <li>1. Open the app and go to "History" tab</li>
                        <li>2. Select date range or use filters</li>
                        <li>3. View your attendance records with timestamps</li>
                        <li>4. Tap on any record for detailed information</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Admin Guide Tab */}
              <TabsContent value="admin-guide" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Administrator Guide</h2>
                  <p className="text-lg text-gray-600">Complete guide for managing ScanHadir Dashboard</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>User Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Add and remove users</li>
                        <li>• Assign roles and permissions</li>
                        <li>• Manage user profiles</li>
                        <li>• Bulk user operations</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Download className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>QR Code Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Generate session QR codes</li>
                        <li>• Set expiration times</li>
                        <li>• Location-based restrictions</li>
                        <li>• Bulk QR generation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <BarChart3 className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Reports & Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Generate attendance reports</li>
                        <li>• Export data in multiple formats</li>
                        <li>• View analytics dashboards</li>
                        <li>• Schedule automated reports</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Setting Up Your First Session</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-gray-600">
                      <li>1. Open ScanHadir Dashboard</li>
                      <li>2. Navigate to "Sessions" → "Create New Session"</li>
                      <li>3. Enter session details (name, date, time, duration)</li>
                      <li>4. Set location restrictions if needed</li>
                      <li>5. Generate QR code for the session</li>
                      <li>6. Display QR code for users to scan</li>
                      <li>7. Monitor real-time attendance in the dashboard</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Troubleshooting Tab */}
              <TabsContent value="troubleshooting" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
                  <p className="text-lg text-gray-600">Common issues and their solutions</p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Common Mobile App Issues</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">QR Code Not Scanning</h4>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Ensure camera permissions are granted</li>
                          <li>• Clean camera lens and check lighting</li>
                          <li>• Make sure QR code is not expired</li>
                          <li>• Try moving closer or further from the QR code</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Location Verification Failed</h4>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Enable location services for the app</li>
                          <li>• Ensure you're within the allowed area</li>
                          <li>• Check GPS signal strength</li>
                          <li>• Restart the app and try again</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Desktop Dashboard Issues</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Connection Problems</h4>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Check internet connectivity</li>
                          <li>• Verify server settings configuration</li>
                          <li>• Ensure firewall isn't blocking the application</li>
                          <li>• Contact IT support for network issues</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Auto-startup Not Working</h4>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Check if shortcut is in startup folder</li>
                          <li>• Run application as administrator</li>
                          <li>• Verify Task Scheduler configuration</li>
                          <li>• Check Windows startup settings</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <CardTitle>Need More Help?</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        If you can't find the solution to your problem, don't hesitate to contact our support team.
                      </p>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Email:</strong> support@scanhadir.com</p>
                        <p><strong>Response Time:</strong> Within 24 hours</p>
                        <p><strong>Include:</strong> Detailed description, screenshots, and device information</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
