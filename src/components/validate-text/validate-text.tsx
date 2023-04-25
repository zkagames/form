import React, { useEffect, useMemo, useState } from 'react';
import { TextContainer, OptionsContainer, InputContainer } from './validate-text.style';
import { Option, OptionLabel,  } from '../select/select.style';
import { FormFieldValidateText } from '../../types';

export const ValidateText = ({
    selectedValue, 
    field, 
    onChange, 
    onChangeValid
    } : {
    selectedValue: string, 
    field: FormFieldValidateText, 
    onChange: (value:string)=>void, 
    onChangeValid: (field:FormFieldValidateText, isAllValid:boolean)=>void
    })=>
{

    const {validationRules} = field;
    
    const allValid = useMemo(()=>{
        return validationRules.reduce((acc,rule)=>{
            acc[rule.label] = RegExp(rule.value).test(selectedValue);
            return acc;
        },{} as Record<string, boolean>);
    },[selectedValue,validationRules ]);
    
    const isAllValid = useMemo(()=>{
        return !selectedValue || Object.keys(allValid).every(key=>allValid[key]);
    },[selectedValue,validationRules ]);

    useEffect(()=>{
        onChangeValid(field, isAllValid);
    }, [isAllValid])
    
    return <>
        <InputContainer >
            <TextContainer value={selectedValue} onChange={(e)=>{onChange(e.target.value)}}></TextContainer> 
            {selectedValue && isAllValid && <img src={`images/v.png`}/>}
            {selectedValue && !isAllValid && <img src={`images/x.png`}/>}
        </InputContainer>
        
        {<OptionsContainer>{
            validationRules.map(rule=>{
                const {value, label} = rule;
                const valid = allValid[label];
                return <Option key={value}>
                    <OptionLabel>{label}</OptionLabel>
                    {selectedValue && valid  && <img src={`images/v.png`}/>}
                    {selectedValue && !valid  && <img src={`images/x.png`}/>}
                </Option>
            })
            }</OptionsContainer>}
    </>;
}