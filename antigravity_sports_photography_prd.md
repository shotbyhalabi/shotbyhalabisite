# Sports Photographer Portfolio Website

## Antigravity Implementation PRD

This document expands the original PRD with technical implementation
details so AI coding tools can generate higher-quality code.

------------------------------------------------------------------------

# 1. Product Summary

A fast, SEO-optimized sports photography portfolio designed to convert
visitors into booking inquiries.

Primary actions: - Call the photographer - Send an email - Submit
inquiry form

Initial sports: - Volleyball - Hockey - Basketball

New sports must automatically work when added.

------------------------------------------------------------------------

# 2. Tech Stack

Framework: Next.js (React) Hosting: Vercel Image storage: Cloudinary
Contact forms: FormSubmit

Fonts: - Bebas Neue - Inter

------------------------------------------------------------------------

# 3. Environment Variables

Create a `.env.local` file.

CLOUDINARY_CLOUD_NAME=your_cloud_name CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret

------------------------------------------------------------------------

# 4. Project Folder Structure

/app /about /contact /portfolio /\[sport\] /components Hero Navbar
Footer GalleryGrid Lightbox CategoryCard ContactForm /lib cloudinary.ts
/styles globals.css /public

------------------------------------------------------------------------

# 5. Core UI Components

## Navbar

Logo Home About Portfolio Contact Call Button

Sticky navigation bar.

------------------------------------------------------------------------

## Hero Component

Fullscreen slideshow rotating every 5 seconds.

Hero text example: Sports Photography Capturing the intensity of the
game

Buttons: View Portfolio Book a Shoot

------------------------------------------------------------------------

## CategoryCard Component

Used for sport previews.

Contains: - cover image - sport title - hover zoom effect

Grid layout: Desktop: 3 Tablet: 2 Mobile: 1

------------------------------------------------------------------------

## GalleryGrid Component

Displays Cloudinary images.

Grid: Desktop: 3 columns Tablet: 2 Mobile: 1

Images lazy load and fade in.

------------------------------------------------------------------------

## Lightbox Component

Fullscreen overlay viewer.

Features: - next/previous arrows - keyboard navigation - swipe gestures

------------------------------------------------------------------------

## ContactForm Component

Uses FormSubmit endpoint.

Form action: https://formsubmit.co/EMAIL_ADDRESS

Fields: Name Email Phone Organization Sport Message

------------------------------------------------------------------------

# 6. Cloudinary Integration

Example tags:

volleyball hockey basketball

Example fetch:

https://res.cloudinary.com/`<cloud_name>`{=html}/image/list/volleyball.json

Dynamic loading example:

fetch(`https://res.cloudinary.com/${cloud}/image/list/${sport}.json`)

------------------------------------------------------------------------

# 7. Dynamic Portfolio Pages

Routes:

/portfolio/volleyball /portfolio/hockey /portfolio/basketball

Dynamic routing:

/portfolio/\[sport\]

------------------------------------------------------------------------

# 8. Design System

Color palette:

Background: #0F0F0F Off White: #F5F5F5 Grey: #8C8C8C Accent Red: #D62828

Typography:

Headings: Bebas Neue Body: Inter

------------------------------------------------------------------------

# 9. Homepage Layout

Hero slideshow

Sports categories

Featured work

Contact CTA

Footer

------------------------------------------------------------------------

# 10. Portfolio Pages

Header with sport title

Gallery grid

Lightbox viewer

------------------------------------------------------------------------

# 11. About Page

Photographer introduction

Experience

Sports coverage

Photography philosophy

------------------------------------------------------------------------

# 12. Contact Page

Phone number

Email link

Contact form

CTA headline: Need a photographer for your team or event?

------------------------------------------------------------------------

# 13. SEO Requirements

Meta title example: Toronto Sports Photographer \| Hockey Volleyball
Basketball

Meta description example: Professional sports photographer capturing
hockey, volleyball, and basketball events.

------------------------------------------------------------------------

# 14. Performance

Target load time under 2 seconds.

Use: - Cloudinary CDN - Next.js image optimization - lazy loading

------------------------------------------------------------------------

# 15. Image Protection

Disable right click. Disable image drag.

Example JS:

document.addEventListener("contextmenu", (e) =\> e.preventDefault())

------------------------------------------------------------------------

# 16. Mobile UX

Swipe galleries

Stacked layout

Large touch targets

------------------------------------------------------------------------

# 17. Deployment Steps

1.  Push project to GitHub
2.  Connect repo to Vercel
3.  Add environment variables
4.  Deploy
5.  Connect domain

------------------------------------------------------------------------

# 18. Future Features

Blog for SEO

Client proofing galleries

Photo licensing

Athlete profiles

------------------------------------------------------------------------

# Final Goal

Create a sports photography portfolio that:

-   looks professional
-   loads fast
-   is easy to update
-   converts visitors into bookings
