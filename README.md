# JOM Platform (Next.js 13)

## Setup
1. Create `.env.local`:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=optional
CLOUDINARY_CLOUD_NAME=optional
CLOUDINARY_API_KEY=optional
CLOUDINARY_API_SECRET=optional
```
2. Install & run:
```
npm install
npm run dev
```

## Features
- App Router, Tailwind, TS
- Auth: register/login with HttpOnly cookie; logout
- Protected routes: `/espace-client`, `/espace-prestataire`
- Mongoose models: User, Service, Formation, Paiement
- APIs: Users, Services (CRUD), Formations (CRUD), Payments (placeholders), Upload (placeholder), Health
- Pages: services, formations, emplois, forum, blog (audio), contact, faq, propos, proposer/trouver-service
- i18n (FR/EN) with toggle, audio reading component

## Scripts
- `npm run dev`, `npm run build`, `npm start`, `npm run lint`
