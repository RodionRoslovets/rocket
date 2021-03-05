import styled from 'styled-components'

const Input = styled.input`
    width:100%;
    height:36px;
    border:1px solid #492de2;
    border-radius:8px;
    padding:0 16px;
    transition:all .1s linear;

    &:focus{
        outline:none;
        box-shadow: 0px 0px 4px #492de2
    }
`

export default Input