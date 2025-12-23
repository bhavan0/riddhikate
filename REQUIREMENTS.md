# Riddhi Kate Physical Therapy Website - Requirements Document

## 1. Project Overview

| Field | Details |
|-------|---------|
| **Project Name** | Riddhi Kate - Physical Therapy Website |
| **Project Type** | Personal brand / informative single-page website |
| **Target Audience** | People interested in learning about physical therapy and Riddhi's niche areas |
| **Primary Goal** | Educate visitors about physical therapy, establish personal brand, build audience for future content |

### 1.1 Vision
This is an **informative website** to:
- Introduce Riddhi Kate and her expertise
- Educate visitors about physical therapy and specialized areas
- Build a personal brand for potential influencer content
- Prepare for future content additions (videos, articles, social media integration)

### 1.2 This is NOT
- A service booking website
- A sales-focused page
- A clinic/practice website

---

## 2. Functional Requirements

### 2.1 Navigation
| ID | Requirement | Priority |
|----|-------------|----------|
| NAV-01 | Fixed navigation bar at the top of the page | High |
| NAV-02 | Display name "Riddhi Kate" on the left | High |
| NAV-03 | Navigation links: Home, About, Expertise, Connect | High |
| NAV-04 | Smooth scroll to sections when clicking nav links | High |
| NAV-05 | Hamburger menu icon on mobile devices | High |
| NAV-06 | Mobile menu slides in/out when hamburger is clicked | High |

### 2.2 Hero Section
| ID | Requirement | Priority |
|----|-------------|----------|
| HERO-01 | Large welcoming headline with name | High |
| HERO-02 | Tagline about passion for physical therapy / helping people | High |
| HERO-03 | Brief intro statement (who I am, what I do) | High |
| HERO-04 | Social media links or "Follow" CTA | Medium |
| HERO-05 | Placeholder area for photo/image | Medium |

### 2.3 About Section
| ID | Requirement | Priority |
|----|-------------|----------|
| ABOUT-01 | Section heading "About Me" | High |
| ABOUT-02 | Personal story / journey into physical therapy | High |
| ABOUT-03 | What drives/motivates Riddhi | High |
| ABOUT-04 | Credentials and background | Medium |
| ABOUT-05 | Placeholder for profile photo | Medium |

### 2.4 Expertise/Niche Section (Previously "Services")
| ID | Requirement | Priority |
|----|-------------|----------|
| EXP-01 | Section heading "My Expertise" or "What I Specialize In" | High |
| EXP-02 | Display 4 expertise areas as informational cards | High |
| EXP-03 | Expertise 1: Sports Rehab - what it is, why it matters | High |
| EXP-04 | Expertise 2: Post Surgery Recovery - educational info | High |
| EXP-05 | Expertise 3: Vestibular Rehab - what it is, who it helps | High |
| EXP-06 | Expertise 4: Dance Rehab - unique niche, why it's important | High |
| EXP-07 | Each card includes: icon, title, educational description | High |
| EXP-08 | Focus on informing/educating, NOT selling | High |

### 2.5 Connect Section (Previously "Contact")
| ID | Requirement | Priority |
|----|-------------|----------|
| CONN-01 | Section heading "Let's Connect" or "Follow My Journey" | High |
| CONN-02 | Social media links (Instagram, LinkedIn, YouTube, etc.) | High |
| CONN-03 | Brief message about upcoming content | Medium |
| CONN-04 | Email for collaborations/inquiries (placeholder) | Medium |
| CONN-05 | Placeholder for future newsletter signup | Low |

### 2.6 Footer
| ID | Requirement | Priority |
|----|-------------|----------|
| FOOT-01 | Copyright notice with current year | High |
| FOOT-02 | Name "Riddhi Kate" | High |
| FOOT-03 | Social media icon links | High |
| FOOT-04 | Tagline or short message | Low |

---

## 3. Non-Functional Requirements

### 3.1 Performance
| ID | Requirement | Priority |
|----|-------------|----------|
| PERF-01 | Page load time under 3 seconds | High |
| PERF-02 | Smooth scrolling animations (60fps) | Medium |

### 3.2 Responsiveness
| ID | Requirement | Priority |
|----|-------------|----------|
| RESP-01 | Mobile-first design approach | High |
| RESP-02 | Fully functional on mobile (320px - 767px) | High |
| RESP-03 | Fully functional on tablet (768px - 1023px) | High |
| RESP-04 | Fully functional on desktop (1024px+) | High |

### 3.3 Browser Compatibility
| ID | Requirement | Priority |
|----|-------------|----------|
| BRWS-01 | Chrome, Firefox, Safari, Edge (latest versions) | High |

### 3.4 Accessibility
| ID | Requirement | Priority |
|----|-------------|----------|
| ACC-01 | Semantic HTML elements | High |
| ACC-02 | Sufficient color contrast | High |
| ACC-03 | Keyboard navigable | Medium |

---

## 4. Design Requirements

### 4.1 Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark | `#3A5A40` | Headings, footer background |
| Primary Medium | `#588157` | Accents, hover states, icons |
| Primary Light | `#A3B18A` | Card backgrounds, highlights |
| White | `#FFFFFF` | Main background, text on dark |
| Off-White | `#F5F5F5` | Alternate section backgrounds |
| Text Dark | `#1A1A1A` | Body text |
| Text Muted | `#6B7280` | Secondary text |

### 4.2 Design Vibe
| Aspect | Description |
|--------|-------------|
| Overall Feel | Clean, modern, welcoming, professional yet approachable |
| Tone | Educational, inspiring, personal |
| Imagery | Space for photos, clean graphics |
| Layout | Spacious, easy to read, not cluttered |

---

## 5. Technical Requirements

### 5.1 Technology Stack
| Layer | Technology |
|-------|------------|
| Framework | React.js 18+ |
| Build Tool | Vite |
| Styling | Tailwind CSS 3+ |
| Icons | React Icons |

### 5.2 Project Structure
```
riddhi/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Expertise.jsx    (renamed from Services)
│   │   ├── Connect.jsx      (renamed from Contact)
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── README.md
└── REQUIREMENTS.md
```

---

## 6. Content Requirements

### 6.1 Hero Section Content
| Field | Content |
|-------|---------|
| Headline | "Hi, I'm Riddhi Kate" |
| Tagline | "Physical Therapist | Passionate about movement, recovery, and helping you thrive" |
| Intro | Brief welcoming message about the journey |

### 6.2 About Section Content
| Field | Content |
|-------|---------|
| Heading | "About Me" |
| Story | Placeholder - personal journey into PT |
| Passion | What drives Riddhi, why PT matters |
| Background | Education, experience (placeholder) |

### 6.3 Expertise Content (Educational Focus)
| Expertise Area | Educational Description |
|----------------|------------------------|
| **Sports Rehab** | Learn about how athletes recover from injuries, prevent re-injury, and optimize performance through targeted rehabilitation techniques. |
| **Post Surgery Recovery** | Understanding the rehabilitation journey after surgery - what to expect, how PT helps restore function and mobility. |
| **Vestibular Rehab** | Discover how physical therapy helps people overcome balance disorders, dizziness, and vertigo through specialized exercises. |
| **Dance Rehab** | A unique specialty focusing on dancers' bodies - addressing the specific demands, injuries, and recovery needs of dancers. |

### 6.4 Connect Section Content
| Field | Placeholder Value |
|-------|-------------------|
| Heading | "Let's Connect" |
| Message | "Follow my journey as I share insights about physical therapy, movement, and wellness. More content coming soon!" |
| Email | hello@riddhikate.com (placeholder) |
| Social Links | Instagram, LinkedIn, YouTube (placeholder icons/links) |

---

## 7. Future Considerations (Not in Current Scope)

These features may be added later as the brand grows:

| Feature | Notes |
|---------|-------|
| Blog/Articles section | For written educational content |
| Video embeds | YouTube/Instagram video integration |
| Newsletter signup | Email list for followers |
| Testimonials/Community | Social proof and community building |
| Podcast section | If podcast content is created |
| Resource downloads | Free guides, tips, etc. |

---

## 8. Out of Scope (Current Version)

| Feature | Reason |
|---------|--------|
| Appointment booking | Not a service-focused site |
| Pricing/packages | Not selling services |
| Contact form | Simple connect section instead |
| Patient portal | Not applicable |
| E-commerce | Not applicable |
| CMS/Admin panel | Static site for now |

---

## 9. Acceptance Criteria

### 9.1 Completion Checklist
- [ ] All navigation links scroll smoothly to sections
- [ ] Mobile hamburger menu works correctly
- [ ] All 4 expertise areas display with educational descriptions
- [ ] Social media links are visible and clickable
- [ ] Website is responsive on mobile, tablet, and desktop
- [ ] Color scheme matches olive green and white palette
- [ ] Content tone is informative/educational, not sales-focused
- [ ] Build completes without errors

---

## 10. Sign-Off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Client | Riddhi Kate | | [ ] |

---

*Document Version: 1.1*
*Last Updated: December 2024*
*Change: Pivoted from service-focused to personal brand / educational website*
