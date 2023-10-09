import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

import Input from "../../component/Input";
import LargeButton from "../../component/LargeButton";
import { validation } from "./Validation";
import { Signin } from '../../../api/Auth/SignIn';

const Login = () => {
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    Signin(data,callbackFunction);
  };

  const callbackFunction=(data)=>{
    localStorage.setItem('accessToken',data.accessToken);
    navigate('/');

  };

  const handleErrorMessage = () => {
    if (errors.email) {
      return errors.email.message;
    } else if (errors.password) {
      return errors.password.message;
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer $isError={errors.email || errors.password}>
          <Input
            placeholder="이메일"
            type="email"
            register={register}
            inputId="email"
            errorCheck={errors.email}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            register={register}
            inputId="password"
            errorCheck={errors.password}
          />
          {(errors.email || errors.password) && <LoginError>{handleErrorMessage()}</LoginError>}
        </InputContainer>

        <ButtonBlock>
          <LargeButton text="로그인/회원가입" type="submit" />
        </ButtonBlock>
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 90px 10px 15px 10px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  @media (max-width: 529px) {
    padding: ${(props) => (props.$isError ? "10px 15px" : "10px")};
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
`;

const LoginError = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
`;

