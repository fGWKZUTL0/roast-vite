import React from 'react';
import PropTypes from 'prop-types';

const TimeLine = ({ tweets }) => {

  return (
    <div className="TimeLine">
      {      
        tweets.length !== 0 ?
        tweets.map((tweet) => (
          <div key={tweet.id} className="row mb-2">
            <div className="col-12">
              <p className="mb-0">
                <a className="text-decoration-none" href="">{tweet.nickname}</a>
                :{tweet.tweet}
              </p>
            </div>
          </div>
        ))
      :
      <></>}
    </div>
  );
};

export default TimeLine