# Vue2 Authentication with JWT token

This project is a simple authentication template using Vue 2, Vuetify, Vuex, and Vite. It demonstrates how to set up a basic authentication system in a Vue.js application using Vuex for state management, Vuetify for UI components, and Vite as the build tool.

## Table of Contents
- [Features](#features)
- [Minimum Requirements](#minimum-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Default Settings](#default-settings)
- [License](#license)

## Features
- **Vue 2:** The progressive JavaScript framework for building user interfaces.
- **Vuetify:** Material Design Component Framework for Vue.
- **Vuex:** State management library for Vue applications.
- **Vite:** Next generation front-end tooling for fast development.
- **Axios:** Promise-based HTTP client for making API requests.

## Minimum Requirements
- **Node.js:** ^14.0.0
- **npm or yarn** for package management.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vue2-authentication.git
   cd vue2-authentication
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Usage

### Running the Application

- Development mode:
   ```bash
   npm run dev
   ```
  This will start the development server on http://localhost:3000.

### Building the Application

- Production build:

   ```bash
   npm run build
   ```
  The production build will be available in the dist/ directory.


- Preview the production build:

   ```bash
   npm run serve
   ```
  This will start a local server to preview the production build.

### Project Structure

```plaintext
.
├── public/
│   └── index.html       # Entry point of the application
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── router/          # Vue Router setup
│   ├── store/           # Vuex store setup
│   ├── views/           # Application views
│   ├── App.vue          # Main application component
│   └── main.js          # Application entry point
├── .gitignore           # Files to ignore in version control
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration file
```

### Default Settings

- Port: The development server runs on http://localhost:3000.
- API URL: Modify the base API URL in the Vuex store or in a separate configuration file.

### License

This project is licensed under the MIT License. See the LICENSE file for details.


### Summary of the `README.md` File

- **Features**: Highlights the main technologies used.
- **Minimum Requirements**: Lists the software versions required to run the project.
- **Installation**: Provides instructions to clone the repo and install dependencies.
- **Usage**: Explains how to run and build the application.
- **Project Structure**: Provides an overview of the directory layout.
- **Default Settings**: Specifies default configurations like the port.
- **License**: Specifies the licensing information.


