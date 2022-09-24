import React, { MouseEventHandler } from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/system';

type Props = {
  label: string,
  onClick: MouseEventHandler<HTMLButtonElement>;
};


const StyledButton = styled(Button)(({theme})=>({
  borderRadius: 30,
  backgroundColor: '#FFF',
  fontSize: 16,
  height: 54,
  marginBottom: 16,
  width: 256,
  color: '#30BFBA'
}))

export const PrimaryButton = (props:Props) => {
  const {label, onClick}=props;
  return (
    <div>
      <StyledButton  variant="contained" onClick={(event)=> onClick(event)}>
        {props.label}
      </StyledButton>
    </div>
  )
}