# Spheron YAML (ICL) Generator

## 🚀 Demo

We have temporarily disabled the chatbot feature due to monetary constraints. However, you can check out our demo video showcasing the project:

📹 [Google Drive Demo Link](https://drive.google.com/drive/folders/17PXAFSUd2G_1uTZ9R6-0ScDzPVnAaoXi)

## 📖 Pitch Deck

For a detailed understanding of our product and approach, you can view our pitch presentation:

📑 [Pitch PPT PDF](https://drive.google.com/file/d/15TWttzczYg7LztmUszgJ40Qu26441xHE/view?usp=sharing)

## 🔬 Google Colab Notebook

To verify our work and explore the implementation, check out our Google Colab notebook:

📝 [Colab Notebook](https://colab.research.google.com/drive/1EmNPYj16DwusqdVbgIkQVPn88Tk4SmKM?usp=sharing)

---

## 🌟 Overview

Spheron uses an Infrastructure Composition Language (ICL) in YAML to define and manage deployments. Writing YAML configurations manually can be tedious, requiring developers to memorize keys, properties, and structures. This project automates YAML generation, making the deployment process seamless and user-friendly.

## 🎯 Goal

Automate YAML generation using Retrieval-Augmented Generation (RAG) and FAISS.

## ✅ Output

A valid YAML configuration tailored to the user's needs.

## 🔑 Key Components

- **FAISS**: Enables fast and efficient semantic search.
- **RAG**: Ensures context-aware YAML generation.

## 🛠️ Technical Architecture

1. Load and process ICL documentation into manageable chunks.
2. Build a FAISS index for efficient similarity search.
3. Generate embeddings using Sentence Transformers.
4. Retrieve relevant chunks using FAISS.
5. Generate YAML using DeepSeek-Coder-1.3B.
6. Validate the generated YAML for correctness and compliance.

## ✨ Features

- **Automated YAML Generation**: Eliminates the need for manual YAML writing.
- **Validation & Error Prevention**: Ensures compliance with Spheron’s ICL specifications, preventing misconfigurations.
- **Easy Iterations**: Users can refine or regenerate YAML configurations with ease.

## 🏗️ Tech Stack

- **Frontend**: Next.js (React-based framework for fast and scalable web applications)
- **Backend**: DeepSeek-Coder-1.3B for intelligent YAML generation
- **Storage**: FAISS for efficient similarity search and retrieval
- **NLP & Embeddings**: Sentence Transformers for contextual understanding
- **Validation**: Custom logic to ensure YAML correctness and prevent syntax errors

---

## 📌 Installation & Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/spheron-icl-generator.git
   cd spheron-icl-generator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

---

## 🎯 Expected Outcomes

- **Faster onboarding**: Developers no longer need to manually learn Spheron ICL syntax.
- **Enhanced efficiency**: Reduces the time spent on YAML configuration.
- **Error-free deployment**: Ensures correct and validated YAML outputs.

## 🤝 Contribution

We welcome contributions! Feel free to submit issues or pull requests to improve the project.

## 📜 License

This project is licensed under the **MIT License**.
