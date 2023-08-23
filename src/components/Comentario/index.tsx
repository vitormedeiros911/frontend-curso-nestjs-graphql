import React from "react";

import {
  CommentContainer,
  CommentContent,
  CommentUsername,
  UserAvatar,
  UserInfo,
} from "./styles";

export interface IComentario {
  id: number;
  texto: string;
  likes: number;
  usuario: {
    nome: string;
    urlFotoPerfil: string;
  };
}

export interface IComentarioProps {
  comentario: IComentario;
}

const Comentario: React.FC<IComentarioProps> = ({ comentario }) => {
  return (
    <CommentContainer>
      <UserInfo>
        <UserAvatar
          src={comentario.usuario.urlFotoPerfil}
          alt="Imagem de perfil"
        />
        <CommentUsername>{comentario.usuario.nome}:</CommentUsername>
      </UserInfo>
      <CommentContent>{comentario.texto}</CommentContent>
    </CommentContainer>
  );
};

export default Comentario;
