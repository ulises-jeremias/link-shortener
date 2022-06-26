import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  span {
    padding: 10px 15px;
    font-size: 20px;
    text-align: right;
  }
  input {
    flex: 1;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export interface IconButtonProps {
  loading?: boolean;
  empty?: boolean;
}

export const IconButton = styled.button.attrs((props: IconButtonProps) => ({
  type: 'button',
  disabled: props.loading || props.empty,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &[disabled] {
    cursor: not-allowed;
    background: rgba(113, 89, 193, 0.2);
  }
  ${(props) =>
    props.disabled &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
        color: #7159c1 !important;
      }
    `}
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  color: #e41111;
`;
