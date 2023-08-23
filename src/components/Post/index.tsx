import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

import PostModal from "../PostModal";
import {
  Caption,
  Container,
  Like,
  PostDetails,
  PostHeader,
  PostImage,
  PostImageWrapper,
  PostStats,
  UserName,
  UserPhoto,
} from "./styles";
import { client } from "../../services/apollo";
import { gql } from "@apollo/client";
import { IComentario } from "../Comentario";

export interface IPost {
  id: string;
  descricao: string;
  urlImagem: string;
  likes: number;
  comentarios: IComentario[];
  usuario: {
    nome: string;
    urlFotoPerfil: string;
  };
}

export interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
    client.mutate({
      mutation: gql`
        mutation {
          darLike(id: "${post.id}") {
            id
          }
        }
      `,
    });
  };

  return (
    <Container>
      <PostHeader>
        <UserPhoto src={post.usuario.urlFotoPerfil} alt="Foto de perfil" />
        <UserName>{post.usuario.nome}</UserName>
      </PostHeader>
      <PostImageWrapper onClick={() => setModalOpen(true)}>
        <PostImage src={post.urlImagem} alt="Post" />
      </PostImageWrapper>
      <PostDetails>
        <PostStats>
          <Like onClick={() => handleLike()}>
            <AiOutlineLike size={20} />
            {likes} Likes
          </Like>
          <span>{post.comentarios.length} Comentários</span>
        </PostStats>
        <Caption>{post.descricao}</Caption>
      </PostDetails>
      <PostModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        post={post}
      />
    </Container>
  );
};

export default Post;
