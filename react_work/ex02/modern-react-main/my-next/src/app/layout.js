// import { Inter } from "next/font/google";
// import "./globals.css";

// // 폰트 정보 설정
// const inter = Inter({ subsets: ["latin"] });

// // 메타 정보 준비
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// // 루트 레이아웃 준비
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }



// Code 11-4-1
import Link from 'next/link';
// Tailwind.css 설정 가져오기
import './globals.css';
import { Inconsolata } from 'next/font/google';

// 구글 폰트 활성화
const fnt = Inconsolata({ subsets: ['latin'] })

// 메타데이터 정의
export const metadata = {
  title: 'Reading Recorder',
  description: '내가 읽은 책을 기록하는 앱',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={fnt.className}>
      <h1 className="text-4xl text-indigo-800 font-bold my-2">
        Reading Recorder</h1>
      {/* 공통 메뉴 준비 */}
      <ul className="flex bg-blue-600 mb-4 pl-2">
        <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <Link className="no-underline text-blue-300" href="/">
            Home</Link></li>
        <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <Link className="no-underline text-blue-300" href="/books">
            Search</Link></li>
        <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <a className="no-underline text-blue-300"
            href="https://wikibook.co.kr/support/contact/" target="_blank">Support</a></li>
      </ul>
      {/* 페이지 구성 요소를 반영하는 영역 */}
      <div className="ml-2">
        {children}
      </div>
      </body>
    </html>
  );
}
