import React from "react";

import Comentario from "../Comentario";
import { IPost } from "../Post";
import { PostImage } from "../Post/styles";
import {
  CommentList,
  CustomModal,
  ModalContent,
  PostImageWrapper,
  PostInfo,
  PostText,
  UserAvatar,
  UserInfo,
  Username,
} from "./styles";

interface PostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  post: IPost;
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onRequestClose,
  post,
}) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalContent>
        <PostImageWrapper>
          <PostImage src={post.urlImagem} alt="Post" />
        </PostImageWrapper>
        <PostInfo>
          <UserInfo>
            <UserAvatar src={post.usuario.urlFotoPerfil} alt="Foto de Perfil" />
            <Username>{post.usuario.nome}</Username>
          </UserInfo>
          <PostText>{post.descricao}</PostText>

          <CommentList>
            {post.comentarios.map((comentario, index) => (
              <Comentario key={index} comentario={comentario} />
            ))}
          </CommentList>
        </PostInfo>
      </ModalContent>
    </CustomModal>
  );
};

export default PostModal;
