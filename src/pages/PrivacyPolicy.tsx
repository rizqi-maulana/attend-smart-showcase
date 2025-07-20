import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, UserCheck, Clock, Globe, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const policyPoints = [
    {
      icon: Database,
      title: "Pengumpulan Data",
      content: "Kami mengumpulkan data pribadi yang Anda berikan secara sukarela saat mendaftar, termasuk nama, email, nomor telepon, dan informasi akademik. Data lokasi dikumpulkan hanya saat melakukan absensi untuk verifikasi kehadiran."
    },
    {
      icon: Lock,
      title: "Keamanan Data", 
      content: "Semua data pribadi Anda dilindungi menggunakan enkripsi tingkat industri (AES-256) dan disimpan di server yang aman dengan akses terbatas. Kami menerapkan protokol keamanan berlapis untuk mencegah akses tidak sah."
    },
    {
      icon: Eye,
      title: "Penggunaan Informasi",
      content: "Data Anda digunakan untuk keperluan absensi, pembuatan laporan kehadiran, komunikasi terkait layanan, dan peningkatan fitur aplikasi. Kami tidak menggunakan data untuk tujuan komersial atau pemasaran."
    },
    {
      icon: UserCheck,
      title: "Hak Pengguna",
      content: "Anda memiliki hak untuk mengakses, memperbarui, atau menghapus data pribadi Anda. Anda dapat mengajukan permintaan melalui admin institusi atau menghubungi tim support kami secara langsung."
    },
    {
      icon: Globe,
      title: "Pembagian Data",
      content: "Kami tidak membagikan, menjual, atau menyewakan data pribadi Anda kepada pihak ketiga. Data hanya dibagikan dengan admin institusi Anda untuk keperluan manajemen kehadiran sesuai kebijakan institusi."
    },
    {
      icon: Clock,
      title: "Penyimpanan Data",
      content: "Data absensi disimpan selama periode akademik yang berlaku atau sesuai kebijakan retensi institusi. Data yang tidak lagi diperlukan akan dihapus secara aman dari sistem kami."
    },
    {
      icon: Phone,
      title: "Cookies dan Tracking",
      content: "Aplikasi menggunakan cookies minimal untuk fungsionalitas login dan preferensi pengguna. Kami tidak menggunakan tracking untuk iklan atau analitik pihak ketiga tanpa persetujuan eksplisit Anda."
    },
    {
      icon: Shield,
      title: "Perubahan Kebijakan",
      content: "Setiap perubahan pada kebijakan privasi ini akan diberitahukan melalui aplikasi dan email. Penggunaan berkelanjutan setelah perubahan dianggap sebagai persetujuan terhadap kebijakan yang diperbarui."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kebijakan Privasi</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk melindungi privasi dan keamanan data pribadi pengguna ScanHadir
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Komitmen Privasi ScanHadir</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                ScanHadir berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
                melindungi informasi Anda saat menggunakan layanan ScanHadir.
              </p>
            </CardContent>
          </Card>

          {/* Policy Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {policyPoints.map((point, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <p className="text-gray-600">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak privasi Anda:
                </p>
                <div className="space-y-1 mt-4">
                  <p><strong>Email:</strong> privacy@scanhadir.com</p>
                  <p><strong>Tim Support:</strong> support@scanhadir.com</p>
                  <p><strong>Waktu Respons:</strong> Maksimal 48 jam</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;