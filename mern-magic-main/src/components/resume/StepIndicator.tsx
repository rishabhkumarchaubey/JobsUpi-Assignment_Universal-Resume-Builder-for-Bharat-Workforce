import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                index < currentStep
                  ? "bg-accent text-accent-foreground"
                  : index === currentStep
                  ? "bg-gradient-warm text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={cn(
                "text-xs mt-2 hidden md:block font-medium transition-colors",
                index <= currentStep ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-8 md:w-16 h-1 mx-2 rounded-full transition-colors",
                index < currentStep ? "bg-accent" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};
