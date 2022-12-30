import React from 'react';
import { Link } from 'react-router-dom'

const TimeLine = ({ tweets }) => {

  return (
    <div className="TimeLine">
      {      
        tweets.length !== 0 ?
        tweets.map((tweet) => (
          <div key={tweet.id} className="row mb-2">
            <div className="col-12">
              <p className="mb-0">
                <Link className="text-decoration-none" to={"/User/" + tweet.name} >{tweet.nickname}</Link>
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