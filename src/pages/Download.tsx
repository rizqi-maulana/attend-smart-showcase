
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Monitor, CheckCircle, ExternalLink, ScanLine, Shield } from 'lucide-react';
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
              Unduh ScanHadir
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mulai dengan ScanHadir hari ini. Unduh aplikasi mobile dan dashboard desktop untuk solusi absensi terlengkap.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-md mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Biaya Berlangganan</h3>
                <div className="text-3xl font-bold text-primary mb-4">{siteData.pricing.monthlyFee}</div>
                <p className="text-sm text-gray-600">{siteData.pricing.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Apa yang Anda Dapatkan
              </h2>
              <p className="text-xl text-gray-600">
                Paket lengkap untuk sistem absensi profesional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteData.pricing.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium text-gray-900">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pilih Aplikasi yang Sesuai
              </h2>
              <p className="text-xl text-gray-600">
                Tiga aplikasi terintegrasi untuk solusi absensi lengkap
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main App */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{siteData.downloads.main.name}</CardTitle>
                  <CardDescription className="text-base">
                    {siteData.downloads.main.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Tampilkan QR code absensi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Profil pengguna</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Riwayat absensi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Notifikasi real-time</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.main.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.main.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-5 w-5" />
                          Unduh dari Play Store
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        Segera Hadir di Play Store
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Scanner App */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ScanLine className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{siteData.downloads.scanner.name}</CardTitle>
                  <CardDescription className="text-base">
                    {siteData.downloads.scanner.description}
                  </CardDescription>
                  <div className="mt-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Khusus Institusi
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Scan QR code cepat</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Verifikasi lokasi GPS</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Mode offline</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Akses administrator</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-800 font-medium">Akses Terbatas</p>
                        <p className="text-sm text-amber-700">Aplikasi ini hanya dapat diunduh oleh institusi yang telah terdaftar.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.scanner.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.scanner.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-5 w-5" />
                          Unduh untuk Institusi
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        Segera Hadir
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Desktop Dashboard */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{siteData.downloads.desktop.name}</CardTitle>
                  <CardDescription className="text-base">
                    {siteData.downloads.desktop.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Manajemen pengguna lengkap</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Generasi QR code otomatis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Laporan dan analitik mendalam</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Ekspor data multi-format</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Persyaratan Sistem:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Windows 10 atau Windows 11</li>
                      <li>• 4GB RAM (8GB direkomendasikan)</li>
                      <li>• 500MB ruang disk tersedia</li>
                      <li>• Koneksi internet stabil</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.desktop.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.desktop.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-5 w-5" />
                          Unduh untuk Windows
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        Segera Hadir
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tim Pengembang
              </h2>
              <p className="text-xl text-gray-600">
                Dikembangkan oleh tim profesional berpengalaman dengan teknologi Next.js dan Tailwind CSS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.developers.map((developer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <img 
                      src={developer.image} 
                      alt={developer.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{developer.name}</h3>
                    <p className="text-primary font-medium mb-3">{developer.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{developer.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Panduan Instalasi Cepat
              </h2>
              <p className="text-xl text-gray-600">
                Mulai dan jalankan dalam hitungan menit dengan proses instalasi yang mudah
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span>Pengaturan Aplikasi Mobile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Unduh dan instal dari Play Store</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Berikan izin kamera dan lokasi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Masukkan detail organisasi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Selesaikan pengaturan profil</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span>Pengaturan Dashboard Desktop</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Unduh installer dan jalankan sebagai administrator</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Ikuti wizard instalasi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Konfigurasi pengaturan server</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Buat akun admin dan mulai mengelola</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Butuh bantuan dengan instalasi? Lihat dokumentasi lengkap kami.
              </p>
              <Button variant="outline" asChild>
                <a href="/docs">Lihat Dokumentasi</a>
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
