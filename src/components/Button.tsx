import styled from '@emotion/styled'

interface IProps {
	primary?: boolean;
}

export const Button = styled.button<IProps>`
  padding: 12px;
  font-size: 14px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  background-color: ${props => props.primary ? 'lightblue' : 'lightgray'};
  @media(min-width: 420px) {
	  background-color: lightblue;
  }
  &:hover {
    cursor: pointer;;
  }
`