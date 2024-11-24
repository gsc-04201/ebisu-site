"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function PurchaseItemsCarousel() {
  // 買取対象データ
  const items = [
    { id: 1, title: "金", description: "説明文が入ります。説明文が入ります。" },
    { id: 2, title: "銀", description: "説明文が入ります。説明文が入ります。" },
    {
      id: 3,
      title: "プラチナ",
      description: "説明文が入ります。説明文が入ります。",
    },
    {
      id: 4,
      title: "ダイヤモンド",
      description: "説明文が入ります。説明文が入ります。",
    },
    {
      id: 5,
      title: "ダイヤ",
      description: "説明文が入ります。説明文が入ります。",
    },
  ];

  return (
    <section id="targets" className="py-16 px-4">
      <div className="container mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Image
              src="/star-left.png"
              alt="result records"
              width={25}
              height={25}
              className="mx-4"
            />
            買取対象
            <Image
              src="/star-right.png"
              alt="result records"
              width={25}
              height={25}
              className="mx-4"
            />
          </h2>
          <div className="w-40 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
          <p className="text-gray-700 text-sm leading-relaxed mt-4">
            全国どこへでも駆けつけます！
          </p>
        </div>

        {/* カルーセル */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {/* カルーセルアイテムコンテンツ */}
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="border-none">
                  <CardContent className="p-0">
                    {/* アイテム画像 */}
                    <div className="aspect-square relative bg-gray-100 mb-4">
                      <Image
                        src="/placeholder.svg"
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {/* アイテムタイトル */}
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                    {/* アイテム説明 */}
                    <p className="text-sm text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ナビゲーションボタン */}
          <CarouselPrevious className="hidden md:flex -left-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
        </Carousel>
      </div>
    </section>
  );
}
