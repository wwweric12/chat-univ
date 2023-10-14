import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MypageHeader from "../../component/MypageHeader";
import Input from "../../component/Input";
import { validation } from "../Mypage/Validation";
import LargeButton from "../../component/LargeButton";

const EditProfile = () => {
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
    console.log(data);
  };

  return (
    <>
      <MypageHeader title="내 정보 수정" />
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <InBox>
            <TxtBox>현재 비밀번호</TxtBox>
            <Input
              type="password"
              register={register}
              inputId="password"
              errorCheck={errors.password}
            />
            {errors.password && <SignError>{errors.password.message}</SignError>}
          </InBox>
          <InBox>
            <TxtBox>새로운 비밀번호</TxtBox>
            <Input
              type="newpassword"
              register={register}
              inputId="newpassword"
              errorCheck={errors.password}
            />
            {errors.password && <SignError>{errors.password.message}</SignError>}
          </InBox>
          <InBox>
            <TxtBox>비밀번호 확인</TxtBox>
            <Input
              type="password"
              register={register}
              inputId="checkPassword"
              errorCheck={errors.checkPassword}
            />
            {errors.checkPassword && <SignError>{errors.checkPassword.message}</SignError>}
          </InBox>
        </Box>

        <ButtonBox>
          <LargeButton text="저장" type="submit" />
        </ButtonBox>
      </FormBox>
    </>
  );
};

export default EditProfile;

const Box = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const InBox = styled.div`
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const TxtBox = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 16px;
  font-weight: 400;
`;

const SignError = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
  padding-top: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  padding: 0px 35px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  align-self: stretch;
`;
