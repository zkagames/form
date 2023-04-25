import styled from 'styled-components';
import {BORDER} from '../../style'
import { FIELD_BACKGROUND, FIELD_SIZE } from '../../form/form.style';


export const OptionsContainer = styled.div`
    width: ${FIELD_SIZE}px;
    display:flex;
    flex-direction:column;
    padding: 4px 0px;
    border:${BORDER};
    background: ${FIELD_BACKGROUND};
`

export const Option = styled.div`
    padding: 4px;
    cursor:pointer;
    display:flex;
    input{cursor:pointer};
`

export const OptionLabel = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`



