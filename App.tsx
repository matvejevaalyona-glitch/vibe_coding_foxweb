
import React, { useState, useEffect } from 'react';
import { generateBrandingConcept } from './services/geminiService';
import type { BrandingData } from './types';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { ColorPalette } from './components/ColorPalette';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';
import { FoxIcon, SparklesIcon, PenIcon, PaletteIcon, MegaphoneIcon, RocketIcon, HeartIcon, ChatBubbleIcon, ImageIcon } from './components/Icons';

const App: React.FC = () => {
  const [brandingData, setBrandingData] = useState<BrandingData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrandingData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await generateBrandingConcept();
        setBrandingData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to generate branding concept: ${err.message}`);
        } else {
          setError('An unknown error occurred.');
        }
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrandingData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorDisplay message={error} />;
    }

    if (!brandingData) {
      return null;
    }

    const {
      brandIdentity,
      mascotDescription,
      marketingAssets,
      designGuidance,
      optionalExtras,
    } = brandingData;

    return (
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        <Section title="Brand Identity" icon={<SparklesIcon />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Business Names">
              <ul className="list-disc list-inside space-y-2 text-brand-brown/90">
                {brandIdentity.nameIdeas.map((name, i) => <li key={i}>{name}</li>)}
              </ul>
            </Card>
            <Card title="Slogans & Taglines">
              <ul className="list-disc list-inside space-y-2 text-brand-brown/90">
                {brandIdentity.slogans.map((slogan, i) => <li key={i}>{slogan}</li>)}
              </ul>
            </Card>
            <Card title="Personality Traits">
              <p className="text-brand-brown/90">{brandIdentity.personalityTraits.join(', ')}.</p>
            </Card>
            <Card title="Emotional Value">
               <p className="text-brand-brown/90">{brandIdentity.emotionalValue}</p>
            </Card>
          </div>
        </Section>

        <Section title="Mascot: The Mooing Fox" icon={<FoxIcon />}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card title="Visual Design">{mascotDescription.visualDesign}</Card>
            <Card title="The 'Moo' Moment">{mascotDescription.mooContext}</Card>
            <Card title="Brand Role">{mascotDescription.brandReinforcement}</Card>
          </div>
        </Section>

        <Section title="Marketing Assets" icon={<MegaphoneIcon />}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card title="Ad Copy Examples">
                  <ul className="space-y-4 text-sm">
                      {marketingAssets.adCopy.map((ad, i) => (
                          <li key={i} className="p-3 bg-brand-cream/60 rounded-md border border-brand-orange/20">
                            <strong className="text-brand-teal">{ad.platform}:</strong> "{ad.copy}"
                          </li>
                      ))}
                  </ul>
              </Card>
               <Card title="Tone-of-Voice">
                   <p>{marketingAssets.toneOfVoice}</p>
               </Card>
               <Card title="Origin Story Hook">
                   <p className="italic">"{marketingAssets.originStoryHook}"</p>
               </Card>
                <Card title="Jingle / Catchphrase">
                   <p className="text-center font-display text-xl text-brand-teal">{marketingAssets.jingle}</p>
               </Card>
          </div>
        </Section>

        <Section title="Design Guidance" icon={<PaletteIcon />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="Color Palette">
                    <ColorPalette palette={designGuidance.colorPalette} />
                </Card>
                <Card title="Illustration Style">
                    <p>{designGuidance.illustrationStyle}</p>
                </Card>
                <Card title="Logo Ideas">
                    <p>{designGuidance.logoIdeas}</p>
                </Card>
                 <Card title="Interior Aesthetic">
                    <p>{designGuidance.interiorAesthetic}</p>
                </Card>
            </div>
        </Section>

        <Section title="Bonus Ideas" icon={<RocketIcon />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Mascot Greeting" icon={<ChatBubbleIcon />}>
                  <p className="italic">"{optionalExtras.mascotGreeting}"</p>
                </Card>
                 <Card title="Social Media Plan" icon={<ImageIcon />}>
                  <ul className="space-y-4">
                      {optionalExtras.socialMediaPlan.map((post, i) => (
                          <li key={i} className="p-3 bg-brand-cream/60 rounded-md border border-brand-orange/20">
                            <strong className="text-brand-teal">Post {i+1}: {post.theme}</strong>
                            <p className="text-sm text-brand-brown/90 mt-1">{post.idea}</p>
                          </li>
                      ))}
                  </ul>
                </Card>
            </div>
        </Section>

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-cream font-body text-brand-brown">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Header />
        <div className="mt-12">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-8 border-t border-brand-orange/20 mt-16">
          <p className="flex items-center justify-center gap-2 text-sm text-brand-brown/70">
            Generated with love <HeartIcon /> and a bit of surreal fun.
          </p>
      </footer>
    </div>
  );
};

export default App;
