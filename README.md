# AFA hearing - Professional Hearing Aid Clinic Website

A modern, vibrant Next.js website for AFA hearing, a professional hearing aid clinic in Melbourne, Victoria, Australia.

## 🎯 Features

- **Modern Design**: Vibrant green and orange color scheme inspired by professional clinic websites
- **Responsive**: Fully responsive design optimized for mobile, tablet, and desktop
- **Appointment Booking**: Easy-to-use appointment booking system
- **Services Page**: Comprehensive listing of hearing care services
- **Product Catalog**: Showcase of hearing aids and products with categories
- **About Section**: Team information and clinic background
- **Contact & Map**: Complete contact information and location details
- **Patient Testimonials**: Social proof with customer reviews
- **TypeScript**: Full TypeScript support for type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
afa-hearing/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── hearing-aids/
│   │   └── page.tsx         # Products page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── appointments/
│   │   └── page.tsx         # Booking page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer
│   ├── HeroSection.tsx      # Homepage hero
│   ├── ServicesPreview.tsx  # Services preview
│   ├── ServicesList.tsx     # Full services list
│   ├── ProductCatalog.tsx   # Hearing aids catalog
│   ├── Testimonials.tsx     # Customer reviews
│   ├── AboutSection.tsx     # About page content
│   ├── AppointmentForm.tsx  # Booking form
│   ├── ContactSection.tsx   # Contact page
│   └── CallToAction.tsx     # CTA section
├── package.json
├── tsconfig.json
├── tailwind.config.ts       # Tailwind CSS config
├── postcss.config.js
└── next.config.js
```

## 🎨 Color Scheme

- **Primary Green**: `#10b981` - Health, trust, and professionalism
- **Primary Orange**: `#f97316` - Warmth, energy, and approachability
- **Dark Green**: `#059669` - Accent and hover states
- **Light Green**: `#6ee7b7` - Highlights
- **Light Orange**: `#fed7aa` - Secondary highlights

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run linting

## 📝 Customization

### Update Business Information

Edit the following files to add your actual information:

1. **Navigation & Footer** - Add your real business phone/email
2. **Contact Section** - Update address, phone, and hours
3. **Appointment Form** - Connect to your backend service
4. **Team Information** - Replace placeholder team members
5. **Product Catalog** - Add your actual hearing aids

### Replace Placeholders

- Hero section image (component: HeroSection.tsx)
- Map embedding (component: ContactSection.tsx)
- Team member photos (component: AboutSection.tsx)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to other platforms

The project is compatible with any Node.js hosting:
- Netlify
- GitHub Pages
- AWS Amplify
- Digital Ocean
- Heroku

Build command: `npm run build`
Start command: `npm start`

## 📧 Contact & Support

For questions or customizations, contact AFA hearing:
- Phone: 0426399344
- Email: audiology.vanak@gmail.com
- Address: 123 High Street, Melbourne, VIC 3000, Australia

## 📄 License

This project is proprietary to AFA hearing. All rights reserved.

## 🎯 Future Enhancements

- Backend integration for appointment booking
- Payment processing
- Blog/Resource section
- Multi-language support
- Online hearing aid comparison tool
- Patient portal
- Integration with hearing aid manufacturers' APIs
