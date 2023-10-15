import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 700;
  font-style: italic;
  font-size: 70px;
  text-align: center;
  margin-top: 300px;
  color: violet;
`;

const Home = () => {
  return (
    <div>
      <Title>Contacts Book</Title>
    </div>
  );
};

export default Home;
