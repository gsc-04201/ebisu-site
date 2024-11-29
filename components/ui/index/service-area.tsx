"use client";
import Image from "next/image";

import React from "react";
import SectionTitle from "./section-title";

export default function ServiceArea() {
  return (
    <section id="process" className="bg-muted pb-4">
      
      <div className="container mx-auto">
        {/* セクションタイトル */}
        <SectionTitle title="対応エリア" subtitle="" />
        <div className="justify-center text-center items-center flex flex-col">
          <p className="text-gray-700 text-sm leading-relaxed">
            全国どこへでも駆けつけます！
          </p>
          <Image
            src="/japan-map.svg"
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
