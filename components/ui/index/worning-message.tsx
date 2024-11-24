'use client'

import { AlertCircle } from 'lucide-react'

export default function WarningMessage() {
  return (
    <div className="max-w-md mx-auto p-4">
    <div className="bg-customRed/10 border-2 border-customRed/50 rounded-lg p-4 flex items-start space-x-3">
      <div className="flex-shrink-0">
        <AlertCircle className="w-6 h-6 text-customRed" />
      </div>
      <div className="flex-1 pt-1">
        <p className="text-customRed text-lg font-medium leading-tight">
          出張買取業者を騙る詐欺に<br />
          ご注意ください！
        </p>
      </div>
    </div>
  </div>
  )
}

