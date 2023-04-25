import styled from 'styled-components';
import { FIELD_SIZE } from '../../form/form.style';
import { BORDER } from '../../style';

export const TextContainer = styled.input`
    width: ${FIELD_SIZE}px;
    outline:none;
    border:0px;
`

export const OptionsContainer = styled.div`
    width: ${FIELD_SIZE}px;
    display:flex;
    flex-direction:column;
    padding: 4px 0px;
    border:${BORDER};
    border-top:0px;
    background: white;
`

export const InputContainer = styled.div`
    display:flex;
    gap: 4px; 
    border:${BORDER};
    width: ${FIELD_SIZE - 4}px; 
    padding-right: 4px;
`

