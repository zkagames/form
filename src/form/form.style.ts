import styled from 'styled-components';
import { BORDER } from '../style';

export const FIELD_SIZE = 400;
export const FIELD_BACKGROUND = 'white';

export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:fit-content;
    border:${BORDER};
    border-radius: 8px;
    background: #fafafa;
    padding: 10px;
`

export const FormTitle = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    font-size:18px;
`

export const FormBody = styled.div`
    max-height:800px;
    overflow:auto;
    margin:8px 0px;
`

export const FieldFieldContainer = styled.div`
    margin:20px 0px;
    overflow:hidden;
`

export const FieldLabel = styled.div`
    margin-bottom:4px;
`

export const Buttons = styled.div`
    display:flex;
    justify-content:flex-end;
    
`

export const Required = styled.span<{isFilled:boolean}>`
    color: ${props => props.isFilled ? '#777':'red'};
    font-size:12px;
`
