"use client";
import Image from "next/image";

import React from "react";

const timelineSteps = [
  {
    number: 1,
    title: "お問い合わせ",
    description:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  },
  {
    number: 2,
    title: "ヒアリング",
    description:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  },
  {
    number: 3,
    title: "最適なプランのご提案",
    description:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  },
  {
    number: 4,
    title: "ご契約",
    description:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  },
  {
    number: 5,
    title: "サービス利用開始",
    description:
      "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
  },
];

export default function Timeline() {
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
            ご利用の流れ
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

        {/* タイムライン */}
        <div className="relative flex flex-col items-center">
          {timelineSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-center mb-8 w-full max-w-3xl"
            >
              {/* ステップ番号 */}
              <div className="flex flex-col items-center mr-0 md:mr-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white text-lg font-bold">
                  {step.number}
                </div>
                {/* ステップ間の線 */}
                {index !== timelineSteps.length - 1 && (
                  <div className="w-px h-16 bg-gray-300 mt-2 hidden md:block"></div>
                )}
              </div>

              {/* ステップの詳細 */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
