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
    currentQuestions: [],
    generatedJSON: null
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
    const pages = document.querySelectorAll('.page');
    for (const page of pages) {
        page.classList.remove('active');
    }
}

// ===========================
// Use Case Selection
// ===========================

function renderUseCaseCards() {
    const container = document.getElementById('use-case-grid');
    container.innerHTML = '';
    
    const useCaseKeys = Object.keys(USE_CASES);
    for (const key of useCaseKeys) {
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
    }
    
    // Reinitialize Lucide icons for the new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

async function selectUseCase(useCaseKey) {
    AppState.selectedUseCase = useCaseKey;
    
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
        'text-content': typeof TEXT_CONTENT_QUESTIONS === 'undefined' ? [] : TEXT_CONTENT_QUESTIONS,
        'image-generation': typeof IMAGE_GENERATION_QUESTIONS === 'undefined' ? [] : IMAGE_GENERATION_QUESTIONS,
        'video-content': typeof VIDEO_CONTENT_QUESTIONS === 'undefined' ? [] : VIDEO_CONTENT_QUESTIONS,
        'audio-content': typeof AUDIO_CONTENT_QUESTIONS === 'undefined' ? [] : AUDIO_CONTENT_QUESTIONS,
        'code-programming': typeof CODE_PROGRAMMING_QUESTIONS === 'undefined' ? [] : CODE_PROGRAMMING_QUESTIONS,
        'email-communication': typeof EMAIL_COMMUNICATION_QUESTIONS === 'undefined' ? [] : EMAIL_COMMUNICATION_QUESTIONS,
        'social-media': typeof SOCIAL_MEDIA_QUESTIONS === 'undefined' ? [] : SOCIAL_MEDIA_QUESTIONS,
        'data-analysis': typeof DATA_ANALYSIS_QUESTIONS === 'undefined' ? [] : DATA_ANALYSIS_QUESTIONS,
        'marketing': typeof MARKETING_QUESTIONS === 'undefined' ? [] : MARKETING_QUESTIONS,
        'education': typeof EDUCATION_QUESTIONS === 'undefined' ? [] : EDUCATION_QUESTIONS
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
        // Use dropdown select for better space efficiency
        inputHTML = `
            <select 
                id="answer-input" 
                class="survey-select"
                onchange="selectOption('${question.id}', this.value)"
                ${question.required ? 'required' : ''}
            >
                <option value="">-- Select an option --</option>
                ${question.options.map(opt => `
                    <option 
                        value="${opt.value}"
                        ${AppState.answers[question.id] === opt.value ? 'selected' : ''}
                    >${opt.label} - ${opt.description}</option>
                `).join('')}
            </select>
        `;
    }
    
    // Add banner ad
    const bannerAdHTML = `
        <div class="survey-banner-ad">
            <div class="ad-placeholder-banner">Advertisement (728x90)</div>
        </div>
    `;
    
    // Add inline navigation buttons
    const navigationHTML = `
        <div class="inline-navigation">
            <button class="btn btn-outline" id="prev-btn" onclick="previousQuestion()">
                <i data-lucide="arrow-left"></i>
                <span>Previous</span>
            </button>
            <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()">
                <span>Next</span>
                <i data-lucide="arrow-right"></i>
            </button>
            <button class="btn btn-success hidden" id="generate-btn" onclick="generateJSON()">
                <i data-lucide="sparkles"></i>
                <span>Generate JSON</span>
            </button>
        </div>
    `;
    
    container.innerHTML = `
        <div class="question-card">
            <h3>${question.question}</h3>
            <p>${question.description}</p>
            <div class="input-wrapper">
                ${inputHTML}
            </div>
            ${navigationHTML}
        </div>
        ${bannerAdHTML}
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
}function updateProgress() {
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
    jsonOutput.textContent = jsonString;
    
    // Store in AppState for copy/download
    AppState.generatedJSON = jsonString;
    
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
    const jsonText = AppState.generatedJSON || document.getElementById('json-output').textContent;
    
    navigator.clipboard.writeText(jsonText).then(() => {
        showCopySuccess();
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = jsonText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            // Using deprecated execCommand as fallback for older browsers
            // eslint-disable-next-line deprecation/deprecation
            const successful = document.execCommand('copy');
            if (successful) {
                showCopySuccess();
            } else {
                throw new Error('Copy command failed');
            }
        } catch (copyError) {
            console.error('Copy failed:', copyError);
            alert('Failed to copy. Please select and copy manually.');
        }
        textArea.remove();
    });
}

function showCopySuccess() {
    const copyIcon = document.getElementById('copy-icon');
    if (!copyIcon) return;
    
    const originalIcon = copyIcon.outerHTML;
    copyIcon.parentElement.innerHTML = '<i data-lucide="check-circle"></i>';
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    setTimeout(() => {
        const btn = copyIcon.parentElement;
        if (btn) {
            btn.innerHTML = originalIcon;
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }, 2000);
}

function downloadJSON() {
    const jsonText = AppState.generatedJSON || document.getElementById('json-output').textContent;
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const timestamp = new Date().toISOString().replaceAll(/[:.]/, '-').slice(0, -5);
    const useCaseName = AppState.selectedUseCase.replaceAll('-', '_');
    link.download = `jrompt_${useCaseName}_${timestamp}.json`;
    link.href = url;
    
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function createAnother() {
    // Reset state
    AppState.selectedUseCase = null;
    AppState.currentQuestionIndex = 0;
    AppState.answers = {};
    AppState.currentQuestions = [];
    AppState.generatedJSON = null;
    
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

// ===========================
// Advertisement Management
// ===========================

class AdManager {
    observer = null;
    loadedAds = new Set();
    
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in globalThis) {
            this.observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                { threshold: 0.1, rootMargin: '50px' }
            );
            this.observeAds();
        } else {
            this.loadAllAds();
        }
    }

    observeAds() {
        const adContainers = document.querySelectorAll('.ad-container[data-lazy="true"]');
        for (const container of adContainers) {
            this.observer.observe(container);
        }
    }

    handleIntersection(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting && !this.loadedAds.has(entry.target)) {
                this.loadAd(entry.target);
                this.observer.unobserve(entry.target);
            }
        }
    }

    loadAd(container) {
        const adElement = container.querySelector('.ad-banner, .ad-square');
        if (!adElement) return;

        this.loadedAds.add(container);
        adElement.classList.add('ad-loading');

        setTimeout(() => {
            adElement.classList.remove('ad-loading');
            adElement.textContent = 'Advertisement Loaded';
        }, 1000);
    }

    loadAllAds() {
        const adContainers = document.querySelectorAll('.ad-container');
        for (const container of adContainers) {
            this.loadAd(container);
        }
    }

    static createAdContainer(type = 'banner', lazy = true) {
        const container = document.createElement('div');
        container.className = 'ad-container';
        if (lazy) container.dataset.lazy = 'true';

        const ad = document.createElement('div');
        ad.className = type === 'square' ? 'ad-square' : 'ad-banner';
        ad.textContent = type === 'square' ? 'Advertisement (300x250)' : 'Advertisement';

        container.appendChild(ad);
        return container;
    }
}

let adManager;

document.addEventListener('DOMContentLoaded', function() {
    adManager = new AdManager();
});


