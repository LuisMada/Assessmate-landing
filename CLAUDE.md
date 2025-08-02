# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for Assessmate, an AI-powered applicant screening service. The project uses vanilla HTML, CSS, and JavaScript without any build system or package manager.

## Architecture

### File Structure
- `index.html` - Main HTML file with semantic structure
- `js/` - JavaScript modules organized by functionality:
  - `config.js` - Central configuration file for all site content
  - `main.js` - Main application controller (`AssessmateApp` class)
  - `navigation.js` - Navigation handling (`Navigation` class)
  - `animations.js` - Scroll animations and visual effects
  - `demo.js` - Chat demo functionality
- `css/` - Modular CSS organized by purpose:
  - `variables.css` - CSS custom properties for design system
  - `base.css` - Base styles and typography
  - `components.css` - Component-specific styles
  - `layout.css` - Layout and grid systems
  - `animations.css` - Animation definitions
  - `responsive.css` - Media queries and responsive design
- `data/` - JSON files containing static content
- `assets/` - Static assets (fonts, images)

### Key Design Patterns

**Configuration-Driven Content**: All site content is centralized in `js/config.js` using the `SITE_CONFIG` object. This allows easy content updates without touching HTML/CSS.

**Class-Based Architecture**: JavaScript uses ES6 classes:
- `AssessmateApp` - Main application controller that renders content from config
- `Navigation` - Handles sidebar, mobile menu, and keyboard navigation

**CSS Custom Properties**: Comprehensive design system in `css/variables.css` with semantic naming for colors, spacing, typography, and animations.

**Modular CSS**: Styles are separated by concern rather than pages, making maintenance easier.

## Development Commands

Since this is a static site with no build process:

```bash
# Serve locally (use any static server)
python -m http.server 8000
# or
npx serve .

# No build, lint, or test commands needed
```

## Making Content Changes

**To update site content**: Edit `js/config.js` - all text, navigation, features, testimonials, etc. are defined there.

**To update styling**: Use CSS custom properties in `css/variables.css` first, then component-specific styles in the appropriate CSS file.

**To add functionality**: Follow the existing class-based pattern and ensure initialization in `main.js`.

## Key Implementation Details

- No external dependencies or frameworks
- Responsive design with mobile-first approach  
- Semantic HTML structure for accessibility
- Progressive enhancement with JavaScript
- Content separation from presentation via config system
- CSS Grid and Flexbox for layouts
- Smooth animations using CSS transitions and transforms