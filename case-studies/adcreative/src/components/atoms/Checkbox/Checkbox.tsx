import { useEffect, useState } from 'react';

import * as S from './style';

interface ICheckbox {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Checkbox = ({ checked = false, onChange }: ICheckbox) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const changeHandler = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return <S.Checkbox checked={isChecked} onClick={changeHandler} />;
};
