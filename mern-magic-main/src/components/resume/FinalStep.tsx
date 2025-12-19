import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/types/resume';
import { ResumePreview } from './ResumePreview';
import { Download, QrCode, Share2, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

interface FinalStepProps {
  data: ResumeData;
}

export const FinalStep = ({ data }: FinalStepProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  
  // Generate a unique ID for the resume (in production, this would come from backend)
  const resumeId = btoa(JSON.stringify({ name: data.personalInfo.fullName, phone: data.personalInfo.phone })).slice(0, 12);
  const profileUrl = `${window.location.origin}/profile/${resumeId}`;

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    
    toast.loading('Generating PDF...');
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${data.personalInfo.fullName || 'resume'}_resume.pdf`);
      
      toast.dismiss();
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to generate PDF');
    }
  };

  const shareResume = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.personalInfo.fullName}'s Resume`,
          text: 'Check out my professional resume!',
          url: profileUrl,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      navigator.clipboard.writeText(profileUrl);
      toast.success('Profile link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Your resume is ready! 🎉
        </h2>
        <p className="text-muted-foreground">
          Download your PDF or share your profile with employers
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Resume Preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-4">
            <ResumePreview ref={resumeRef} data={data} />
          </div>
        </div>

        {/* Actions & QR Code */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardContent className="pt-6 space-y-4">
              <Button onClick={downloadPDF} className="w-full" size="lg" variant="hero">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              
              <Button onClick={shareResume} className="w-full" size="lg" variant="outline">
                <Share2 className="w-5 h-5 mr-2" />
                Share Resume
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">QR Code</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Employers can scan this to view your profile instantly
              </p>
              <div className="flex justify-center p-4 bg-white rounded-lg border">
                <QRCodeSVG
                  value={profileUrl}
                  size={160}
                  level="H"
                  includeMargin
                  fgColor="#1a365d"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3 break-all">
                {profileUrl}
              </p>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-sm mb-2">✨ Tips for sharing</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Print the QR code on your business card</li>
              <li>• Share the PDF via WhatsApp</li>
              <li>• Add the link to your social profiles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
