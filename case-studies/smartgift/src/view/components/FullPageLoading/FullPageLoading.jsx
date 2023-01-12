import { Spinner } from '@ui';

import * as S from './style';

export default function FullPageLoading() {
  return (
    <S.Page>
      <Spinner />
    </S.Page>
  );
}
