export type FuzzyMatch<T> = {
  readonly item: T;
  readonly score: number;
};

function scoreText(text: string, query: string): number {
  const t = text.toLowerCase();
  const q = query.toLowerCase();

  if (t === q) return 1.0;
  if (t.startsWith(q)) return 0.9;
  if (t.includes(q)) return 0.75;

  // Character-sequence fuzzy match
  let qi = 0;
  let consecutive = 0;
  let rawScore = 0;

  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      qi++;
      consecutive++;
      rawScore += 1 + consecutive * 0.1;
    } else {
      consecutive = 0;
    }
  }

  if (qi < q.length) return 0;
  return Math.min((rawScore / q.length) * 0.5, 0.65);
}

export function fuzzySearch<T>(
  items: readonly T[],
  query: string,
  getFields: (item: T) => readonly string[]
): FuzzyMatch<T>[] {
  const q = query.trim();
  if (!q) return [];

  const results: FuzzyMatch<T>[] = [];

  for (const item of items) {
    const fields = getFields(item);
    let best = 0;
    for (const field of fields) {
      const s = scoreText(field, q);
      if (s > best) best = s;
    }
    if (best > 0) {
      results.push({ item, score: best });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
