import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../../context/useAuthStore";
import { RegisterInputProps, registerSchema } from "../../schema/user.schema";
import {
  Button,
  Container,
  Input,
  LoginLink,
  RegistrationForm,
  Title,
} from "./styles";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register: signup, error } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterInputProps) => {
    signup(data);
    if (error) {
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastre-se</Title>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          {...register("nome", { required: true })}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.nome && <span>{errors.nome.message}</span>}
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          {...register("email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          {...register("senha", { required: true })}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.senha && <span>{errors.senha.message}</span>}
        <Button type="submit">Enviar</Button>
        <LoginLink to="/">Já possui uma conta? Entre aqui</LoginLink>
      </RegistrationForm>
    </Container>
  );
};

export default Register;
