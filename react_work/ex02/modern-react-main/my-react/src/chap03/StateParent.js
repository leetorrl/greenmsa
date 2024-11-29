import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
  // 카운트 합계를 나타내는 count를 초기화한다.
  const [count, setCount] = useState(0);
  // State 값(count)을 갱신하기 위한 update 함수를 준비한다.
  const update = step => setCount(c => c + step);
  return (
  <>
    {/* StateCounter 컴포넌트에 update 함수를 전달 */}
    <p>총 개수: {count}</p>
    <StateCounter step={1} onUpdate={update} />
    <StateCounter step={5} onUpdate={update} />
    <StateCounter step={-1} onUpdate={update} />
  </>
  );
}