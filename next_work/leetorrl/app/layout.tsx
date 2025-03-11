import { ReactNode } from 'react';
import './globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div>
          <title>Next.js 레이아웃</title>
          <header>
            <h1 className='bg-red-500'>Next.js 레이아웃 헤더</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>Next.js 레이아웃 푸터</p>
          </footer>
        </div>
      </body>
    </html>
  );
}