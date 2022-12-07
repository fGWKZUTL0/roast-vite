import React from 'react';
import PropTypes from 'prop-types';

const TweetList = ({ tweets }) => {
  const renderTweets = (tweetArray) => {

    return tweetArray.map((tweet) => (
      <li key={tweet.id}>
        id {tweet.id}, text {tweet.context}
      </li>
    ));
  };

  return (
    <div className="TweetList">
      <section>
        <ul>{renderTweets(tweets)}</ul>
      </section>
    </div>
  );
};

export default TweetList;