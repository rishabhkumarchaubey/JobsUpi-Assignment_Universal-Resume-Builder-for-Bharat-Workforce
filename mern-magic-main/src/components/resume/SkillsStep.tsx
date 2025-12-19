import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, X, Target, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SkillsStepProps {
  objective: string;
  skills: string[];
  onObjectiveChange: (objective: string) => void;
  onSkillsChange: (skills: string[]) => void;
}

const suggestedSkills = [
  'Driving', 'Cooking', 'Cleaning', 'Customer Service', 'Delivery',
  'Security', 'Electrical', 'Plumbing', 'Carpentry', 'Tailoring',
  'Computer Basics', 'English Speaking', 'Hindi Speaking', 'Sales'
];

export const SkillsStep = ({ objective, skills, onObjectiveChange, onSkillsChange }: SkillsStepProps) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onSkillsChange([...skills, trimmed]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    onSkillsChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          Your skills & goals
        </h2>
        <p className="text-muted-foreground">
          Share what you're good at and what kind of work you're looking for
        </p>
      </div>

      <div className="space-y-4">
        <Label htmlFor="objective" className="flex items-center gap-2 text-foreground font-medium">
          <Target className="w-4 h-4 text-primary" />
          Career Objective
        </Label>
        <Textarea
          id="objective"
          placeholder="What kind of job are you looking for? (e.g., Looking for a delivery job in Bangalore with good pay and flexible hours)"
          value={objective}
          onChange={(e) => onObjectiveChange(e.target.value)}
          className="min-h-[100px] text-base"
        />
      </div>

      <div className="space-y-4">
        <Label className="flex items-center gap-2 text-foreground font-medium">
          <Wrench className="w-4 h-4 text-primary" />
          Your Skills
        </Label>

        <div className="flex gap-2">
          <Input
            placeholder="Add a skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill(newSkill)}
            className="h-12"
          />
          <Button onClick={() => addSkill(newSkill)} size="icon" className="h-12 w-12">
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1.5 text-sm bg-accent text-accent-foreground gap-2"
              >
                {skill}
                <button onClick={() => removeSkill(index)} className="hover:opacity-70">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Quick add common skills:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills
              .filter((s) => !skills.includes(s))
              .slice(0, 8)
              .map((skill) => (
                <button
                  key={skill}
                  onClick={() => addSkill(skill)}
                  className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  + {skill}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
