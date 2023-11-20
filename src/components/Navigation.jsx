import React, { useState } from "react";
import styled, { css } from "styled-components";

const Tabslist = styled.ul`
  display: flex;
  background-color: #c77474;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.$heroes === props.children) {
      return css`
        background-color: #3a0808;
        color: white;
      `;
    }
    return css`
      background-color: #c77474;
      color: white;
    `
  }}
  
  font-size: 15px;
  width: 80px;
  text-align: center;
  padding: 12px 6px;
  border-radius: 12px;
  cursor: pointer;
`
 
function Navigation({heroes, setHeroes}) {


  const onHeroes = (e) => {
    if(e.target === e.currentTaget) return;

    setHeroes(e.target.textContent)
  }
  return (
    <Tabslist onClick={onHeroes}>
      <Tab $heroes={heroes}>IronMan</Tab>
      <Tab $heroes={heroes}>Thor</Tab>
      <Tab $heroes={heroes}>SpiderMan</Tab>
      <Tab $heroes={heroes}>BlackPanther</Tab>
    </Tabslist>
  );
}

// const Navigation = ({ heroesClear }) => {
//   const heroes = ["IronMan", "Thor", "SpiderMan", "BlackPanther"];
//   const [heroList, setheroList] = useState(0);
//   const heroListHandler = (index) => {
//     setheroList(index);
//     heroesClear(heroes[index]);
//   };

//   return (
//     <Container>
//       <List>
//         {heroes.map((h, index) => (
//           <li
//             key={index}
//             className={heroList === index ? "item selected" : "item"}
//             onClick={() => heroListHandler(index)}
//           >
//             {h}
//           </li>
//         ))}
//       </List>
//     </Container>
//   );
// };

export default Navigation;
