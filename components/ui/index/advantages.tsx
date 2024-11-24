"use client";
import Image from "next/image";

import React from "react";

export default function Advantages() {
  return (
    <section id="process" className="bg-yellow-50 py-20">
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
            私たちの３つの強み
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
        <div className="max-w-6xl mx-auto px-4 py-12">
          <section className="mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative">
              <Image
                src="/advantage-1.png"
                alt="高価買取"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-75 text-white p-4 rounded">
                <span className="text-3xl font-bold">01.</span>
                <h2 className="text-2xl font-semibold">高価買取</h2>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <p className="text-gray-600 leading-loose">
                市場価格を常に最新の状態でチェックし、お客様の大切な宝石やブランド品を業界最高水準の価格で買取いたします。ご満足いただける査定額をお約束し、他店よりも高く買い取ります。
              </p>
            </div>
          </section>

          <section className="mb-20 flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 relative">
              <Image
                src="/advantage-2.png"
                alt="迅速な対応"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-75 text-white p-4 rounded">
                <span className="text-3xl font-bold">02.</span>
                <h2 className="text-2xl font-semibold">迅速な対応</h2>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pr-8">
              <p className="text-gray-600 leading-loose">
                お問い合わせからお支払いまで、全てのプロセスをスピーディーに対応いたします。お客様をお待たせしない迅速なサービスで、買取手続きがスムーズに完了します。時間を有効に活用いただけます。
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative">
              <Image
                src="/advantage-3.png"
                alt="豊富な専門知識"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-75 text-white p-4 rounded">
                <span className="text-3xl font-bold">03.</span>
                <h2 className="text-2xl font-semibold">豊富な専門知識</h2>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <p className="text-gray-600 leading-loose">
                経験豊富なスタッフが、お客様のお品物を丁寧に査定いたします。宝石やブランド品に関する深い知識と最新の市場動向を活かし、正確かつ適正な評価で高価買取を実現します。
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
