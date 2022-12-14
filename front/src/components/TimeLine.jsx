import React from 'react';
import PropTypes from 'prop-types';

const TimeLine = ({ tweets }) => {

  const renderTweets = (tweetArray) => {
    return tweetArray.map((tweet) => (
      <div key={tweet.id} className="row mb-2">
        <div className="col-12">
          <p className="mb-0">
            <a className="text-decoration-none" href="">{tweet.nickname}</a>
            :{tweet.tweet}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="TimeLine">
      {renderTweets(tweets)}
    </div>
  );
};

export default TimeLine;