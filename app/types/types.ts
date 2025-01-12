export interface LogoProps {
  width?: number;
  height?: number;
  className?: string;  // Added className prop
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}