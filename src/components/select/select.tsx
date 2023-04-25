import React, { useEffect, useMemo, useState } from 'react';
import { FormFieldSelect } from '../../types';
import { OptionsContainer, Option, Arrow, InputContainer, SelectText, OptionLabel } from './select.style';

export const Select = ({field, selectedValue, onChange}:{field:FormFieldSelect, selectedValue: string, onChange: (value:string)=>void})=>{
    const {values} = field;

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState<undefined | string>(undefined);

    useEffect(()=>{
        setSearch(undefined);
    },[selectedValue])

    const selectedLabel = useMemo(()=>
        selectedValue ? values.find(item=>item.value===selectedValue)?.label
        :
        '',
    [selectedValue, values]);

    const selectOption = (value:string)=>{
        setIsOpen(false);
        onChange(value);
    }

    const searchedOptions = useMemo(()=>{
        if(!search){
            return values;
        }
 
        return values.filter(option=>option.label.toLowerCase().includes(search.toLowerCase()))
    },[values, search])
    
    return <>
        <InputContainer onClick={()=>setIsOpen(!isOpen)} >
            <SelectText value={search ?? selectedLabel} 
            onChange={(e)=>{setSearch(e.target.value);setIsOpen(true)}}/>
            <Arrow isOpen={isOpen}>▼</Arrow>
        </InputContainer>
        
        {Boolean(isOpen && searchedOptions.length) && <OptionsContainer>{
            searchedOptions.map(option=>{
                const {value, label} = option;
                const isSelected = value===selectedValue;
                return <Option key={value} onClick={()=>selectOption(value)} title={label}>
                    <OptionLabel>{label}</OptionLabel>
                {isSelected && <img src={`images/v.png`}/>}
                </Option>
            })
            }</OptionsContainer>}
    </>;
}