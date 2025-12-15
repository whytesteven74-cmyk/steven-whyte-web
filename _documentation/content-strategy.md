# Documentation: Content Strategy for steven-whyte-web

## Problem Solved
The website lacked a clear, mission-driven identity. The copy needed to reflect Steven Whyte's role as a **Men's Mental Health Advocate** and the "Unspoken Truths" brand.

## Technical Solution
1.  **Home Page (`app/page.tsx`)**: Updated the hero section with a concise mission statement and role description ("Mental Health Advocate | Author | Coach").
2.  **Story Page (`app/story/page.mdx`)**: Expanded the MDX content to tell the full "Unspoken" narrative, covering The Early Years, The Turning Point, and The Mission.

## Key Code Snippets

### Mission Statement (page.tsx)
```tsx
<p className="text-lg md:text-xl max-w-2xl mb-4 text-gray-300">
    Mental Health Advocate | Author | Coach
</p>
<p className="text-base max-w-xl mb-12 text-gray-400 italic">
    "Breaking the silence around men's mental health, one unspoken truth at a time."
</p>
```

### MDX Story Structure (story/page.mdx)
```markdown
## The Mission: Unspoken Truths
The word "Unspoken" represents everything we carry inside but are too afraid to voice.
```

## Next Steps
- Task 2: Apply final styling with TailwindCSS.
