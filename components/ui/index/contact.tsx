"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import React from "react";
import SectionTitle from "./section-title";

export default function Contact() {
  return (
    <section id="process" className=" py-20">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <SectionTitle title="お問い合わせ" subtitle="" />
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
              <span>ccc.20230501.ccc@gmail.com</span>
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
