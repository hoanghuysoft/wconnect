# WConnect React Native

A React Native version of the WConnect web application, styled with NativeWind (Tailwind CSS for React Native).

## Project Structure

```
WConnect-RN/
├── assets/               # Static assets
├── src/
│   ├── assets/           # Application-specific assets
│   │   └── images/       # Image assets
│   ├── components/       # UI components
│   │   ├── home/         # Home screen components
│   │   └── shared/       # Shared components
│   ├── hooks/            # Custom React hooks
│   ├── navigation/       # Navigation configuration
│   ├── screens/          # App screens
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── App.tsx               # Entry point
└── index.ts              # Register application
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
2. Install dependencies:

```
npm install
```

### Running the app

```
npm start
```

Then choose to run on:
- Web: Press `w` in the terminal
- Android: Press `a` in the terminal (requires Android Studio and emulator)
- iOS: Press `i` in the terminal (requires Xcode and simulator, macOS only)

You can also scan the QR code with the Expo Go app on your device.

## Image Placeholders

To complete the app setup, you'll need to add the following image assets to `src/assets/images/`:

- profile-background.jpg
- search-icon.png
- notification-icon.png
- camera-icon.png
- video-icon.png
- checkin-icon.png
- add-story-icon.png
- user-avatar.jpg
- public-icon.png
- more-options.png
- post-image.jpg
- like-active.png
- comment-icon.png
- share-icon.png
- love-icon.png
- like-icon.png
- care-icon.png 