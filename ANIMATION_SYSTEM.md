# Animation System Documentation

## Overview
The Xsphere website uses **Framer Motion** for smooth, performant animations throughout the site, creating an engaging infographic-led experience.

## Color Palette

Based on the strategy documents, the following color system is implemented:

- **Primary (Deep Midnight Blue)**: `#0F172A`
  - Used for: Corporate stability, authority, dark backgrounds
  - Variants: `primary-dark`, `primary-light`

- **Secondary (Safety Orange)**: `#FF6B00`
  - Used for: Call-to-action buttons, highlights, industrial accents
  - Variants: `secondary-dark`, `secondary-light`

- **Tertiary (Cool Grey/Silver)**: `#94A3B8`
  - Used for: Raw materials representation, structural lines
  - Variants: `tertiary-dark`, `tertiary-light`

- **Accent (Cyan/Electric Blue)**: `#06B6D4`
  - Used for: Digital/tech accents, laser beam animations
  - Variants: `accent-dark`, `accent-light`

## Reusable Animation Components

### AnimatedText
Located in `src/components/AnimatedText.tsx`

- Fade, slide, or scale animations
- Scroll-triggered animations (viewport-based)
- Customizable delay and variant

**Usage:**
```tsx
<AnimatedText variant="slide" delay={0.2} className="text-xl">
  Your text here
</AnimatedText>
```

### AnimatedButton
Located in `src/components/AnimatedButton.tsx`

- Hover scale effects
- Gradient backgrounds
- Arrow icon animations
- Multiple variants: primary, secondary, outline

**Usage:**
```tsx
<AnimatedButton href="/contact" variant="primary" size="lg">
  Get Started
</AnimatedButton>
```

### AnimatedCard
Located in `src/components/AnimatedCard.tsx`

- Scroll-triggered entrance animations
- Hover lift effect
- Customizable delays for stagger effects

**Usage:**
```tsx
<AnimatedCard delay={0.1} className="p-6">
  Card content
</AnimatedCard>
```

## Header Navigation Animations

The header includes:
- Smooth slide-down entrance
- Staggered navigation item animations
- Dropdown menu with fade/scale transitions
- Mobile menu slide animations
- Logo hover effects with gradient text
- Button hover effects with glow

## Homepage Hero Section

Features:
- Floating background elements (gradient blobs)
- Staggered text animations
- Gradient text effects
- Animated process cards with icon rotations
- Scroll indicator animation
- Pulsing glow effects on key elements

## Animation Best Practices

1. **Performance**: All animations use GPU-accelerated properties (transform, opacity)
2. **Accessibility**: Respects `prefers-reduced-motion` (can be added)
3. **Scroll Triggers**: Viewport-based animations only trigger when elements are visible
4. **Stagger Effects**: Children animations are staggered for visual flow
5. **Mobile Optimized**: Animations are responsive and performant on mobile devices

## Next Steps

- Add GSAP for complex scroll-triggered animations (scrollytelling)
- Implement "Living Factory" interactive hero
- Add material texture animations
- Create process visualization animations
- Build interactive quote calculator with animations

