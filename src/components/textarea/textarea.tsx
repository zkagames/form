import React from 'react';
import { TextareaContainer } from './textarea.style';

export const Textarea = ({selectedValue, onChange} : {selectedValue: string, onChange: (value:string)=>void})=>{
    return <TextareaContainer onChange={(e)=>{onChange(e.target.value)}} value={selectedValue}/> 
}