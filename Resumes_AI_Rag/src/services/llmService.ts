import { ResumeCandidate } from '../types';

export async function rerankCandidates(query: string, candidates: ResumeCandidate[], topK = 8) {
  // Stub: simple lexical scoring — count query tokens in snippet
  const qTokens = query.toLowerCase().split(/\s+/);
  const scored = candidates.map(c => {
    const text = (c.snippet || '') + ' ' + JSON.stringify(c.metadata || {});
    const score = qTokens.reduce((s, t) => s + (text.toLowerCase().includes(t) ? 1 : 0), 0);
    return { ...c, score };
  });
  scored.sort((a, b) => (b.score || 0) - (a.score || 0));
  return scored.slice(0, topK).map(c => ({ id: c.resumeId, score: c.score, reason: 'lexical match' }));
}

export async function summarizeCandidateFit(query: string, candidate: ResumeCandidate, options: { style?: string, maxTokens?: number } = {}) {
  // Stub summary
  const summary = `Candidate ${candidate.metadata?.name || candidate.resumeId} matches query with score ${candidate.score || 0}.`;
  return { id: candidate.resumeId, summary, fitScore: Math.round((candidate.score || 0) * 10) };
}

export async function extractMetadata(rawText: string) {
  // Very small stub: extract lines that look like skills
  const skills = rawText.match(/\b(JavaScript|Node|Mongo|SQL|Python|Java|Selenium|Jenkins)\b/gi) || [];
  return { skills: Array.from(new Set(skills)), jobTitles: [], experienceSummary: '' };
}
