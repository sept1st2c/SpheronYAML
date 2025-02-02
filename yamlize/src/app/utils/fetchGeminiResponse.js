// src/app/utils/fetchGeminiResponse.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { guide } from "./guide";

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Directly convert guide object to string once during initialization if the guide doesn't change
const guideString = JSON.stringify(guide, null, 2);

export async function fetchGeminiResponse(userInput, conversationHistory) {
  try {
    // Get the generative model (e.g., "gemini-pro")
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format the conversation history into a single prompt efficiently
    const formattedHistory = conversationHistory
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");

    // Define the structured prompt
    const prompt = `
    You are an AI assistant for generating valid Spheron Infrastructure Composition Language (ICL) YAML configurations. Your task is to:

    - Use the YAML configuration guide reference below
    - Validate and improve YAML configurations
    - Refine YAML based on user modifications
    - Only output in YAML 
    - For unrelated inputs, respond with: "Please elaborate on the following instruction"

    Guide:
    ${guideString}

    Give me all answers replace the variables below :
    version: "1.0"
services:
  gpu-test:
    image: ghcr.io/open-webui/open-webui:ollama
    expose:
      - port: 8888
        as: 8888
        to:
          - global: true
    env:
      - TEST=test
profiles:
  name: hello-world
  mode: provider
  duration: 1h
  tier:
    - community
  compute:
    gpu-test:
      resources:
        cpu:
          units: 1
        memory:
          size: 20Gi
        storage:
          - size: 100Gi
        gpu:
          units: 1
          attributes:
            vendor:
              nvidia:
                - model: rtx4090
  placement:
    westcoast:
      attributes:
        region: us-central
      pricing:
        gpu-test:
          token: CST
          amount: 5
deployment:
  gpu-test:
    westcoast:
      profile: gpu-test
      count: 1


    name, mode and duration for profiles is a must

    Conversation History:
    ${formattedHistory}

    New User Input: ${userInput}

    - Do not place the YAML in a single line.
    - Each YAML key-value pair should be on a new line, properly indented.
    - Ensure the YAML is human-readable and follows best practices.
    do not need to put "\`\`\`" at start and end
    `;

    // Generate a response from the model
    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Return only the generated YAML text
    return response.text();
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    // Return a more specific error message
    return "Sorry, there was an issue with processing your request. Please try again later.";
  }
}
