export interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  photo?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  objective: string;
  skills: string[];
  workExperience: WorkExperience[];
  education: Education[];
  languages: string[];
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    phone: '',
    email: '',
    location: '',
  },
  objective: '',
  skills: [],
  workExperience: [],
  education: [],
  languages: [],
};
