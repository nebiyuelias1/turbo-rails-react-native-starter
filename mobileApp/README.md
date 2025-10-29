# Mobile App - React Native (Expo)

This is the React Native mobile application for the Turbo Rails + React Native starter project. Built with Expo, it provides a native mobile experience powered by Turbo Native integration with the Rails backend.

## Tech Stack

- **React Native**: 0.74.5
- **Expo**: 51.0.28
- **React**: 18.2.0
- **TypeScript**: Full TypeScript support
- **Navigation**: React Navigation 6 with Drawer
- **Routing**: Expo Router for file-based routing
- **Turbo Native**: react-native-turbo for hybrid web-native experience
- **Platforms**: iOS and Android

## Prerequisites

Before starting, ensure you have the following installed:

### Required

1. **Node.js** (LTS version recommended)
   ```bash
   # Using nvm (Node Version Manager) - recommended
   nvm install --lts
   nvm use --lts

   # Or download from: https://nodejs.org/
   ```

2. **Yarn** (Package Manager)
   ```bash
   npm install --global yarn
   ```

### For iOS Development

3. **Xcode** (macOS only)
   - Install from Mac App Store
   - Install Xcode Command Line Tools: `xcode-select --install`

4. **CocoaPods**
   ```bash
   sudo gem install cocoapods
   ```

### For Android Development

5. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Install Android SDK and configure environment variables:
   
   ```bash
   # Add to your ~/.zshrc or ~/.bashrc
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

## Getting Started

### 1. Install Dependencies

```bash
# Install JavaScript dependencies
yarn install
```

### 2. Configure Environment Variables

Create environment-specific configuration files:

```bash
# For development
cp .env.example .env.development

# For production
cp .env.example .env.production
```

Update the `.env.development` file with your backend URL:

```bash
# .env.development
BASE_URL=http://localhost:3000  # Your Rails backend URL
```

**Note**: 
- For iOS simulator: Use `http://localhost:3000`
- For Android emulator: Use `http://10.0.2.2:3000`
- For physical devices: Use your computer's local IP address (e.g., `http://192.168.1.100:3000`)

### 3. iOS Setup (macOS only)

Install iOS dependencies:

```bash
cd ios
pod install
cd ..
```

### 4. Start the Development Server

```bash
# Start Expo development server
yarn start

# Or start with specific platform
yarn ios      # Start iOS simulator
yarn android  # Start Android emulator
```

## Development

### Running on Different Platforms

```bash
# Start development server (shows QR code for Expo Go)
yarn start

# Run on iOS simulator
yarn ios

# Run on Android emulator
yarn android

# Run on physical device
# Scan QR code with Expo Go app (iOS/Android)
```

### Development Build

For features that require native code (like Turbo Native):

```bash
# Create development build for iOS
npx expo run:ios

# Create development build for Android
npx expo run:android
```

## Project Structure

```
mobileApp/
├── src/                      # Source code
│   └── ...                   # App logic and screens
├── components/               # Reusable React components
├── constants/                # App constants and configuration
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript type definitions
├── assets/                   # Images, fonts, and static files
├── android/                  # Android native code
├── scripts/                  # Build and utility scripts
├── app.json                  # Expo configuration
├── babel.config.js           # Babel configuration
├── tsconfig.json             # TypeScript configuration
├── eas.json                  # EAS Build configuration
└── package.json              # Dependencies and scripts
```

## Available Scripts

```bash
# Start development server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android

# Run tests
yarn test

# Type checking
yarn type-check

# Lint code
yarn lint

# Format code
yarn format
```

## Configuration

### App Configuration

Main app configuration is in `app.json`:

- App name and slug
- Version and build numbers
- Icons and splash screens
- Platform-specific settings

### TypeScript Configuration

TypeScript settings are in `tsconfig.json`. The project uses strict mode for better type safety.

### Environment Variables

The app uses `react-native-dotenv` for environment variable management:

- `.env.development` - Development environment
- `.env.production` - Production environment
- `.env.example` - Example template

## Turbo Native Integration

This app uses Turbo Native (via `react-native-turbo`) to seamlessly integrate web views from the Rails backend with native components:

- Hybrid navigation between native and web screens
- Turbo Streams support for real-time updates
- Native navigation controls with web content
- Optimized performance with native transitions

## Building for Production

### Using EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### Local Builds

```bash
# iOS
npx expo run:ios --configuration Release

# Android
npx expo run:android --variant release
```

## Troubleshooting

### Metro Bundler Issues
```bash
# Clear Metro cache
yarn start --clear

# Or manually
rm -rf node_modules/.cache
```

### iOS Build Issues
```bash
# Clear CocoaPods cache
cd ios
pod deintegrate
pod install
cd ..
```

### Android Build Issues
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
```

### Environment Variable Issues

Ensure your `.env.development` file exists and contains the correct `BASE_URL` pointing to your running Rails backend.

## Useful Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Turbo Native for React Native](https://github.com/lazaronixon/react-native-turbo)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Need Help?

Refer to the main project [README](../README.md) for general information and links to backend documentation.

