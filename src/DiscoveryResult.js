import React from 'react';
import './DiscoveryResult.css';
import Review from './Review.js';
var isOpen = false;
function DiscoveryResult(props) {
  const result = props.result;
  var truncatedReview = truncateText(result.review);

  return (
    <div className="result">
      <div className="result__title">{result.name}</div>
      <div className="result__link">
        <a href={result.url} target="_blank">
          {'View details on Amazon'}
        </a>
      </div>
      <Review review={result.review} truncated={truncatedReview} />
    </div>
  );
}

function truncateText(text) {
  if (text.length <= 180) {
    return text.substring(0, text.length);
  } else {
    return text.substring(0, 180) + '...';
  }
}

export default DiscoveryResult;
