import styled from 'styled-components'

const StyledLine = styled.div`
font-size: 24px;
color: ${({color, theme}) => color || theme.colors.primary};
`

const Line = (props) => <StyledLine {...props}/>

export default Line