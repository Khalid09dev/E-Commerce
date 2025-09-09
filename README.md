# This repository has moved!

This project is now maintained in a new repository: [https://github.com/iamkhalidhussein/dashdeals](https://github.com/iamkhalidhussein/dashdeals)

Please visit the new repository for the latest updates.


# DashDeals

A FullStack e-commerce website built with MongoDB, Express.js, React.js, Node.js

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 📖 Introduction

This project is the frontend of an e-commerce website designed to provide users with a seamless shopping experience. It includes features for browsing products, adding them to cart, and completing orders.

## ✨ Features

- Product browsing and search functionality
- User authentication and account management
- Cart management and checkout process
- Responsive design for mobile and desktop

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Tanstack (for managing API queries)
- Axios (for making HTTP requests)
- React Router (for navigation)
- Context API (for state management)

## 📁 Project Structure

```bash
E-Commerce/
├── .firebase/              # Firebase-related files and cache for hosting
├── public/                 # Static files like images, icons, manifest, etc.
│
├── src/
│   ├── assets/             # Fonts, icons, and other asset files
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── utils/              # Utility functions and helpers
│   └── hooks/              # Custom React hooks
│
├── .gitignore              # Git ignored files and folders
├── .eslintrc.cjs           # ESLint configuration for linting rules
├── .firebaserc             # Firebase project configuration
├── index.html              # Root HTML file for the app (used by Vite)
├── tailwind.config.js      # Tailwind CSS configuration
├── README.md               # Project overview and documentation
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lockfile for npm dependency resolution
├── pnpm-lock.yaml          # Lockfile for pnpm (alternative package manager)
├── components.json         # Configuration or registration for UI components
├── postcss.config.js       # PostCSS configuration
├── tsconfig.app.json       # App-specific TypeScript settings
├── tsconfig.json           # Base typescript configuration
└── vite.config.js          # vite configuration or setup
```

## 🚀 Getting Started

To get a local copy up and running follow these simple steps:

1. Clone the repository: `git clone https://github.com/iamkhalidhussein/E-Commerce.git`
2. Navigate into the directory: `cd your-repository`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to: `http://localhost:4000`

## 🧩 Usage

- Browse products by categories or search by keywords.
- Add products to the cart and proceed to checkout.
- Register or login to manage your account and view order history.

## 🔐 Environment Variables

```
VITE_apiKey = your_api_key
```

```
VITE_authDomain = your_firebase_auth_domain
```

```
VITE_projectId = your_firebase_proeject_id
```

```
VITE_storageBucket = your_firebase_storage-bucket
```

```
VITE_messagingSenderId = your_firebase_senderid
```

```
VITE_appId = your_firebase_app-id
```

```
VITE_measurementId = your_firebase_measurementid
```

```
VITE_backendUrl = http://localhost:4000
```

```
VITE_Stripe_PK = your_stripe_public_key
```

```
VITE_Stripe_SK = your_stripe_secret_key
```

## 🔗 Backend Repository

The backend server code for this project can be found at: [https://github.com/iamkhalidhussein/E-Commerce-Server]

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
