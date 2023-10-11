import * as yup from "yup";
export const validation = yup.object().shape({
  email: yup
    .string()
    .required("이메일 형식이 올바르지않습니다.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "이메일 형식이 올바르지않습니다."
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(.){1,}$/,
      "비밀번호를 입력해주세요."
    ),
});
