import styled from 'styled-components';
export const CheckboxContainer = styled.div`
  height: 35px;
  margin: 0px 4px 0 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 90%;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  display: none;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;
export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 3px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: ${props => (props.checked ? 'flex' : 'none')};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
    width: '15px';
  }
  cursor: pointer;
`;
export const Text = styled.label`
  cursor: pointer;
  color: ${props => (props.checked ? '#fff' : '#868383')};
  padding-left: 10px;
`;
