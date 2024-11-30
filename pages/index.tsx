'use client'
import PurchaseHistory from "@/components/ui/index/purchase-history";
import TimeLine from "@/components/ui/index/time-line";
import Advantages from "@/components/ui/index/advantages";
import ServiceArea from "@/components/ui/index/service-area";
import CustomerReview from "@/components/ui/index/customer-review";
import Questions from "@/components/ui/index/questions";
import Contact from "@/components/ui/index/contact";
import ResultRecords from "@/components/ui/index/result-records";
import OtherItemsCarousel from "@/components/ui/index/other-items-carousel";
import TopView from "@/components/ui/index/top-view";
import Header from "@/components/ui/index/header";
import Footer from "@/components/ui/index/footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PurchaseItemsCarousel } from "@/components/ui/index/purchase-items-carousel";

export default function HomePage() {
  // sm効かないから無理やり変えた
  const [isSm, setIsSm] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSm(window.innerWidth >= 640); // Tailwindの`sm`ブレークポイント（640px）
    };

    // 初期値設定とリスナー登録
    handleResize();
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const topViewRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    topViewRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // サイズや位置の変更を `isSm` に基づいて調整
  const buttonSize = isSm
    ? { width: 80, height: 80, bottom: "10", right: "10" }
    : { width: 50, height: 50, bottom: "12", right: "4" };

  const buttonProps = {
    onClick: handleScrollToTop,
    className: `fixed bottom-${buttonSize.bottom} right-${buttonSize.right} bg-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-300 focus:outline-none`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      {/* <Header /> */}
      {/* メイン */}
      <main className="flex-grow">
        <div ref={topViewRef}>
          <TopView />
        </div>
        <ResultRecords />
        <PurchaseItemsCarousel isSm={isSm} />
        <OtherItemsCarousel />
        {/* <PurchaseHistory /> */}
        <TimeLine />
        <ServiceArea />
        <Advantages />
        <CustomerReview />
        <Questions />
        <Contact />
      </main>
      {/* スクロールボタン */}
      <button {...buttonProps}>
        <Image
          src="/top-button-neko.svg"
          alt="top button"
          width={buttonSize.width}
          height={buttonSize.height}
          className="object-cover"
        />
      </button>
      {/* フッター */}
      <Footer />
    </div>
  );
}
