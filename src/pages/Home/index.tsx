import { gql } from "@apollo/client";
import React from "react";
import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Post, { IPost } from "../../components/Post";
import { client } from "../../services/apollo";
import { Container } from "./styles";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  client
    .query({
      query: gql`
        query {
          listarPosts {
            id
            descricao
            urlImagem
            likes
            comentarios {
              id
              texto
              likes
              usuario {
                nome
                urlFotoPerfil
              }
            }
            usuario {
              nome
              urlFotoPerfil
            }
          }
        }
      `,
    })
    .then((result) => setPosts(result.data.listarPosts));

  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
