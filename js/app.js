// ===========================
// Jrompt - Main Application
// Adaptive Survey System with Dynamic Module Loading
// ===========================

// Application State
const AppState = {
    currentPage: 'landing',
    selectedUseCase: null,
    currentQuestionIndex: 0,
    answers: {},
    currentQuestions: []
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    showLandingPage();
    
    console.log('%c🚀 Jrompt - JSON Prompt Generator', 'font-size: 16px; font-weight: bold; color: #FF6B35;');
    console.log('%cBy Darkmintis - Open-source project', 'color: #9333EA;');
    console.log('%cGitHub: https://github.com/Darkmintis/Jrompt', 'color: #22C55E;');
});

// ===========================
// Page Navigation Functions
// ===========================

function showLandingPage() {
    hideAllPages();
    document.getElementById('landing-page').classList.add('active');
    AppState.currentPage = 'landing';
}

function showUseCaseSelection() {
    hideAllPages();
    const useCasePage = document.getElementById('use-case-page');
    useCasePage.classList.add('active');
    AppState.currentPage = 'use-case';
    
    // Generate use case cards
    renderUseCaseCards();
}

function showSurveyPage() {
    hideAllPages();
    document.getElementById('survey-page').classList.add('active');
    AppState.currentPage = 'survey';
    
    // Load the first question
    loadQuestion(0);
}

function showResultsPage() {
    hideAllPages();
    document.getElementById('results-page').classList.add('active');
    AppState.currentPage = 'results';
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

// ===========================
// Use Case Selection
// ===========================

function renderUseCaseCards() {
    const container = document.getElementById('use-case-grid');
    container.innerHTML = '';
    
    Object.keys(USE_CASES).forEach(key => {
        const useCase = USE_CASES[key];
        const card = document.createElement('div');
        card.className = 'use-case-card';
        card.onclick = () => selectUseCase(key);
        
        card.innerHTML = `
            <div class="use-case-icon" style="background: ${useCase.color}15; color: ${useCase.color}">
                <i data-lucide="${useCase.icon}" style="width: 32px; height: 32px;"></i>
            </div>
            <h3 class="use-case-title">${useCase.name}</h3>
            <p class="use-case-description">${useCase.description}</p>
            <div class="use-case-arrow">
                <i data-lucide="arrow-right"></i>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Reinitialize Lucide icons for the new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

async function selectUseCase(useCaseKey) {
    AppState.selectedUseCase = useCaseKey;
    const useCase = USE_CASES[useCaseKey];
    
    // Load the corresponding question script
    try {
        // The questions are already loaded via script tags in HTML
        // Now we need to map the correct questions based on use case
        AppState.currentQuestions = getQuestionsForUseCase(useCaseKey);
        AppState.currentQuestionIndex = 0;
        AppState.answers = {};
        
        // Show survey page
        showSurveyPage();
    } catch (error) {
        console.error('Error loading use case:', error);
        alert('Error loading survey questions. Please try again.');
    }
}

function getQuestionsForUseCase(useCaseKey) {
    // Map use cases to their question arrays
    const questionMap = {
        'text-content': typeof TEXT_CONTENT_QUESTIONS !== 'undefined' ? TEXT_CONTENT_QUESTIONS : [],
        'image-generation': typeof IMAGE_GENERATION_QUESTIONS !== 'undefined' ? IMAGE_GENERATION_QUESTIONS : [],
        'video-content': typeof VIDEO_CONTENT_QUESTIONS !== 'undefined' ? VIDEO_CONTENT_QUESTIONS : [],
        'audio-content': typeof AUDIO_CONTENT_QUESTIONS !== 'undefined' ? AUDIO_CONTENT_QUESTIONS : [],
        'code-programming': typeof CODE_PROGRAMMING_QUESTIONS !== 'undefined' ? CODE_PROGRAMMING_QUESTIONS : [],
        'email-communication': typeof EMAIL_COMMUNICATION_QUESTIONS !== 'undefined' ? EMAIL_COMMUNICATION_QUESTIONS : [],
        'social-media': typeof SOCIAL_MEDIA_QUESTIONS !== 'undefined' ? SOCIAL_MEDIA_QUESTIONS : [],
        'data-analysis': typeof DATA_ANALYSIS_QUESTIONS !== 'undefined' ? DATA_ANALYSIS_QUESTIONS : [],
        'marketing': typeof MARKETING_QUESTIONS !== 'undefined' ? MARKETING_QUESTIONS : [],
        'education': typeof EDUCATION_QUESTIONS !== 'undefined' ? EDUCATION_QUESTIONS : []
    };
    
    return questionMap[useCaseKey] || [];
}

// ===========================
// Survey Question Handling
// ===========================

function loadQuestion(index) {
    if (index >= AppState.currentQuestions.length) {
        return;
    }
    
    AppState.currentQuestionIndex = index;
    const question = AppState.currentQuestions[index];
    const container = document.getElementById('question-container');
    
    // Update progress
    updateProgress();
    
    // Build question HTML based on type
    let inputHTML = '';
    
    if (question.type === 'textarea') {
        inputHTML = `
            <textarea 
                id="answer-input" 
                class="survey-input" 
                placeholder="${question.placeholder}"
                rows="5"
                ${question.required ? 'required' : ''}
            >${AppState.answers[question.id] || ''}</textarea>
        `;
    } else if (question.type === 'text') {
        inputHTML = `
            <input 
                type="text" 
                id="answer-input" 
                class="survey-input" 
                placeholder="${question.placeholder}"
                value="${AppState.answers[question.id] || ''}"
                ${question.required ? 'required' : ''}
            />
        `;
    } else if (question.type === 'cards') {
        inputHTML = `
            <div class="option-cards" id="option-cards">
                ${question.options.map(opt => `
                    <div class="option-card ${AppState.answers[question.id] === opt.value ? 'selected' : ''}" 
                         onclick="selectOption('${question.id}', '${opt.value}')">
                        <div class="option-icon">
                            <i data-lucide="${opt.icon}"></i>
                        </div>
                        <div class="option-content">
                            <div class="option-label">${opt.label}</div>
                            <div class="option-description">${opt.description}</div>
                        </div>
                        <div class="option-check">
                            <i data-lucide="check-circle"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${index + 1} of ${AppState.currentQuestions.length}</span>
                ${!question.required ? '<span class="optional-badge">Optional</span>' : ''}
            </div>
            <h2 class="question-title">${question.question}</h2>
            <p class="question-description">${question.description}</p>
            <div class="input-wrapper">
                ${inputHTML}
            </div>
        </div>
    `;
    
    // Update navigation buttons
    updateNavButtons();
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Focus on input
    setTimeout(() => {
        const input = document.getElementById('answer-input');
        if (input && question.type !== 'cards') {
            input.focus();
        }
    }, 100);
}

function selectOption(questionId, value) {
    // Save the answer
    AppState.answers[questionId] = value;
    
    // Update UI
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => card.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

function updateProgress() {
    const progress = ((AppState.currentQuestionIndex + 1) / AppState.currentQuestions.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${AppState.currentQuestionIndex + 1} / ${AppState.currentQuestions.length}`;
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const generateBtn = document.getElementById('generate-btn');
    
    if (!prevBtn || !nextBtn || !generateBtn) return;
    
    // Show/hide previous button
    if (AppState.currentQuestionIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
    }
    
    // Show/hide next vs generate button
    if (AppState.currentQuestionIndex === AppState.currentQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        generateBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        generateBtn.classList.add('hidden');
    }
}

function nextQuestion() {
    const question = AppState.currentQuestions[AppState.currentQuestionIndex];
    const input = document.getElementById('answer-input');
    
    // Validate for cards type
    if (question.type === 'cards') {
        if (question.required && !AppState.answers[question.id]) {
            alert('Please select an option before proceeding.');
            return;
        }
    } else {
        // Validate for text/textarea
        if (question.required && (!input.value || input.value.trim() === '')) {
            input.classList.add('error-shake');
            input.style.borderColor = '#EF4444';
            
            setTimeout(() => {
                input.classList.remove('error-shake');
                input.style.borderColor = '';
            }, 500);
            return;
        }
        
        // Save answer
        AppState.answers[question.id] = input.value;
    }
    
    // Move to next question
    if (AppState.currentQuestionIndex < AppState.currentQuestions.length - 1) {
        AppState.currentQuestionIndex++;
        loadQuestion(AppState.currentQuestionIndex);
    }
}

function previousQuestion() {
    // Save current answer if exists
    const question = AppState.currentQuestions[AppState.currentQuestionIndex];
    const input = document.getElementById('answer-input');
    
    if (input && question.type !== 'cards') {
        AppState.answers[question.id] = input.value;
    }
    
    // Move to previous question
    if (AppState.currentQuestionIndex > 0) {
        AppState.currentQuestionIndex--;
        loadQuestion(AppState.currentQuestionIndex);
    }
}

// ===========================
// JSON Generation
// ===========================

function generateJSON() {
    const question = AppState.currentQuestions[AppState.currentQuestionIndex];
    const input = document.getElementById('answer-input');
    
    // Validate last question
    if (question.type === 'cards') {
        if (question.required && !AppState.answers[question.id]) {
            alert('Please select an option before generating.');
            return;
        }
    } else {
        if (question.required && (!input.value || input.value.trim() === '')) {
            input.classList.add('error-shake');
            input.style.borderColor = '#EF4444';
            
            setTimeout(() => {
                input.classList.remove('error-shake');
                input.style.borderColor = '';
            }, 500);
            return;
        }
        
        AppState.answers[question.id] = input.value;
    }
    
    // Create JSON object
    const useCase = USE_CASES[AppState.selectedUseCase];
    const promptData = {
        prompt: {
            use_case: AppState.selectedUseCase,
            use_case_name: useCase.name,
            ...AppState.answers,
            timestamp: new Date().toISOString(),
            version: "1.0"
        }
    };
    
    // Format JSON
    const jsonString = JSON.stringify(promptData, null, 2);
    
    // Show results
    displayResults(jsonString);
}

function displayResults(jsonString) {
    const jsonOutput = document.getElementById('json-output');
    jsonOutput.value = jsonString;
    
    // Syntax highlight
    highlightJSON(jsonOutput);
    
    // Show results page
    showResultsPage();
}

function highlightJSON(element) {
    // Simple JSON syntax highlighting for display
    // This is handled by CSS for the textarea
}

// ===========================
// Results Page Actions
// ===========================

function copyToClipboard() {
    const jsonOutput = document.getElementById('json-output');
    jsonOutput.select();
    jsonOutput.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(jsonOutput.value).then(() => {
        showCopySuccess();
    }).catch(() => {
        document.execCommand('copy');
        showCopySuccess();
    });
}

function showCopySuccess() {
    const copyBtn = document.getElementById('copy-btn');
    const originalHTML = copyBtn.innerHTML;
    
    copyBtn.innerHTML = `
        <i data-lucide="check-circle"></i>
        <span>Copied!</span>
    `;
    copyBtn.style.backgroundColor = '#10B981';
    
    setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.style.backgroundColor = '';
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 2000);
}

function downloadJSON() {
    const jsonOutput = document.getElementById('json-output');
    const blob = new Blob([jsonOutput.value], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const useCaseName = AppState.selectedUseCase.replace('-', '_');
    link.download = `jrompt_${useCaseName}_${timestamp}.json`;
    link.href = url;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    const downloadBtn = document.getElementById('download-btn');
    const originalHTML = downloadBtn.innerHTML;
    
    downloadBtn.innerHTML = `
        <i data-lucide="check-circle"></i>
        <span>Downloaded!</span>
    `;
    downloadBtn.style.backgroundColor = '#10B981';
    
    setTimeout(() => {
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.style.backgroundColor = '';
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 2000);
}

function createAnother() {
    // Reset state
    AppState.selectedUseCase = null;
    AppState.currentQuestionIndex = 0;
    AppState.answers = {};
    AppState.currentQuestions = [];
    
    // Go back to use case selection
    showUseCaseSelection();
}

// ===========================
// Keyboard Shortcuts
// ===========================

document.addEventListener('keydown', function(e) {
    if (AppState.currentPage === 'survey') {
        // Enter to go next (except in textarea)
        if (e.key === 'Enter' && !e.shiftKey && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (AppState.currentQuestionIndex === AppState.currentQuestions.length - 1) {
                generateJSON();
            } else {
                nextQuestion();
            }
        }
        
        // Escape to go back
        if (e.key === 'Escape' && AppState.currentQuestionIndex > 0) {
            previousQuestion();
        }
    }
});

// ===========================
// Helper Functions for UI
// ===========================

function startSurvey() {
    showUseCaseSelection();
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function showLanding() {
    showLandingPage();
}
