import PurchaseItemsCarousel from "@/components/ui/index/purchase-items-carousel";
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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      {/* <Header /> */}
      {/* メイン */}
      <main className="flex-grow">
        <TopView />
        <ResultRecords />
        <PurchaseItemsCarousel />
        <OtherItemsCarousel />
        {/* <PurchaseHistory /> */}
        <TimeLine />
        <ServiceArea />
        <Advantages />
        <CustomerReview />
        <Questions />
        <Contact />
      </main>
      {/* フッター */}
      <Footer />
    </div>
  );
}
