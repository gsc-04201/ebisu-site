"use client";
import Image from "next/image";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

export default function Questions() {
  return (
    <section id="process" className=" py-20">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold inline-flex items-center justify-center gap-2">
            <Image
              src="/star-left.png"
              alt="result records"
              width={25}
              height={25}
              className="mx-4"
            />
            よくある質問
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

{
  /* <Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1" className="border-t border-gray-200">
    <AccordionTrigger className="text-left font-normal">
      Q1. 買取査定にはどれくらい時間がかかりますか？
    </AccordionTrigger>
    <AccordionContent>
      お品物の種類や点数にもよりますが、通常は査定に約10〜15分程度お時間をいただいております。お急ぎの場合はスタッフにお申し付けていただければ、できる限り迅速に対応いたします。
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className="border-t border-gray-200">
    <AccordionTrigger className="text-left font-normal">
      Q2. 査定は無料ですか？
    </AccordionTrigger>
    <AccordionContent>
      はい、査定は全て無料で行っております。査定額にご納得いただけない場合でも、キャンセル料などは一切発生いたしませんので、お気軽にご利用ください。
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" className="border-t border-b border-gray-200">
    <AccordionTrigger className="text-left font-normal">
      Q3. 身分証明書は必要ですか？
    </AccordionTrigger>
    <AccordionContent>
      はい、買取の際には法律に基づき身分証明書のご提示が必要となります。運転免許証、パスポート、マイナンバーカードなどの公的な身分証をご用意ください。
    </AccordionContent>
  </AccordionItem>
</Accordion>; */
}
