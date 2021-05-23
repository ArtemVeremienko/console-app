import styled from 'styled-components'

const StyledTitle = styled.h1`
color: ${({color, theme}) => color || theme.colors.primary};
`

const Title = (props) => <StyledTitle {...props}/>

export default Title