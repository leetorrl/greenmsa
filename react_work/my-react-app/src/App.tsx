import { useEffect, useState } from 'react'

import './App.css'




function App() {

  useEffect(() => {
    console.log('하이');
    // 초기 데이터 가져오기나 API 호출 등 작업 수행
  }, []); // 빈 배열: 마운트될 때만 실행
  
  


  // 상태 관리: a 초기값을 10으로 설정
  const [a, setA] = useState(10);

  // 버튼 클릭 시 a 값을 20으로 변경하는 함수
  const handleClick = () => {
    setA(a+10)
  };

  return (
    <>
      <div>{a}</div>
      <button onClick={handleClick}>클릭</button>
    </>
  );
}


export default App
