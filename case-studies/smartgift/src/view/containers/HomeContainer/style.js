import styled from 'styled-components';

import { Breakpoint } from '@constants';
import { Button } from '@ui';

const ProductDetailContainer = styled.section`
  height: 100vh;
  max-height: 100vh;
`;

const ProductContent = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 40px;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    flex-direction: column;
  }
`;
const ProductInfo = styled.div`
  width: calc(50% - 40px);

  @media (max-width: ${Breakpoint.TABLET_MINI.MAX}px) {
    width: calc(50% - 10px);
  }

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 12px;
  height: 50vh;
`;
const ProductDetail = styled.div``;
const ProductDetailTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: 4px;
`;
const ProductDetailDescription = styled.p`
  text-align: justify;
  line-height: 150%;

  h4 {
    font-size: var(--font-size);
    font-weight: 600;
  }
  p {
    font-size: var(--font-size-s);
  }
`;

const ProductMenu = styled.div`
  width: calc(50% - 40px);
  max-height: 400px;

  @media (max-width: ${Breakpoint.TABLET_MINI.MAX}px) {
    width: calc(50% - 10px);
  }

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    width: 100%;
  }
`;
const ProductMenuTitle = styled.a`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: 40px;
  cursor: pointer;
`;
const ProductMenuOptions = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;
const ProductMenuOption = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
const ProductMenuOptionTitle = styled.div`
  margin-bottom: 4px;
`;
const ProductMenuButton = styled(Button)``;
const ProductErrorMessage = styled.div`
  color: var(--color-red);
  font-size: var(--font-size-s);
  font-weight: 600;
  margin-top: 8px;
`;

const NoProduct = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoProductButton = styled(Button)`
  width: 80%;
`;

export {
  ProductDetailContainer,
  ProductContent,
  ProductInfo,
  ProductImage,
  ProductDetail,
  ProductDetailTitle,
  ProductDetailDescription,
  ProductMenu,
  ProductMenuTitle,
  ProductMenuOptions,
  ProductMenuOption,
  ProductMenuOptionTitle,
  ProductMenuButton,
  ProductErrorMessage,
  NoProduct,
  NoProductButton
};
