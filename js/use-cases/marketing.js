// ===========================
// Marketing Content Questions
// ===========================

const MARKETING_QUESTIONS = [
    {
        id: 'task',
        question: 'What marketing content do you need?',
        description: 'Describe the marketing material you want to create.',
        type: 'textarea',
        placeholder: 'Example: Create ad copy for a new eco-friendly water bottle targeting environmentally conscious millennials...',
        required: true
    },
    {
        id: 'marketing_goal',
        question: 'Marketing goal?',
        description: 'What is the primary objective?',
        type: 'cards',
        options: [
            { value: 'awareness', label: 'Awareness', icon: 'eye', description: 'Build brand awareness' },
            { value: 'conversion', label: 'Conversion', icon: 'shopping-cart', description: 'Drive sales' },
            { value: 'engagement', label: 'Engagement', icon: 'heart', description: 'Increase engagement' },
            { value: 'education', label: 'Education', icon: 'book-open', description: 'Educate audience' },
            { value: 'retention', label: 'Retention', icon: 'users', description: 'Keep customers' }
        ],
        required: true
    },
    {
        id: 'content_type',
        question: 'Type of marketing content?',
        description: 'Select the format you need.',
        type: 'cards',
        options: [
            { value: 'ad-copy', label: 'Ad Copy', icon: 'megaphone', description: 'Advertising text' },
            { value: 'product-description', label: 'Product Description', icon: 'tag', description: 'E-commerce copy' },
            { value: 'landing-page', label: 'Landing Page', icon: 'layout', description: 'Website copy' },
            { value: 'email-campaign', label: 'Email Campaign', icon: 'mail', description: 'Marketing email' },
            { value: 'slogan', label: 'Slogan/Tagline', icon: 'type', description: 'Brand slogan' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should it have?',
        description: 'Choose the brand voice.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Corporate and trustworthy' },
            { value: 'friendly', label: 'Friendly', icon: 'smile', description: 'Warm and approachable' },
            { value: 'bold', label: 'Bold', icon: 'zap', description: 'Confident and daring' },
            { value: 'playful', label: 'Playful', icon: 'heart', description: 'Fun and creative' },
            { value: 'luxury', label: 'Luxury', icon: 'award', description: 'Premium and exclusive' }
        ],
        required: true
    },
    {
        id: 'target_audience',
        question: 'Target audience?',
        description: 'Who are you trying to reach?',
        type: 'text',
        placeholder: 'Example: Young professionals, parents, tech enthusiasts, small business owners...',
        required: true
    },
    {
        id: 'platform',
        question: 'Marketing platform?',
        description: 'Where will this be used?',
        type: 'cards',
        options: [
            { value: 'social-media', label: 'Social Media', icon: 'share-2', description: 'Social platforms' },
            { value: 'google-ads', label: 'Google Ads', icon: 'search', description: 'Search ads' },
            { value: 'email', label: 'Email', icon: 'mail', description: 'Email marketing' },
            { value: 'website', label: 'Website', icon: 'globe', description: 'Website content' },
            { value: 'print', label: 'Print', icon: 'printer', description: 'Print materials' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include specific features, USPs, competitors to differentiate from, word limits...',
        required: false
    }
];
