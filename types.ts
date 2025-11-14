
export interface BrandIdentity {
  nameIdeas: string[];
  slogans: string[];
  personalityTraits: string[];
  emotionalValue: string;
}

export interface MascotDescription {
  visualDesign: string;
  mooContext: string;
  brandReinforcement: string;
}

export interface AdCopy {
    platform: string;
    copy: string;
}

export interface MarketingAssets {
  adCopy: AdCopy[];
  toneOfVoice: string;
  originStoryHook: string;
  jingle: string;
}

export interface ColorInfo {
    name: string;
    hex: string;
    description: string;
}

export interface DesignGuidance {
  colorPalette: ColorInfo[];
  illustrationStyle: string;
  logoIdeas: string;
  interiorAesthetic: string;
}

export interface SocialMediaPost {
    theme: string;
    idea: string;
}

export interface OptionalExtras {
  mascotGreeting: string;
  socialMediaPlan: SocialMediaPost[];
}

export interface BrandingData {
  brandIdentity: BrandIdentity;
  mascotDescription: MascotDescription;
  marketingAssets: MarketingAssets;
  designGuidance: DesignGuidance;
  optionalExtras: OptionalExtras;
}
