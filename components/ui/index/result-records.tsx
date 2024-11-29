"use client";
import Image from "next/image";

import React from "react";
import SectionTitle from "./section-title";

export default function ResultRecords() {
  return (
    <section id="process" className=" py-20">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <SectionTitle
          title="安心の実績"
          subtitle=""
        />
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
    </section>
  );
}
