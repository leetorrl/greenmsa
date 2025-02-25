"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home(){
  const [input, setInput] = useState('')
  const [prompt, setPrompt] = useState('')
  const [assistant, setAssistant] = useState('')
//   const [src, setSrc] = useState('/samp.webp');

  const doChange = (event) => {
    setInput(event.target.value);
  }


async function doAction(){
  setAssistant('wait...');
//   setPrompt('wait...')
  fetch('/rhh',{
    method: 'POST',
    body: JSON.stringify({prompt:input})
  }).then(resp => resp.json())
  .then((value) => {
    setPrompt(input);
    setInput('')
    setAssistant(value.content);
    // setSrc(value.url)
  })
  .catch(error => {
    console.log(error)
  })
}
  
  return(
    <main>
      <h1 className="title">Index page</h1>
      <p className="msg font-bold">프롬프트를 입력 :</p>
      <div className="mx-5">
        <input type="text" className="input" name="input" value={input} onChange={doChange} />
        <button className="btn" onClick={doAction}>Send</button>
      </div>
      <div className="prompt">
        <div className="">PROMPT: {prompt}</div>
{/* <div>
  <Link href={src} target='_blank'><img className="my-0" width="256" height="256" src={src}/></Link>
</div> */}
        <p className="">ASSISTANT: {assistant}</p>
      </div>
      <Link href="/">Go image!!</Link>
    </main>
  )
}

