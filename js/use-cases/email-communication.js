// ===========================
// Email & Communication Questions
// ===========================

const EMAIL_COMMUNICATION_QUESTIONS = [
    {
        id: 'task',
        question: 'What email do you need to write?',
        description: 'Describe the purpose and content of the email.',
        type: 'textarea',
        placeholder: 'Example: Write a professional follow-up email to a potential client after initial meeting...',
        required: true
    },
    {
        id: 'email_type',
        question: 'What type of email?',
        description: 'Select the email purpose.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Business email' },
            { value: 'sales', label: 'Sales', icon: 'dollar-sign', description: 'Sales outreach' },
            { value: 'newsletter', label: 'Newsletter', icon: 'mail', description: 'Email newsletter' },
            { value: 'followup', label: 'Follow-up', icon: 'repeat', description: 'Follow-up message' },
            { value: 'invitation', label: 'Invitation', icon: 'send', description: 'Event invitation' },
            { value: 'apology', label: 'Apology', icon: 'alert-circle', description: 'Apology email' }
        ],
        required: true
    },
    {
        id: 'tone',
        question: 'What tone should it have?',
        description: 'Choose the communication style.',
        type: 'cards',
        options: [
            { value: 'professional', label: 'Professional', icon: 'briefcase', description: 'Formal and polished' },
            { value: 'friendly', label: 'Friendly', icon: 'smile', description: 'Warm and personable' },
            { value: 'formal', label: 'Formal', icon: 'file-text', description: 'Very formal' },
            { value: 'casual', label: 'Casual', icon: 'coffee', description: 'Relaxed and informal' },
            { value: 'persuasive', label: 'Persuasive', icon: 'target', description: 'Convincing' }
        ],
        required: true
    },
    {
        id: 'recipient',
        question: 'Who is the recipient?',
        description: 'Describe the person or audience receiving this email.',
        type: 'text',
        placeholder: 'Example: Potential client, colleague, customer, hiring manager, team members...',
        required: true
    },
    {
        id: 'length',
        question: 'Email length?',
        description: 'How long should the email be?',
        type: 'cards',
        options: [
            { value: 'brief', label: 'Brief', icon: 'minimize-2', description: '2-3 sentences' },
            { value: 'short', label: 'Short', icon: 'align-left', description: '1 short paragraph' },
            { value: 'medium', label: 'Medium', icon: 'align-justify', description: '2-3 paragraphs' },
            { value: 'long', label: 'Long', icon: 'file-text', description: 'Multiple paragraphs' }
        ],
        required: true
    },
    {
        id: 'call_to_action',
        question: 'What action do you want them to take?',
        description: 'What should the recipient do after reading?',
        type: 'text',
        placeholder: 'Example: Schedule a meeting, reply with feedback, visit website, confirm attendance...',
        required: true
    },
    {
        id: 'context',
        question: 'Any additional requirements?',
        description: 'Add specific details or constraints (Optional).',
        type: 'textarea',
        placeholder: 'Example: Include specific dates, reference previous conversation, add attachments mention...',
        required: false
    }
];
