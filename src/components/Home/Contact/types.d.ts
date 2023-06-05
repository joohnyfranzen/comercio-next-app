export type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  contact: string;
  href?: string;
  onClick?: () => void;
};
