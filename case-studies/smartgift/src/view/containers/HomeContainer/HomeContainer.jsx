import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchData, setNewSelected } from '@store/product-detail/slice';
import {
  selectAllAttributes,
  selectProductDetailData,
  selectProductDetailSelected,
  selectProductDetailStatus
} from '@store/product-detail/selectors';
import { FullPageLoading, Header } from '@components';
import { Status } from '@constants';

import * as S from './style';

export default function HomeContainer() {
  const dispatch = useDispatch();
  const productDetail = useSelector(selectProductDetailSelected);
  const productDetailData = useSelector(selectProductDetailData);
  const productDetailStatus = useSelector(selectProductDetailStatus);
  const allAttributes = useSelector(selectAllAttributes);

  const [options, setOptions] = useState(null);
  const [error, setError] = useState(null);

  const { merchantCode = 'vineyardvines', productCode = '196286139913' } = useParams();

  useEffect(() => {
    dispatch(fetchData({ merchantCode, productCode }));
  }, [merchantCode, productCode]);

  useEffect(() => {
    if (options) {
      const newSelected = productDetailData.skus.find((sku) => {
        // sku.attrs = {Color: 'White Cap', Size: '35', Dimension: '30'}
        // options = { Color: 'White Cap', Size: '35' }
        return Object.entries(options).every(([key, value]) => {
          if (sku.attrs[key] !== value) return false;
          return true;
        });
      });
      if (newSelected) {
        setError(null);
        dispatch(setNewSelected(newSelected));
      } else {
        setError('No product found');
      }
    }
  }, [options]);

  if (productDetailStatus === Status.LOADING) {
    return <FullPageLoading />;
  }

  if (!productDetail) {
    return (
      <S.NoProduct>
        <Link to="/vineyardvines/196286139913">
          <S.NoProductButton>Return a product</S.NoProductButton>
        </Link>
      </S.NoProduct>
    );
  }

  const { name, shortDesc, images, url, orderable } = productDetail;

  const changeHandler = (selectedOption, label) => {
    setOptions((prev) => ({
      ...prev,
      [label]: selectedOption.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!options || Object.keys(options).length !== allAttributes.length) {
      toast.error('Please select all attributes');
    } else {
      toast('🦄 Wow so easy! You accepted it!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      setOptions(null);
    }
  };

  return (
    <S.ProductDetailContainer>
      <Header />

      <S.ProductContent onSubmit={submitHandler}>
        <S.ProductInfo>
          <S.ProductImage src={images[0]?.url || images[0]} alt="Product Image" />
          <S.ProductDetail>
            <S.ProductDetailTitle>Product Detail</S.ProductDetailTitle>
            <S.ProductDetailDescription dangerouslySetInnerHTML={{ __html: shortDesc }} />
          </S.ProductDetail>
        </S.ProductInfo>

        <S.ProductMenu>
          <S.ProductMenuTitle href={url} target="_blank">
            {name}
          </S.ProductMenuTitle>
          <S.ProductMenuOptions>
            {allAttributes?.map((attribute) => (
              <S.ProductMenuOption key={attribute.label}>
                <S.ProductMenuOptionTitle>{attribute.label}</S.ProductMenuOptionTitle>
                <Select
                  options={attribute.options}
                  isSearchable={false}
                  onChange={(option) => changeHandler(option, attribute.label)}
                  value={
                    options && options[attribute?.label]
                      ? { value: options[attribute.label], label: options[attribute.label] }
                      : ''
                  }
                />
              </S.ProductMenuOption>
            ))}
          </S.ProductMenuOptions>
          <S.ProductMenuButton disabled={!orderable || !!error}>Accept</S.ProductMenuButton>
          {error && <S.ProductErrorMessage>{error}</S.ProductErrorMessage>}
          {!orderable && (
            <S.ProductErrorMessage>
              This product is not available for ordering
            </S.ProductErrorMessage>
          )}
        </S.ProductMenu>
      </S.ProductContent>
    </S.ProductDetailContainer>
  );
}

export { HomeContainer };
