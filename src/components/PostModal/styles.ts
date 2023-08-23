import Modal from "react-modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  max-width: 120vh;
  width: 100%;
  max-height: 90vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

export const PostImageWrapper = styled.div`
  min-width: 50%;
  max-height: 100%;
  border-radius: 12px;
`;

export const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

export const PostText = styled.p`
  margin: 20px;
  font-size: 0.8rem;
`;

export const UserInfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Username = styled.span`
  font-weight: bold;
`;

export const CommentList = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;
