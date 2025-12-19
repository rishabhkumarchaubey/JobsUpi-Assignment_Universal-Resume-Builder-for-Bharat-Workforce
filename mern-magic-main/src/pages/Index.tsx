import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles, QrCode, Download, Smartphone, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Built for Bharat's Workforce
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Build Your Resume in
              <span className="text-gradient"> Minutes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Create a professional resume easily. Simple forms, instant PDF, and shareable QR code — designed for blue-collar and grey-collar workers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" variant="hero" className="text-lg px-8">
                <Link to="/builder">
                  <FileText className="w-5 h-5 mr-2" />
                  Create Your Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why ResumeKraft?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We built this specifically for workers who need a simple, quick way to create professional resumes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: 'Mobile-First Design',
                description: 'Create your resume on any device — phone, tablet, or computer',
              },
              {
                icon: FileText,
                title: 'Simple Step-by-Step',
                description: 'Easy guided form that asks the right questions, no confusion',
              },
              {
                icon: Download,
                title: 'Instant PDF Download',
                description: 'Get a professional PDF resume ready to share or print',
              },
              {
                icon: QrCode,
                title: 'QR Code Sharing',
                description: 'Employers can scan and view your profile instantly',
              },
              {
                icon: Globe,
                title: 'Online Profile',
                description: 'Get a shareable web link to your resume profile',
              },
              {
                icon: Sparkles,
                title: 'Professional Look',
                description: 'Clean, modern design that makes you stand out',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-warm flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Build Your Resume?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Join thousands of workers who've created their professional resume with ResumeKraft. It's free!
            </p>
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8">
              <Link to="/builder">
                Start Now — It's Free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-display font-semibold text-foreground mb-2">ResumeKraft</p>
          <p className="text-sm">Built for Bharat's hardworking professionals 🇮🇳</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
