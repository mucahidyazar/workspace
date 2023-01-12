import React from "react";
import PropTypes from "prop-types";

import { TextType } from "./constants";
import * as S from "./style";

function Text({ children, code, ...props }) {
  const TextItem = code ? S.Code : S.Text;

  return (
    <TextItem data-testid="text" {...props}>
      {children}
    </TextItem>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  code: PropTypes.bool,
  strong: PropTypes.bool,
  delete: PropTypes.bool,
  underline: PropTypes.bool,
  mark: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TextType)),
};

Text.defaultProps = {
  children: null,
  code: false,
  strong: false,
  delete: false,
  underline: false,
  mark: false,
  disabled: false,
  type: TextType.PRIMARY,
};

Text.S = S;
Text.Constants = { TextType };

export default Text;
