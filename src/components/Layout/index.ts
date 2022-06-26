import styled from 'styled-components';

const Layout = styled.div`
  max-width: 580px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  & > h1 {
    font-size: 24px;
    text-align: center;
    color: #534974;
  }
  @media (max-width: 600px) {
    margin-top: 0;
    border-radius: 0;
  }
`;

export const Icon = styled.h2`
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  background: white;
  color: #7159c1;
  width: 80px;
  height: 80px;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 12px 10px -4px rgba(25, 10, 74, 0.23);
`;

export default Layout;
