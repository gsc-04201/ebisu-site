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
import SectionTitle from "./section-title";

export default function OtherItemsCarousel() {
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
    { id: 6, title: "金", description: "説明文が入ります。説明文が入ります。" },
    { id: 7, title: "銀", description: "説明文が入ります。説明文が入ります。" },
    { id: 8, title: "銀", description: "説明文が入ります。説明文が入ります。" },
    { id: 9, title: "銀", description: "説明文が入ります。説明文が入ります。" },
  ];

  return (
    <section id="targets" className="bg-muted py-16 px-4">
      <div className="container mx-auto">
        {/* セクションタイトル */}
        <SectionTitle
          title="その他何でも買い取ります！"
          subtitle="自宅に眠るあらゆるものを買い取ります！"
        />
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
            {items.slice(0, 6).map(
              (
                item // 6アイテムを表示
              ) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
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
              )
            )}
          </CarouselContent>

          {/* ナビゲーションボタン */}
          <CarouselPrevious className="hidden md:flex -left-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-yellow-400 hover:bg-yellow-500 border-none text-white" />
        </Carousel>
      </div>
      {/* <p className="w-full text-center text-gray-700 text-sm leading-relaxed mt-8">
        ※模造品も買取可能です。
      </p> */}
    </section>
  );
}
