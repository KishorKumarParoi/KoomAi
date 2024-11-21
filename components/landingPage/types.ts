export interface NavItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  companyLogo?: string;
  rating: number;
}

export interface CTAButtonProps {
  label: string;
  variant: "primary" | "secondary";
  icon?: string;
}
