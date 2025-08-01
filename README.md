# 🤖 AI Code Analyzer

[cite_start]This is a front-end project built with React and Vite that leverages the Google Gemini API to analyze code snippets, offering insights and explanations[cite: 1].

## ✨ Features

* A clean interface for pasting or typing code.
* [cite_start]Real-time code analysis using Google's generative AI[cite: 1].
* (Add other features your project has, such as: "bug detection", "optimization suggestions", etc.)

## 🛠️ Tech Stack

This project was built using the following technologies:

* [cite_start]**React** (v19.1.0) [cite: 1]
* [cite_start]**Vite** (v7.0.4) [cite: 1]
* [cite_start]**Google Generative AI SDK** (v0.24.1) [cite: 1]

## ⚙️ Getting Started

Follow the steps below to run the project on your local machine.

**Prerequisites:**
* Node.js (v18 or higher)
* Git

**Installation & Setup:**

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:your-username/ai-code-analyzer.git
    cd ai-code-analyzer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**
    * This project requires a Google Gemini API key to function.
    * Create a file named `.env.local` in the project's root directory.
    * Inside this file, add the following line, replacing `YOUR_KEY_HERE` with your actual API key:
        ```
        VITE_GEMINI_API_KEY=YOUR_KEY_HERE
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The project will be available at `http://localhost:5173` (or the port indicated by Vite).

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.