import React from 'react';
import './App.css';
import BlockCard from './components/card/BlockCard';
import createBlockChain, {addBlock, isBlockchainValid} from './services/blockchain';
import style from 'styled-components';

const CardContainer = style.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = style.button`
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  background: rgb(53, 108, 243);
  color: #fff;
  font-weight: bold;
  margin-right: 15px;
`

const ButtonArea = style.div`
  width: 100%;
`

function App() {
  const [blockchain, setBlockchain] = React.useState([]);

  React.useEffect(() => {
    setBlockchain(createBlockChain(2));
  }, []);

  const onAddBlockClick = () => {
    const newBlocks = addBlock(blockchain, 'Block added');
    setBlockchain(newBlocks);
  }

  const onValidateClick = () => {
    const isValid = isBlockchainValid(blockchain);
    alert(isValid ? 'Blockchain is valid' : 'Blockchain is invalid');
  }

  return (
    <div className="App">
      <CardContainer>
        {blockchain.map((block, index) => {
          return (
            <BlockCard key={`card${index}`} block={block} />
          )
        })}
        <ButtonArea>
          <Button onClick={onAddBlockClick}>Add Block</Button>
          <Button onClick={onValidateClick}>Validate</Button>
        </ButtonArea>
      </CardContainer>
    </div>
  );
}

export default App;
