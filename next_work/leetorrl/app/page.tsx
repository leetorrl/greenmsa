'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClientComponent() {
  const [data, setData] = useState<any[]>([]); 
  const [count, setCount] = useState(0);

  useEffect(() => {
   
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/hello');
      const result = await res.json();
      setData(result); 
    };

    fetchData();
  }, []); 

  const countup = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Next.js 기본 페이지</h1>
      <p>Next.js와 React를 사용한 페이지입니다.</p>
      <h1>{count}</h1>
      <button onClick={countup}>click!</button>
      <Link href='/leetorrl'>leetorrl라우터</Link>
      
      <ul>
        {data && data.length > 0 ? (data.map((item, index) => (
            <li key={index}>
              <p>이름: {item.name}</p>
              <p>이메일: {item.mail}</p>
              <p>나이: {item.age}</p>
            </li>
          ))
        ) : (
          <li>Loading...</li> 
        )}
      </ul>
    </div>
  );
}
