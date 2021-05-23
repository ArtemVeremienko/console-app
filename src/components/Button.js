import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
0% {
transform: rotateX(0deg);
}
100% {
transform: rotateX(360deg);
}
`

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
align-self: ${({align}) => align || 'stretch'};
${({color, theme}) => color || theme.colors.primary};
&:focus {
outline: none;
}
&:hover {
animation: ${rotateAnimation} 1s linear;
}
${({primary}) => primary && css`
background: ${({background}) => background || 'white'};
`}
${({outlined}) => outlined && css`
background: transparent;
border: 1px solid ${({bColor}) => bColor || 'white'}
`}
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => <LargeButton {...props} />

export default Button
