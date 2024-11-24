"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import React from "react";

export default function Contact() {
  return (
    <section id="process" className="bg-muted py-20">
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
            お問い合わせ
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
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center space-x-2">
              <span>株式会社C.C.C</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>大阪府公安委員会 第62102R050352号</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>06-6450-5620</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>〒530-0047 大阪市北区西天満3-1-13清洲西天満ビル4F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
