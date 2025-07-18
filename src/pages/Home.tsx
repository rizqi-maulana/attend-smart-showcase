
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Monitor, QrCode, MapPin, Map, ShieldCheck, BarChart3, CheckCircle, Users, Zap } from 'lucide-react';
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
      <section className="pt-20 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Solusi Absensi Pintar
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Revolusi
                  <span className="block text-primary">Absensi</span>
                  Pintar
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transformasi organisasi Anda dengan absensi berbasis QR code, verifikasi lokasi, dan analitik real-time. Sederhana, aman, dan efisien.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Gratis untuk digunakan</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>1000+ Organisasi</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                  <Link to="/download">
                    <Download className="mr-2 h-5 w-5" />
                    Unduh Sekarang
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                  <Link to="/docs">
                    Lihat Dokumentasi
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* App Preview with Demo Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 animate-float">
                {/* Mobile App Preview */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                  <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 mb-4">
                    <Smartphone className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-white font-semibold text-lg">Aplikasi Mobile</h3>
                    <p className="text-blue-100 text-sm">Aplikasi Android</p>
                  </div>
                  {/* Add your mobile app demo image here */}
                  <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Demo Aplikasi Mobile</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <QrCode className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">Scan QR Code</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">Pelacakan Lokasi</span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop App Preview */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 mt-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 mb-4">
                    <Monitor className="h-8 w-8 text-white mb-3" />
                    <h3 className="text-white font-semibold text-lg">Dashboard</h3>
                    <p className="text-gray-300 text-sm">Desktop Windows</p>
                  </div>
                  {/* Add your desktop app demo image here */}
                  <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Demo Dashboard Desktop</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">Analitik</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">Kontrol Admin</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-pulse-slow">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-gray-600">Tingkat Akurasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {siteData.hero.videoUrl && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lihat ScanHadir Beraksi
              </h2>
              <p className="text-xl text-gray-300">
                Saksikan bagaimana sistem absensi pintar kami mengubah efisiensi tempat kerja
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                className="w-full aspect-video"
                controls
                poster="/api/placeholder/1200/675"
              >
                <source src={siteData.hero.videoUrl} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Fitur
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Semua yang Anda Butuhkan untuk
              <span className="block text-primary">Absensi Pintar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manajemen absensi komprehensif dengan teknologi terdepan dan desain yang ramah pengguna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  Solusi Lintas Platform
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Aplikasi Mobile &
                  <span className="block text-primary">Desktop</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ekosistem lengkap dengan aplikasi mobile Android untuk pengguna dan dashboard desktop Windows untuk administrator. 
                  Sinkronisasi mulus memastikan data Anda selalu terbaru di semua platform.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Aplikasi Mobile Android</h3>
                    <p className="text-gray-600">Antarmuka ramah pengguna untuk absensi cepat dengan scan QR code dan verifikasi GPS.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dashboard Desktop Windows</h3>
                    <p className="text-gray-600">Panel admin komprehensif untuk manajemen pengguna, pelaporan, dan konfigurasi sistem.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sinkronisasi Aman</h3>
                    <p className="text-gray-600">Sinkronisasi data real-time antara aplikasi mobile dan desktop dengan keamanan tingkat enterprise.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <Link to="/download">
                  <Download className="mr-2 h-5 w-5" />
                  Unduh Aplikasi
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-8">
                {/* Mobile App Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 animate-float">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">ScanHadir Mobile</h3>
                      <p className="text-gray-600">Aplikasi Android</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Scanner QR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Pelacakan GPS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Mode Offline</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Sinkronisasi Real-time</span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop App Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                      <Monitor className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">ScanHadir Dashboard</h3>
                      <p className="text-gray-600">Desktop Windows</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Analitik</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Manajemen Pengguna</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Laporan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Ekspor Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Mentransformasi
            <span className="block">Manajemen Absensi Anda?</span>
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan organisasi yang sudah menggunakan ScanHadir untuk pelacakan absensi yang efisien, aman, dan pintar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto" asChild>
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Unduh Sekarang
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/docs">
                Lihat Dokumentasi
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
