# GrankAgency

A full-stack marketing automation agency platform.

## 🎯 Purpose

- High-converting landing pages
- Automated lead capture via contact forms
- Email nurturing sequences (Brevo)
- Workflow automation (N8N)
- Calendar scheduling (Calendly)
- Analytics & conversion tracking (GA4/GTM)

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | Next.js 14 + React + TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |
| CRM/Email | Brevo API |
| Automation | N8N |
| Analytics | GA4 + GTM |
| Calendar | Calendly API |

## ✨ Key Features

- Responsive landing page with animated sections
- Contact form with real-time validation
- Email automation sequences (Brevo)
- Workflow triggers (N8N webhooks)
- Calendar integration for demo scheduling
- Analytics tracking for conversion optimization
- Service showcase with testimonials
- Mobile-optimized design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Vercel account
- Brevo account
- N8N account

### Local Development

1. Clone: `git clone https://github.com/giuliano1998/grank-agency.git`
2. Install: `npm install`
3. Setup env: `cp .env.example .env.local` (edit with your keys)
4. Run: `npm run dev`
5. Open: http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
grank-agency/
├── app/
│   ├── page.tsx          (Landing page)
│   ├── layout.tsx        (Global layout)
│   ├── contact/          (Contact page)
│   ├── portfolio/        (Case studies)
│   └── services/         (Service details)
├── components/
│   ├── Header.tsx        (Navigation)
│   ├── Footer.tsx        (Footer)
│   ├── ContactForm.tsx   (Lead capture)
│   ├── ServiceCard.tsx   (Service display)
│   └── AnimatedSection.tsx
├── public/               (Static assets)
├── .env.example
├── ARCHITECTURE.md       (System design)
├── next.config.ts
└── tailwind.config.ts
```

## 🔗 API Integration

**Brevo:** Email automation triggered on form submission

**N8N:** Complex workflows (WhatsApp, calendar, analytics)

**Calendly:** Demo scheduling

**GA4/GTM:** Conversion tracking

## 📊 Analytics

GA4 tracks:

- Form views
- Form submissions
- Calendar clicks
- Service page views
- Testimonial interactions

## 🚢 Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Auto-deploys on push

## 🔐 Security

✅ All API keys in environment variables
✅ No credentials in source code
✅ Form validation on client & server
✅ CORS configured for Vercel
✅ .env.local in .gitignore

## 📚 Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — System design & data flows
- [docs/AUTOMATION_FLOWS.md](./docs/AUTOMATION_FLOWS.md) — Automation workflow details
- GUIA_INSTALACION.md — Installation guide (Spanish)

## 📄 License

MIT License

---

Built with Next.js, TypeScript, and modern marketing automation tools.
