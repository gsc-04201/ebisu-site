"use client";

import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "./section-title";
import { useEffect, useState } from "react";

interface PurchaseItemsCarouselProps {
  isSm: boolean; // `isSm` を受け取る型定義
}

export function PurchaseItemsCarousel({ isSm }: PurchaseItemsCarouselProps) {
  // 買取対象データ
  const items = [
    {
      id: 1,
      title: "アクセサリー",
      description:
        "高品質なアクセサリーをお売りください。貴金属や宝石類も対象です。古いものでもイミテーションでも大丈夫です。",
      img: "/accessory.png",
    },
    {
      id: 2,
      title: "衣類",
      description:
        "不要になった衣類を買取いたします。ノーブランド少々状態の悪いものでも可能です。",
      img: "/clothing.png",
    },
    {
      id: 3,
      title: "時計",
      description:
        "高級時計やアンティーク時計など、幅広い種類の時計を買取しています。",
      img: "/watch.png",
    },
    {
      id: 4,
      title: "電子機器",
      description:
        "スマートフォン、パソコン、カメラなどの電子機器をお売りください。",
      img: "/electronics.png",
    },
    {
      id: 5,
      title: "ブランド品",
      description: "人気ブランドのバッグや財布、アクセサリーを買取いたします。",
      img: "/brand-items.png",
    },
  ];
  console.log(isSm);
  const ItemCard: React.FC<{ item: (typeof items)[0] }> = ({ item }) => (
    <Card className={`${isSm ? "mx-0" : "mx-6"} sm:w-1/2 md:w-1/6 p-2`}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <CardContent>
        <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  return (
    <section id="targets" className="items-center align-center">
      <div className="container mx-auto">
        {/* セクションタイトル */}
        <SectionTitle
          title="買取品目"
          subtitle="自宅に眠るあらゆるものを買い取ります！"
        />
        <div className="flex flex-wrap justify-center gap-4">
          {/* 中央に配置し、gapを設定 */}
          <div className="flex flex-wrap justify-center text-center mx-auto gap-4">
            {/* 中央に配置しつつ左寄せ */}
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <p className="w-full text-center text-gray-700 text-sm leading-relaxed mt-8">
        ※模造品も買取可能です。
      </p>
      <Image
        src="/top-wave.svg"
        alt="top wave"
        width={1920}
        height={500}
        className="object-cover"
      />
    </section>
  );
};

{
  /* カルーセル */
}
// <Carousel
//   opts={{
//     align: "start",
//     loop: true,
//   }}
//   className="w-full max-w-6xl mx-auto scale-90 sm:scale-100 transition-transform"
// >
//   <CarouselContent className="-ml-2 md:-ml-4">
//     {items.map((item) => (
//       <CarouselItem
//         key={item.id}
//         className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5"
//       >
//         <Card className="border-none">
//           <CardContent className="p-0">
//             <div className="aspect-square relative bg-gray-100 mb-4">
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-center">
//               {item.title}
//             </h3>
//             <p className="text-sm text-muted-foreground text-center">
//               {item.description}
//             </p>
//           </CardContent>
//         </Card>
//       </CarouselItem>
//     ))}
//   </CarouselContent>

//   {/* ナビゲーションボタン */}
//   <CarouselPrevious className="hidden md:flex -left-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
//   <CarouselNext className="hidden md:flex -right-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
// </Carousel>
