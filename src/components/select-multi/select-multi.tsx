import React from 'react';
import { FormFieldSelectMulti } from '../../types';
import { Option, OptionLabel, OptionsContainer } from './select-multi.style';

export const SelectMulti = ({field, selectedValues = [], onChange}:{field:FormFieldSelectMulti, selectedValues: Array<string>, onChange: (values:Array<string>)=>void})=>{
    const {values} = field;

    const selectOption = (value:string)=>{
        const newSelectedValues = selectedValues.includes(value) ? selectedValues.filter(v=>v!==value) : [...selectedValues, value];
        onChange(newSelectedValues);
    }

    return <OptionsContainer>{
            values.map(option=>{
                const {value, label} = option;
                const isSelected = selectedValues.includes(value);
                return <Option key={value} title={label}>
                    <input type="checkbox" checked={isSelected} onChange={()=>selectOption(value)}/><OptionLabel onClick={()=>selectOption(value)}>{label}</OptionLabel>
                </Option>
            })
    }</OptionsContainer>
    
}