export type Experience = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};
