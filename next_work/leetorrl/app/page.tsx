'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', mail: '', age: '' });

  // 데이터 가져오기 (GET 요청)
  const fetchData = async () => {
    try {
      const res = await axios.get('/api/hello'); // axios로 GET 요청
      setData(res.data); // 서버에서 받은 데이터
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // POST 요청으로 새로운 항목 추가
  const addItem = async () => {
    try {
      const res = await axios.post('/api/hello', newItem); // axios로 POST 요청
      setData((prevData) => [...prevData, res.data]); // 새로 추가된 항목을 기존 데이터에 추가
      setNewItem({name: '', mail: '', age: ''});
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div>
        <h2>Add New Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newItem.mail}
          onChange={(e) => setNewItem({ ...newItem, mail: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newItem.age}
          onChange={(e) => setNewItem({ ...newItem, age: e.target.value })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <h2>Existing Data</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} ({item.age}) - {item.mail}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
