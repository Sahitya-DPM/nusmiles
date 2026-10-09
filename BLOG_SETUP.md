# Blog System Setup Guide

This guide will help you set up the blog system with Firebase integration.

## Prerequisites

1. Node.js and npm installed
2. A Firebase project created

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable the following services:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage

### Authentication Setup
1. In Firebase Console, go to Authentication > Sign-in method
2. Enable Email/Password authentication
3. Create an admin user account for the blog dashboard

### Firestore Setup
1. Go to Firestore Database
2. Create a database in production mode
3. Set up security rules (see below)

### Storage Setup
1. Go to Storage
2. Create a storage bucket
3. Set up security rules (see below)

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### How to Get Firebase Credentials:

1. Go to your Firebase Console
2. Click on the gear icon (⚙️) next to "Project Overview" to open Project Settings
3. Scroll down to the "Your apps" section
4. If you don't have a web app, click "Add app" and select the web icon (</>)
5. Register your app with a nickname (e.g., "Blog Web App")
6. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

7. Copy each value to your `.env.local` file

## Firestore Security Rules

Set up the following security rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to published blog posts
    match /blog-posts/{document} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null;
    }
  }
}
```

## Storage Security Rules

Set up the following security rules in Storage:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog-images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Usage

### Admin Dashboard
- Access the admin dashboard at `/admin/login`
- Use the Firebase admin credentials you created
- Create, edit, and delete blog posts

### Public Blog
- View published blog posts at `/blog`
- Individual blog posts are accessible at `/blog/[slug]`

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)" Error
This error occurs when Firebase environment variables are not properly configured. To fix:

1. Make sure you have created a `.env.local` file in your project root
2. Verify all Firebase environment variables are correctly set
3. Restart your development server after adding environment variables
4. Check that your Firebase project is properly set up with Authentication enabled

### "Firebase is not configured" Error
This error appears when the environment variables are missing. The application will show a warning in the console and gracefully handle the missing configuration.

### Creating Admin User
1. Go to Firebase Console > Authentication > Users
2. Click "Add user"
3. Enter email and password for your admin account
4. Use these credentials to log into the admin dashboard

## Development Mode

The application is designed to handle missing Firebase configuration gracefully. If Firebase is not configured:
- The app will still run without errors
- Console warnings will indicate missing configuration
- Admin features will show appropriate error messages
- Public blog pages will show empty states 