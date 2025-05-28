"use client";

import { MapPin } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";

export default function StorePurchase() {
  return (
    <section className="py-10">
      <div className="justify-center text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">店頭買取も実施中！</h3>
          <div className="bg-gray-50 p-4 rounded-lg inline-block">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>【店舗所在地】大阪市浪速区元町1-9-3 2F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
