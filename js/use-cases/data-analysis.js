// ===========================
// Data Analysis Questions
// ===========================

const DATA_ANALYSIS_QUESTIONS = [
    {
        id: 'task',
        question: 'What data analysis do you need?',
        description: 'Describe the data and what insights you want to extract.',
        type: 'textarea',
        placeholder: 'Example: Analyze sales data from Q4 2024 and identify trends, patterns, and recommendations...',
        required: true
    },
    {
        id: 'data_type',
        question: 'What type of data?',
        description: 'What kind of data are you working with?',
        type: 'text',
        placeholder: 'Example: Sales data, survey results, financial reports, user analytics, website metrics...',
        required: true
    },
    {
        id: 'analysis_depth',
        question: 'Analysis depth?',
        description: 'How detailed should the analysis be?',
        type: 'cards',
        options: [
            { value: 'summary', label: 'Summary', icon: 'file-text', description: 'High-level overview' },
            { value: 'detailed', label: 'Detailed', icon: 'search', description: 'In-depth analysis' },
            { value: 'comprehensive', label: 'Comprehensive', icon: 'layers', description: 'Full breakdown with insights' }
        ],
        required: true
    },
    {
        id: 'output_format',
        question: 'Output format?',
        description: 'How should the results be presented?',
        type: 'cards',
        options: [
            { value: 'report', label: 'Report', icon: 'file-text', description: 'Written report' },
            { value: 'bullet-points', label: 'Bullet Points', icon: 'list', description: 'Key findings list' },
            { value: 'narrative', label: 'Narrative', icon: 'book-open', description: 'Story format' },
            { value: 'technical', label: 'Technical', icon: 'code', description: 'Technical analysis' },
            { value: 'executive-summary', label: 'Executive Summary', icon: 'briefcase', description: 'For leadership' }
        ],
        required: true
    },
    {
        id: 'focus_areas',
        question: 'What should the analysis focus on?',
        description: 'Specify key areas of interest.',
        type: 'text',
        placeholder: 'Example: Trends, correlations, outliers, predictions, recommendations...',
        required: true
    },
    {
        id: 'audience',
        question: 'Who is the audience?',
        description: 'Who will read this analysis?',
        type: 'cards',
        options: [
            { value: 'executives', label: 'Executives', icon: 'briefcase', description: 'C-level leadership' },
            { value: 'technical', label: 'Technical Team', icon: 'code', description: 'Technical staff' },
            { value: 'stakeholders', label: 'Stakeholders', icon: 'users', description: 'General stakeholders' },
            { value: 'general', label: 'General Audience', icon: 'globe', description: 'Non-technical' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include visualizations, compare to previous periods, highlight specific metrics...',
        required: false
    }
];
