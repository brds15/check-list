import React from 'react';
import CheckIcon from '../../assets/check.svg';
import MinusIcon from '../../assets/minus.svg';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './styles';

export default function Checkbox({ children, handleCheck, isChecked, id, hasChildrenActivated }) {
  return (
    <CheckboxContainer checked={isChecked} onClick={() => handleCheck(id, isChecked)}>
      <HiddenCheckbox onChange={() => handleCheck(id, isChecked)} checked={isChecked} />
      <StyledCheckbox checked={isChecked}>
        {hasChildrenActivated ? (
          <img width={15} alt="tick icon" src={MinusIcon} />
        ) : (
          <img width={15} alt="tick icon" src={CheckIcon} />
        )}
      </StyledCheckbox>
      <Text checked={isChecked}> {children} </Text>
    </CheckboxContainer>
  );
}
