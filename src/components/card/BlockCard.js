import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

Card.Header = styled.div`
  background: rgb(230, 0, 169);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
  font-weight: bold;
`

Card.body = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  padding-left: 20px;

  label {
    font-size: 12px;
    color: #999;
    line-height: 10px;
    margin: 0;
  }

  p {
    font-size: 14px;
    line-height: 10px;
    margin: 10px;
  }
`

const BlockCard = ({block}) => {
  return(
    <Card>
      <Card.Header>Block {block.index}</Card.Header>
      <Card.body>
        <label>Timestamp</label>
        <p>{block.timestamp}</p>

        <label>Data</label>
        <p>{block.data}</p>

        <label>Previos hash</label>
        <p>{block.previousHash}</p>

        <label>Hash</label>
        <p>{block.hash}</p>

        <label>Proof of work</label>
        <p>{block.proofOfWork}</p>
      </Card.body>
    </Card>
  )
}

export default BlockCard;