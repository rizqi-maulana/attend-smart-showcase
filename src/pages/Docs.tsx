
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Download, Settings, Users, BarChart3, Shield, Smartphone, Monitor, ChevronRight } from 'lucide-react';
import { docsData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type DocSection = 'overview' | 'installation' | 'server-setup' | 'user-guide' | 'admin-guide' | 'troubleshooting';

const Docs = () => {
  const [activeSection, setActiveSection] = useState<DocSection>('overview');

  const sidebarItems = [
    { id: 'overview' as DocSection, title: 'Gambaran Umum', icon: Book },
    { id: 'installation' as DocSection, title: 'Instalasi', icon: Download },
    { id: 'server-setup' as DocSection, title: 'Setup Server Institusi', icon: Monitor },
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

      case 'server-setup':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Setup Server Institusi</h1>
              <p className="text-lg text-gray-600">Panduan lengkap mengatur ScanHadir di server institusi dengan task scheduler</p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-6 w-6 text-primary" />
                  <CardTitle>Konfigurasi Task Scheduler Windows</CardTitle>
                </div>
                <CardDescription>
                  Mengatur sistem agar ScanHadir Dashboard otomatis berjalan saat komputer dinyalakan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                    <div>
                      <strong>Buka Task Scheduler:</strong>
                      <p>Tekan Windows + R, ketik "taskschd.msc" dan tekan Enter</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                    <div>
                      <strong>Buat Task Baru:</strong>
                      <p>Klik kanan "Task Scheduler Library" → "Create Basic Task"</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                    <div>
                      <strong>Atur Nama dan Deskripsi:</strong>
                      <p>Nama: "ScanHadir AutoStart", Deskripsi: "Menjalankan ScanHadir Dashboard saat boot"</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                    <div>
                      <strong>Pilih Trigger:</strong>
                      <p>Pilih "When the computer starts" untuk menjalankan saat boot</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                    <div>
                      <strong>Set Action:</strong>
                      <p>Pilih "Start a program" dan browse ke lokasi ScanHadir Dashboard.exe</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">6</span>
                    <div>
                      <strong>Konfigurasi Lanjutan:</strong>
                      <p>Centang "Run with highest privileges" agar berjalan dengan akses administrator</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">7</span>
                    <div>
                      <strong>Test dan Finalisasi:</strong>
                      <p>Klik "Finish" dan restart komputer untuk memverifikasi task berjalan otomatis</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Persyaratan Sistem Server</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Spesifikasi Minimum:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Windows 10/11 atau Windows Server 2019+</li>
                      <li>• RAM 4GB minimum (8GB disarankan)</li>
                      <li>• Storage 2GB ruang kosong</li>
                      <li>• Koneksi internet stabil</li>
                      <li>• Port 80/443 terbuka</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Konfigurasi Jaringan:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• IP statis untuk server (disarankan)</li>
                      <li>• Firewall exception untuk ScanHadir</li>
                      <li>• Akses admin untuk instalasi</li>
                      <li>• Backup rutin database</li>
                      <li>• SSL certificate untuk HTTPS</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'user-guide':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Aplikasi ScanHadir</h1>
              <p className="text-lg text-gray-600">Langkah-langkah lengkap menggunakan aplikasi mobile ScanHadir untuk absensi</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <CardTitle>Langkah 1: Persiapan Awal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Download aplikasi ScanHadir dari Play Store atau App Store</li>
                    <li>2. Buka aplikasi dan berikan izin kamera dan lokasi</li>
                    <li>3. Daftarkan diri menggunakan email atau nomor ID yang diberikan institusi</li>
                    <li>4. Verifikasi akun melalui email atau SMS</li>
                    <li>5. Login menggunakan kredensial yang telah dibuat</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Langkah 2: Melakukan Absensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Pastikan Anda berada di lokasi yang ditentukan</li>
                    <li>2. Buka aplikasi ScanHadir</li>
                    <li>3. Ketuk tombol besar "Scan QR Code" di tengah layar</li>
                    <li>4. Arahkan kamera ke QR code yang ditampilkan instruktur/admin</li>
                    <li>5. Tunggu aplikasi memverifikasi lokasi Anda (jika diaktifkan)</li>
                    <li>6. Aplikasi akan menampilkan konfirmasi "Absensi Berhasil"</li>
                    <li>7. Screenshot bukti absensi untuk arsip pribadi (opsional)</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Langkah 3: Melihat Riwayat Absensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Buka tab "Riwayat" di bagian bawah aplikasi</li>
                    <li>2. Pilih rentang tanggal dari dropdown kalender</li>
                    <li>3. Gunakan filter berdasarkan status (Hadir, Terlambat, Tidak Hadir)</li>
                    <li>4. Ketuk setiap entri untuk melihat detail waktu dan lokasi</li>
                    <li>5. Export riwayat ke PDF untuk laporan pribadi</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips Penggunaan Optimal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Scanning QR Code:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Pastikan pencahayaan cukup</li>
                        <li>• Jaga jarak 15-30cm dari QR code</li>
                        <li>• Pegang ponsel dengan stabil</li>
                        <li>• Bersihkan lensa kamera secara rutin</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Troubleshooting:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Restart aplikasi jika error</li>
                        <li>• Periksa koneksi internet</li>
                        <li>• Update aplikasi ke versi terbaru</li>
                        <li>• Hubungi admin jika masalah persisten</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'admin-guide':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Admin Dashboard</h1>
              <p className="text-lg text-gray-600">Langkah-langkah lengkap mengelola ScanHadir Dashboard untuk administrator</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Langkah 1: Setup Awal Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Buka ScanHadir Dashboard di browser (localhost:3000)</li>
                    <li>2. Login menggunakan akun administrator default</li>
                    <li>3. Ubah password default ke password yang kuat</li>
                    <li>4. Konfigurasi pengaturan institusi (nama, logo, alamat)</li>
                    <li>5. Set zona waktu dan format tanggal sesuai kebutuhan</li>
                    <li>6. Aktifkan fitur-fitur yang diperlukan (GPS, notifikasi)</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Langkah 2: Manajemen Pengguna</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Navigasi ke menu "Pengguna" → "Tambah Pengguna"</li>
                    <li>2. Import data pengguna melalui file Excel/CSV atau input manual</li>
                    <li>3. Tetapkan role (Admin, Instruktur, Peserta) untuk setiap pengguna</li>
                    <li>4. Set grup/kelas untuk mengorganisir peserta</li>
                    <li>5. Kirim kredensial login via email atau generate QR code</li>
                    <li>6. Verifikasi dan aktivasi akun pengguna baru</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Langkah 3: Membuat dan Mengelola Sesi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Klik "Sesi" → "Buat Sesi Baru" di dashboard utama</li>
                    <li>2. Input detail: nama sesi, tanggal, waktu mulai-selesai</li>
                    <li>3. Pilih peserta atau grup yang akan mengikuti sesi</li>
                    <li>4. Set radius lokasi dan koordinat GPS (jika diperlukan)</li>
                    <li>5. Generate QR code untuk sesi tersebut</li>
                    <li>6. Tampilkan QR code di layar proyektor/monitor</li>
                    <li>7. Monitor absensi real-time dan tutup sesi sesuai jadwal</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Langkah 4: Laporan dan Analitik</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li>1. Akses menu "Laporan" untuk melihat ringkasan absensi</li>
                    <li>2. Filter berdasarkan tanggal, kelas, atau individu tertentu</li>
                    <li>3. Export laporan dalam format Excel, PDF, atau CSV</li>
                    <li>4. Set jadwal otomatis untuk laporan harian/mingguan</li>
                    <li>5. Analisis trend kehadiran menggunakan grafik dashboard</li>
                    <li>6. Generate sertifikat kehadiran untuk peserta</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fitur Lanjutan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Manajemen Data:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Backup otomatis database</li>
                        <li>• Import/export data massal</li>
                        <li>• Integrasi dengan sistem akademik</li>
                        <li>• API untuk aplikasi eksternal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Keamanan:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Two-factor authentication</li>
                        <li>• Log aktivitas pengguna</li>
                        <li>• Enkripsi data sensitif</li>
                        <li>• Role-based access control</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
