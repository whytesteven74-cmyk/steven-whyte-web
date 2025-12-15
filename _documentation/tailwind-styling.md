# Documentation: Tailwind Styling for steven-whyte-web

## Problem Solved
The website needed a cohesive, mobile-first design that conveyed a professional, serious, and mission-driven tone aligned with the "Unspoken Truths" brand.

## Technical Solution
1.  **Color Palette (`tailwind.config.js`)**:
    - Extended with `slate-dark` and `slate-light` for improved contrast.
    - Primary colors: `desert-sand`, `clay`, `soft-black`.
2.  **Global Styles (`app/globals.css`)**:
    - Applied dark gradient background (`#1a1a1a` to `#2d2d2d`).
    - Added custom CSS rules for MDX `<article>` elements (headings, blockquotes, links).
3.  **Mobile Responsiveness (`app/page.tsx`)**:
    - Used responsive prefixes (`md:p-24`, `md:text-6xl`) for mobile-first approach.

## Key Code Snippets

### Tailwind Config Extension
```javascript
colors: {
    'desert-sand': '#eecfa1',
    'clay': '#b38b6d',
    'slate-dark': '#2e3440',
    'slate-light': '#4c566a',
},
```

### MDX Blockquote Styling (globals.css)
```css
article blockquote {
  border-left: 4px solid #b38b6d; /* clay */
  padding-left: 1rem;
  font-style: italic;
}
```

## Next Steps
- Task 3: Deployment to Vercel.
