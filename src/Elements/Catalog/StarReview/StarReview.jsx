import React from 'react';
import StarReviewContainer from './StarReview.styled';

export default function StarReview ({ rating, showRatioDesc }) {
  const getDescription = (rating) => {
    switch (rating) {
      case 1:
        return <p>Terrible</p>;
      case 2:
        return <p>Bad</p>;
      case 3:
        return <p>Ok</p>;
      case 4:
        return <p>Good</p>;
      case 5:
        return <p>Excellent</p>;
      default:
        return <></>;
    }
  };
  
  return (
    <StarReviewContainer>
      {showRatioDesc ? 
      <div className="description">
        {getDescription(rating)}
      </div> : <></>
      }
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
      {
        showRatioDesc ? <h4>{rating}/5</h4> : <></>
        }
    </StarReviewContainer>
  );
};