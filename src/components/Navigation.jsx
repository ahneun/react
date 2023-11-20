import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

const List = styled.ul`
  display: flex;
  background-color: #c77474;
  width: 100%;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 1;
  
    

  .item {
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
  }

  .selected {
    background-color: #3a0808;
  }
`;

const Navigation = ({ heroesClear }) => {
  const heroes = ["IronMan", "Thor", "SpiderMan", "BlackPanther"];
  const [heroList, setheroList] = useState(0);
  const heroListHandler = (index) => {
    setheroList(index);
    heroesClear(heroes[index]);
  };

  return (
    <Container>
      <List>
        {heroes.map((h, index) => (
          <li
            key={index}
            className={heroList === index ? "item selected" : "item"}
            onClick={() => heroListHandler(index)}
          >
            {h}
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
