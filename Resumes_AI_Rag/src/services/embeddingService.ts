export async function embedText(text: string, model = 'mistral-embed') {
  // Stub: return a deterministic pseudo-random embedding based on text length
  const dim = 8; // small dim for stub
  const base = text.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const vec = Array.from({ length: dim }, (_, i) => ((base * (i + 1)) % 100) / 100);
  return { model, embedding: vec };
}
