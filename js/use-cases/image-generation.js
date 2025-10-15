// ===========================
// Image Generation Questions
// ===========================

const IMAGE_GENERATION_QUESTIONS = [
    {
        id: 'task',
        question: 'What image do you want to create?',
        description: 'Describe the image you want to generate. Be specific about the subject and scene.',
        type: 'textarea',
        placeholder: 'Example: Create a modern minimalist logo for a sustainable coffee brand featuring a coffee bean and leaf...',
        required: true
    },
    {
        id: 'art_style',
        question: 'What art style do you prefer?',
        description: 'Choose the visual style for your image.',
        type: 'cards',
        options: [
            { value: 'realistic', label: 'Realistic', icon: 'camera', description: 'Photo-realistic imagery' },
            { value: 'minimalist', label: 'Minimalist', icon: 'circle', description: 'Simple and clean' },
            { value: 'abstract', label: 'Abstract', icon: 'aperture', description: 'Artistic and conceptual' },
            { value: 'cartoon', label: 'Cartoon', icon: 'smile', description: 'Playful and illustrated' },
            { value: 'vintage', label: 'Vintage', icon: 'clock', description: 'Retro and classic' },
            { value: '3d', label: '3D Render', icon: 'box', description: 'Three-dimensional look' }
        ],
        required: true
    },
    {
        id: 'mood',
        question: 'What mood should it convey?',
        description: 'Choose the emotional feel of the image.',
        type: 'cards',
        options: [
            { value: 'energetic', label: 'Energetic', icon: 'zap', description: 'Dynamic and vibrant' },
            { value: 'calm', label: 'Calm', icon: 'cloud', description: 'Peaceful and serene' },
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Corporate and sleek' },
            { value: 'playful', label: 'Playful', icon: 'smile', description: 'Fun and lighthearted' },
            { value: 'elegant', label: 'Elegant', icon: 'award', description: 'Sophisticated and refined' },
            { value: 'bold', label: 'Bold', icon: 'shield', description: 'Strong and impactful' }
        ],
        required: true
    },
    {
        id: 'colors',
        question: 'Color preferences?',
        description: 'Specify color scheme or palette.',
        type: 'text',
        placeholder: 'Example: Blue and gold, earth tones, monochrome, vibrant rainbow colors...',
        required: true
    },
    {
        id: 'composition',
        question: 'Composition style?',
        description: 'How should elements be arranged?',
        type: 'cards',
        options: [
            { value: 'centered', label: 'Centered', icon: 'crosshair', description: 'Symmetrical and balanced' },
            { value: 'dynamic', label: 'Dynamic', icon: 'trending-up', description: 'Diagonal and active' },
            { value: 'minimalist', label: 'Minimalist', icon: 'minimize', description: 'Lots of negative space' },
            { value: 'complex', label: 'Complex', icon: 'grid', description: 'Detailed and layered' }
        ],
        required: true
    },
    {
        id: 'details',
        question: 'Level of detail?',
        description: 'How detailed should the image be?',
        type: 'cards',
        options: [
            { value: 'simple', label: 'Simple', icon: 'circle', description: 'Basic shapes and forms' },
            { value: 'moderate', label: 'Moderate', icon: 'layers', description: 'Balanced detail level' },
            { value: 'intricate', label: 'Intricate', icon: 'cpu', description: 'Highly detailed' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Must work on dark backgrounds, needs to be scalable, avoid specific elements...',
        required: false
    }
];
