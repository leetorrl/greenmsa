import { useRef } from 'react';

export default function StateFormUC() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const show = () => {
    console.log(`안녕하세요, ${name.current?.value}（${age.current?.value}세） 님！`);
  };
  return (
    <form>
      <div>
        <label htmlFor="name">이름: </label>
        <input id="name" name="name" type="text"
          ref={name} defaultValue="홍길동" />
      </div>
      <div>
        <label htmlFor="age">나이: </label>
        <input id="age" name="age" type="number"
          ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          보내기</button>
      </div>
    </form>
  );
}

