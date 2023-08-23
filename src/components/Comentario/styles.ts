import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Username = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;

export const CommentUsername = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 5px;
`;

export const CommentContent = styled.span`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
