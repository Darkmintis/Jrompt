// ===========================
// Data Analysis Questions
// Optimized for AI-Powered Data Insights
// ===========================

const DATA_ANALYSIS_QUESTIONS = [
    {
        id: 'analysis_objective',
        question: 'What data insights do you need?',
        description: 'Describe your data, the business question, and what decisions this will inform.',
        type: 'textarea',
        placeholder: 'Example: Analyze e-commerce sales data from Q4 2024 to identify top-performing products, customer segments with highest LTV, seasonal trends, and provide actionable recommendations to increase Q1 2025 revenue by 20%...',
        required: true
    },
    {
        id: 'data_context',
        question: 'Data source and context?',
        description: 'Describe the data: type, volume, time period, and relevant business context.',
        type: 'textarea',
        placeholder: 'Example: 50K transactions from Shopify, includes product categories, customer demographics, purchase history, average order value $85, operating in US market, B2C fashion retail...',
        required: true
    },
    {
        id: 'analysis_type',
        question: 'Type of analysis needed?',
        description: 'What analytical approach should be used?',
        type: 'cards',
        options: [
            { value: 'descriptive-trends', label: 'Descriptive', icon: 'bar-chart', description: 'What happened? Trends, patterns' },
            { value: 'diagnostic-why', label: 'Diagnostic', icon: 'search', description: 'Why did it happen? Root causes' },
            { value: 'predictive-forecast', label: 'Predictive', icon: 'trending-up', description: 'What will happen? Forecasts' },
            { value: 'prescriptive-actions', label: 'Prescriptive', icon: 'target', description: 'What should we do? Recommendations' },
            { value: 'comparative-benchmark', label: 'Comparative', icon: 'git-compare', description: 'How do we compare? Benchmarks' }
        ],
        required: true
    },
    {
        id: 'key_metrics',
        question: 'Key metrics and KPIs?',
        description: 'What specific metrics should be analyzed?',
        type: 'textarea',
        placeholder: 'Example: Revenue, conversion rate, customer acquisition cost (CAC), lifetime value (LTV), churn rate, average order value (AOV), return on ad spend (ROAS)...',
        required: true
    },
    {
        id: 'output_format',
        question: 'Deliverable format?',
        description: 'How should the analysis be presented?',
        type: 'cards',
        options: [
            { value: 'executive-dashboard', label: 'Executive Summary', icon: 'briefcase', description: 'High-level, actionable' },
            { value: 'detailed-report', label: 'Detailed Report', icon: 'file-text', description: 'Comprehensive analysis' },
            { value: 'data-story', label: 'Data Story', icon: 'book-open', description: 'Narrative with insights' },
            { value: 'technical-analysis', label: 'Technical', icon: 'cpu', description: 'Statistical, methodical' },
            { value: 'visual-infographic', label: 'Visual', icon: 'image', description: 'Chart-heavy, visual' }
        ],
        required: true
    },
    {
        id: 'insights_focus',
        question: 'What insights are most valuable?',
        description: 'Prioritize the type of insights you need.',
        type: 'cards',
        options: [
            { value: 'opportunities-growth', label: 'Opportunities', icon: 'trending-up', description: 'Growth potential' },
            { value: 'problems-risks', label: 'Problems', icon: 'alert-triangle', description: 'Issues to address' },
            { value: 'patterns-correlations', label: 'Patterns', icon: 'git-branch', description: 'Relationships, correlations' },
            { value: 'anomalies-outliers', label: 'Anomalies', icon: 'alert-circle', description: 'Unusual patterns' },
            { value: 'segments-clusters', label: 'Segments', icon: 'users', description: 'Customer groups' },
            { value: 'predictions-forecasts', label: 'Forecasts', icon: 'activity', description: 'Future projections' }
        ],
        required: true
    },
    {
        id: 'audience_technical_level',
        question: 'Audience and technical level?',
        description: 'Who will use this analysis and what\'s their data literacy?',
        type: 'cards',
        options: [
            { value: 'c-suite-strategic', label: 'C-Suite', icon: 'award', description: 'Strategic, high-level' },
            { value: 'managers-tactical', label: 'Managers', icon: 'users', description: 'Tactical, actionable' },
            { value: 'analysts-technical', label: 'Analysts', icon: 'cpu', description: 'Technical, detailed' },
            { value: 'general-simple', label: 'General Team', icon: 'globe', description: 'Simple, accessible' }
        ],
        required: true
    },
    {
        id: 'special_requirements',
        question: 'Specific requirements or constraints?',
        description: 'Statistical methods, visualization preferences, comparison periods, or other needs.',
        type: 'textarea',
        placeholder: 'Example: Compare to previous quarter and same period last year, include confidence intervals, suggest A/B test ideas, highlight statistical significance, provide SQL queries for replication...',
        required: false
    }
];
