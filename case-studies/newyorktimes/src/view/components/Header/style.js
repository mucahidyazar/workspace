import styled, { css } from 'styled-components';

import { Breakpoint, Theme } from '@constants';
import { Button, Input } from '@ui';

const ProductHeader = styled.div`
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 40px 40px 20px;
  position: relative;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    flex-direction: column;
    height: auto;
  }
`;
const ProductTheme = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;
const ProductThemeItem = styled.div`
  height: 100%;
  flex-grow: 1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    height: 300%;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      height: 300%;
    `}

  ${({ background }) => {
    if (background === Theme.LIGHT) {
      return css`
        background-color: var(--color-background-white);
        border: 1px solid var(--color-background-black);
      `;
    } else if (background === Theme.DARK) {
      return css`
        background-color: var(--color-background-black);
        border: 1px solid var(--color-background-white);
      `;
    } else if (background === Theme.DIM) {
      return css`
        background-color: var(--color-background-dim);
        border: 1px solid var(--color-background-white);
      `;
    }
  }}
`;
const ProductHeaderName = styled.div`
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: 600;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 60px;
    background-color: var(--color-black);
    margin: 0 40px;
  }

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    flex-direction: column;
    &:after {
      width: 80%;
      height: 2px;
      margin: 20px 0;
    }
  }
`;
const ProductStore = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    flex-direction: column;
  }
`;
const ProductStoreMerchant = styled(Input)``;
const ProductStoreProducts = styled(Input)``;
const ProductStoreButton = styled(Button)``;

export {
  ProductHeader,
  ProductHeaderName,
  ProductTheme,
  ProductThemeItem,
  ProductStore,
  ProductStoreMerchant,
  ProductStoreProducts,
  ProductStoreButton
};
