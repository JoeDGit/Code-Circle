# Code Circle

Code Circle is a web application designed to connect programmers with each other and facilitate pair programming. With Code Circle, you can create posts to share your programming ideas, find other users to collaborate with, and communicate with them through direct messaging, video chat, and screen sharing.

## Link to live site

[Code Circle](https://code-circle44.vercel.app/home)

## Features

- **Account creation:** Account creation on Code Circle is powered by Firebase Authentication. With Firebase Authentication, users can create an account with their email and password. The authentication process is secure and straightforward, ensuring that users' personal information is protected.
- **Create and share posts:** You can create and share posts on Code Circle to discuss your programming ideas and find collaborators. Other users can view your posts and comment on them to start a conversation.
- **Direct messaging with Ably:** Code Circle uses the Ably messaging platform to provide direct messaging between users. You can send messages to other users, create group chats, and receive real-time notifications when someone messages you.
- **Video chat and screen sharing with WebRTC:** Code Circle uses WebRTC technology to provide video chat and screen sharing between users. You can start a video call with another from the direct message page, and share your screen to collaborate on code or troubleshoot

## Getting started

To run Code Circle locally, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1.  Clone this repository: `git clone https://github.com/JoeDGit/code-circle.git`
2.  Install dependencies: `npm install`
3.  Create a Firebase project and enable Firebase Authentication.
4.  Create an Ably account and obtain an API key.
5.  Create a `.env.local` file in the root directory with the following environment variables:

```
ABLY_API_KEY=<YOUR_ABLY_API_KEY>
FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
```

6.  Start the development server: `npm run dev`
7.  Open your browser and go to `http://localhost:3000`

## Deployment

This app can be deployed on various platforms. Here are some options:

- Deploying to [Vercel](https://vercel.com/docs/platform/deployments) with Next.js [official guide](https://nextjs.org/docs/deployment).
- Deploying to [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) by creating a new Heroku app and linking it to your repository.

## Contributing

If you want to contribute to Code Circle, please open an issue or submit a pull request. We welcome any feedback, bug reports, or feature requests.
