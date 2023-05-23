import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpLabelInput from './SignUpLabelInput';
import ErrorModal from './UI/ErrorModal';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  row-gap: 18px;

  button {
    font-size: 18px;
    font-weight: 700;
    padding: 15px;
    border: none;
    border-radius: 40px;
    background-color: dodgerblue;
    color: white;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReconfirm, setPasswordReconfirm] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changePasswordReconfirmHandler = (e) => {
    setPasswordReconfirm(e.target.value);
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const resetInput = () => {
    setEmail('');
    setName('');
    setAge('');
    setPassword('');
    setPasswordReconfirm('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (age < 1) {
      setError('나이는 0보다 큰 숫자를 입력해야 합니다.');
      return;
    }
    if (password !== passwordReconfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert(`${name}님 환영합니다!`);
    resetInput();
  };

  const closeModalHandler = () => {
    setError(null);
  };


  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <SignUpLabelInput id='email' placeholder='이메일을 입력하세요' required={true} labelText='이메일' value={email}
                          onChangeInput={changeEmailHandler} />
        <SignUpLabelInput id='password' placeholder='비밀번호를 입력하세요' required={true} labelText='비밀번호' type='password'
                          value={password} onChangeInput={changePasswordHandler} />
        <SignUpLabelInput id='password-reconfirm' placeholder='비밀번호를 다시 입력하세요' required={true} labelText='비밀번호 재확인'
                          type='password' value={passwordReconfirm} onChangeInput={changePasswordReconfirmHandler} />
        <SignUpLabelInput id='name' placeholder='이름을 입력하세요' labelText='이름' value={name}
                          onChangeInput={changeNameHandler} />
        <SignUpLabelInput id='age' placeholder='나이를 입력하세요' labelText='나이' type='number' value={age}
                          onChangeInput={changeAgeHandler} />
        <button type='submit'>가입하기</button>
      </StyledForm>
      {error && <ErrorModal text={error} onConfirm={closeModalHandler} />}
    </>
  );
};

export default SignUpForm;
