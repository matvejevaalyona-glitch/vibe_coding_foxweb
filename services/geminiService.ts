
import { GoogleGenAI, Type } from "@google/genai";
import type { BrandingData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const prompt = `
You are a creative branding and marketing assistant.
Create a complete and cohesive branding guide for a new hairdressing business.

The core concept is this: the mascot is a cute, friendly, walking fox that unexpectedly makes cow-style “moo” sounds.
The brand tone must be playful, memorable, wholesome, and slightly surreal. It should appeal to families, young adults, and anyone who appreciates quirky, charming brands.

Generate a comprehensive set of branding assets based on this concept. Your entire output must be a single JSON object that conforms to the provided schema. Do not include any text, markdown formatting, or code fences before or after the JSON object. Ensure the content is charming, cohesive, and visually evocative.
`;

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    brandIdentity: {
      type: Type.OBJECT,
      properties: {
        nameIdeas: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Generate 5-10 creative business name ideas."
        },
        slogans: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Generate 3-5 slogan options referencing hair, the fox, and the 'moo'."
        },
        personalityTraits: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "List 4-6 key brand personality traits."
        },
        emotionalValue: {
          type: Type.STRING,
          description: "Describe the core emotional value the brand gives to customers."
        },
      },
      required: ["nameIdeas", "slogans", "personalityTraits", "emotionalValue"],
    },
    mascotDescription: {
      type: Type.OBJECT,
      properties: {
        visualDesign: {
          type: Type.STRING,
          description: "Describe the visual design of the walking fox mascot."
        },
        mooContext: {
          type: Type.STRING,
          description: "Explain how and when the mascot makes its 'moo' sound."
        },
        brandReinforcement: {
          type: Type.STRING,
          description: "Explain how the mascot reinforces the brand identity."
        },
      },
      required: ["visualDesign", "mooContext", "brandReinforcement"],
    },
    marketingAssets: {
        type: Type.OBJECT,
        properties: {
            adCopy: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        platform: { type: Type.STRING },
                        copy: { type: Type.STRING },
                    },
                     required: ["platform", "copy"],
                },
                description: "Write 3 short ad copy examples for different platforms (e.g., Social Media, Poster)."
            },
            toneOfVoice: {
                type: Type.STRING,
                description: "Provide a brief tone-of-voice guide."
            },
            originStoryHook: {
                type: Type.STRING,
                description: "Write a short, whimsical storytelling hook for the brand's origin."
            },
            jingle: {
                type: Type.STRING,
                description: "Create a simple, catchy jingle or catchphrase including the mooing fox."
            }
        },
        required: ["adCopy", "toneOfVoice", "originStoryHook", "jingle"],
    },
    designGuidance: {
        type: Type.OBJECT,
        properties: {
            colorPalette: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING },
                        hex: { type: Type.STRING },
                        description: { type: Type.STRING }
                    },
                    required: ["name", "hex", "description"],
                },
                description: "Suggest a color palette with 4-5 colors, including names, hex codes, and brief descriptions."
            },
            illustrationStyle: {
                type: Type.STRING,
                description: "Describe a suitable illustration style for the brand."
            },
            logoIdeas: {
                type: Type.STRING,
                description: "Suggest a couple of logo concepts."
            },
            interiorAesthetic: {
                type: Type.STRING,
                description: "Describe a hair salon interior aesthetic that matches the brand."
            }
        },
        required: ["colorPalette", "illustrationStyle", "logoIdeas", "interiorAesthetic"],
    },
    optionalExtras: {
        type: Type.OBJECT,
        properties: {
            mascotGreeting: {
                type: Type.STRING,
                description: "A short, mascot-led greeting message for customers."
            },
            socialMediaPlan: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        theme: { type: Type.STRING },
                        idea: { type: Type.STRING }
                    },
                    required: ["theme", "idea"],
                },
                description: "Outline a mini social media plan with ideas for 3 posts."
            }
        },
        required: ["mascotGreeting", "socialMediaPlan"],
    }
  },
  required: ["brandIdentity", "mascotDescription", "marketingAssets", "designGuidance", "optionalExtras"],
};


export const generateBrandingConcept = async (): Promise<BrandingData> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);

    return parsedData as BrandingData;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to fetch or parse branding data from the AI model.");
  }
};
