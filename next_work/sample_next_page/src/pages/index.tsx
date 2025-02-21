'use client';

import {Inter} from 'next/font/google';
import { useState } from 'react';
import useSWR from 'swr';

const inter = Inter({subsets: ['latin']});

const url = '/api/fs';
const fetcher = (...args) => {
  return fetch(...args).then( res => res.json());
}

export default function Home() {

  const [input,setInput]= useState('')
  const {data,error, mutate, isLoading} = useSWR(url, fetcher);

  const doChange = (event) => {
    const val = event.target.value;
    setInput(val)
  }

const doAction = () => {
  const opts = {
    method: 'POST',
    body:JSON.stringify({content:input})
  }
  fetch(url,opts).then(resp=>{
    setInput('');
    mutate(url);
  })
}

  return (
   <main>
   <h1 className='header'>Index page</h1>
   <p>API를 이용하는 예제입니다.</p>
   <div className='form'>
    <textarea type="text" onChange={doChange} value={input} />
     <button onClick={doAction
     }>Click</button>
   </div>
   <pre className='border p-3'>
    {error ? 'ERROR!!' : isLoading ? 'loding...' : data ? data.content : ''}
   </pre>
   </main>
  );
}
