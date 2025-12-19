import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { StepIndicator } from '@/components/resume/StepIndicator';
import { PersonalInfoStep } from '@/components/resume/PersonalInfoStep';
import { SkillsStep } from '@/components/resume/SkillsStep';
import { ExperienceStep } from '@/components/resume/ExperienceStep';
import { EducationStep } from '@/components/resume/EducationStep';
import { FinalStep } from '@/components/resume/FinalStep';
import { ResumePreview } from '@/components/resume/ResumePreview';
import { ResumeData, initialResumeData } from '@/types/resume';
import { ArrowLeft, ArrowRight, Eye, EyeOff, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = ['Personal', 'Skills', 'Experience', 'Education', 'Finish'];

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [showPreview, setShowPreview] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep
            data={resumeData.personalInfo}
            onChange={(personalInfo) => setResumeData({ ...resumeData, personalInfo })}
          />
        );
      case 1:
        return (
          <SkillsStep
            objective={resumeData.objective}
            skills={resumeData.skills}
            onObjectiveChange={(objective) => setResumeData({ ...resumeData, objective })}
            onSkillsChange={(skills) => setResumeData({ ...resumeData, skills })}
          />
        );
      case 2:
        return (
          <ExperienceStep
            experiences={resumeData.workExperience}
            onChange={(workExperience) => setResumeData({ ...resumeData, workExperience })}
          />
        );
      case 3:
        return (
          <EducationStep
            education={resumeData.education}
            languages={resumeData.languages}
            onEducationChange={(education) => setResumeData({ ...resumeData, education })}
            onLanguagesChange={(languages) => setResumeData({ ...resumeData, languages })}
          />
        );
      case 4:
        return <FinalStep data={resumeData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-display font-bold">ResumeKraft</span>
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="lg:hidden"
          >
            {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {showPreview ? 'Hide' : 'Preview'}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Form Section */}
          <div className={showPreview ? 'hidden lg:block' : ''}>
            <Card className="shadow-soft">
              <CardContent className="p-6 md:p-8">
                {renderStep()}

                {/* Navigation */}
                {currentStep < 4 && (
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={nextStep} variant="hero">
                      {currentStep === 3 ? 'Generate Resume' : 'Next'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'} lg:sticky lg:top-24 lg:self-start`}>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
                Live Preview
              </h3>
              <div className="transform scale-[0.85] origin-top">
                <ResumePreview data={resumeData} compact />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
