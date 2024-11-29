import Image from "next/image";

export default function TopView() {
  return (
    <section id="top-view" className=" text-secondary-foreground">
      <div className="w-full min-h-[600px]  relative px-6 py-26 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 md:gap-8 z-10 relative">
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
            <Image
              src="/phone-bunner.svg"
              alt="Button Icon"
              width={500}
              height={500}
            />
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
      </div>
      <div className="max-w-md mx-auto p-4 flex justify-center">
        <Image
          src="/atention-bunner.svg"
          alt="atention bunner"
          width={250}
          height={250}
        />
      </div>
      
    </section>
  );
}
