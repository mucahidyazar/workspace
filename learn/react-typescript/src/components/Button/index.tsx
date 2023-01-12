import React from 'react';

//2 farkli return
//void birsey donmeyecek demektir.
// type Props = {
//   onClick(): string;
//   onSubmit?: () => string;
//   onPress?(): void;
//   onChange?(name: string): string;
// }
type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button;