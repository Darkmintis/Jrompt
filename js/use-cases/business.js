// ===========================
// Business & Strategy Questions
// Optimized for Professional Business Content
// ===========================

const BUSINESS_QUESTIONS = [
    {
        id: 'business_objective',
        question: 'What business document do you need?',
        description: 'Describe the business goal, context, and what you want to achieve.',
        type: 'textarea',
        placeholder: 'Example: Create a comprehensive business proposal for a SaaS product targeting small businesses, including market analysis, competitive advantages, pricing strategy, and 3-year financial projections...',
        required: true
    },
    {
        id: 'document_type',
        question: 'Document type?',
        description: 'Choose the format that fits your business need.',
        type: 'cards',
        options: [
            { value: 'business-plan', label: 'Business Plan', icon: 'file-text', description: 'Comprehensive strategy' },
            { value: 'proposal', label: 'Proposal', icon: 'send', description: 'Client or investor pitch' },
            { value: 'strategy-document', label: 'Strategy', icon: 'target', description: 'Strategic planning' },
            { value: 'market-analysis', label: 'Market Analysis', icon: 'trending-up', description: 'Market research report' },
            { value: 'executive-summary', label: 'Executive Summary', icon: 'briefcase', description: 'High-level overview' },
            { value: 'swot-analysis', label: 'SWOT Analysis', icon: 'grid', description: 'Strengths, weaknesses' }
        ],
        required: true
    },
    {
        id: 'business_context',
        question: 'Business context and industry?',
        description: 'Provide industry, company size, market position, and relevant background.',
        type: 'textarea',
        placeholder: 'Example: B2B SaaS startup in project management space, targeting teams of 10-50 people, competing with Asana and Monday.com, currently pre-revenue with MVP ready...',
        required: true
    },
    {
        id: 'tone_formality',
        question: 'Tone and formality level?',
        description: 'How formal should the document be?',
        type: 'cards',
        options: [
            { value: 'executive-formal', label: 'Executive', icon: 'award', description: 'C-suite, board level' },
            { value: 'professional-standard', label: 'Professional', icon: 'briefcase', description: 'Standard business' },
            { value: 'consultative-expert', label: 'Consultative', icon: 'users', description: 'Advisory, expert' },
            { value: 'startup-modern', label: 'Startup', icon: 'zap', description: 'Modern, innovative' }
        ],
        required: true
    },
    {
        id: 'key_components',
        question: 'Required sections and components?',
        description: 'What should be included in the document?',
        type: 'cards',
        options: [
            { value: 'financial-projections', label: 'Financials', icon: 'dollar-sign', description: 'Revenue, costs, ROI' },
            { value: 'market-research', label: 'Market Data', icon: 'bar-chart', description: 'TAM, SAM, SOM' },
            { value: 'competitive-analysis', label: 'Competition', icon: 'users', description: 'Competitor landscape' },
            { value: 'risk-assessment', label: 'Risk Analysis', icon: 'alert-triangle', description: 'Risks and mitigation' },
            { value: 'implementation-plan', label: 'Action Plan', icon: 'check-square', description: 'Timeline, milestones' },
            { value: 'metrics-kpis', label: 'KPIs', icon: 'activity', description: 'Success metrics' }
        ],
        required: true
    },
    {
        id: 'target_audience',
        question: 'Who will read this document?',
        description: 'Define the audience: investors, executives, clients, team members.',
        type: 'textarea',
        placeholder: 'Example: Venture capital investors with tech background, looking for scalable B2B opportunities, focused on SaaS metrics like CAC, LTV, and churn rate...',
        required: true
    },
    {
        id: 'special_requirements',
        question: 'Specific requirements or constraints?',
        description: 'Data sources, formatting, length, or other special needs.',
        type: 'textarea',
        placeholder: 'Example: Include industry benchmarks, cite credible sources, keep under 10 pages, use professional charts and graphs, follow McKinsey presentation style...',
        required: false
    }
];
