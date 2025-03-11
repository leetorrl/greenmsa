// app/api/hello/route.ts
import { NextResponse } from 'next/server';

type Data = {
  id: number;
  name: string;
  mail: string;
  age: string;
};

let data: Data[] = [
  { id: 0, name: 'lee', mail: 'lee@naver.com', age: '30' },
  { id: 1, name: 'kim', mail: 'kim@naver.com', age: '23' }
];

// GET 요청을 대문자로 export
export async function GET() {
  return NextResponse.json(data);
}

// POST 요청을 대문자로 export
export async function POST(req: Request) {
  try {
    // 클라이언트에서 보낸 데이터 읽기
    const newItem = await req.json();

    // 새로운 id 값은 기존 데이터의 id 값을 기준으로 자동 증가
    const newData: Data = {
      ...newItem,
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1, // 데이터의 마지막 id를 기준으로 증가
    };

    // 새로운 데이터를 배열에 추가
    data.push(newData);

    // 성공적인 응답 반환
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 400 });
  }
}
