# Tuano - Authentication App

A modern authentication application built with Next.js, React, and TypeScript.

## Features

- 🎨 **Beautiful Landing Page** - Welcoming interface with feature highlights
- 🔐 **Secure Login & Signup** - Form-based authentication pages
- ✅ **Advanced Form Validation** - Real-time validation with detailed error messages
- 🎯 **Password Strength Checker** - Live password strength feedback
- 🌙 **Dark Mode Support** - Full dark mode support using Tailwind CSS
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- ⚡ **Built with Latest Stack** - Next.js 16, React 19, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend Framework**: Next.js 16.2.4
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4 with PostCSS 4
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tuano-nextapp.git
cd tuano-nextapp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tuano-nextapp/
├── app/
│   ├── components/         # Reusable React components
│   │   └── Navigation.tsx   # Navigation bar component
│   ├── login/              # Login page
│   │   └── page.tsx
│   ├── signup/             # Signup page
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout with Navigation
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── lib/
│   └── validation.ts       # Form validation utilities
├── public/                 # Static assets
├── package.json            # Project dependencies
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.mjs     # Tailwind CSS configuration
```

## Pages

### Landing Page (`/`)
The home page featuring:
- Hero section with app description
- Feature highlights with icons
- Call-to-action buttons for login/signup

### Login Page (`/login`)
Authentication page with:
- Email and password validation
- Show/hide password toggle
- Error messages
- Link to signup page
- Demo credentials display

### Signup Page (`/signup`)
Registration page with:
- Full name, email, password fields
- Password strength indicator
- Real-time validation feedback
- Password confirmation
- Link to login page

## Form Validation

The app includes comprehensive form validation with:
- **Email Validation**: RFC 5322 compliant email format checking
- **Password Strength**: 
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number
  - At least 1 special character (@$!%*?&)
- **Name Validation**: 2-50 character length requirement
- **Real-time Feedback**: Instant validation as users type
- **Clear Error Messages**: User-friendly error descriptions

## Validation Utilities

Located in `lib/validation.ts`:
- `validateEmail()` - Check email format
- `validatePassword()` - Check password strength
- `validatePasswordStrength()` - Get detailed password feedback
- `validateName()` - Check name format
- `validateLoginForm()` - Validate entire login form
- `validateSignupForm()` - Validate entire signup form

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Demo Credentials

For testing the login page:
- **Email**: demo@example.com
- **Password**: Demo@1234

## Styling

The project uses Tailwind CSS for styling with:
- Custom color schemes
- Dark mode support (via `dark:` prefix)
- Responsive design patterns
- Utility-first CSS approach

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@tuano.com or open an issue on GitHub.

## Roadmap

- [ ] Backend authentication API
- [ ] Database integration (PostgreSQL)
- [ ] Session management
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] Social login (Google, GitHub)
- [ ] User profile page
- [ ] Account settings

---

**Made with ❤️ by Tuano Team**
