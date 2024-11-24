import { Star } from "lucide-react";

interface ReviewCardProps {
  quote: string;
  customer: string;
  rating: number;
}

export function ReviewCard({ quote, customer, rating }: ReviewCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 text-2xl font-serif">"</div>
      <p className="mb-4 text-center text-gray-700">{quote}</p>
      <div className="mb-2 text-2xl font-serif">"</div>
      <p className="mb-2 text-sm text-gray-500">—{customer}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
