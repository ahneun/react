import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  background-color: #5a6673;
  border-radius: 30px;
  padding: 20px;
`;

function form({addForm}) {
  const [Nickname, setNickname] = useState('');
  const [Content, setContent] = useState('');
  const [Heroeslist, setHeroeslist] = useState('IronMan');
  
  const nicknameHandler = e => {
    setNickname(e.target.value)
  };

  const contentHandler = e => {
    setContent(e.target.value)
  };

  const heroeslistHandler = e => {
    setHeroeslist(e.target.value)
  };

  const submitHandler = e => {
    e.preventDefault();

    const fakedata = {
      createdAt: new Date(),
      Nickname,
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
      Content,
      writedTo: Heroeslist,
      id: uuid(),
    };

    if (Nickname.trim() === ""){
      alert('닉네임과 내용은 필수 입력값입니다')
      return;
    }
    
    if (Content.trim() === ""){
      alert('닉네임과 내용은 필수 입력값입니다')
      return;
  };
  addForm (fakedata);
  setNickname('')
  setContent('')

};

  return (
    <Container>
      <div>
       <label className="nickname">닉네임 :</label>
       <input value={Nickname} type="text" maxLength={20} placeholder="최대 20글자까지 작성할 수 있습니다" onChange={nicknameHandler}></input>
     </div>

      <div>
      <label className="content">내용 :</label>
      <input value={Content} placeholder="최대 100자까지만 작성할 수 있습니다" maxLength={100} onChange={contentHandler} ></input>
      </div>

      <div>
      <label className="heroeslist">누구에게 보내실 건가요?</label>
      <select onChange={heroeslistHandler} value={Heroeslist}>
       <option value='IronMan' defaultValue={Heroeslist}>IronMan</option>
       <option value='Thor'>Thor</option>
       <option value='SpiderMan'>SpiderMan</option>
       <option value='BlackPanther'>BlackPanther</option>
      </select>
      </div>
        <button onClick={submitHandler}>팬레터 등록</button>
    </Container>
  );
}

export default form;
