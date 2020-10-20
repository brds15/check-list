import React from 'react';
import CheckIcon from '../../assets/check.svg';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './styles';

export default function Checkbox({ children, handleCheck, isChecked, id }) {
  return (
    <CheckboxContainer checked={isChecked} onClick={() => handleCheck(id, isChecked)}>
      <HiddenCheckbox onChange={() => handleCheck(id, isChecked)} checked={isChecked} />
      <StyledCheckbox checked={isChecked}>
        <img alt="tick icon" src={CheckIcon} />
      </StyledCheckbox>
      <Text checked={isChecked}> {children} </Text>
    </CheckboxContainer>
  );
}
