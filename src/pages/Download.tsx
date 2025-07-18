
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
              Unduh ScanHadir
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mulai dengan ScanHadir hari ini. Unduh aplikasi mobile untuk pengguna dan dashboard desktop untuk administrator.
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
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {/* Play Store Icon */}
                    <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">{siteData.appName} Mobile</CardTitle>
                  <CardDescription className="text-base">
                    Aplikasi Android untuk pengguna melakukan absensi menggunakan QR code
                  </CardDescription>
                  <div className="mt-4">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {siteData.downloads.android.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Scan QR code untuk absensi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Verifikasi berbasis lokasi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Pelacakan riwayat absensi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Dukungan offline</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Persyaratan Sistem:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Android 5.0 (API level 21) atau lebih tinggi</li>
                      <li>• Izin kamera untuk scan QR</li>
                      <li>• Layanan lokasi diaktifkan</li>
                      <li>• Koneksi internet untuk sinkronisasi</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.android.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.android.url} target="_blank" rel="noopener noreferrer">
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

              {/* Desktop Dashboard */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {/* Windows Icon */}
                    <svg className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">{siteData.adminAppName}</CardTitle>
                  <CardDescription className="text-base">
                    Aplikasi desktop Windows untuk administrator dan manajer
                  </CardDescription>
                  <div className="mt-4">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {siteData.downloads.windows.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Manajemen pengguna dan peran</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Generasi QR code</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Pelaporan dan analitik lanjutan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">Kemampuan ekspor data</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Persyaratan Sistem:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Windows 10 atau Windows 11</li>
                      <li>• .NET Framework 4.7.2 atau lebih tinggi</li>
                      <li>• 4GB RAM (8GB direkomendasikan)</li>
                      <li>• 500MB ruang disk tersedia</li>
                      <li>• Koneksi internet</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    {siteData.downloads.windows.available ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={siteData.downloads.windows.url} target="_blank" rel="noopener noreferrer">
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

        {/* Installation Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Panduan Instalasi Cepat
              </h2>
              <p className="text-xl text-gray-600">
                Mulai dan jalankan dalam hitungan menit dengan proses instalasi sederhana kami
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
                      <span>Masukkan detail organisasi yang diberikan admin</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Selesaikan pengaturan profil dan mulai gunakan</span>
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
                      <span>Ikuti langkah-langkah wizard instalasi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Konfigurasi pengaturan koneksi server</span>
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
