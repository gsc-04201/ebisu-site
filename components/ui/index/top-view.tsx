import Image from "next/image";

export default function TopView() {
  return (
    <section id="top-view" className="text-secondary-foreground">
      <div
        className="w-full min-h-[600px] relative py-26 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url('/top-view-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 企業アイコン */}
        <div className="absolute top-4 left-4 z-20">
          <Image
            src="/company-icon.svg"
            alt="Company Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 md:gap-10 z-10 relative py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 leading-tight md:leading-tight max-w-xl">
              眠っているお宝、
              <br />
              驚きの価格で買い取ります
            </h1>
            <p className="text-lg md:text-xl">
              あなたのご自宅のいらないもの、わたしたちに売ってみませんか？
              <br />
              査定のご相談など、まずはお気軽にお問い合わせください。
            </p>
            <a
              href="tel:+0664505620"
              aria-label="電話でお問い合わせ"
              className=""
            >
              <Image
                src="/phone-bunner.svg"
                alt="Button Icon"
                width={500}
                height={500}
                className="shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
              />
            </a>
          </div>
          <div className="absolute right-[-10%] bottom-[-120px] w-[95%] md:w-[80%] aspect-square max-w-[700px]">
            <Image
              src="/ebisu-neko.svg"
              alt="Cute cat in kimono fishing"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* 注意バナー */}
        <div className="max-w-md mx-auto flex justify-center py-6 mt-10">
          <Image
            src="/atention-bunner.svg"
            alt="atention bunner"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
