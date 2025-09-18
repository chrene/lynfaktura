# 🧾 Lynfaktura.dk

**Professional Invoice PDF Generator for Danish Businesses**

Lynfaktura.dk is a modern, user-friendly web application that enables Danish businesses and freelancers to create professional invoice PDFs quickly and easily online. Built with Next.js, TypeScript, and DaisyUI.

![Lynfaktura Screenshot](public/lynfaktura-logo.png)

## ✨ Features

- **🚀 Quick Invoice Creation** - Generate professional invoices in minutes
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎨 Professional Templates** - Clean, business-ready invoice layouts
- **💾 PDF Export** - Download invoices as high-quality PDF files
- **🇩🇰 Danish Localization** - Built specifically for Danish businesses
- **📊 VAT Support** - Automatic VAT calculations and compliance
- **🏢 Company Information** - Store sender and receiver details
- **📋 Line Items** - Flexible product/service line management
- **🔢 Auto Calculations** - Automatic totals, VAT, and late fees

## 🛠️ Tech Stack

- **Framework**: [Next.js 12](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Yup](https://github.com/jquense/yup) validation
- **PDF Generation**: [PDFMake](https://pdfmake.github.io/docs/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Development**: [Faker.js](https://fakerjs.dev/) for test data

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chrene/lynfaktura.git
   cd lynfaktura
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📖 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Quality Assurance
pnpm type-check   # TypeScript type checking
pnpm test         # Run test suite
```

### Project Structure

```
lynfaktura/
├── public/                 # Static assets
│   ├── fonts/             # Montserrat font files
│   └── *.png             # Favicons and logos
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── create-invoice-form/  # Main invoice form
│   │   ├── form-input/          # Form input components
│   │   └── ...
│   ├── pages/            # Next.js pages
│   │   ├── api/          # API routes
│   │   ├── index.tsx     # Homepage
│   │   └── _app.tsx      # App configuration
│   ├── services/         # Business logic
│   │   ├── cvr-api.ts    # Danish CVR registry integration
│   │   └── dx-factory.ts # Test data generation
│   ├── styles/           # Global styles
│   └── types/            # TypeScript definitions
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## 🎨 Customization

### Theme Configuration

The application uses a custom DaisyUI theme with Danish business-friendly colors:

```javascript
// tailwind.config.js
daisyui: {
  themes: [
    {
      default: {
        primary: '#004F77',      // Professional blue
        secondary: '#F000B8',    // Accent pink
        neutral: '#3D4451',      // Dark gray
        'base-100': '#FFFFFF',   // White background
        // ... more colors
      },
    },
  ],
}
```

### Adding New Form Fields

1. Update the `InvoiceData` interface in `types/invoice-data.ts`
2. Add validation rules in `src/components/create-invoice-form/form-validation.ts`
3. Update default values in `src/components/create-invoice-form/default-form-values.ts`
4. Add form inputs in `src/components/create-invoice-form/create-invoice-form.tsx`

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

## 📦 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chrene/lynfaktura)

### Manual Deployment

1. Build the application: `pnpm build`
2. Start the production server: `pnpm start`
3. Or deploy the `out/` directory to your hosting provider

## 🛡️ License

This project is private and proprietary.

## 👨‍💻 Author

**Christian René Nedergaard**
- Website: [lynfaktura.dk](https://lynfaktura.dk)
- GitHub: [@chrene](https://github.com/chrene)

## 🤝 Contributing

This is a private project. For feature requests or bug reports, please contact the author directly.

---

<div align="center">
  <strong>Built with ❤️ for Danish businesses</strong>
</div>
