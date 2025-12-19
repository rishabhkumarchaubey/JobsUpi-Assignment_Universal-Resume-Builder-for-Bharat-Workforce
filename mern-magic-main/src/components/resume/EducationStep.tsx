import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, GraduationCap, Languages } from 'lucide-react';
import { Education } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface EducationStepProps {
  education: Education[];
  languages: string[];
  onEducationChange: (education: Education[]) => void;
  onLanguagesChange: (languages: string[]) => void;
}

const suggestedLanguages = ['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi'];

export const EducationStep = ({
  education,
  languages,
  onEducationChange,
  onLanguagesChange,
}: EducationStepProps) => {
  const [newLanguage, setNewLanguage] = useState('');

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      year: '',
    };
    onEducationChange([...education, newEdu]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onEducationChange(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const removeEducation = (id: string) => {
    onEducationChange(education.filter((edu) => edu.id !== id));
  };

  const addLanguage = (lang: string) => {
    const trimmed = lang.trim();
    if (trimmed && !languages.includes(trimmed)) {
      onLanguagesChange([...languages, trimmed]);
      setNewLanguage('');
    }
  };

  const removeLanguage = (index: number) => {
    onLanguagesChange(languages.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Education & Languages
        </h2>
        <p className="text-muted-foreground">
          Add your educational background and languages you speak
        </p>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <Label className="flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="w-5 h-5 text-primary" />
          Education
        </Label>

        {education.length === 0 ? (
          <Card className="border-dashed border-2 bg-muted/30">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <p className="text-muted-foreground text-center mb-4">
                No education added yet.
              </p>
              <Button onClick={addEducation} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={edu.id} className="shadow-soft">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-primary">
                      Education #{index + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeEducation(edu.id)}
                      className="text-destructive hover:text-destructive h-8 w-8"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Institution</Label>
                      <Input
                        placeholder="School/College name"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Degree/Class</Label>
                      <Input
                        placeholder="e.g., 10th Pass, ITI"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Year</Label>
                      <Input
                        placeholder="e.g., 2020"
                        value={edu.year}
                        onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button onClick={addEducation} variant="outline" className="w-full" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Another
            </Button>
          </div>
        )}
      </div>

      {/* Languages Section */}
      <div className="space-y-4">
        <Label className="flex items-center gap-2 text-lg font-semibold">
          <Languages className="w-5 h-5 text-primary" />
          Languages You Speak
        </Label>

        <div className="flex gap-2">
          <Input
            placeholder="Add a language..."
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addLanguage(newLanguage)}
          />
          <Button onClick={() => addLanguage(newLanguage)} size="icon">
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {languages.length > 0 && (
          <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
            {languages.map((lang, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground gap-2"
              >
                {lang}
                <button onClick={() => removeLanguage(index)} className="hover:opacity-70">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {suggestedLanguages
            .filter((l) => !languages.includes(l))
            .slice(0, 6)
            .map((lang) => (
              <button
                key={lang}
                onClick={() => addLanguage(lang)}
                className="px-3 py-1 text-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                + {lang}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
