import React from 'react';
import styled from 'styled-components';

const StyledSignUpLabelInput = styled.div`
  display: flex;
  flex-direction: column;

  .required-asterisk, .required-text {
    vertical-align: super;
  }

  .required-text {
    font-size: 12px;
    margin-left: 5px;
  }

  .required-asterisk {
    font-size: 12px;
    color: red;
  }

  input {
    font-size: 18px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  input::placeholder {
    color: gray;
  }
`;

const SignUpLabelInput = ({ id, placeholder, required, labelText, type = 'text', value, onChangeInput }) => {
  return (
    <StyledSignUpLabelInput>
      <label htmlFor={id}>
        {labelText}
        {required &&
          <>
            <span className='required-text'>필수</span>
            <span className='required-asterisk'>*</span>
          </>
        }
      </label>
      <input id={id} placeholder={placeholder} required={required} type={type} value={value} onChange={onChangeInput} />
    </StyledSignUpLabelInput>
  );
};

export default SignUpLabelInput;
