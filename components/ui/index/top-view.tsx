import Image from "next/image";

export default function TopView() {
  return (
    <section id="top-view" className="text-secondary-foreground">
      <div
        className="w-full min-h-[540px] relative py-26 md:py-24 overflow-hidden"
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
          {/* テキスト部分 */}
          <div className="flex flex-col gap-6 md:gap-10 z-10 relative py-14 md:py-24 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 leading-tight md:leading-tight max-w-xl">
              眠っているお宝、
              <br />
              驚きの価格で買い取ります
            </h1>

            {/* 電話ボタン */}
            <a
              href="tel:+0664505620"
              aria-label="電話でお問い合わせ"
              className="inline-block max-w-[220px] md:max-w-[500px] shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              <Image
                src="/phone-bunner.svg"
                alt="Button Icon"
                width={500}
                height={500}
                className="w-full"
              />
            </a>
          </div>

          {/* 猫イラスト部分 */}
          <div className="absolute right-[-10%] bottom-[-90px] md:bottom-[-110px] w-[70%] sm:w-[85%] md:w-[80%] aspect-square max-w-[500px] md:max-w-[700px]">
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
            className="max-w-[180px] md:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
