import styled from 'styled-components';

export const ContactsContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 20px;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: -29px 29px 21px #aaaaaa, 29px -29px 21px #ffffff;
`;

export const Title = styled.h2`
  font-weight: 200;
`;

export const ContactsItem = styled.li`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ContactName = styled.p`
  font-size: 22px;
  font-weight: 200;
  margin-left: 20px;
`;

export const ContactPhone = styled.a`
  font-size: 22px;
  font-weight: 200;
`;

export const ButtonDelete = styled.button`
  color: #090909;
  cursor: pointer;
  max-width: 70px;
  padding: 2px 5px;
  font-size: 14px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  border-radius: 69px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  opacity: 0.5;

  &:hover {
    color: white;
    background: linear-gradient(145deg, #b94848, #dc5656);
    box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
    opacity: 1;
  }

  &:active {
    color: white;
    background: #e95353;
    box-shadow: inset 20px 20px 60px #c64747, inset -20px -20px 60px #ff5f5f;
  }
`;

export const Loader = styled.p`
  --uib-size: 40px;
  --uib-speed: 0.9s;
  --uib-color: white;
  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: var(--uib-color);
    animation: pulse9173412 var(--uib-speed) ease-in-out infinite;
    transform: scale(0);
  }

  &::after {
    animation-delay: calc(var(--uib-speed) / -2);
  }

  @keyframes pulse9173412 {
    0%,
    100% {
      transform: scale(0);
      opacity: 1;
    }

    50% {
      transform: scale(1);
      opacity: 0.25;
    }
  }
`;
