// ===========================
// Marketing Copy Questions
// Optimized for High-Converting Marketing Content
// ===========================

const MARKETING_QUESTIONS = [
    {
        id: 'marketing_objective',
        question: 'What marketing content do you need?',
        description: 'Describe your product/service, target action, and desired outcome.',
        type: 'textarea',
        placeholder: 'Example: Create compelling ad copy for a premium productivity app targeting busy entrepreneurs, emphasizing time-saving features and ROI, with a focus on driving free trial signups...',
        required: true
    },
    {
        id: 'campaign_goal',
        question: 'Primary campaign goal?',
        description: 'What specific action do you want people to take?',
        type: 'cards',
        options: [
            { value: 'conversion-sales', label: 'Drive Sales', icon: 'shopping-cart', description: 'Purchase, subscribe' },
            { value: 'lead-generation', label: 'Generate Leads', icon: 'user-plus', description: 'Signups, downloads' },
            { value: 'brand-awareness', label: 'Build Awareness', icon: 'eye', description: 'Reach, impressions' },
            { value: 'engagement-interaction', label: 'Boost Engagement', icon: 'heart', description: 'Likes, shares, comments' },
            { value: 'traffic-clicks', label: 'Drive Traffic', icon: 'mouse-pointer', description: 'Website visits, clicks' }
        ],
        required: true
    },
    {
        id: 'content_format',
        question: 'Marketing format?',
        description: 'Choose the type of marketing content.',
        type: 'cards',
        options: [
            { value: 'ad-copy-short', label: 'Ad Copy', icon: 'megaphone', description: 'PPC, social ads' },
            { value: 'landing-page-long', label: 'Landing Page', icon: 'layout', description: 'Sales page, conversion' },
            { value: 'email-sequence', label: 'Email Series', icon: 'mail', description: 'Nurture, drip campaign' },
            { value: 'product-description', label: 'Product Copy', icon: 'tag', description: 'E-commerce, features' },
            { value: 'video-script', label: 'Video Script', icon: 'video', description: 'VSL, explainer' },
            { value: 'social-post', label: 'Social Post', icon: 'share-2', description: 'Organic social content' }
        ],
        required: true
    },
    {
        id: 'brand_voice',
        question: 'Brand voice and tone?',
        description: 'How should your brand communicate?',
        type: 'cards',
        options: [
            { value: 'authoritative-expert', label: 'Authoritative', icon: 'award', description: 'Expert, credible' },
            { value: 'friendly-conversational', label: 'Friendly', icon: 'smile', description: 'Approachable, warm' },
            { value: 'bold-disruptive', label: 'Bold', icon: 'zap', description: 'Edgy, provocative' },
            { value: 'luxury-premium', label: 'Luxury', icon: 'star', description: 'Exclusive, sophisticated' },
            { value: 'playful-creative', label: 'Playful', icon: 'heart', description: 'Fun, entertaining' },
            { value: 'urgent-scarcity', label: 'Urgent', icon: 'clock', description: 'FOMO, time-sensitive' }
        ],
        required: true
    },
    {
        id: 'target_customer',
        question: 'Target customer profile?',
        description: 'Define demographics, psychographics, pain points, and desires.',
        type: 'textarea',
        placeholder: 'Example: Busy entrepreneurs (30-45), earning $100K+, struggling with time management, desire work-life balance, tech-savvy, value efficiency over price, active on LinkedIn...',
        required: true
    },
    {
        id: 'unique_value',
        question: 'Unique selling proposition (USP)?',
        description: 'What makes your offer different and better?',
        type: 'textarea',
        placeholder: 'Example: Only productivity app with AI-powered task prioritization, saves 10+ hours/week, integrates with 50+ tools, 30-day money-back guarantee, used by Fortune 500 companies...',
        required: true
    },
    {
        id: 'copywriting_framework',
        question: 'Copywriting approach?',
        description: 'Choose the persuasion framework.',
        type: 'cards',
        options: [
            { value: 'aida-classic', label: 'AIDA', icon: 'trending-up', description: 'Attention, Interest, Desire, Action' },
            { value: 'pas-problem-solution', label: 'PAS', icon: 'alert-circle', description: 'Problem, Agitate, Solution' },
            { value: 'fab-features-benefits', label: 'FAB', icon: 'check-circle', description: 'Features, Advantages, Benefits' },
            { value: 'before-after-bridge', label: 'BAB', icon: 'git-compare', description: 'Before, After, Bridge' },
            { value: 'storytelling-narrative', label: 'Storytelling', icon: 'book-open', description: 'Narrative, emotional' }
        ],
        required: true
    },
    {
        id: 'special_instructions',
        question: 'Additional requirements?',
        description: 'Character limits, keywords, CTAs, competitors, or specific elements.',
        type: 'textarea',
        placeholder: 'Example: Include power words like "transform" and "breakthrough", max 150 characters for headline, CTA must be "Start Free Trial", differentiate from Asana and Trello, include social proof...',
        required: false
    }
];
