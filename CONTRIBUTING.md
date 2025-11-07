# Contributing to Jrompt

First off, thank you for considering contributing to Jrompt! 🎉

We love receiving contributions from our community. There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests, or writing code.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and constructive in all interactions.

---

## 🤔 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Browser and OS** information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why would this be useful?
- **Possible implementation** if you have ideas
- **Examples** from other projects

### Pull Requests

- Fill in the required template
- Follow the [style guidelines](#style-guidelines)
- Include screenshots for UI changes
- Test your changes thoroughly
- Update documentation as needed

---

## 💻 Development Setup

1. **Fork the repository**

2. **Clone your fork:**
   ```bash
   git clone https://github.com/darkmintis/Jrompt.git
   cd Jrompt
   ```

3. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes:**
   - Edit HTML, CSS, or JavaScript files
   - Test in multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices or responsive mode

5. **Test locally:**
   ```bash
   # Use any local server, e.g.:
   python -m http.server 8000
   # Then open http://localhost:8000
   ```

---

## 🔄 Pull Request Process

1. **Update documentation** if needed (README.md, comments, etc.)
2. **Test thoroughly** across different browsers and devices
3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add feature: brief description"
   ```
4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** from your fork to the main repository
6. **Wait for review** - maintainers will review and provide feedback

### PR Guidelines

- Keep PRs focused on a single feature/fix
- Write clear commit messages
- Reference related issues
- Be responsive to feedback
- Update your PR based on review comments

---

## 🎨 Style Guidelines

### JavaScript

- Use vanilla JavaScript (no frameworks)
- Use modern ES6+ syntax
- Add comments for complex logic
- Follow existing code structure
- Use meaningful variable names

```javascript
// Good
const userInputTask = document.getElementById('task').value;

// Avoid
const x = document.getElementById('task').value;
```

### CSS

- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-like naming for classes
- Keep selectors simple and efficient
- Add comments for sections

```css
/* Good */
.form-group { }
.form-group__label { }

/* Avoid */
div.container > form > div.group { }
```

### HTML

- Use semantic HTML5 elements
- Keep accessibility in mind (ARIA labels, alt text)
- Maintain clean indentation
- Add comments for major sections

```html
<!-- Good -->
<section id="survey-section" aria-label="Survey Form">
  <h2>Create Your Prompt</h2>
</section>

<!-- Avoid -->
<div id="survey">
  <div class="title">Create Your Prompt</div>
</div>
```

---

## 🧪 Testing Checklist

Before submitting a PR, ensure:

- [ ] Code works in Chrome, Firefox, Safari, and Edge
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] No console errors
- [ ] All form validations work
- [ ] Copy and download functions work correctly
- [ ] Smooth animations and transitions
- [ ] No broken links
- [ ] Code is commented where necessary

---

## 📝 Commit Message Guidelines

Write clear, concise commit messages:

```
Add feature: Dark mode toggle
Fix bug: Copy button not working on iOS
Update docs: Installation instructions
Refactor: Improve JSON generation logic
```

---

## 🏆 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for their contributions
- Special thanks in major updates

---

## ❓ Questions?

Feel free to:

- Open an issue with your question
- Start a discussion in GitHub Discussions
- Email us at darkmintis@gmail.com

---

Thank you for contributing to Jrompt! 🚀

Your efforts help make this project better for everyone.
