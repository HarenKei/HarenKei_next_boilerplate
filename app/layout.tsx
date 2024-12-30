import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HarenKei Next.js Boilerplate",
  description: "HarenKei Next.js Boilerplate",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
