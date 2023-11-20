import styled from 'styled-components'
import fakeData from 'fakeData.json'
import Fanletters from './Fanletters'

const FanletterList = styled.ul`
  background-color: #640007;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
`;

function Fanletter({heroes}) {

  const filterLetters = fakeData.filter(Letter => Letter.writedTo === heroes);
  return (
    <FanletterList>
      {filterLetters.map((Letter) => (
        <Fanletters Letter={Letter}/>
      ))}
    </FanletterList>
  )
}

export default Fanletter