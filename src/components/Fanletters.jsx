import React from 'react'
import styled from 'styled-components'


const Fanletterslist = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: white;
    padding: 12px;
    border: 1px solid white;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.02);
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Avatar = styled.figure`
width: 50px;
height: 50px;
border-radius: 50%;
overflow: hidden;
& img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`;

const NicknameDate = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
`;

const Content = styled.p`
background-color: #b3929f;
border-radius: 12px;
padding: 12px;
margin-left: 62px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;
    


export default function Fanletters({Letter}) {

    const formattedDate = new Date(Letter.createdAt).toLocaleDateString("ko", {
        "year": "2-digit",
        "month": "2-digit",
        "day": "2-digit",
        "hour": "2-digit",
        "minute": "2-digit",
        "second": "2-digit"
    });
  return <Fanletterslist>
    <UserInfo>
        <Avatar>
            <img src={Letter.avatar ?? "/default.png"} alt="아바타이미지"/>

        </Avatar>
        <NicknameDate>
            <p>{Letter.nickname}</p>
            <time>{formattedDate}</time>
        </NicknameDate>
    </UserInfo>
    <Content>{Letter.content}</Content>
  </Fanletterslist>

}
