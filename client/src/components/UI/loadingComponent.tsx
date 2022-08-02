import { ReactElement } from "react";
import { Spinner } from "react-bootstrap";

export function WithLoading(props: {
  isLoading: boolean|null;
  children: ReactElement;
}) {
  return props.isLoading ? (
    <Spinner
      style={{ marginLeft: "50%", color: "black" }}
      animation="grow"
      role="status"
    ></Spinner>
  ) : (
    props.children
  );
}