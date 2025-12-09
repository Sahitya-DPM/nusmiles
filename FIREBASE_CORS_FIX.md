# Fix Firebase Storage CORS Issue

The error you're seeing is due to CORS (Cross-Origin Resource Sharing) configuration in Firebase Storage. Here's how to fix it:

## Option 1: Configure CORS in Firebase Storage (Recommended)

1. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Create a `cors.json` file in your project root with the following content:
   ```json
   [
     {
       "origin": ["http://localhost:3000", "https://your-domain.com"],
       "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
       "maxAgeSeconds": 3600,
       "responseHeader": ["Content-Type", "Authorization"]
     }
   ]
   ```

4. Deploy CORS configuration:
   ```bash
   gsutil cors set cors.json gs://nusmiles-blog.firebasestorage.app
   ```

   Or if you have gcloud CLI installed:
   ```bash
   gsutil cors set cors.json gs://nusmiles-blog.firebasestorage.app
   ```

## Option 2: Use Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `nusmiles-blog`
3. Go to **Storage** > **Rules**
4. Make sure your storage rules allow authenticated uploads:
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

5. For CORS, you'll need to use gsutil (Google Cloud Storage utility) as shown in Option 1.

## Option 3: Temporary Workaround

The code has been updated to use base64 encoding as a fallback when Firebase Storage upload fails. This means:
- Posts will still be created even if image upload fails
- Images will be stored as base64 in Firestore (less efficient but works)
- You can fix CORS later and images will upload to Storage properly

## Quick Test

After fixing CORS, try creating a post again. The image should upload to Firebase Storage successfully.

