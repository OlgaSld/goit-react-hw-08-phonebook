import styled from 'styled-components';
import { FcContacts } from 'react-icons/fc';

const Title = styled.h1`
  font-weight: 700;
  font-style: italic;
  font-size: 70px;
  text-align: center;
  margin-top: 300px;
  color: violet;
`;

const Title2 = styled.h1`
  font-weight: 700;
  font-style: italic;
  font-size: 70px;
  text-align: center;
  color: violet;
`;

const Home = () => {
  return (
    <div>
      <Title>Your Contact </Title>
      <FcContacts
        style={{
          display: 'block',
          width: 100,
          height: 130,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <Title2> Book</Title2>
    </div>
  );
};

export default Home;
