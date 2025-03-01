# React Quiz

React Quiz is a React and TypeScript-based application designed for creating quizzes and surveys with questions and answers. The project includes multilingual support using `i18next` and leverages modern technologies such as React Router for routing and Vite for fast building.

## Demo

You can try the application live at the following URL:  
[React Quiz](http://react-typescript-quiz.s3-website-us-east-1.amazonaws.com/quiz/1)

## Technologies

- **React** (for building the user interface)
- **TypeScript** (for strict typing)
- **Vite** (for fast development and build)
- **i18next** (for multilingual support)
- **React Router** (for routing)
- **Prettier** (for code formatting)
- **ESLint** (for linting)

## Installation and Setup

1. Clone the repository:
```bash
    git clone https://github.com/your-username/react-quiz.git
```
2. Navigate into the project directory:
```bash
  cd react-quiz
```
3. Install dependencies:
```bash
    npm install
```
4. Start the development server:
```bash
    npm run dev
```

The app will be running at http://localhost:5173

## CI/CD for Deployment
This project uses CI/CD pipelines to automate the deployment process. Every push to the repository triggers the build and deployment of the application to an S3 bucket, making it available on a static website hosting.

### The pipeline is configured to:
- Build the project.
- Deploy the static files (HTML, CSS, JS) to an S3 bucket for hosting.

License
This project is licensed under the MIT License - see the LICENSE file for details.
