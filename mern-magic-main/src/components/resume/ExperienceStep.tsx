import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Briefcase } from 'lucide-react';
import { WorkExperience } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceStepProps {
  experiences: WorkExperience[];
  onChange: (experiences: WorkExperience[]) => void;
}

export const ExperienceStep = ({ experiences, onChange }: ExperienceStepProps) => {
  const addExperience = () => {
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onChange([...experiences, newExp]);
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: string) => {
    onChange(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Work Experience
        </h2>
        <p className="text-muted-foreground">
          Add your previous jobs - even informal work counts!
        </p>
      </div>

      {experiences.length === 0 ? (
        <Card className="border-dashed border-2 bg-muted/30">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Briefcase className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center mb-4">
              No experience added yet.<br />
              Click below to add your work history.
            </p>
            <Button onClick={addExperience} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-primary">
                    Experience #{index + 1}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeExperience(exp.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company/Employer</Label>
                      <Input
                        placeholder="Company name"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Your Role</Label>
                      <Input
                        placeholder="Job title"
                        value={exp.role}
                        onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input
                        placeholder="e.g., Jan 2022"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <Input
                        placeholder="e.g., Present"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="What did you do in this role?"
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button onClick={addExperience} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Another Experience
          </Button>
        </div>
      )}
    </div>
  );
};
