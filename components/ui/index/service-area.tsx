"use client";
import Image from "next/image";

import React from "react";

export default function ServiceArea() {
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
            対応エリア
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
        <div className="justify-center text-center items-center flex flex-col">
          <p className="text-gray-700 text-sm leading-relaxed">
            全国どこへでも駆けつけます！
          </p>
          <Image
            src="/japan-map.png"
            alt="japan map"
            width={400}
            height={400}
            className="mx-auto mt-8"
          />
        </div>
      </div>
    </section>
  );
}
