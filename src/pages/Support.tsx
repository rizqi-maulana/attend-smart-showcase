import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MessageCircle, Clock, HelpCircle, Bug, Settings, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim",
      description: "Tim support kami akan menghubungi Anda dalam 24 jam.",
    });
    setFormData({ name: '', email: '', category: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "support@scanhadir.com",
      response: "Respons dalam 24 jam",
      action: "Kirim Email"
    },
    {
      icon: Phone,
      title: "Telepon",
      description: "+62 21 1234 5678",
      response: "Senin-Jumat, 08:00-17:00",
      action: "Hubungi Sekarang"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat langsung dengan tim kami",
      response: "Tersedia 24/7",
      action: "Mulai Chat"
    }
  ];

  const faqData = [
    {
      icon: HelpCircle,
      question: "Bagaimana cara reset password akun admin?",
      answer: "Hubungi tim support dengan menyertakan email admin dan nama institusi. Kami akan mengirimkan link reset dalam 2 jam kerja."
    },
    {
      icon: Bug,
      question: "Aplikasi mobile tidak bisa scan QR code",
      answer: "Pastikan izin kamera telah diberikan, restart aplikasi, dan periksa pencahayaan. Jika masih bermasalah, clear cache aplikasi."
    },
    {
      icon: Settings,
      question: "Cara mengubah pengaturan lokasi GPS?",
      answer: "Masuk ke Dashboard → Pengaturan → Lokasi. Admin dapat mengatur radius dan koordinat untuk setiap sesi absensi."
    },
    {
      icon: Users,
      question: "Bagaimana menambah pengguna dalam jumlah besar?",
      answer: "Gunakan fitur import Excel di menu Pengguna → Import Data. Download template yang disediakan untuk format yang benar."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pusat Bantuan</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim support ScanHadir siap membantu Anda 24/7 untuk memastikan pengalaman terbaik menggunakan platform kami
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <channel.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 font-semibold mb-2">{channel.description}</p>
                  <p className="text-sm text-gray-600 mb-4">{channel.response}</p>
                  <Button className="w-full" variant="outline">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@institusi.ac.id"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori Masalah
                    </label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori masalah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Masalah Teknis</SelectItem>
                        <SelectItem value="account">Akun & Login</SelectItem>
                        <SelectItem value="billing">Billing & Pembayaran</SelectItem>
                        <SelectItem value="feature">Permintaan Fitur</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Jelaskan masalah atau pertanyaan Anda secara detail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Pertanyaan Umum</h2>
              
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <faq.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{faq.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <Card className="mt-12">
            <CardHeader>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle className="text-center">Waktu Respons Kami</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email Support</h4>
                  <p className="text-gray-600">Maksimal 24 jam</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Live Chat</h4>
                  <p className="text-gray-600">2-5 menit</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Telepon</h4>
                  <p className="text-gray-600">Langsung tersambung</p>
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

export default Support;