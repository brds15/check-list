import React from 'react';
import CheckIcon from '../../assets/check.svg';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './styles';

export default function Checkbox({ children, handleChildren, isChecked, id, handleCheckStatus }) {
  function handleCheckboxChange() {
    console.log('isChecked', isChecked);
    console.log('id', id);
    handleCheckStatus(id, isChecked)
    handleChildren(isChecked);
  }

  return (
    <CheckboxContainer checked={isChecked} onClick={handleCheckboxChange}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={isChecked} />
      <StyledCheckbox checked={isChecked}>
        <img alt="tick icon" src={CheckIcon} />
      </StyledCheckbox>
      <Text checked={isChecked}> {children} </Text>
    </CheckboxContainer>
  );
}
