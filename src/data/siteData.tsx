
export const siteData = {
  appName: "ScanHadir",
  adminAppName: "ScanHadir Dashboard",
  tagline: "Smart Attendance Solution for Modern Organizations",
  description: "Revolutionary QR code-based attendance system with location tracking, field work support, and secure data management.",
  
  hero: {
    title: "Revolutionize Your Attendance Management",
    subtitle: "Smart, secure, and simple attendance tracking with QR codes, location verification, and real-time reporting.",
    ctaText: "Get Started Today",
    videoUrl: "", // Add your marketing video URL here
  },

  features: [
    {
      title: "QR Code Based Attendance",
      description: "Quick and contactless attendance marking using unique QR codes for each session.",
      icon: "qr-code",
    },
    {
      title: "Location-Based Verification",
      description: "Ensure attendance is marked only at designated institution locations.",
      icon: "map-pin",
    },
    {
      title: "Field Work Support",
      description: "Track attendance for field work and remote assignments with GPS verification.",
      icon: "map",
    },
    {
      title: "Simple & Clean Design",
      description: "Intuitive interface that's easy to use for both administrators and users.",
      icon: "smartphone",
    },
    {
      title: "Secure Data Storage",
      description: "Your data is safely stored on your own dedicated server infrastructure.",
      icon: "shield-check",
    },
    {
      title: "Real-time Reporting",
      description: "Generate comprehensive reports and analytics in real-time.",
      icon: "bar-chart-3",
    },
  ],

  developers: [
    {
      name: "Developer Name 1",
      role: "Lead Developer",
      image: "/lovable-uploads/placeholder-dev1.jpg", // Replace with actual developer photos
      bio: "Experienced in mobile and desktop application development.",
    },
    {
      name: "Developer Name 2", 
      role: "Backend Developer",
      image: "/lovable-uploads/placeholder-dev2.jpg", // Replace with actual developer photos
      bio: "Specialist in server infrastructure and data security.",
    },
  ],

  downloads: {
    android: {
      url: "https://play.google.com/store/apps/details?id=com.scanhadir.app", // Replace with actual Play Store URL
      available: true,
    },
    windows: {
      url: "https://github.com/yourrepo/scanhadir-dashboard/releases/latest", // Replace with actual download URL
      available: true,
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
      title: "Android Installation",
      steps: [
        "Download ScanHadir from Google Play Store",
        "Install the application on your Android device",
        "Open the app and complete the initial setup",
        "Grant necessary permissions for camera and location",
        "Contact your administrator for organization setup",
      ],
    },
    windows: {
      title: "Windows Dashboard Installation", 
      steps: [
        "Download ScanHadir Dashboard installer",
        "Run the installer as administrator",
        "Follow the installation wizard",
        "Configure your server connection settings",
        "Set up auto-startup (optional)",
      ],
    },
    autoStart: {
      title: "Windows Auto-Startup Configuration",
      steps: [
        "Press Windows + R to open Run dialog",
        "Type 'shell:startup' and press Enter",
        "Copy ScanHadir Dashboard shortcut to this folder",
        "Alternatively, use Task Scheduler for advanced options",
        "Restart your computer to test auto-startup",
      ],
    },
  },
  
  userGuide: {
    sections: [
      {
        title: "Getting Started",
        content: "Learn how to set up and configure ScanHadir for your organization.",
      },
      {
        title: "Marking Attendance",
        content: "Step-by-step guide on how users can mark their attendance using QR codes.",
      },
      {
        title: "Managing Users",
        content: "Administrative guide for managing users, roles, and permissions.",
      },
      {
        title: "Reports & Analytics",
        content: "Generate and export comprehensive attendance reports.",
      },
    ],
  },
};
