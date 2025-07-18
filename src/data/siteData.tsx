
export const siteData = {
  appName: "ScanHadir",
  adminAppName: "ScanHadir Dashboard",
  scannerAppName: "ScanHadir Scanner",
  tagline: "Solusi Absensi Pintar untuk Organisasi Modern",
  description: "Sistem absensi revolusioner berbasis QR code dengan pelacakan lokasi, dukungan kerja lapangan, dan manajemen data yang aman.",
  
  hero: {
    title: "Revolusi Manajemen Absensi Anda",
    subtitle: "Pelacakan absensi yang pintar, aman, dan sederhana dengan QR code, verifikasi lokasi, dan pelaporan real-time.",
    ctaText: "Mulai Hari Ini",
    videoUrl: "https://your-video-url.mp4", // Replace with your actual video URL
  },

  pricing: {
    monthlyFee: "Rp 1.000.000/bulan",
    description: "Biaya langganan bulanan untuk akses penuh sistem dan layanan support.",
    benefits: [
      "Installer aplikasi pertama kali",
      "Layanan support 24/7",
      "Update rutin dan berkelanjutan",
      "Keamanan tingkat enterprise",
      "Akses multi-pengguna"
    ]
  },

  features: [
    {
      title: "Absensi Berbasis QR Code",
      description: "Absensi cepat dan tanpa kontak menggunakan QR code unik untuk setiap sesi.",
      icon: "qr-code",
    },
    {
      title: "Verifikasi Berbasis Lokasi",
      description: "Pastikan absensi dicatat hanya di lokasi institusi yang telah ditentukan.",
      icon: "map-pin",
    },
    {
      title: "Dukungan Kerja Lapangan",
      description: "Lacak absensi untuk kerja lapangan dan tugas remote dengan verifikasi GPS.",
      icon: "map",
    },
    {
      title: "Desain Sederhana & Bersih",
      description: "Antarmuka yang intuitif dan mudah digunakan untuk administrator maupun pengguna.",
      icon: "smartphone",
    },
    {
      title: "Penyimpanan Data Aman",
      description: "Data Anda tersimpan aman di infrastruktur server khusus Anda sendiri.",
      icon: "shield-check",
    },
    {
      title: "Pelaporan Real-time",
      description: "Buat laporan dan analitik komprehensif secara real-time.",
      icon: "bar-chart-3",
    },
  ],

  institutionalUsers: [
    {
      name: "Universitas Indonesia",
      type: "Perguruan Tinggi",
      logo: "/lovable-uploads/placeholder-logo-ui.png"
    },
    {
      name: "SMA Negeri 1 Jakarta",
      type: "Sekolah Menengah",
      logo: "/lovable-uploads/placeholder-logo-sma.png"
    },
    {
      name: "PT. Teknologi Nusantara",
      type: "Perusahaan Swasta",
      logo: "/lovable-uploads/placeholder-logo-company.png"
    },
    {
      name: "Rumah Sakit Pusat Pertamina",
      type: "Rumah Sakit",
      logo: "/lovable-uploads/placeholder-logo-hospital.png"
    },
    {
      name: "Kementerian Pendidikan",
      type: "Instansi Pemerintah",
      logo: "/lovable-uploads/placeholder-logo-gov.png"
    },
    {
      name: "Bank Mandiri",
      type: "Perbankan",
      logo: "/lovable-uploads/placeholder-logo-bank.png"
    }
  ],

  testimonials: [
    {
      name: "Dr. Ahmad Sutrisno",
      position: "Kepala Bagian SDM",
      company: "Universitas Indonesia",
      content: "ScanHadir telah mengubah cara kami mengelola absensi. Sistem yang sangat efisien dan mudah digunakan.",
      avatar: "/lovable-uploads/placeholder-avatar-1.jpg"
    },
    {
      name: "Siti Rahayu, S.Pd",
      position: "Wakil Kepala Sekolah",
      company: "SMA Negeri 1 Jakarta",
      content: "Fitur pelacakan lokasi sangat membantu memastikan siswa benar-benar hadir di sekolah. Sangat direkomendasikan!",
      avatar: "/lovable-uploads/placeholder-avatar-2.jpg"
    },
    {
      name: "Muhammad Rizki",
      position: "Manager IT",
      company: "PT. Teknologi Nusantara",
      content: "Dashboard yang komprehensif dan laporan real-time membuat manajemen absensi karyawan menjadi sangat mudah.",
      avatar: "/lovable-uploads/placeholder-avatar-3.jpg"
    }
  ],

  developers: [
    {
      name: "Arif Rahman",
      role: "Lead Developer",
      image: "/lovable-uploads/placeholder-dev1.jpg",
      bio: "Berpengalaman dalam pengembangan aplikasi mobile dan web dengan keahlian khusus dalam sistem keamanan.",
    },
    {
      name: "Dewi Sartika", 
      role: "Backend Developer",
      image: "/lovable-uploads/placeholder-dev2.jpg",
      bio: "Spesialis dalam arsitektur server dan pengelolaan database dengan fokus pada performa tinggi.",
    },
    {
      name: "Budi Santoso",
      role: "Mobile Developer",
      image: "/lovable-uploads/placeholder-dev3.jpg",
      bio: "Ahli dalam pengembangan aplikasi Android native dengan pengalaman UI/UX yang mendalam.",
    },
  ],

  downloads: {
    main: {
      url: "https://play.google.com/store/apps/details?id=com.scanhadir.main",
      available: true,
      name: "ScanHadir",
      description: "Aplikasi utama untuk menampilkan QR code absensi"
    },
    scanner: {
      url: "https://play.google.com/store/apps/details?id=com.scanhadir.scanner",
      available: true,
      name: "ScanHadir Scanner",
      description: "Aplikasi scanner QR code khusus untuk institusi"
    },
    desktop: {
      url: "https://github.com/yourrepo/scanhadir-dashboard/releases/latest",
      available: true,
      name: "ScanHadir Dashboard",
      description: "Dashboard desktop untuk administrator"
    },
  },

  contact: {
    email: "info@scanhadir.com",
    support: "support@scanhadir.com",
    website: "https://scanhadir.com",
  },

  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/scanhadir",
    linkedin: "https://linkedin.com/company/scanhadir",
  },
};

export const docsData = {
  installation: {
    android: {
      title: "Instalasi Android",
      steps: [
        "Unduh ScanHadir dari Google Play Store",
        "Instal aplikasi di perangkat Android Anda",
        "Buka aplikasi dan selesaikan pengaturan awal",
        "Berikan izin yang diperlukan untuk kamera dan lokasi",
        "Hubungi administrator untuk pengaturan organisasi",
      ],
    },
    windows: {
      title: "Instalasi Dashboard Windows", 
      steps: [
        "Unduh installer ScanHadir Dashboard",
        "Jalankan installer sebagai administrator",
        "Ikuti wizard instalasi",
        "Konfigurasi pengaturan koneksi server Anda",
        "Atur auto-startup (opsional)",
      ],
    },
    autoStart: {
      title: "Konfigurasi Auto-Startup Windows",
      steps: [
        "Tekan Windows + R untuk membuka dialog Run",
        "Ketik 'shell:startup' dan tekan Enter",
        "Salin shortcut ScanHadir Dashboard ke folder ini",
        "Alternatifnya, gunakan Task Scheduler untuk opsi lanjutan",
        "Restart komputer Anda untuk menguji auto-startup",
      ],
    },
  },
  
  userGuide: {
    sections: [
      {
        title: "Memulai",
        content: "Pelajari cara mengatur dan mengkonfigurasi ScanHadir untuk organisasi Anda.",
      },
      {
        title: "Melakukan Absensi",
        content: "Panduan langkah demi langkah tentang cara pengguna dapat melakukan absensi menggunakan QR code.",
      },
      {
        title: "Mengelola Pengguna",
        content: "Panduan administratif untuk mengelola pengguna, peran, dan izin.",
      },
      {
        title: "Laporan & Analitik",
        content: "Buat dan ekspor laporan absensi yang komprehensif.",
      },
    ],
  },
};
