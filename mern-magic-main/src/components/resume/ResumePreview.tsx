import { forwardRef } from 'react';
import { ResumeData } from '@/types/resume';
import { Phone, Mail, MapPin, User } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  compact?: boolean;
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, compact = false }, ref) => {
    const { personalInfo, objective, skills, workExperience, education, languages } = data;

    return (
      <div
        ref={ref}
        className={`bg-white text-gray-800 ${compact ? 'p-4 text-xs' : 'p-8'} shadow-lg rounded-lg`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Header */}
        <div className={`border-b-2 border-orange-400 ${compact ? 'pb-3 mb-3' : 'pb-6 mb-6'}`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
              {personalInfo.fullName ? personalInfo.fullName.charAt(0).toUpperCase() : <User className="w-8 h-8" />}
            </div>
            <div className="flex-1">
              <h1 className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-2xl md:text-3xl'}`}>
                {personalInfo.fullName || 'Your Name'}
              </h1>
              <div className={`flex flex-wrap gap-3 mt-2 text-gray-600 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                {personalInfo.phone && (
                  <span className="flex items-center gap-1">
                    <Phone className={compact ? 'w-3 h-3' : 'w-4 h-4'} />
                    {personalInfo.phone}
                  </span>
                )}
                {personalInfo.email && (
                  <span className="flex items-center gap-1">
                    <Mail className={compact ? 'w-3 h-3' : 'w-4 h-4'} />
                    {personalInfo.email}
                  </span>
                )}
                {personalInfo.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className={compact ? 'w-3 h-3' : 'w-4 h-4'} />
                    {personalInfo.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Objective */}
        {objective && (
          <div className={compact ? 'mb-3' : 'mb-6'}>
            <h2 className={`font-bold text-orange-500 ${compact ? 'text-sm mb-1' : 'text-lg mb-2'}`}>
              Career Objective
            </h2>
            <p className="text-gray-700">{objective}</p>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className={compact ? 'mb-3' : 'mb-6'}>
            <h2 className={`font-bold text-orange-500 ${compact ? 'text-sm mb-1' : 'text-lg mb-2'}`}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`bg-orange-50 text-orange-700 border border-orange-200 rounded-full ${compact ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-sm'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <div className={compact ? 'mb-3' : 'mb-6'}>
            <h2 className={`font-bold text-orange-500 ${compact ? 'text-sm mb-1' : 'text-lg mb-2'}`}>
              Work Experience
            </h2>
            <div className="space-y-3">
              {workExperience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-200 pl-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-semibold text-gray-900 ${compact ? 'text-xs' : 'text-base'}`}>
                        {exp.role || 'Role'}
                      </h3>
                      <p className={`text-gray-600 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                        {exp.company || 'Company'}
                      </p>
                    </div>
                    <span className={`text-gray-500 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  {exp.description && (
                    <p className={`text-gray-700 mt-1 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className={compact ? 'mb-3' : 'mb-6'}>
            <h2 className={`font-bold text-orange-500 ${compact ? 'text-sm mb-1' : 'text-lg mb-2'}`}>
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <span className={`font-medium text-gray-900 ${compact ? 'text-xs' : ''}`}>
                      {edu.degree || 'Degree'}
                    </span>
                    <span className={`text-gray-600 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                      {' '}— {edu.institution || 'Institution'}
                    </span>
                  </div>
                  <span className={`text-gray-500 ${compact ? 'text-[10px]' : 'text-sm'}`}>
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className={`font-bold text-orange-500 ${compact ? 'text-sm mb-1' : 'text-lg mb-2'}`}>
              Languages
            </h2>
            <p className="text-gray-700">{languages.join(', ')}</p>
          </div>
        )}
      </div>
    );
  }
);

ResumePreview.displayName = 'ResumePreview';
