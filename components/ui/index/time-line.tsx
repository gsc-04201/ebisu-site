"use client";
import Image from "next/image";

import React from "react";
import SectionTitle from "./section-title";

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
    <section id="process" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <SectionTitle title="ご利用の流れ" subtitle="" />
        <div className="justify-center text-center items-center flex flex-col">
          <Image
            src="/time-line-pc.svg"
            alt="time line pc"
            width={1000}
            height={1000}
            className="mx-auto mt-8"
          />
        </div>

        {/* タイムライン */}
        {/* <div className="relative flex flex-col items-center">
          {timelineSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-center mb-8 w-full max-w-3xl"
            >
              <div className="flex flex-col items-center mr-0 md:mr-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white text-lg font-bold">
                  {step.number}
                </div>
                {index !== timelineSteps.length - 1 && (
                  <div className="w-px h-16 bg-gray-300 mt-2 hidden md:block"></div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
