import * as S from './style';

export default function Button({ children, ...rest }) {
  return <S.Button {...rest}>{children}</S.Button>;
}
