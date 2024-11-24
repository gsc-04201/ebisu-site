
import Image from "next/image";
import PurchaseItemsCarousel from "@/components/ui/index/purchase-items-carousel";
import PurchaseHistory from "@/components/ui/index/purchase-history";
import WorningMessage from "@/components/ui/index/worning-message";
import TimeLine from "@/components/ui/index/time-line";
import Advantages from "@/components/ui/index/advantages";
import ServiceArea from "@/components/ui/index/service-area";
import CustomerReview from "@/components/ui/index/customer-review";
import Questions from "@/components/ui/index/questions";
import Contact from "@/components/ui/index/contact";
import ResultRecords from "@/components/ui/index/result-records";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-yellow-50 text-black text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Neko Kaitori.</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:underline">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#targets" className="hover:underline">
                  買取対象
                </a>
              </li>
              <li>
                <a href="#process" className="hover:underline">
                  ご利用の流れ
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:underline">
                  わたしたちの強み
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  お客様の声
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section
          id="home"
          className="bg-yellow-50 text-secondary-foreground py-20"
        >
          <div className="container mx-auto text-start">
            <h2 className="text-4xl font-bold mb-4">
              眠っているお宝、
              <br />
              驚きの価格で買い取ります。
            </h2>
            <p>
              あなたのご自宅のいらないもの、わたしたちに売ってみませんか？
              <br />
              査定のご相談など、まずはお気軽にお問い合わせください。
            </p>
            <Image
              src="/phone-bunner.png"
              alt="Button Icon"
              width={400}
              height={400}
            />
          </div>
          <WorningMessage />
        </section>

        <ResultRecords/>

        <PurchaseItemsCarousel />

        <PurchaseHistory />

        <TimeLine />

        <ServiceArea />

        <Advantages />

        <CustomerReview />

        <Questions />

        <Contact />

      </main>

      <footer className="bg-primary text-primary-foreground p-10">
        <div className="container mx-auto text-center">
          <p>COPYRIGHT © 2024. MADE WITH ♡ RECYCLE EBISU</p>
        </div>
      </footer>
    </div>
  );
}
