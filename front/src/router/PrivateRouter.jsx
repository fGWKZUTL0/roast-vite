import { memo, ReactNode, VFC } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = memo((props) => {
  const { children, loginUser } = props;
  return loginUser ? (
    <>
      {children}
      <div className="notice">
        <i>you are in a private route.</i>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  )
})