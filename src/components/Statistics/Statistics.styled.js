import styled from 'styled-components';

export const StatWrap = styled.div`
  width: 450px;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
`;

export const StatisticsTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  font-weight: normal;
  color: #fff;
  font-size: 40px;
`;

export const StatisticsItem = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  font-weight: normal;
  color: #fff;
  font-size: 30px;
`;
