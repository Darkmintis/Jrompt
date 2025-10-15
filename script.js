// ===========================
// Jrompt - Multi-Page Survey System
// ===========================

// Survey questions configuration
const surveyQuestions = [
    {
        id: 'task',
        question: 'What task do you want the AI to perform?',
        description: 'Describe what you want the AI to accomplish. Be as specific as possible for better results.',
        type: 'textarea',
        placeholder: 'Example: Write a comprehensive blog post about sustainable living practices for urban dwellers...',
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should the AI use?',
        description: 'Choose the writing style that best fits your audience and purpose.',
        type: 'select',
        options: [
            { value: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
            { value: 'casual', label: 'Casual', description: 'Relaxed and conversational' },
            { value: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
            { value: 'formal', label: 'Formal', description: 'Academic or official' },
            { value: 'humorous', label: 'Humorous', description: 'Light and entertaining' },
            { value: 'persuasive', label: 'Persuasive', description: 'Convincing and compelling' },
            { value: 'informative', label: 'Informative', description: 'Educational and factual' },
            { value: 'creative', label: 'Creative', description: 'Imaginative and artistic' }
        ],
        required: true
    },
    {
        id: 'audience',
        question: 'Who is the target audience?',
        description: 'Specify who will be reading or using this content.',
        type: 'text',
        placeholder: 'Example: Software developers, marketing professionals, students, general public...',
        required: true
    },
    {
        id: 'output_type',
        question: 'What type of output do you need?',
        description: 'Select the format that best matches your requirements.',
        type: 'select',
        options: [
            { value: 'article', label: 'Article / Blog Post', description: 'Long-form written content' },
            { value: 'email', label: 'Email', description: 'Professional or casual email' },
            { value: 'social-post', label: 'Social Media Post', description: 'Short social content' },
            { value: 'code', label: 'Code / Script', description: 'Programming code' },
            { value: 'summary', label: 'Summary / Overview', description: 'Condensed information' },
            { value: 'list', label: 'List / Bullet Points', description: 'Structured list format' },
            { value: 'tutorial', label: 'Tutorial / How-to Guide', description: 'Step-by-step instructions' },
            { value: 'other', label: 'Other', description: 'Custom format' }
        ],
        required: true
    },
    {
        id: 'length',
        question: 'What length should the output be?',
        description: 'Choose the approximate length for your content.',
        type: 'select',
        options: [
            { value: 'short', label: 'Short', description: '1-2 paragraphs or ~100-200 words' },
            { value: 'medium', label: 'Medium', description: '3-5 paragraphs or ~300-500 words' },
            { value: 'long', label: 'Long', description: '6+ paragraphs or ~600+ words' },
            { value: 'variable', label: 'Variable', description: 'As needed to complete the task' }
        ],
        required: true
    },
    {
        id: 'context',
        question: 'Any additional context or requirements?',
        description: 'Add any specific requirements, keywords, constraints, or additional information (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include scientific research, use simple language, avoid technical jargon, focus on practical tips...',
        required: false
    }
];

// State management
let currentQuestionIndex = 0;
let answers = {};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Show landing page by default
    showLanding();
    
    console.log('%c🚀 Jrompt - JSON Prompt Generator', 'font-size: 16px; font-weight: bold; color: #00D9FF;');
    console.log('%cBy Darkmintis - Open-source project', 'color: #9333EA;');
    console.log('%cContribute at: https://github.com/Darkmintis/Jrompt-JSON_Prompt_Generator', 'color: #22C55E;');
});

// ===========================
// Page Navigation
// ===========================

function showLanding() {
    hideAllPages();
    document.getElementById('landing-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function startSurvey() {
    currentQuestionIndex = 0;
    answers = {};
    hideAllPages();
    document.getElementById('survey-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadQuestion(currentQuestionIndex);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showResults() {
    hideAllPages();
    document.getElementById('results-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===========================
// Survey Logic
// ===========================

function loadQuestion(index) {
    const question = surveyQuestions[index];
    const container = document.getElementById('question-container');
    
    // Update progress
    updateProgress();
    
    // Build question HTML
    let questionHTML = `
        <div class="question" data-question-id="${question.id}">
            <h2 class="question-label">${question.question}</h2>
            <p class="question-description">${question.description}</p>
    `;
    
    if (question.type === 'textarea') {
        const savedValue = answers[question.id] || '';
        questionHTML += `
            <textarea 
                class="answer-input textarea" 
                id="answer-${question.id}"
                placeholder="${question.placeholder}"
                ${question.required ? 'required' : ''}
            >${savedValue}</textarea>
        `;
    } else if (question.type === 'text') {
        const savedValue = answers[question.id] || '';
        questionHTML += `
            <input 
                type="text"
                class="answer-input" 
                id="answer-${question.id}"
                placeholder="${question.placeholder}"
                value="${savedValue}"
                ${question.required ? 'required' : ''}
            />
        `;
    } else if (question.type === 'select') {
        questionHTML += `<div class="answer-options">`;
        question.options.forEach(option => {
            const isSelected = answers[question.id] === option.value ? 'selected' : '';
            questionHTML += `
                <div class="option-card ${isSelected}" onclick="selectOption('${question.id}', '${option.value}')">
                    <h4>${option.label}</h4>
                    <p>${option.description}</p>
                </div>
            `;
        });
        questionHTML += `</div>`;
    }
    
    questionHTML += `</div>`;
    container.innerHTML = questionHTML;
    
    // Update navigation buttons
    updateNavButtons();
    
    // Focus on input if text/textarea
    setTimeout(() => {
        const input = container.querySelector('.answer-input');
        if (input) input.focus();
    }, 100);
}

function selectOption(questionId, value) {
    answers[questionId] = value;
    
    // Update UI
    const optionCards = document.querySelectorAll(`[data-question-id="${questionId}"] .option-card`);
    optionCards.forEach(card => card.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
    
    // Auto-advance after selection (optional, feels more modern)
    setTimeout(() => {
        if (currentQuestionIndex < surveyQuestions.length - 1) {
            nextQuestion();
        } else {
            // Enable generate button
            document.getElementById('generate-btn').classList.remove('hidden');
            document.getElementById('next-btn').classList.add('hidden');
        }
    }, 500);
}

function nextQuestion() {
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    
    // Save answer if input type
    if (currentQuestion.type === 'text' || currentQuestion.type === 'textarea') {
        const input = document.getElementById(`answer-${currentQuestion.id}`);
        if (input) {
            const value = input.value.trim();
            
            if (currentQuestion.required && !value) {
                // Show validation error
                input.style.borderColor = '#EF4444';
                input.focus();
                return;
            }
            
            answers[currentQuestion.id] = value;
        }
    }
    
    // Check if answer is provided for required questions
    if (currentQuestion.required && !answers[currentQuestion.id]) {
        alert('Please answer this question before continuing.');
        return;
    }
    
    // Move to next question
    if (currentQuestionIndex < surveyQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = surveyQuestions.length;
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const generateBtn = document.getElementById('generate-btn');
    
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next/Generate button
    if (currentQuestionIndex === surveyQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        generateBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        generateBtn.classList.add('hidden');
    }
}

// ===========================
// JSON Generation
// ===========================

function generateJSON() {
    // Validate all required questions are answered
    const unansweredRequired = surveyQuestions
        .filter(q => q.required)
        .find(q => !answers[q.id]);
    
    if (unansweredRequired) {
        alert('Please answer all required questions.');
        return;
    }
    
    // Build JSON object
    const promptData = {
        prompt: {
            task: answers.task || '',
            tone: answers.tone || '',
            audience: answers.audience || '',
            output_type: answers.output_type || '',
            length: answers.length || '',
            ...(answers.context && { additional_context: answers.context }),
            timestamp: new Date().toISOString(),
            version: '1.0'
        }
    };
    
    // Convert to formatted JSON
    const jsonString = JSON.stringify(promptData, null, 2);
    
    // Display results
    displayResults(jsonString);
}

function displayResults(jsonString) {
    // Show results page
    showResults();
    
    // Display JSON with syntax highlighting
    const outputElement = document.getElementById('json-output');
    outputElement.textContent = jsonString;
    
    // Apply syntax highlighting (simple version)
    highlightJSON(outputElement);
}

function highlightJSON(element) {
    let json = element.textContent;
    
    // Simple syntax highlighting
    json = json.replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:');
    json = json.replace(/: "([^"]*)"/g, ': <span class="json-string">"$1"</span>');
    json = json.replace(/: (\d+)/g, ': <span class="json-number">$1</span>');
    json = json.replace(/: (true|false)/g, ': <span class="json-boolean">$1</span>');
    
    element.innerHTML = json;
}

// ===========================
// Copy & Download Functions
// ===========================

function copyToClipboard() {
    const outputElement = document.getElementById('json-output');
    const jsonText = outputElement.textContent;
    
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(jsonText).then(() => {
            showCopySuccess();
        }).catch(() => {
            fallbackCopy(jsonText);
        });
    } else {
        fallbackCopy(jsonText);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please try manually selecting and copying the text.');
    }
    
    document.body.removeChild(textarea);
}

function showCopySuccess() {
    const copyIcon = document.getElementById('copy-icon');
    const originalIcon = copyIcon.innerHTML;
    
    // Change icon to checkmark
    copyIcon.setAttribute('data-lucide', 'check');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Revert after 2 seconds
    setTimeout(() => {
        copyIcon.setAttribute('data-lucide', 'copy');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 2000);
}

function downloadJSON() {
    const outputElement = document.getElementById('json-output');
    const jsonText = outputElement.textContent;
    
    // Create blob
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    link.download = `jrompt-${timestamp}.json`;
    link.href = url;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ===========================
// Action Buttons
// ===========================

function createAnother() {
    startSurvey();
}

// ===========================
// Keyboard Shortcuts
// ===========================

document.addEventListener('keydown', function(e) {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    const surveyPage = document.getElementById('survey-page');
    
    // Arrow keys for navigation in survey
    if (surveyPage.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === 'Enter' && !e.shiftKey) {
            const generateBtn = document.getElementById('generate-btn');
            if (!generateBtn.classList.contains('hidden')) {
                generateJSON();
            } else {
                nextQuestion();
            }
        }
    }
    
    // Escape to go back to landing
    if (e.key === 'Escape') {
        showLanding();
    }
});

// ===========================
// Smooth Animations
// ===========================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and step cards
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .step-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
