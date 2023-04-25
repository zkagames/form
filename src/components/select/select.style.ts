import styled from 'styled-components';
import {BORDER, TRANSITION} from '../../style'
import { FIELD_BACKGROUND, FIELD_SIZE } from '../../form/form.style';

export const InputContainer = styled.div`
    display:flex;
    gap: 4px; 
    border:${BORDER};
    width: ${FIELD_SIZE}px; 
`

export const SelectText = styled.input`
    width: ${FIELD_SIZE - 24}px; // minus arrow
    border:0px;
    cursor:pointer;
    outline:none;
`

export const Arrow = styled.div<{isOpen: boolean}>`
    display:flex;
    cursor:pointer;
    transition: ${TRANSITION};
    transform: ${props => props.isOpen ? 'rotate(180deg)':''};
`

export const OptionsContainer = styled.div`
    width: ${FIELD_SIZE}px;
    display:flex;
    flex-direction:column;
    padding: 4px 0px;
    border:${BORDER};
    border-top:0px;
    position: absolute;
    background: ${FIELD_BACKGROUND};
`

export const Option = styled.div`
    padding: 4px;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
`

export const OptionLabel = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`



