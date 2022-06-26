import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  background: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 231px; */
  ${(props) =>
    props.theme.loading &&
    css`
      svg {
        font-size: 40px;
        animation: ${rotate} 2s linear infinite;
        color: #7159c1 !important;
      }
    `}
`;

export default Loading;
