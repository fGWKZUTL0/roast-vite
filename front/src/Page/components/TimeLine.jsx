import React from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './Image'

import nl2br from '../../api/nl2br'
import dateFormat from '../../api/dateFormat'
import css from "../../index.css"

const TimeLine = ({ tweets }) => {

  return (
    <Container className="TimeLine">
      {
        tweets.length !== 0 ?
        [...tweets].sort().reverse().map((tweet) => (
          <Row className="TweetRow" key={tweet.created_at}>
            <Col sm={2}>
              <Link className="text-decoration-none" to={"/User/" + tweet.name} >
                <Image className="m-2" src={"http://localhost:3001/" + tweet.image} width={75} height={75} roundedCircle />
              </Link>
            </Col>
            <Col sm={10}>
              <Row>
                <Link className="text-decoration-none" to={"/User/" + tweet.name} >
                  {tweet.nickname}
                  <span className="text-muted">@{tweet.name}</span>
                </Link>
              </Row>
              <Row>
                <div className="py-2">
                  {nl2br(tweet.tweet)}
                </div>
              </Row>
              <Row>
                <span className="text-muted">{dateFormat(tweet.created_at)}</span>
              </Row>
            </Col>
          </Row>
        ))
      :
      <></>}
    </Container>
  )
}

export default TimeLine