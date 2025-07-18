
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Download, Settings, Users, BarChart3, Shield, Smartphone, Monitor, ChevronRight } from 'lucide-react';
import { docsData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type DocSection = 'overview' | 'installation' | 'user-guide' | 'admin-guide' | 'troubleshooting';

const Docs = () => {
  const [activeSection, setActiveSection] = useState<DocSection>('overview');

  const sidebarItems = [
    { id: 'overview' as DocSection, title: 'Gambaran Umum', icon: Book },
    { id: 'installation' as DocSection, title: 'Instalasi', icon: Download },
    { id: 'user-guide' as DocSection, title: 'Panduan Pengguna', icon: Users },
    { id: 'admin-guide' as DocSection, title: 'Panduan Admin', icon: Settings },
    { id: 'troubleshooting' as DocSection, title: 'Pemecahan Masalah', icon: Shield },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Dokumentasi ScanHadir</h1>
              <p className="text-xl text-gray-600 mb-8">
                Panduan lengkap untuk menginstal, mengkonfigurasi, dan menggunakan ScanHadir secara efektif di organisasi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('installation')}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Download className="h-6 w-6 text-primary" />
                    <CardTitle>Panduan Instalasi</CardTitle>
                    <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Petunjuk instalasi langkah demi langkah untuk semua platform
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('user-guide')}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Panduan Pengguna</CardTitle>
                    <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pelajari cara menggunakan aplikasi mobile ScanHadir secara efektif
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('admin-guide')}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Panduan Administrator</CardTitle>
                    <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Panduan lengkap untuk mengelola ScanHadir Dashboard
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('troubleshooting')}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Pemecahan Masalah</CardTitle>
                    <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Masalah umum dan solusinya
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'installation':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Instalasi</h1>
              <p className="text-lg text-gray-600">Petunjuk instalasi langkah demi langkah untuk semua platform</p>
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
                  Konfigurasi ScanHadir Dashboard untuk mulai otomatis saat Windows boot
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
          </div>
        );

      case 'user-guide':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Pengguna</h1>
              <p className="text-lg text-gray-600">Pelajari cara menggunakan aplikasi mobile ScanHadir secara efektif</p>
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
                  <CardTitle>Cara Melakukan Absensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Buka aplikasi mobile ScanHadir</li>
                    <li>2. Ketuk tombol "Scan QR Code"</li>
                    <li>3. Arahkan kamera ke QR code yang ditampilkan oleh instruktur/manajer</li>
                    <li>4. Tunggu verifikasi lokasi (jika diaktifkan)</li>
                    <li>5. Konfirmasi absensi Anda saat diminta</li>
                    <li>6. Anda akan melihat pesan sukses yang mengkonfirmasi absensi</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Melihat Riwayat Absensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Buka aplikasi dan buka tab "Riwayat"</li>
                    <li>2. Pilih rentang tanggal atau gunakan filter</li>
                    <li>3. Lihat catatan absensi Anda dengan timestamp</li>
                    <li>4. Ketuk catatan mana pun untuk informasi detail</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'admin-guide':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Administrator</h1>
              <p className="text-lg text-gray-600">Panduan lengkap untuk mengelola ScanHadir Dashboard</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Manajemen Pengguna</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tambah dan hapus pengguna</li>
                    <li>• Tetapkan peran dan izin</li>
                    <li>• Kelola profil pengguna</li>
                    <li>• Operasi pengguna massal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Download className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Manajemen QR Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Generate QR code sesi</li>
                    <li>• Atur waktu kedaluwarsa</li>
                    <li>• Pembatasan berbasis lokasi</li>
                    <li>• Generasi QR massal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Laporan & Analitik</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Generate laporan absensi</li>
                    <li>• Ekspor data dalam berbagai format</li>
                    <li>• Lihat dashboard analitik</li>
                    <li>• Jadwalkan laporan otomatis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Membuat Sesi Pertama Anda</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  <li>1. Buka ScanHadir Dashboard</li>
                  <li>2. Navigasi ke "Sesi" → "Buat Sesi Baru"</li>
                  <li>3. Masukkan detail sesi (nama, tanggal, waktu, durasi)</li>
                  <li>4. Atur pembatasan lokasi jika diperlukan</li>
                  <li>5. Generate QR code untuk sesi</li>
                  <li>6. Tampilkan QR code untuk dipindai pengguna</li>
                  <li>7. Monitor absensi real-time di dashboard</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pemecahan Masalah</h1>
              <p className="text-lg text-gray-600">Masalah umum dan solusinya</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Masalah Aplikasi Mobile Umum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">QR Code Tidak Bisa Dipindai</h4>
                    <ul className="space-y-1 text-gray-600 ml-4">
                      <li>• Pastikan izin kamera telah diberikan</li>
                      <li>• Bersihkan lensa kamera dan periksa pencahayaan</li>
                      <li>• Pastikan QR code belum kedaluwarsa</li>
                      <li>• Coba bergerak lebih dekat atau lebih jauh dari QR code</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verifikasi Lokasi Gagal</h4>
                    <ul className="space-y-1 text-gray-600 ml-4">
                      <li>• Aktifkan layanan lokasi untuk aplikasi</li>
                      <li>• Pastikan Anda berada dalam area yang diizinkan</li>
                      <li>• Periksa kekuatan sinyal GPS</li>
                      <li>• Restart aplikasi dan coba lagi</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Masalah Dashboard Desktop</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Masalah Koneksi</h4>
                    <ul className="space-y-1 text-gray-600 ml-4">
                      <li>• Periksa konektivitas internet</li>
                      <li>• Verifikasi konfigurasi pengaturan server</li>
                      <li>• Pastikan firewall tidak memblokir aplikasi</li>
                      <li>• Hubungi dukungan IT untuk masalah jaringan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Auto-startup Tidak Berfungsi</h4>
                    <ul className="space-y-1 text-gray-600 ml-4">
                      <li>• Periksa apakah shortcut ada di folder startup</li>
                      <li>• Jalankan aplikasi sebagai administrator</li>
                      <li>• Verifikasi konfigurasi Task Scheduler</li>
                      <li>• Periksa pengaturan startup Windows</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Butuh Bantuan Lebih?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Jika Anda tidak dapat menemukan solusi untuk masalah Anda, jangan ragu untuk menghubungi tim dukungan kami.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> support@scanhadir.com</p>
                    <p><strong>Waktu Respons:</strong> Dalam 24 jam</p>
                    <p><strong>Sertakan:</strong> Deskripsi detail, screenshot, dan informasi perangkat</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <nav className="space-y-2">
                  {sidebarItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeSection === item.id
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
