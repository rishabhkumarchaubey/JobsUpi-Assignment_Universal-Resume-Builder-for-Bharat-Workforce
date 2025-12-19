import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PersonalInfo } from '@/types/resume';
import { User, Phone, Mail, MapPin } from 'lucide-react';

interface PersonalInfoStepProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoStep = ({ data, onChange }: PersonalInfoStepProps) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Let's start with your details
        </h2>
        <p className="text-muted-foreground">
          Tell us about yourself so employers can reach you
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-medium">
            <User className="w-4 h-4 text-primary" />
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="h-12 text-base"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
              <Mail className="w-4 h-4 text-primary" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="h-12 text-base"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2 text-foreground font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            Location
          </Label>
          <Input
            id="location"
            placeholder="City, State"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="h-12 text-base"
          />
        </div>
      </div>
    </div>
  );
};
