import React from 'react';
import PropTypes from 'prop-types';

const TweetList = ({ tweets }) => {
  const renderTweets = (tweetArray) => {

    return tweetArray.map((tweet) => (
      <li key={tweet.id}>
        {tweet.context}
      </li>
    ));
  };

  return (
    <section>
      <h2>Tweets</h2>
      <ul>{renderTweets(tweets)}</ul>
    </section>
  );
};

export default TweetList;