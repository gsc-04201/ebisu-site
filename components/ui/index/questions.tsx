"use client";
import Image from "next/image";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import SectionTitle from "./section-title";

export default function Questions() {
  return (
    <section id="process" className="">
      <Image
        src="/bottom-wave.svg"
        alt="bottom wave"
        width={1920}
        height={500}
        className="object-cover"
      />
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <SectionTitle title="よくある質問" subtitle="" />
        <div className="justify-center text-center">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto text-start"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                買取査定にはどれくらい時間がかかりますか？
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                買取査定の時間は商品によって異なりますが、通常30分から1時間程度です。複雑な査定が必要な場合は、さらに時間がかかる場合があります。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                査定は無料ですか？
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                はい、査定は完全無料です。お客様に費用負担をいただくことはありません。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                身分証明書は必要ですか？
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                はい、取引の際には身分証明書が必要です。運転免許証、パスポート、マイナンバーカードなどの公的な身分証明書をご用意ください。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}