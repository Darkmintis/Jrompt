// ===========================
// Code & Programming Questions
// ===========================

const CODE_PROGRAMMING_QUESTIONS = [
    {
        id: 'task',
        question: 'What code do you need?',
        description: 'Describe the programming task, function, or algorithm you want to create.',
        type: 'textarea',
        placeholder: 'Example: Create a Python function that validates email addresses using regex and handles edge cases...',
        required: true
    },
    {
        id: 'programming_language',
        question: 'Programming language?',
        description: 'Which language should be used?',
        type: 'text',
        placeholder: 'Example: Python, JavaScript, Java, C++, SQL, Go, Rust...',
        required: true
    },
    {
        id: 'code_style',
        question: 'Code style preference?',
        description: 'Coding conventions and patterns.',
        type: 'cards',
        options: [
            { value: 'clean', label: 'Clean Code', icon: 'check-circle', description: 'Readable and maintainable' },
            { value: 'functional', label: 'Functional', icon: 'git-branch', description: 'Functional programming' },
            { value: 'oop', label: 'OOP', icon: 'box', description: 'Object-oriented' },
            { value: 'minimal', label: 'Minimal', icon: 'minimize-2', description: 'Concise and compact' },
            { value: 'modular', label: 'Modular', icon: 'layers', description: 'Well-separated modules' }
        ],
        required: true
    },
    {
        id: 'complexity',
        question: 'Code complexity level?',
        description: 'How advanced should the code be?',
        type: 'cards',
        options: [
            { value: 'beginner', label: 'Beginner', icon: 'user', description: 'Simple and basic' },
            { value: 'intermediate', label: 'Intermediate', icon: 'users', description: 'Moderate complexity' },
            { value: 'advanced', label: 'Advanced', icon: 'award', description: 'Complex patterns' },
            { value: 'expert', label: 'Expert', icon: 'star', description: 'Highly optimized' }
        ],
        required: true
    },
    {
        id: 'documentation_level',
        question: 'Documentation level?',
        description: 'How much should the code be commented?',
        type: 'cards',
        options: [
            { value: 'minimal', label: 'Minimal', icon: 'minus', description: 'Essential comments only' },
            { value: 'moderate', label: 'Moderate', icon: 'align-left', description: 'Key sections explained' },
            { value: 'detailed', label: 'Detailed', icon: 'file-text', description: 'Comprehensive documentation' }
        ],
        required: true
    },
    {
        id: 'error_handling',
        question: 'Error handling preference?',
        description: 'How should errors be handled?',
        type: 'cards',
        options: [
            { value: 'basic', label: 'Basic', icon: 'alert-circle', description: 'Simple try-catch' },
            { value: 'robust', label: 'Robust', icon: 'shield', description: 'Comprehensive error handling' },
            { value: 'none', label: 'None', icon: 'x', description: 'No error handling' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific libraries, frameworks, or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Must use specific library, follow certain coding standards, include unit tests...',
        required: false
    }
];
