import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoginInputProps } from "../../context/AuthProvider";
import useAuthStore from "../../context/useAuthStore";
import { loginSchema } from "../../schema/user.schema";
import {
  Button,
  Container,
  Input,
  LoginForm,
  RegistrationLink,
  Title,
} from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuthStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputProps) => {
    login(data);
    navigate("/inicio");
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          {...register("email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="password"
          placeholder="Senha"
          {...register("senha", { required: true })}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errors.senha && <span>{errors.senha.message}</span>}
        <Button type="submit">Entrar</Button>
        <RegistrationLink to="/registro">
          Não tem uma conta? Cadastre-se aqui
        </RegistrationLink>
      </LoginForm>
    </Container>
  );
};

export default Login;
