// ===========================
// Content Writing Questions
// Optimized for High-Quality AI Prompts
// ===========================

const TEXT_CONTENT_QUESTIONS = [
    {
        id: 'objective',
        question: 'What is your content goal?',
        description: 'Be specific about what you want to achieve. The more detail, the better the AI output.',
        type: 'textarea',
        placeholder: 'Example: Write an in-depth guide on sustainable living for urban professionals, covering practical daily habits, cost-benefit analysis, and environmental impact with data-backed insights...',
        required: true
    },
    {
        id: 'content_type',
        question: 'Content format?',
        description: 'Choose the structure that best fits your needs.',
        type: 'cards',
        options: [
            { value: 'article', label: 'Article', icon: 'newspaper', description: 'Structured long-form content' },
            { value: 'guide', label: 'How-To Guide', icon: 'map', description: 'Step-by-step instructions' },
            { value: 'listicle', label: 'Listicle', icon: 'list', description: 'Numbered or bulleted list' },
            { value: 'essay', label: 'Essay', icon: 'pen-tool', description: 'Analytical or argumentative' },
            { value: 'story', label: 'Story', icon: 'book', description: 'Narrative or creative' },
            { value: 'review', label: 'Review', icon: 'star', description: 'Analysis and evaluation' }
        ],
        required: true
    },
    {
        id: 'tone_style',
        question: 'Tone and voice?',
        description: 'How should the AI communicate?',
        type: 'cards',
        options: [
            { value: 'professional-authoritative', label: 'Professional', icon: 'briefcase', description: 'Expert and credible' },
            { value: 'conversational-friendly', label: 'Conversational', icon: 'message-circle', description: 'Approachable and engaging' },
            { value: 'educational-clear', label: 'Educational', icon: 'book-open', description: 'Clear and instructive' },
            { value: 'persuasive-compelling', label: 'Persuasive', icon: 'target', description: 'Convincing and motivating' },
            { value: 'storytelling-engaging', label: 'Storytelling', icon: 'feather', description: 'Narrative and captivating' },
            { value: 'technical-precise', label: 'Technical', icon: 'cpu', description: 'Detailed and accurate' }
        ],
        required: true
    },
    {
        id: 'target_audience',
        question: 'Who is your audience?',
        description: 'Define demographics, expertise level, and interests.',
        type: 'textarea',
        placeholder: 'Example: Tech-savvy millennials (25-35) interested in productivity, with intermediate knowledge of digital tools, looking for actionable advice...',
        required: true
    },
    {
        id: 'depth_length',
        question: 'Content depth and length?',
        description: 'Balance between comprehensiveness and readability.',
        type: 'cards',
        options: [
            { value: 'quick-overview', label: 'Quick Read', icon: 'zap', description: '300-500 words, key points' },
            { value: 'standard-depth', label: 'Standard', icon: 'file-text', description: '800-1200 words, balanced' },
            { value: 'comprehensive', label: 'Comprehensive', icon: 'book', description: '1500-2500 words, detailed' },
            { value: 'ultimate-guide', label: 'Ultimate Guide', icon: 'layers', description: '3000+ words, exhaustive' }
        ],
        required: true
    },
    {
        id: 'key_elements',
        question: 'Must-include elements?',
        description: 'What specific components should the content have?',
        type: 'cards',
        options: [
            { value: 'data-statistics', label: 'Data & Stats', icon: 'bar-chart', description: 'Numbers and research' },
            { value: 'examples-case-studies', label: 'Examples', icon: 'file-text', description: 'Real-world cases' },
            { value: 'actionable-steps', label: 'Action Steps', icon: 'check-square', description: 'Practical takeaways' },
            { value: 'expert-quotes', label: 'Expert Insights', icon: 'message-square', description: 'Authority quotes' },
            { value: 'comparisons', label: 'Comparisons', icon: 'git-compare', description: 'Pros vs cons' },
            { value: 'visual-descriptions', label: 'Visual Aids', icon: 'image', description: 'Infographic-ready' }
        ],
        required: true
    },
    {
        id: 'special_requirements',
        question: 'Additional instructions?',
        description: 'SEO keywords, constraints, style preferences, or specific requirements.',
        type: 'textarea',
        placeholder: 'Example: Include keywords "sustainable living" and "eco-friendly", avoid jargon, use short paragraphs, add FAQ section, optimize for featured snippets...',
        required: false
    }
];
