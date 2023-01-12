export const selectProductDetail = (state) => state.productDetail;
export const selectProductDetailData = (state) => selectProductDetail(state)?.data[0];
export const selectProductDetailSelected = (state) => selectProductDetail(state)?.selected;
export const selectProductDetailStatus = (state) => selectProductDetail(state).status;
export const selectProductDetailError = (state) => selectProductDetail(state).error;

export const selectAllAttributes = (state) => {
  const data = selectProductDetail(state)?.data[0];
  if (!data) return [];
  const attributes = data.skus.map((sku) => sku.attrs);
  return Object.keys(attributes[0]).map((label) => ({
    label,
    options: [...new Set(attributes.map((attr) => attr[label]))].map((value) => ({
      label: value,
      value
    }))
  }));
};
