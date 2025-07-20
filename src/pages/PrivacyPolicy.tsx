import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Database, MapPin, Mail, Users, Lock, Eye, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kebijakan Privasi ScanHadir</h1>
            <div className="text-lg text-gray-600">
              Terakhir diperbarui: 24 Juni 2025
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            
            {/* Section 1: Data Collection */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-primary" />
                  <CardTitle>1. Data yang Kami Kumpulkan</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">A. Data Pribadi</h4>
                  <p className="text-gray-700 mb-2">Profil Pengguna:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email institusional</li>
                    <li>Nomor telepon</li>
                    <li>Foto profil (opsional)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">B. Data Absensi</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Waktu absensi</li>
                    <li>Lokasi GPS</li>
                    <li>Jenis absensi (masuk/istirahat/pulang/lapangan)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">C. Data Teknis</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Model perangkat</li>
                    <li>Sistem operasi</li>
                    <li>Alamat IP</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Data Collection Methods */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-primary" />
                  <CardTitle>2. Metode Pengumpulan Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Input manual:</strong> Dilakukan oleh admin institusi melalui dashboard</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Otomatis:</strong> Sistem mengumpulkan data melalui:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Pemindaian QR Code</li>
                      <li>Deteksi lokasi GPS</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Data Processing Purpose */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>3. Tujuan Pengolahan Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lokasi GPS</h4>
                  <p className="text-gray-700 mb-2">Digunakan untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Verifikasi kehadiran fisik di lokasi institusi</li>
                    <li>Pelacakan absensi lapangan</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-700 mb-2">Digunakan untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Mengirim informasi login kepada pengguna terdaftar</li>
                    <li>Notifikasi penting terkait absensi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Third Party Data Sharing */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <CardTitle>4. Pembagian Data ke Pihak Ketiga</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">Kami menggunakan layanan pihak ketiga berikut:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li><strong>Supabase:</strong> Untuk penyimpanan file seperti foto profil. Data absensi disimpan di server institusi.</li>
                    <li><strong>Resend:</strong> Untuk pengiriman email notifikasi</li>
                  </ul>
                  <p className="text-gray-700 font-medium">
                    Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga lainnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Data Security */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-primary" />
                  <CardTitle>5. Keamanan Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kebijakan Penyimpanan</h4>
                  <p className="text-gray-700 mb-2">
                    Data tersimpan secara permanen di server institusi. Institusi memiliki hak penuh untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Mengelola data sesuai kebijakan internal</li>
                    <li>Menghapus data kapan saja</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enkripsi</h4>
                  <p className="text-gray-700">
                    Kami menerapkan standar enkripsi untuk melindungi data selama transmisi dan penyimpanan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: User Rights */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>6. Hak Pengguna</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Akses Data</h4>
                  <p className="text-gray-700">
                    Pengguna dapat meminta akses data dengan menghubungi admin institusi.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Perbaikan Data</h4>
                  <p className="text-gray-700">
                    Permintaan perbaikan data harus diajukan ke admin institusi.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Penghapusan Data</h4>
                  <p className="text-gray-700">
                    Pengguna dapat meminta penghapusan data melalui admin institusi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Special Requirements */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>7. Persyaratan Khusus</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pengguna Dibawah Umur</h4>
                  <p className="text-gray-700">
                    Aplikasi ini tidak ditujukan untuk pengguna dibawah 18 tahun.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pelacakan Produktivitas</h4>
                  <p className="text-gray-700">
                    Aplikasi memiliki fitur pelacakan kehadiran yang digunakan untuk mencatat produktivitas dasar.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Jangkauan Layanan</h4>
                  <p className="text-gray-700">
                    Layanan ini terutama ditujukan untuk pengguna di Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Policy Changes */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>8. Perubahan Kebijakan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Kami akan memberitahukan perubahan kebijakan privasi melalui email 30 hari sebelum berlaku. 
                  Penggunaan terus menerus setelah perubahan dianggap sebagai persetujuan terhadap revisi kebijakan.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Pertanyaan Lebih Lanjut</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <p className="text-gray-700">
                    Untuk pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di:
                  </p>
                  <div className="space-y-2 mt-4">
                    <p><strong>Email:</strong> scanhadir@gmail.com</p>
                    <p><strong>Telepon:</strong> 081933875047</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;