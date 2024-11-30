"use client";
import Image from "next/image";

import React from "react";
import SectionTitle from "./section-title";

export default function ResultRecords() {
  return (
    <section id="process" className="">
      <div
        className="w-full mx-auto"
        style={{
          backgroundImage: `url('/result-view-bg.png')`,
          backgroundSize: "cover", // 背景画像をdivのサイズに合わせてカバー
          backgroundPosition: "center", // 背景画像を中央に配置
          backgroundRepeat: "no-repeat", // 繰り返しを防止
        }}
      >
        {/* セクションタイトル */}
        <SectionTitle title="安心の実績" subtitle="" />
        <div className="justify-center text-center items-center flex flex-col">
          <Image
            src="/jisseki.svg"
            alt="result records"
            width={1000}
            height={1000}
            className="mx-auto mt-8"
          />
        </div>
      </div>
      <Image
        src="/bottom-wave.svg"
        alt="bottom wave"
        width={1920}
        height={500}
        className="object-cover"
      />
    </section>
  );
}
