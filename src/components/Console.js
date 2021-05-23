import styled from 'styled-components'
import Flex from "./Flex";
import {useMemo, useState} from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: #000;
font-size: 24px;
border: none;
color: ${({color, theme}) => color || theme.colors.primary};
resize: none;

&:focus {
  outline: none;
}
@media ${({theme}) => theme.media.phone} {
  border: 1px solid red;
}
@media ${({theme}) => theme.media.tablet} {
  border: 1px solid green;
}
`

const Console = ({color, ...otherProps}) => {
    const consoleHead = useMemo(() => '/home/user>', [])
    const [lines, setLines] = useState([consoleHead])

    const handleKeyPress = e => {
        if (e.code !== 'Enter') return
        setLines(prev => [...prev, consoleHead])
    }

    return (
        <Flex>
            <Flex direction='column' margin='0 10px'>
                {lines.map(line => <Line color={color}>{line}</Line>)}
            </Flex>
            <StyledConsole onKeyPress={handleKeyPress} color={color} {...otherProps}/>
        </Flex>
    )
}

export default Console