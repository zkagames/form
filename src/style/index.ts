import styled from 'styled-components';

export const TRANSITION = 'all 0.2s ease-in-out';
export const BORDER = '1px solid gray';

export const Page = styled.div`
    padding:10px;
    margin:0px;
    font-size:14px;
    font-family:verdana;
    display:flex;
    justify-content:center;
`

export const Button = styled.button<{$isDisabled?:boolean}>`
    width:100px;
    color:white;
    background:#69f;
    padding:4px;
    border:1px outset #6af;
    transition: ${TRANSITION};

    :hover{
        background: #8bf;
    }

    pointer-events:${props => props.$isDisabled ? 'none':'inherit'};
    cursor:${props => props.$isDisabled ? 'normal':'pointer'};
    opacity: ${props => props.$isDisabled ? 0.5:1};
`
