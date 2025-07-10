# 🎨 Styled QR Code Generator

A beautiful, modern QR code generator built with Next.js that allows you to create fully customizable QR codes with logos, custom colors, and advanced styling options.

![Styled QR Code Generator](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality

- **Real-time QR Code Generation** - Instant preview as you customize
- **Multiple Content Types** - URLs, text, phone numbers, email addresses, and more
- **High-Quality Downloads** - Export as PNG images in various sizes

### 🎨 Customization Options

- **Colors**: Custom background and foreground colors
- **Styles**: Choose from squares (classic), dots (modern), or fluid (organic) patterns
- **Size Control**: Adjustable from 128px to 512px
- **Logo Integration**: Upload and position custom logos with opacity control
- **Eye Customization**: Custom colors and border radius for QR code eyes
- **Quiet Zone**: Adjustable empty border space around the QR code

### ⚙️ Advanced Settings

- **Error Correction Levels**: L (7%), M (15%), Q (25%), H (30%) recovery rates
- **Logo Padding**: Square or circle padding styles
- **Background Removal**: Option to remove QR pattern behind logos
- **CORS Support**: Enable for cross-origin resource sharing

### 🎪 UI/UX Features

- **Modern Design**: Beautiful gradients and backdrop blur effects
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Real-time Preview**: See changes instantly as you adjust settings
- **Detailed Information**: View QR code specifications and content details
- **Interactive Controls**: Smooth sliders and intuitive color pickers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/styled-qr-code.git
   cd styled-qr-code
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 How to Use

### 1. 📝 Enter Content

- Input any URL, text, or data you want to encode
- Examples: website URLs, contact information, WiFi credentials, plain text

### 2. 🎨 Customize Style

- **Size**: Adjust the QR code dimensions (128-512px)
- **Colors**: Choose background and foreground colors
- **Style**: Select from squares, dots, or fluid patterns
- **Eyes**: Customize corner square colors and roundness
- **Quiet Zone**: Adjust the empty border space

### 3. 🖼️ Add Logo (Optional)

- Upload your logo image (PNG, JPG, SVG)
- Adjust logo size and opacity
- Choose padding style (square or circle)
- Option to remove QR pattern behind logo for better visibility

### 4. ⚙️ Fine-tune Settings

- **Error Correction**: Higher levels allow more damage recovery
- **CORS**: Enable if using external logo URLs
- **Background Removal**: Clear QR pattern behind logo for cleaner look

### 5. 💾 Download

- Click the download button to save your QR code as a PNG image
- File automatically downloads as `qr-code.png`

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.5](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom components
- **QR Generation**: [react-qrcode-logo](https://github.com/gcoro/react-qrcode-logo)
- **Build Tool**: Turbopack for fast development

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [react-qrcode-logo](https://github.com/gcoro/react-qrcode-logo) for the excellent QR code generation library
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">
  <strong>Built with ❤️ using Next.js and Cursor</strong>
</div>
