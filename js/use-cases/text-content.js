// ===========================
// Text Content Writing Questions
// ===========================

const TEXT_CONTENT_QUESTIONS = [
    {
        id: 'task',
        question: 'What do you want to write?',
        description: 'Describe your writing goal in detail. Be specific for better results.',
        type: 'textarea',
        placeholder: 'Example: Write a comprehensive blog post about sustainable living practices for urban dwellers, including practical tips and scientific research...',
        required: true
    },
    {
        id: 'content_type',
        question: 'What type of content?',
        description: 'Select the format you need.',
        type: 'cards',
        options: [
            { value: 'blog-post', label: 'Blog Post', icon: 'newspaper', description: 'Long-form article with sections' },
            { value: 'essay', label: 'Essay', icon: 'pen-tool', description: 'Academic or formal writing' },
            { value: 'story', label: 'Story', icon: 'book', description: 'Narrative or fiction' },
            { value: 'tutorial', label: 'Tutorial', icon: 'graduation-cap', description: 'Step-by-step guide' },
            { value: 'review', label: 'Review', icon: 'star', description: 'Product or service review' },
            { value: 'listicle', label: 'Listicle', icon: 'list', description: 'List-based article' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should be used?',
        description: 'Choose the writing style that fits your needs.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Formal and business-appropriate' },
            { value: 'casual', label: 'Casual', icon: 'coffee', description: 'Relaxed and conversational' },
            { value: 'friendly', label: 'Friendly', icon: 'smile', description: 'Warm and approachable' },
            { value: 'formal', label: 'Formal', icon: 'file-text', description: 'Academic or official' },
            { value: 'humorous', label: 'Humorous', icon: 'laugh', description: 'Light and entertaining' },
            { value: 'persuasive', label: 'Persuasive', icon: 'target', description: 'Convincing and compelling' }
        ],
        required: true
    },
    {
        id: 'audience',
        question: 'Who is the target audience?',
        description: 'Specify who will read this content.',
        type: 'text',
        placeholder: 'Example: Tech professionals, entrepreneurs, students, general public...',
        required: true
    },
    {
        id: 'length',
        question: 'What length do you need?',
        description: 'Choose the approximate word count.',
        type: 'cards',
        options: [
            { value: 'short', label: 'Short', icon: 'minimize-2', description: '100-300 words' },
            { value: 'medium', label: 'Medium', icon: 'maximize-2', description: '300-700 words' },
            { value: 'long', label: 'Long', icon: 'maximize', description: '700-1500 words' },
            { value: 'very-long', label: 'Very Long', icon: 'file-text', description: '1500+ words' }
        ],
        required: true
    },
    {
        id: 'writing_style',
        question: 'Preferred writing style?',
        description: 'How should the content be structured?',
        type: 'cards',
        options: [
            { value: 'descriptive', label: 'Descriptive', icon: 'eye', description: 'Detailed and vivid imagery' },
            { value: 'narrative', label: 'Narrative', icon: 'book-open', description: 'Story-like flow' },
            { value: 'expository', label: 'Expository', icon: 'info', description: 'Informative and clear' },
            { value: 'persuasive', label: 'Persuasive', icon: 'message-circle', description: 'Argumentative approach' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details, keywords, or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include scientific research, use simple language, avoid technical jargon, focus on practical tips...',
        required: false
    }
];
