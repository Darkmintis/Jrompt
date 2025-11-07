// ===========================
// Code Generation Questions
// Optimized for High-Quality AI Code
// ===========================

const CODE_PROGRAMMING_QUESTIONS = [
    {
        id: 'code_objective',
        question: 'What should the code do?',
        description: 'Describe the functionality, inputs, outputs, and expected behavior in detail.',
        type: 'textarea',
        placeholder: 'Example: Create a Python function that validates email addresses using RFC 5322 standards, handles international domains, checks for disposable email providers, and returns detailed validation results with error messages...',
        required: true
    },
    {
        id: 'language_framework',
        question: 'Language and framework?',
        description: 'Specify programming language and any frameworks/libraries.',
        type: 'textarea',
        placeholder: 'Example: Python 3.10+ with FastAPI framework, using Pydantic for validation and asyncio for async operations...',
        required: true
    },
    {
        id: 'code_paradigm',
        question: 'Programming paradigm?',
        description: 'Choose the coding approach and architecture.',
        type: 'cards',
        options: [
            { value: 'functional-pure', label: 'Functional', icon: 'git-branch', description: 'Pure functions, immutable' },
            { value: 'oop-solid', label: 'OOP (SOLID)', icon: 'box', description: 'Classes, inheritance, SOLID' },
            { value: 'procedural-simple', label: 'Procedural', icon: 'list', description: 'Sequential, straightforward' },
            { value: 'reactive-async', label: 'Reactive/Async', icon: 'zap', description: 'Event-driven, async' },
            { value: 'modular-clean', label: 'Modular', icon: 'layers', description: 'Separated concerns' }
        ],
        required: true
    },
    {
        id: 'code_quality',
        question: 'Code quality requirements?',
        description: 'What standards should the code meet?',
        type: 'cards',
        options: [
            { value: 'production-ready', label: 'Production', icon: 'shield', description: 'Battle-tested, robust' },
            { value: 'prototype-fast', label: 'Prototype', icon: 'zap', description: 'Quick and functional' },
            { value: 'enterprise-grade', label: 'Enterprise', icon: 'award', description: 'Scalable, maintainable' },
            { value: 'learning-educational', label: 'Educational', icon: 'book-open', description: 'Well-commented, clear' }
        ],
        required: true
    },
    {
        id: 'performance_optimization',
        question: 'Performance priority?',
        description: 'How important is optimization?',
        type: 'cards',
        options: [
            { value: 'readability-first', label: 'Readability', icon: 'eye', description: 'Clear over fast' },
            { value: 'balanced-approach', label: 'Balanced', icon: 'sliders', description: 'Good performance + readable' },
            { value: 'high-performance', label: 'High Performance', icon: 'cpu', description: 'Optimized algorithms' },
            { value: 'memory-efficient', label: 'Memory Efficient', icon: 'hard-drive', description: 'Low memory usage' }
        ],
        required: true
    },
    {
        id: 'code_features',
        question: 'Required features?',
        description: 'What should be included in the code?',
        type: 'cards',
        options: [
            { value: 'error-handling', label: 'Error Handling', icon: 'alert-circle', description: 'Try-catch, validation' },
            { value: 'logging-debugging', label: 'Logging', icon: 'file-text', description: 'Debug and info logs' },
            { value: 'type-hints', label: 'Type Hints', icon: 'code', description: 'Static typing' },
            { value: 'unit-tests', label: 'Unit Tests', icon: 'check-square', description: 'Test coverage' },
            { value: 'documentation', label: 'Documentation', icon: 'book', description: 'Docstrings, comments' },
            { value: 'config-management', label: 'Configuration', icon: 'settings', description: 'Env vars, config files' }
        ],
        required: true
    },
    {
        id: 'constraints_requirements',
        question: 'Constraints and special requirements?',
        description: 'Dependencies, coding standards, edge cases, or specific requirements.',
        type: 'textarea',
        placeholder: 'Example: Must follow PEP 8, use type hints, handle edge cases (empty input, null values), avoid external dependencies, include docstrings with examples, support Python 3.8+...',
        required: false
    }
];
