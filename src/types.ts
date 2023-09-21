interface Link {
  type: "Website" | "App Store" | "Google Play";
  href: string;
}

export interface ProjectFrontMatter {
  title: string;
  image: string;
  description: string;
  type: "Client" | "Internal";
  links: Link[];
}
