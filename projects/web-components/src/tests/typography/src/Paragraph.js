import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import { ParagraphSize } from "./constants";

function Paragraph({ children, copyable, editable, paragraphRef, ...props }) {
  const paragraphProps = { ...props, editable };

  return (
    <S.Paragraph data-testid="paragraph" {...paragraphProps}>
      <S.ParagraphText
        contentEditable={editable}
        suppressContentEditableWarning
      >
        {children}
      </S.ParagraphText>
      {copyable && (
        <S.ParagraphInput
          ref={paragraphRef}
          type="text"
          defaultValue={children}
        />
      )}
    </S.Paragraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  editable: PropTypes.bool,
  copyable: PropTypes.bool,
  paragraphRef: PropTypes.object,
  size: PropTypes.oneOf(Object.values(ParagraphSize)),
  row: PropTypes.number,
  ellipsis: PropTypes.bool,
};

Paragraph.defaultProps = {
  editable: false,
  copyable: false,
  children: null,
  paragraphRef: null,
  size: ParagraphSize.MEDIUM,
  row: 0,
  ellipsis: false,
};

Paragraph.S = S;
Paragraph.constants = { ParagraphSize };

export default Paragraph;
