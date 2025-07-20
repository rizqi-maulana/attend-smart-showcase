import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, Users, CreditCard, Shield, Gavel, RefreshCw, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const termsData = [
    {
      icon: Users,
      title: "Penggunaan Layanan",
      content: "ScanHadir adalah platform absensi digital untuk institusi pendidikan dan organisasi. Pengguna harus berusia minimal 13 tahun dan memberikan informasi yang akurat saat pendaftaran."
    },
    {
      icon: CreditCard,
      title: "Biaya dan Pembayaran", 
      content: "Biaya instalasi Rp 1.000.000 dan biaya berlangganan Rp 1.000.000/bulan. Pembayaran dilakukan di muka dan tidak dapat dikembalikan kecuali dalam kondisi tertentu sesuai kebijakan."
    },
    {
      icon: Shield,
      title: "Tanggung Jawab Pengguna",
      content: "Pengguna bertanggung jawab menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, dan tidak melakukan tindakan yang dapat merusak sistem atau merugikan pengguna lain."
    },
    {
      icon: AlertTriangle,
      title: "Pembatasan Layanan",
      content: "Kami berhak membatasi atau menghentikan akses pengguna yang melanggar ketentuan, menggunakan layanan untuk tujuan ilegal, atau merugikan sistem dan pengguna lain."
    },
    {
      icon: Gavel,
      title: "Hak Kekayaan Intelektual",
      content: "Semua konten, fitur, dan teknologi ScanHadir adalah milik kami. Pengguna tidak diperkenankan menyalin, mendistribusikan, atau menggunakan untuk tujuan komersial tanpa izin."
    },
    {
      icon: RefreshCw,
      title: "Pembaruan Ketentuan",
      content: "Ketentuan ini dapat diperbarui sewaktu-waktu. Pengguna akan diberitahu melalui aplikasi atau email. Penggunaan berkelanjutan dianggap sebagai persetujuan terhadap perubahan."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Syarat dan Ketentuan</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ketentuan penggunaan layanan ScanHadir yang harus dipahami dan disetujui oleh semua pengguna
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Berlaku sejak: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {termsData.map((term, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <term.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{term.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {term.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="space-y-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Ketentuan Pembatalan dan Pengembalian</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Pembatalan Layanan:</strong> Institusi dapat membatalkan layanan dengan pemberitahuan 
                    30 hari sebelumnya. Pembatalan di tengah periode tidak akan mendapat pengembalian biaya.
                  </p>
                  <p>
                    <strong>Pengembalian Dana:</strong> Pengembalian dana hanya berlaku jika terdapat kegagalan 
                    teknis yang tidak dapat diselesaikan dalam 7 hari kerja atau kesalahan dari pihak penyedia layanan.
                  </p>
                  <p>
                    <strong>Maintenance:</strong> Sistem maintenance terjadwal akan diberitahukan 48 jam sebelumnya. 
                    Emergency maintenance dapat dilakukan tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Batasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    ScanHadir tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan yang tidak sesuai 
                    ketentuan, kesalahan pengguna, atau kondisi force majeure seperti bencana alam, perang, atau 
                    gangguan infrastruktur internet.
                  </p>
                  <p>
                    Tanggung jawab maksimal kami terbatas pada jumlah biaya berlangganan yang telah dibayarkan 
                    untuk periode berjalan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pertanyaan dan Dukungan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <p className="text-gray-600">
                  Untuk pertanyaan tentang syarat dan ketentuan ini atau dukungan teknis:
                </p>
                <div className="space-y-1 mt-4">
                  <p><strong>Email Legal:</strong> legal@scanhadir.com</p>
                  <p><strong>Tim Support:</strong> support@scanhadir.com</p>
                  <p><strong>Telepon:</strong> +62 21 1234 5678</p>
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

export default Terms;