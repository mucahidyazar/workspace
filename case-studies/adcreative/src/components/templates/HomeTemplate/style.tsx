import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Button, Input } from '@/atoms';
import { BREAKPOINT } from '@/constants';

const HomeTemplate = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 162px auto 0;
  width: 1024px;

  @media (max-width: ${BREAKPOINT.desktop}px) {
    width: 90%;
  }

  @media (max-width: ${BREAKPOINT.tablet}px) {
    margin-top: 40px;
    flex-direction: column;
    gap: 24px;
  }
`;

const What = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${BREAKPOINT.tablet}px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WhatTitle = styled.h1`
  color: var(--primary);
  font-size: var(--size-5xl);
  font-weight: 700;

  @media (max-width: ${BREAKPOINT.desktop}px) {
    display: none;
  }
`;

const WhatLanguages = styled.div`
  align-items: center;
  color: var(--primary);
  display: flex;
  font-size: var(--size-xl);
  gap: 8px;
  text-transform: uppercase;
`;
const WhatLanguage = styled.p<{ isActive?: boolean }>`
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
  font-size: var(--size-3xl);
      font-weight: 700;
    `}
`;
const WhatThemes = styled(WhatLanguages)``;
const WhatTheme = styled(WhatLanguage)``;

const TodoSection = styled.section`
  background-color: var(--white);
  border-radius: 10px;
  max-width: 430px;
  overflow: hidden;
  width: 430px;

  @media (max-width: ${BREAKPOINT.tablet}px) {
    width: 100%;
    max-width: 100%;
  }
`;

const TodoHeader = styled.header`
  height: 200px;
  position: relative;

  &::after {
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

const TodoHeaderImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const TodoHeaderInfo = styled.div`
  bottom: 0;
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: absolute;
  right: 0;
  z-index: 2;
`;

const TodoHeaderDate = styled.span`
  font-size: var(--size-lg);
`;

const TodoHeaderTime = styled.span`
  font-size: var(--size-4xl);
`;

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const TodoBodyFormInput = styled(Input)`
  width: 100%;
`;

const TodoBodyFormActions = styled.div`
  align-items: center;
  display: flex;
  gap: 2px;

  @media (max-width: ${BREAKPOINT.mobile}px) {
    width: 100%;
  }
`;

const TodoBodyFormAdd = styled(Button)`
  font-size: var(--size-xl);
  width: 80px;

  @media (max-width: ${BREAKPOINT.mobile}px) {
    width: 100%;
  }
`;

const TodoBodyDropDown = styled(Button)``;

const TodoBodyForm = styled.form`
  align-items: flex-start;
  display: flex;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINT.mobile}px) {
    flex-direction: column;
  }

  ${TodoBodyFormAdd} {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  ${TodoBodyDropDown} {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const TodoBodyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
`;

export {
  HomeTemplate,
  TodoBody,
  TodoBodyDropDown,
  TodoBodyForm,
  TodoBodyFormActions,
  TodoBodyFormAdd,
  TodoBodyFormInput,
  TodoBodyList,
  TodoHeader,
  TodoHeaderDate,
  TodoHeaderImage,
  TodoHeaderInfo,
  TodoHeaderTime,
  TodoSection,
  What,
  WhatLanguage,
  WhatLanguages,
  WhatTheme,
  WhatThemes,
  WhatTitle
};
