import React from 'react';
import PropTypes from 'prop-types';

const TweetList = ({ tweets }) => {
  const renderTweets = (tweetArray) => {

    return tweetArray.map((tweet) => (
      <li key={tweet.id}>
        id={tweet.id},text={tweet.context}
      </li>
    ));
  };

  return (
    <section>
      <h2>Tweet List</h2>
      <ul>{renderTweets(tweets)}</ul>
    </section>
  );
};

export default TweetList;