# Divoora Rider App

This is a hybrid for riders at divoora to help them book their shifts.

## Prerequisites

1. Install [Node.js](https://nodejs.org/)

   ```bash
   # Using nvm (Node Version Manager)
   nvm install --lts
   nvm use --lts

   # Or download from the official website
   ```

2. Install [Yarn](https://yarnpkg.com/)

   ```bash
   npm install --global yarn
   ```

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Create a `.env` file

   Create a `.env` file in the root of your project. You can use the `.env.example` file as a template.

   ```bash
   # For development
   cp .env.example .env.development

   # For production
   cp .env.example .env.production
   ```

   Update the `.env` file with your environment-specific variables.


## iOS Setup

1. Install CocoaPods

   ```bash
   sudo gem install cocoapods
   ```

2. Install iOS dependencies

   ```bash
   cd ios
   pod install
   cd ..
   ```

## Android Setup

1. Install Android Studio and set up the Android SDK

   Follow the instructions [here](https://developer.android.com/studio) to install Android Studio and set up the Android SDK.

2. Add the Android SDK to your PATH

   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

3. Start the Android emulator

   ```bash
   npx expo start --android
   ```