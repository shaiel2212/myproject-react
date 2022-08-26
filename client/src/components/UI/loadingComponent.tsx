import { ReactElement } from "react";
import { Spinner } from "react-bootstrap";

export function WithLoading({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactElement;
}) {
  return isLoading ? (
    <Spinner
      style={{ marginLeft: "50%", color: "black" }}
      animation="grow"
      role="status"
    ></Spinner>
  ) : (
    <>{children}</>
  );
}
