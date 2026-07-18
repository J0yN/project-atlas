export type SearchResultType = 'page' | 'section' | 'command' | 'project';

export type SearchResult = {
  readonly id: string;
  readonly type: SearchResultType;
  readonly title: string;
  readonly description?: string;
  readonly href?: string;
  readonly category?: string;
  readonly keywords?: readonly string[];
};

export type RecentSearch = {
  readonly id: string;
  readonly query: string;
  readonly timestamp: number;
};
