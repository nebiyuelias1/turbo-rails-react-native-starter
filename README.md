# Turbo Rails + React Native Starter
<img width="1024" height="1024" alt="turbo_react_native" src="https://github.com/user-attachments/assets/09a80b5e-6fe3-4f92-b594-5b5ded3bb4f6" />

A comprehensive starter template for building hybrid mobile applications using Turbo Rails backend and React Native frontend. This project combines the power of Rails 8 with modern React Native (Expo) to create seamless cross-platform mobile experiences.

## What's Included

### Backend (Rails 8)
- **Ruby on Rails 8.0.3** with Ruby 3.4.6
- **Turbo Rails** for real-time updates and native-like navigation
- **Turbo Streams** for live page updates
- **PostgreSQL** database
- **Tailwind CSS** for styling
- **Devise** for authentication
- **Solid Cache, Solid Queue, and Solid Cable** for modern Rails infrastructure
- **Kamal** for deployment
- **Docker** support with devcontainer configuration

### Mobile App (React Native + Expo)
- **React Native 0.74.5** with Expo 51
- **React Navigation** for routing with drawer navigation
- **TypeScript** support
- **Turbo Native** integration via react-native-turbo
- **Expo Router** for file-based routing
- **iOS and Android** support
- Environment-based configuration (.env support)

## Project Structure

```
turbo-rails-react-native-starter/
├── backend/                    # Rails 8 backend application
│   ├── app/                    # Rails application code
│   │   ├── controllers/        # API and web controllers
│   │   ├── models/             # ActiveRecord models
│   │   ├── views/              # Rails views (Turbo-enabled)
│   │   └── ...
│   ├── config/                 # Rails configuration
│   ├── db/                     # Database migrations and schema
│   ├── .devcontainer/          # Docker dev container setup
│   ├── Gemfile                 # Ruby dependencies
│   └── README.md               # Backend-specific documentation
│
├── mobileApp/                  # React Native mobile application
│   ├── src/                    # Application source code
│   ├── components/             # Reusable React components
│   ├── constants/              # App constants and configuration
│   ├── hooks/                  # Custom React hooks
│   ├── android/                # Android-specific code
│   ├── assets/                 # Images, fonts, and other assets
│   ├── types/                  # TypeScript type definitions
│   ├── package.json            # Node.js dependencies
│   └── README.md               # Mobile app-specific documentation
│
└── README.md                   # This file - project overview
```

## Quick Start

### Prerequisites
- **Backend**: Ruby 3.4.6, PostgreSQL, Docker (optional)
- **Mobile App**: Node.js (LTS), Yarn, iOS/Android development environment

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nebiyuelias1/turbo-rails-react-native-starter.git
   cd turbo-rails-react-native-starter
   ```

2. **Set up the backend**
   
   See detailed instructions in [backend/README.md](./backend/README.md)
   
   Quick start:
   ```bash
   cd backend
   bundle install
   rails db:create db:migrate
   bin/dev
   ```

3. **Set up the mobile app**
   
   See detailed instructions in [mobileApp/README.md](./mobileApp/README.md)
   
   Quick start:
   ```bash
   cd mobileApp
   yarn install
   cp .env.example .env.development
   # Update .env.development with your backend URL
   yarn start
   ```

## Development Guides

For detailed setup and development instructions, please refer to:
* **Backend (Rails)**: [backend/README.md](./backend/README.md)
* **Mobile App (React Native)**: [mobileApp/README.md](./mobileApp/README.md)

## Features

- ✅ **Rails 8** with modern infrastructure (Solid Cache, Queue, Cable)
- ✅ **Turbo Native** for hybrid mobile development
- ✅ **React Native (Expo)** for cross-platform mobile apps
- ✅ **Tailwind CSS** for styling with Turbo Streams
- ✅ **TypeScript** support in mobile app
- ✅ **Authentication** ready with Devise
- ✅ **Docker** support for containerized development
- ✅ **Ready for Strada integration** for advanced web-to-native interactions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

