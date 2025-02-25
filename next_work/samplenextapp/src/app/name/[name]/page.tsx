'use server';
import Link from 'next/link';

const paths = [
    { name: 'kim' },
    { name: 'lee' },
    { name: 'park' },
];

// ✅ 비동기 함수로 설정하여 타입 오류 방지
export async function generateStaticParams(): Promise<{ params: { name: string } }[]> {
    return paths.map((path) => ({
        params: { name: path.name },
    }));
}

// ✅ PageProps 타입 명확히 지정
interface PageProps {
    params: {
        name: string;
    };
}

// ✅ Name 컴포넌트를 async로 변경하여 Next.js 13+의 서버 컴포넌트 규칙 준수
export default async function Name({ params }: PageProps) {
    const { name } = params;

    // ✅ 직접 Promise를 기다리지 않도록 동기적으로 처리
    const result = paths.some((path) => path.name === name);

    return (
        <main>
            {result ? (
                <>
                    <h1 className="title">Name = &quot;{name}&quot;</h1>
                    <p className="msg">{name}님, 안녕하세요!</p>
                </>
            ) : (
                <>
                    <h1 className="title">&quot;{name}&quot;</h1>
                    <p className="msg">&quot;{name}&quot;은(는) 사용할 수 없습니다.</p>
                </>
            )}
            <div>
                <Link href="/">Go back!!</Link>
            </div>
        </main>
    );
}
