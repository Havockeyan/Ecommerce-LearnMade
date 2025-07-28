'use client';
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ProductReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    if (!comment || rating === 0) return alert('Please enter a comment and select a rating.');
    const newReview = { rating, comment, id: Date.now() };
    setReviews([newReview, ...reviews]);
    setComment('');
    setRating(0);
  };

  return (
    <div className="w-full px-4">
      <div className="w-full max-w-screen-sm mx-auto p-4 border rounded-xl shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>

        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => {
            const starValue = i + 1;
            return (
              <Star
                key={i}
                className={`w-6 h-6 cursor-pointer ${starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(starValue)}
                fill={starValue <= rating ? 'currentColor' : 'none'}
              />
            );
          })}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review here..."
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Review
        </button>

        {/* Scrollable reviews box */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
          <div className="max-h-64 overflow-y-auto pr-2">
            {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-t pt-3 mt-3 break-words max-w-full"
              >
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
