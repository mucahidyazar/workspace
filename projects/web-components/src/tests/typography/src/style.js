import styled, { css } from "styled-components";

import { TextType, ParagraphSize } from "./constants";

const font = {
  type: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
  size: {
    small: "12",
    base: "14",
    small3: "16",
    medium1: "20",
    medium2: "24",
    medium3: "28",
    large1: "32",
    large2: "40",
    large3: "48",
  },
  weight: {
    regular: "400",
    bold: "600",
    extrabold: "700",
  },
};

//

const disabledStyle = css`
  color: #838287;
  cursor: not-allowed;
`;

const dangerStyle = css`
  color: #ff3939;
`;

const warningStyle = css`
  color: #e39b0e;
`;

const secondaryStyle = css`
  color: #3c77bc;
`;

const primaryStyle = css`
  color: #525252;
`;

const TextTypeStyle = {
  [TextType.DANGER]: dangerStyle,
  [TextType.WARNING]: warningStyle,
  [TextType.SECONDARY]: secondaryStyle,
  [TextType.PRIMARY]: primaryStyle,
};

const paragraphSmallStyle = css`
  font-size: ${font.size.small}px;
  line-height: 16px;
`;

const paragraphMediumStyle = css`
  font-size: ${font.size.base}px;
  line-height: 19px;
`;

const paragraphLargeStyle = css`
  font-size: ${font.size.small3}px;
  line-height: 22px;
`;

const ParagraphSizeStyle = {
  [ParagraphSize.SMALL]: paragraphSmallStyle,
  [ParagraphSize.MEDIUM]: paragraphMediumStyle,
  [ParagraphSize.LARGE]: paragraphLargeStyle,
};

const Text = styled.span`
  line-height: 18px;
  letter-spacing: 0.16px;

  font-weight: ${(props) => props.strong && font.weight.bold};
  text-decoration: ${(props) => props.delete && "line-through"};
  text-decoration: ${(props) => props.underline && "underline"};
  background-color: ${(props) => props.mark && "#ffe58f"};

  ${({ type }) => TextTypeStyle[type]}

  ${({ disabled }) => disabled && disabledStyle}
`;

const Code = styled.code``;

const Title1 = styled.h1`
  font-weight: ${font.weight.bold};
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 1px;
  color: #000000;
`;

const Title2 = styled.h2`
  font-weight: 300;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: -0.5px;
  color: #000000;
`;

const Title3 = styled.h3`
  font-size: ${font.size.medium3}px;
  line-height: 38px;
  color: #000000;
`;

const Title4 = styled.h4`
  font-size: ${font.size.medium1}px;
  line-height: 27px;
  letter-spacing: 0.25px;
  color: #000000;
`;

const Title5 = styled.h5`
  font-weight: ${font.weight.bold};
  font-size: ${font.size.small3}px;
  line-height: 22px;
  color: #000000;
`;

const Title6 = styled.h6`
  font-weight: ${font.weight.bold};
  font-size: ${font.size.base}px;
  line-height: 19px;
  color: #000000;
`;

const ParagraphInput = styled.textarea`
  position: absolute;
  left: -9999px;
  font: inherit;
  margin: -3px;
`;

const ParagraphText = styled.p`
  letter-spacing: 0.16px;
  color: #3e3e3e;
`;

const Paragraph = styled.div`
  ${({ editable }) =>
    editable &&
    css`
      ${ParagraphInput} {
        position: relative;
        left: 0;
      }
    `};

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      ${ParagraphText} {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `};

  ${({ row }) =>
    row &&
    css`
      ${ParagraphText} {
        overflow: hidden;
        -webkit-line-clamp: ${row};
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    `}

  ${({ size }) =>
    size &&
    css`
      ${ParagraphText} {
        ${ParagraphSizeStyle[size]}
      }
    `}
`;

export {
  Text,
  Code,
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Paragraph,
  ParagraphInput,
  ParagraphText,
};
