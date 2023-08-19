import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by hjkim",
};

//a태그를 Link로 변경하면 SPA가 되어 속도가 향상된다.
//페이지 전체를 변경하지 않고 변경되는 부분만 변경하며 한 번 방문했던 페이지는 소스를 다운로드 해놓은 데이터를 사용한다.

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
