// ===========================
// Image Generation Questions
// Optimized for AI Art Tools (Midjourney, DALL-E, Stable Diffusion)
// ===========================

const IMAGE_GENERATION_QUESTIONS = [
    {
        id: 'image_concept',
        question: 'Describe your image vision',
        description: 'Be extremely specific: subject, setting, action, atmosphere, and key details.',
        type: 'textarea',
        placeholder: 'Example: A futuristic cyberpunk cityscape at sunset, neon-lit skyscrapers reflecting in rain-soaked streets, flying cars in the distance, a lone figure in a glowing jacket walking through the scene, cinematic lighting with purple and orange hues...',
        required: true
    },
    {
        id: 'art_style',
        question: 'Visual style and medium?',
        description: 'Choose the artistic approach for your image.',
        type: 'cards',
        options: [
            { value: 'photorealistic-8k', label: 'Photorealistic', icon: 'camera', description: 'Ultra-realistic, 8K quality' },
            { value: 'digital-art-detailed', label: 'Digital Art', icon: 'monitor', description: 'Polished digital painting' },
            { value: 'oil-painting-classical', label: 'Oil Painting', icon: 'droplet', description: 'Traditional art style' },
            { value: 'anime-manga-style', label: 'Anime/Manga', icon: 'smile', description: 'Japanese animation style' },
            { value: '3d-render-octane', label: '3D Render', icon: 'box', description: 'Octane render, CGI' },
            { value: 'minimalist-vector', label: 'Minimalist', icon: 'circle', description: 'Clean, simple, vector' },
            { value: 'watercolor-artistic', label: 'Watercolor', icon: 'feather', description: 'Soft, flowing colors' },
            { value: 'concept-art-detailed', label: 'Concept Art', icon: 'layers', description: 'Game/movie concept' }
        ],
        required: true
    },
    {
        id: 'lighting_atmosphere',
        question: 'Lighting and atmosphere?',
        description: 'Define the mood through lighting and environmental effects.',
        type: 'cards',
        options: [
            { value: 'golden-hour-warm', label: 'Golden Hour', icon: 'sun', description: 'Warm, soft, magical' },
            { value: 'dramatic-cinematic', label: 'Dramatic', icon: 'film', description: 'High contrast, cinematic' },
            { value: 'soft-diffused-natural', label: 'Soft Natural', icon: 'cloud', description: 'Even, gentle lighting' },
            { value: 'neon-cyberpunk', label: 'Neon/Cyberpunk', icon: 'zap', description: 'Vibrant, glowing lights' },
            { value: 'moody-dark-atmospheric', label: 'Moody Dark', icon: 'moon', description: 'Mysterious, shadowy' },
            { value: 'studio-professional', label: 'Studio', icon: 'aperture', description: 'Professional, controlled' }
        ],
        required: true
    },
    {
        id: 'color_palette',
        question: 'Color scheme and palette?',
        description: 'Specify colors, tones, and color relationships.',
        type: 'textarea',
        placeholder: 'Example: Vibrant purple and cyan with gold accents, high saturation, complementary color scheme, neon glow effects...',
        required: true
    },
    {
        id: 'composition_framing',
        question: 'Composition and framing?',
        description: 'How should the image be composed?',
        type: 'cards',
        options: [
            { value: 'rule-of-thirds', label: 'Rule of Thirds', icon: 'grid', description: 'Balanced, professional' },
            { value: 'centered-symmetrical', label: 'Centered', icon: 'crosshair', description: 'Symmetrical, focused' },
            { value: 'dynamic-diagonal', label: 'Dynamic', icon: 'trending-up', description: 'Action, movement' },
            { value: 'wide-angle-panoramic', label: 'Wide Angle', icon: 'maximize', description: 'Expansive view' },
            { value: 'close-up-detailed', label: 'Close-up', icon: 'zoom-in', description: 'Intimate, detailed' },
            { value: 'aerial-birds-eye', label: 'Aerial View', icon: 'navigation', description: 'Top-down perspective' }
        ],
        required: true
    },
    {
        id: 'quality_details',
        question: 'Quality and detail level?',
        description: 'Technical specifications for the output.',
        type: 'cards',
        options: [
            { value: 'ultra-detailed-8k', label: 'Ultra Detailed', icon: 'cpu', description: '8K, intricate details' },
            { value: 'high-quality-4k', label: 'High Quality', icon: 'award', description: '4K, sharp, clear' },
            { value: 'stylized-artistic', label: 'Stylized', icon: 'feather', description: 'Artistic interpretation' },
            { value: 'simple-clean', label: 'Simple', icon: 'minimize', description: 'Clean, minimal detail' }
        ],
        required: true
    },
    {
        id: 'technical_parameters',
        question: 'Technical parameters and modifiers?',
        description: 'Advanced settings: camera, lens, rendering, artistic influences.',
        type: 'textarea',
        placeholder: 'Example: Shot with Canon EOS R5, 85mm f/1.4 lens, shallow depth of field, bokeh background, trending on ArtStation, inspired by Simon Stålenhag, unreal engine 5, ray tracing, volumetric lighting...',
        required: false
    }
];
