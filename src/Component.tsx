import * as React from "react";

export function Component(props: any) {
  const [state] = React.useState({ a: 0 });
  state.a = 1; // Should error, but doesn’t error

  return <div>{props.foo}</div>;
}
