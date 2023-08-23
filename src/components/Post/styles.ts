import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: white;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const PostImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
  cursor: pointer;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostDetails = styled.div`
  flex: 1;
  padding: 16px;
`;

export const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #606770;
`;

export const Caption = styled.p`
  font-size: 14px;
  color: #1c1e21;
`;

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
