// ===========================
// Video Content Questions
// ===========================

const VIDEO_CONTENT_QUESTIONS = [
    {
        id: 'task',
        question: 'What video do you want to create?',
        description: 'Describe the video concept, script, or storyboard you need.',
        type: 'textarea',
        placeholder: 'Example: Create a 2-minute explainer video script about how blockchain technology works for beginners...',
        required: true
    },
    {
        id: 'video_type',
        question: 'What type of video?',
        description: 'Select the video format.',
        type: 'cards',
        options: [
            { value: 'explainer', label: 'Explainer', icon: 'play-circle', description: 'Educational video' },
            { value: 'promotional', label: 'Promotional', icon: 'trending-up', description: 'Marketing video' },
            { value: 'tutorial', label: 'Tutorial', icon: 'book-open', description: 'How-to guide' },
            { value: 'vlog', label: 'Vlog', icon: 'video', description: 'Personal video log' },
            { value: 'animation', label: 'Animation', icon: 'film', description: 'Animated content' },
            { value: 'documentary', label: 'Documentary', icon: 'camera', description: 'Documentary style' }
        ],
        required: true
    },
    {
        id: 'duration',
        question: 'Video duration?',
        description: 'How long should the video be?',
        type: 'cards',
        options: [
            { value: 'short', label: 'Short', icon: 'clock', description: '15-60 seconds' },
            { value: 'medium', label: 'Medium', icon: 'watch', description: '1-3 minutes' },
            { value: 'long', label: 'Long', icon: 'calendar', description: '3-10 minutes' },
            { value: 'extended', label: 'Extended', icon: 'calendar-range', description: '10+ minutes' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should it have?',
        description: 'Choose the overall feel of the video.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Corporate and polished' },
            { value: 'casual', label: 'Casual', icon: 'coffee', description: 'Relaxed and conversational' },
            { value: 'energetic', label: 'Energetic', icon: 'zap', description: 'Fast-paced and dynamic' },
            { value: 'educational', label: 'Educational', icon: 'graduation-cap', description: 'Teaching focused' },
            { value: 'entertaining', label: 'Entertaining', icon: 'smile', description: 'Fun and engaging' }
        ],
        required: true
    },
    {
        id: 'target_platform',
        question: 'Target platform?',
        description: 'Where will this video be published?',
        type: 'cards',
        options: [
            { value: 'youtube', label: 'YouTube', icon: 'play', description: 'YouTube videos' },
            { value: 'tiktok', label: 'TikTok', icon: 'music', description: 'Short-form vertical' },
            { value: 'instagram', label: 'Instagram', icon: 'instagram', description: 'Reels and posts' },
            { value: 'linkedin', label: 'LinkedIn', icon: 'linkedin', description: 'Professional content' },
            { value: 'website', label: 'Website', icon: 'globe', description: 'Website embed' }
        ],
        required: true
    },
    {
        id: 'audience',
        question: 'Who is the target audience?',
        description: 'Specify who will watch this video.',
        type: 'text',
        placeholder: 'Example: Young professionals, students, tech enthusiasts, general public...',
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific scenes, music notes, or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include call-to-action, background music suggestions, specific visuals needed...',
        required: false
    }
];
