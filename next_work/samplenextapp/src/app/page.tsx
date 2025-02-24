"use client";

import { useState } from "react";

// API 호출에 직접 fetch 사용
export default function Home() {
  const [input, setInput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [assistant, setAssistant] = useState('');

  const doChange = (event) => {
    setInput(event.target.value);
  };

  const doAction = async () => {
    setPrompt(input);
    setAssistant('wait...');

    try {
      // OpenAI API 호출
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`, // API 키를 .env 파일에서 로드
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // 사용할 모델
          messages: [
            {
              role: 'system',
              content: '한국어로 100글자 이내로 응답하세요.',
            },
            {
              role: 'user',
              content: input,
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const result = data.choices[0].message.content.trim();
        setInput('');
        setAssistant(result);
      } else {
        setAssistant('No response from assistant');
      }
    } catch (error) {
      console.error('Error:', error);
      setAssistant('Error fetching data');
    }
  };

  return (
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">프롬프트를 입력 :</p>
      <div className="mx-5">
        <input
          type="text"
          className="input"
          value={input}
          onChange={doChange}
        />
        <button onClick={doAction} className="btn">
          Send
        </button>
      </div>

      <div className="prompt">
        <p className="">PROMPT: {prompt}</p>
        <p className="">ASSISTANT: {assistant}</p>
      </div>
    </main>
  );
}
