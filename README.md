# JobApp

JobApp is a React Native application that fetches job listings from an API and allows users to bookmark jobs for offline viewing. This project is set up using the React Native CLI and targets Android.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Download and install Node.js from the [official website](https://nodejs.org/). The LTS version is recommended.
- **Android Studio**: Install Android Studio from the [official Android Studio website](https://developer.android.com/studio). Make sure to include:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device (AVD)
  
- **Java Development Kit (JDK)**: Ensure you have JDK 11 installed.

### Setting Up Android Environment Variables

For Windows:
1. Set `ANDROID_HOME` to your Android SDK path (e.g., `C:\Users\Your-Username\AppData\Local\Android\Sdk`).
2. Add the following to your `Path` variable:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\emulator`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\tools\bin`

For macOS/Linux:
1. Add the following lines to your `.bash_profile` or `.zshrc`:
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
