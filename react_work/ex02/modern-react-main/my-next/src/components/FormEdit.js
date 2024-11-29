// 'use client';

// import { addReview, removeReview } from '@/lib/actions';

// export default function FormEdit({ src: { id, read, memo } }) {
//   return (
//     // 제출 시 addReview 메서드를 호출한다.
//     <form action={addReview}>
//     <input type="hidden" name="id" defaultValue={id} />
//     <div className="mb-3">
//       <label className="font-bold" htmlFor="read">읽은 날짜:</label>
//       <input type="date" id="read" name="read"
//         className="block bg-gray-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500"
//         defaultValue={read}/>
//     </div>
//     <div className="mb-3">
//       <label className="font-bold" htmlFor="memo">소감:</label>
//       <textarea id="memo" name="memo" rows="3"
//         className="block bg-gray-100 border-2 border-gray-600 w-full rounded focus:bg-white focus:outline-none focus:border-red-500"
//         defaultValue={memo}></textarea>
//     </div>
//     <button type="submit"
//         className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500">
//         등록하기</button>
//     {/* [삭제하기] 버튼으로 removeReview 함수를 호출 */}
//     <button type="submit"
//       className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-500"
//       formAction={removeReview}>
//       삭제하기</button>
//     </form>
//   );
// }



// Code 11-4-16
'use client';

import { useTransition } from 'react';
import { addReview, removeReview } from '@/lib/actions';

export default function FormEdit({ src: { id, read, memo } }) {
  const [isPending, startTransition] = useTransition();

  // 이벤트 핸들러를 통해 서버 액션을 호출한다.
  return (
    <form action={addReview}>
    <input type="hidden" name="id" defaultValue={id} />
    <div className="mb-3">
      <label className="font-bold" htmlFor="read">읽은 날짜:</label>
      <input type="date" id="read" name="read"
        className="block bg-gray-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500"
        defaultValue={read}/>
    </div>
    <div className="mb-3">
      <label className="font-bold" htmlFor="memo">소감:</label>
      <textarea id="memo" name="memo" rows="3"
        className="block bg-gray-100 border-2 border-gray-600 w-full rounded focus:bg-white focus:outline-none focus:border-red-500"
        defaultValue={memo}></textarea>
    </div>
    <button type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500">
        등록하기</button>
    <button type="button"
      className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-500"
      onClick={() => {
        startTransition(() => removeReview(id));
      }}>
      삭제하기</button>
    </form>
  );
}