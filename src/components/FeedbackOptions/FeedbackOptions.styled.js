import styled from 'styled-components';

export const ButtonsWrap = styled.div`
  display: flex;
  width: 400px;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  padding: 6px 14px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
    0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
`;
