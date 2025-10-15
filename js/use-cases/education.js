// ===========================
// Educational Content Questions
// ===========================

const EDUCATION_QUESTIONS = [
    {
        id: 'task',
        question: 'What educational content do you need?',
        description: 'Describe the lesson, tutorial, or educational material you want to create.',
        type: 'textarea',
        placeholder: 'Example: Create a beginner-friendly tutorial on Python basics with hands-on examples...',
        required: true
    },
    {
        id: 'content_type',
        question: 'Type of educational content?',
        description: 'Select the format you need.',
        type: 'cards',
        options: [
            { value: 'lesson', label: 'Lesson', icon: 'book-open', description: 'Traditional lesson plan' },
            { value: 'tutorial', label: 'Tutorial', icon: 'play-circle', description: 'Step-by-step guide' },
            { value: 'worksheet', label: 'Worksheet', icon: 'file-text', description: 'Practice exercises' },
            { value: 'quiz', label: 'Quiz', icon: 'help-circle', description: 'Assessment questions' },
            { value: 'course-outline', label: 'Course Outline', icon: 'list', description: 'Full course structure' },
            { value: 'explainer', label: 'Explainer', icon: 'lightbulb', description: 'Concept explanation' }
        ],
        required: true
    },
    {
        id: 'difficulty_level',
        question: 'Difficulty level?',
        description: 'What skill level is this for?',
        type: 'cards',
        options: [
            { value: 'beginner', label: 'Beginner', icon: 'user', description: 'No prior knowledge needed' },
            { value: 'intermediate', label: 'Intermediate', icon: 'users', description: 'Some experience required' },
            { value: 'advanced', label: 'Advanced', icon: 'award', description: 'Expert level content' }
        ],
        required: true
    },
    {
        id: 'learning_style',
        question: 'Learning style?',
        description: 'How should content be taught?',
        type: 'cards',
        options: [
            { value: 'hands-on', label: 'Hands-on', icon: 'tool', description: 'Practical exercises and doing' },
            { value: 'theoretical', label: 'Theoretical', icon: 'book', description: 'Concepts and theory first' },
            { value: 'visual', label: 'Visual', icon: 'eye', description: 'Diagrams and visual aids' },
            { value: 'step-by-step', label: 'Step-by-step', icon: 'list', description: 'Sequential instructions' },
            { value: 'interactive', label: 'Interactive', icon: 'message-circle', description: 'Q&A and engagement' }
        ],
        required: true
    },
    {
        id: 'age_group',
        question: 'Target age group?',
        description: 'Who is this content for?',
        type: 'cards',
        options: [
            { value: 'children', label: 'Children', icon: 'smile', description: 'Ages 5-12' },
            { value: 'teens', label: 'Teens', icon: 'user', description: 'Ages 13-18' },
            { value: 'adults', label: 'Adults', icon: 'users', description: 'Ages 18+' },
            { value: 'all-ages', label: 'All Ages', icon: 'globe', description: 'Universal content' }
        ],
        required: true
    },
    {
        id: 'format',
        question: 'Content format?',
        description: 'How should it be structured?',
        type: 'cards',
        options: [
            { value: 'written', label: 'Written', icon: 'file-text', description: 'Text-based content' },
            { value: 'video-script', label: 'Video Script', icon: 'video', description: 'For video lessons' },
            { value: 'presentation', label: 'Presentation', icon: 'monitor', description: 'Slide deck content' },
            { value: 'workshop', label: 'Workshop', icon: 'users', description: 'Interactive workshop' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include practice problems, real-world examples, assessment criteria, time duration...',
        required: false
    }
];
