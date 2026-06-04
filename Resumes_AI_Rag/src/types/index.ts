export interface ResumeCandidate {
  resumeId: string;
  snippet: string;
  score?: number;
  metadata?: Record<string, any>;
}
