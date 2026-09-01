# PulsePoint Frontend

The frontend application for the PulsePoint Website.

## Tech Stack

- React
- JavaScript
- Vite
- ESLint
- GitHub
- Vercel
- GitHub Actions

## Prerequisites

Before running the project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Stanix-Cohort/PulsePoint_Frontend.git
```

### 2. Navigate to the Project Directory

```bash
cd PulsePoint_Frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal. Open that URL in your browser to view the application.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server for local development.

### Production Build

```bash
npm run build
```

Creates an optimized production build of the application.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase for potential issues.

### Preview

```bash
npm run preview
```

Serves the production build locally for preview.

## Project Structure

```text
src/
├── assets/        # Images, icons, and other static assets
├── components/    # Reusable UI components
├── hooks/         # Reusable React hooks
├── layouts/       # Shared page layouts
├── pages/         # Application pages and screens
├── services/      # API and backend communication
├── utils/          # Reusable utility and helper functions
├── App.jsx        # Root application component
├── App.css        # Application-specific styles
├── index.css      # Global styles
└── main.jsx       # Application entry point
```

## Development

The project uses React with JavaScript and Vite as the development and build tool.

Frontend development should follow the requirements and technical decisions agreed upon by the PulsePoint development team.

## Version Control

The project source code is managed using Git and GitHub.

Developers should follow the team's agreed workflow for branches, commits, pull requests, code reviews, and merging.

The specific branching and pull request conventions will be documented once finalized by the development team.

## Deployment

Vercel is planned as the cloud hosting platform for the project.

GitHub Actions is planned for CI/CD and automation.

The exact deployment and CI/CD workflow will be aligned with the development and DevOps teams.

## API Integration

The frontend will communicate with the backend services through the project's agreed API architecture.

Specific API endpoints, request/response structures, authentication requirements, and integration conventions will be documented once the backend/API specifications are finalized.

## Environment Variables

Environment variables will be used for configuration values that should not be hardcoded into the application.

The required environment variables will be documented once the frontend and backend integration requirements are finalized.

## Testing

The testing approach and testing tools will be determined and documented by the development team as the project progresses.

## Contribution

Before contributing to the project:

1. Ensure the latest version of the repository is available locally.
2. Create or switch to the appropriate development branch according to the team's agreed workflow.
3. Make the required changes.
4. Run the available linting and build checks.
5. Commit your changes with a clear commit message.
6. Push your changes and follow the team's pull request and code review process.

## Project Status

The frontend starter project has been initialized using React and Vite.

The initial environment setup has been completed and the production build has been successfully tested.

Further frontend development will proceed as the project requirements, PRD, and UI/UX designs are finalized.