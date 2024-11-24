"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PurchaseHistory() {
  // カテゴリーリスト
  const categories = [
    { id: "precious-metals", label: "貴金属" },
    { id: "jewels", label: "宝石" },
    { id: "watches", label: "時計" },
    { id: "brand-items", label: "ブランド物" },
  ];

  // 商品リスト
  const items = [
    {
      id: 1,
      name: "ハリー・ウィンストン シールド・チャーム ネックレス Au750 全長約45.2cm",
      price: 1202000,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "ここに商品名が入ります。ここに商品名が入ります。ここに商品名が入ります。",
      price: 1202000,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "ここに商品名が入ります。ここに商品名が入ります。ここに商品名が入ります。",
      price: 1202000,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "ここに商品名が入ります。ここに商品名が入ります。ここに商品名が入ります。",
      price: 1202000,
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="history" className="py-16 px-4">
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
            買取実績
            <Image
              src="/star-right.png"
              alt="result records"
              width={25}
              height={25}
              className="mx-4"
            />
          </h2>
          <div className="w-40 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* タブ表示 */}
        <Tabs defaultValue="precious-metals" className="w-full">
          <TabsList className="w-full border-b border-gray-200 bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex-1 border-b-2 border-transparent px-8 py-4 data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent rounded-none"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* タブのコンテンツ */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {items.map((item) => (
                  <Card key={item.id} className="border-none bg-yellow-50">
                    <CardContent className="p-4">
                      {/* 商品画像 */}
                      <div className="aspect-[4/3] relative mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      {/* 商品名 */}
                      <h3 className="text-sm mb-4 line-clamp-3">{item.name}</h3>
                      {/* 買取価格 */}
                      <div className="flex items-center gap-2">
                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                          買取価格
                        </span>
                        <span className="text-lg font-bold">
                          ¥ {item.price.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
