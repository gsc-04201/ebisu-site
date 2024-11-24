import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-yellow-50 pt-2">
      <div className="flex items-center justify-start px-6">
        {/* 企業アイコンを左端に配置 */}
        <Image
          src="/icon2.png" // 企業アイコンのパスを指定
          alt="Company Logo"
          width={80} // アイコンのサイズ
          height={80} // アイコンのサイズ
        />
      </div>
    </header>
  );
}

