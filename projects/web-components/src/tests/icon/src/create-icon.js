import { forwardRef } from "react";
import { __DEV__ } from "@mucahidyazar/util";
import { Icon } from "./icon";

export function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    displayName,
    defaultProps = {},
  } = options;

  const Comp = forwardRef((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </Icon>
  ));

  if (__DEV__) {
    Comp.displayName = displayName;
  }

  return Comp;
}
