// ===========================
// Social Media Questions
// ===========================

const SOCIAL_MEDIA_QUESTIONS = [
    {
        id: 'task',
        question: 'What social media content do you need?',
        description: 'Describe the post, caption, or thread you want to create.',
        type: 'textarea',
        placeholder: 'Example: Create an engaging Instagram caption for a product launch, including emojis and call-to-action...',
        required: true
    },
    {
        id: 'platform',
        question: 'Which platform?',
        description: 'Select the social media platform.',
        type: 'cards',
        options: [
            { value: 'twitter', label: 'Twitter/X', icon: 'twitter', description: 'Tweets and threads' },
            { value: 'linkedin', label: 'LinkedIn', icon: 'linkedin', description: 'Professional posts' },
            { value: 'instagram', label: 'Instagram', icon: 'instagram', description: 'Captions and stories' },
            { value: 'facebook', label: 'Facebook', icon: 'facebook', description: 'Facebook posts' },
            { value: 'tiktok', label: 'TikTok', icon: 'music', description: 'TikTok captions' },
            { value: 'youtube', label: 'YouTube', icon: 'youtube', description: 'Video descriptions' }
        ],
        required: true
    },
    {
        id: 'post_type',
        question: 'What type of post?',
        description: 'Select the content type.',
        type: 'cards',
        options: [
            { value: 'announcement', label: 'Announcement', icon: 'megaphone', description: 'News or update' },
            { value: 'engagement', label: 'Engagement', icon: 'message-circle', description: 'Question or poll' },
            { value: 'educational', label: 'Educational', icon: 'book-open', description: 'Tips or insights' },
            { value: 'promotional', label: 'Promotional', icon: 'trending-up', description: 'Product or service' },
            { value: 'story', label: 'Story', icon: 'image', description: 'Personal story' },
            { value: 'thread', label: 'Thread', icon: 'list', description: 'Multi-post thread' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should it have?',
        description: 'Choose the voice and style.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Business appropriate' },
            { value: 'casual', label: 'Casual', icon: 'coffee', description: 'Relaxed and friendly' },
            { value: 'humorous', label: 'Humorous', icon: 'laugh', description: 'Funny and entertaining' },
            { value: 'inspirational', label: 'Inspirational', icon: 'heart', description: 'Motivating and uplifting' },
            { value: 'educational', label: 'Educational', icon: 'book-open', description: 'Teaching focused' }
        ],
        required: true
    },
    {
        id: 'length',
        question: 'Post length?',
        description: 'How long should the post be?',
        type: 'cards',
        options: [
            { value: 'short', label: 'Short', icon: 'minimize-2', description: 'One sentence' },
            { value: 'medium', label: 'Medium', icon: 'align-left', description: '2-3 sentences' },
            { value: 'long', label: 'Long', icon: 'align-justify', description: 'Full paragraph' },
            { value: 'thread', label: 'Thread', icon: 'list', description: 'Multiple posts' }
        ],
        required: true
    },
    {
        id: 'hashtags',
        question: 'Include hashtags?',
        description: 'Should hashtags be included?',
        type: 'cards',
        options: [
            { value: 'yes', label: 'Yes, include hashtags', icon: 'hash', description: 'Add relevant hashtags' },
            { value: 'no', label: 'No hashtags', icon: 'x', description: 'Skip hashtags' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include emojis, mention specific accounts, add call-to-action, avoid certain words...',
        required: false
    }
];
