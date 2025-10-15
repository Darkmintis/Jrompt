// ===========================
// Audio Content Questions
// ===========================

const AUDIO_CONTENT_QUESTIONS = [
    {
        id: 'task',
        question: 'What audio content do you need?',
        description: 'Describe the audio script or content you want to create.',
        type: 'textarea',
        placeholder: 'Example: Create a podcast script about the future of artificial intelligence, including interview questions...',
        required: true
    },
    {
        id: 'audio_type',
        question: 'What type of audio?',
        description: 'Select the audio format.',
        type: 'cards',
        options: [
            { value: 'podcast', label: 'Podcast', icon: 'mic', description: 'Podcast episode script' },
            { value: 'voiceover', label: 'Voiceover', icon: 'volume-2', description: 'Narration script' },
            { value: 'audiobook', label: 'Audiobook', icon: 'headphones', description: 'Book narration' },
            { value: 'ad', label: 'Audio Ad', icon: 'radio', description: 'Advertisement script' },
            { value: 'meditation', label: 'Meditation', icon: 'heart', description: 'Guided meditation' },
            { value: 'interview', label: 'Interview', icon: 'message-circle', description: 'Interview questions' }
        ],
        required: true
    },
    {
        id: 'duration',
        question: 'Audio duration?',
        description: 'How long should the audio be?',
        type: 'cards',
        options: [
            { value: 'short', label: 'Short', icon: 'clock', description: '1-5 minutes' },
            { value: 'medium', label: 'Medium', icon: 'watch', description: '5-15 minutes' },
            { value: 'long', label: 'Long', icon: 'calendar', description: '15-30 minutes' },
            { value: 'extended', label: 'Extended', icon: 'calendar-range', description: '30+ minutes' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should it have?',
        description: 'Choose the delivery style.',
        type: 'cards',
        options: [
            { value: 'conversational', label: 'Conversational', icon: 'message-circle', description: 'Natural and casual' },
            { value: 'authoritative', label: 'Authoritative', icon: 'shield', description: 'Expert and confident' },
            { value: 'warm', label: 'Warm', icon: 'heart', description: 'Friendly and inviting' },
            { value: 'dramatic', label: 'Dramatic', icon: 'zap', description: 'Engaging and intense' },
            { value: 'soothing', label: 'Soothing', icon: 'cloud', description: 'Calm and peaceful' }
        ],
        required: true
    },
    {
        id: 'voice_style',
        question: 'Voice style preference?',
        description: 'How should it sound?',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Business appropriate' },
            { value: 'friendly', label: 'Friendly', icon: 'smile', description: 'Approachable and warm' },
            { value: 'energetic', label: 'Energetic', icon: 'zap', description: 'Upbeat and lively' },
            { value: 'serious', label: 'Serious', icon: 'alert-circle', description: 'Formal and focused' }
        ],
        required: true
    },
    {
        id: 'audience',
        question: 'Who is the target audience?',
        description: 'Specify who will listen to this audio.',
        type: 'text',
        placeholder: 'Example: Podcast listeners, meditation practitioners, business professionals...',
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific sections, music cues, or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include intro/outro, sound effects suggestions, specific segments...',
        required: false
    }
];
