import React, { useContext } from 'react'

const SpinnerTag = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default SpinnerTag