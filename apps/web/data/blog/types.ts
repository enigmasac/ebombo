export type BlogContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  lang: "es" | "en";
  thumbnailUrl: string;
  wordCount: number;
  bodyContent: BlogContentBlock[];
}
