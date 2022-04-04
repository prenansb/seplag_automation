import styled from 'styled-components'

export const WrapperId = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 40px;
`

export const LabelId = styled.label`
  font-size: 13px;
`

export const InputId = styled.input`
  background: transparent;
  border: 1px solid #52526b;
  border-radius: 6px;

  color: white;

  width: 100px;
  height: 48px;
  padding: 0 8px;

  text-align: center;

  -webkit-appearance: textfield;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    outline: none;
    border: 1px solid #5c7ae5;
    box-shadow: 0px 0px 15px rgba(93, 122, 229, 0.75);
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

// File

export const WrapperFile = styled.div`
  margin-bottom: ${props => (props.file ? '28px' : '48px')};
`

export const LabelFile = styled.label`
  background: #5c7ae5;
  border-radius: 4px;

  margin-top: 10px;
  margin-bottom: 0;

  padding: 12px 16px;

  align-self: flex-start;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    filter: brightness(0.8);
  }
`

export const File = styled.span`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: 30px;
`

export const InputFile = styled.input`
  display: none;
`

// Buttons

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`

export const CancelButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 1px solid #818191;
  padding: 12px 32px;

  color: #f3f3f3;

  cursor: pointer;

  font-weight: 500;
  font-size: 14px;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

export const SendButton = styled.button`
  background: #eaeaff;
  border-radius: 4px;
  border: none;

  padding: 12px 24px;

  color: #16162a;

  cursor: pointer;

  font-weight: 500;
  font-size: 14px;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    filter: brightness(0.8);
  }
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`
