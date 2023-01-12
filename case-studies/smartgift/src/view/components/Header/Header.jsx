import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Theme } from '@constants';
import { fetchData } from '@store/product-detail/slice';
import { setTheme } from '@store/main/slice';

import * as S from './style';

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.main.theme);
  const { merchantCode, productCode } = useParams();
  const [state, setState] = useState({
    merchantCode,
    productCode
  });

  // set theme with localStorage
  const setThemeHandler = (selectedTheme) => {
    localStorage.setItem('theme', selectedTheme);
    dispatch(setTheme(selectedTheme));
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      dispatch(setTheme(localTheme));
    }
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.currentTarget;

    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    var formData = new FormData(e.target);

    formData.get('merchantCode');
    formData.get('productCode');

    const mercCode = formData.get('merchantCode');
    const prodCode = formData.get('productCode');

    if (mercCode && prodCode) {
      dispatch(fetchData({ merchantCode: mercCode, productCode: prodCode }));
    }
  };

  return (
    <S.ProductHeader>
      <S.ProductHeaderName>Smart Gift</S.ProductHeaderName>
      <S.ProductStore onSubmit={submitHandler}>
        <S.ProductStoreMerchant
          name="merchantCode"
          value={state?.merchantCode}
          placeholder="Merchant Code"
          onChange={changeHandler}
        />
        <S.ProductStoreProducts
          name="productCode"
          value={state?.productCode}
          placeholder="Product Code"
          onChange={changeHandler}
        />
        <S.ProductStoreButton>Search</S.ProductStoreButton>
      </S.ProductStore>
      <S.ProductTheme>
        {Object.keys(Theme).map((key) => (
          <S.ProductThemeItem
            key={key}
            background={key}
            isSelected={theme === key}
            onClick={() => setThemeHandler(key)}
          />
        ))}
      </S.ProductTheme>
    </S.ProductHeader>
  );
}
