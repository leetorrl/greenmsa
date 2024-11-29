import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { idsAtom, todoListSelector } from '../store/atomUp';
import '../chap04/StateTodo.css';

export default function RecoilTodoUp() {
  const [title, setTitle] = useState('');
  // Atom/Selector에서 값, 세터를 가져온다.
  const [todo, setTodo] = useRecoilState(todoListSelector);
  const [ids, setIds] = useRecoilState(idsAtom);

  // 텍스트 상자에 입력한 내용을 State에 반영
  const handleChangeTitle = e => {setTitle(e.target.value)};

  // [추가] 버튼 클릭으로 할 일 항목 추가하기
  const handleAdd = () => {
    // id군의 최대값에서 다음 id값(+1)을 가져온다.
    const newId = Math.max(...(ids.length ? ids : [0])) + 1;
    setTodo({
      type: 'add',
      newItem: {
        id: newId,
        title,
        isDone: false
      }
    });
  };

  // [완료] 버튼 클릭으로 해당 ToDo 항목을 작업 완료로 표시
  const handleDone = e => {
    setTodo({
      type: 'done',
      id: Number(e.target.dataset.id)
    });
  };

  // [삭제] 버튼 클릭으로 해당 Todo 항목 삭제하기
  const handleRemove = e => {
    setTodo({
      type: 'remove',
      id: Number(e.target.dataset.id)
    });
  };

  return (
    <div>
      <label>
        할 일:
        <input type="text" name="todo"
          value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button"
        onClick={handleAdd}>추가</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button"
              onClick={handleDone} data-id={item.id}>완료
            </button>
            <button type="button"
              onClick={handleRemove} data-id={item.id}>삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}