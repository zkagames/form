import styled from 'styled-components';
import { FIELD_SIZE } from '../../form/form.style';

export const TextareaContainer = styled.textarea`
    width: ${FIELD_SIZE - 4}px; // minus resize size
    height:50px;
    outline:none;
`