import { GoogleGenerativeAI } from '@google/generative-ai';


const geminiClient = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeCode(code) {
  const prompt = `
        Analise o seguinte código e forneça sugestões de melhorias de forma didática e clara:
   
    ${code}
   
    Please rate:
    1. Possible bugs or errors
    2. Performance improvements
    3. Good coding practices
    4. Readability and maintainability
    5. Specific optimization suggestions

    IMPORTANT:
    - Explain the problem and solution as if I were a beginner in programming
    - Provide a concise and clear analysis
    - Use bullet points for each suggestion
    - Format the answer using markdown
    - Use ### for section titles
    - Use **bold** to highlight important points
    - Use \`code\` for code snippets
    - Use - for lists
    - Be clear and didactic in Portuguese

    ANSWER FORMAT:
- Use only normal paragraphs
    Be CONCISE. Return only:

    ❌ MAIN PROBLEM:
    [1 most critical problem]

    ✅ QUICK SOLUTION:
    [1 main suggestion]

    Maximum 3 sentences. Straight to the point.
`;

  try {
    const model = geminiClient.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error parsing code:', error);
    throw new Error('Error connecting to AI. Check your API key and try again.');
  }
}