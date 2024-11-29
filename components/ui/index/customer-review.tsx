"use client";
import Image from "next/image";

import React from "react";
import { ReviewCard } from "./review-card";
import SectionTitle from "./section-title";

const reviews = [
  {
    quote:
      "「初めて利用しましたが、買取金額に納得でき、何よりもサービスがとても迅速で助かりました。サイトから簡単に申込ができ、査定も早かったです。スタッフの方も親切で、安心して取引ができました。次回もぜひ利用したいと思います！",
    customer: "お客様A",
    rating: 5,
  },
  {
    quote:
      "以前から使っている他の業者と比べて、こちらはかなり高額で買い取ってもらえました！電話での対応もスムーズで、細かい質問にも丁寧に答えてくれたので信頼感がありました。思った以上に高く売れたので、また何かあればお願いしたいです。",
    customer: "お客様B",
    rating: 5,
  },
  {
    quote:
      "買取に出すのは少し不安でしたが、買取業者の方が非常に親切で、どんな手続きが必要か丁寧に説明してくれたので安心しました。スムーズに取引が進み、思った以上に簡単に売却できました。次回もここにお願いしたいです！",
    customer: "お客様C",
    rating: 4,
  },
];

export default function ServiceArea() {
  return (
    <section id="process" className="bg-yellow-50">
      
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <SectionTitle title="お客様の声" subtitle="" />
        <div className="justify-center text-center">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
