export interface SocialLink {
  label: string;
  value: string;
  image?: string;
  validator?: (val: string) => boolean;
}
