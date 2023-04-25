import { useMemo, useState } from "react"
import { Button } from "../style"
import { FormConfig, FormField, FormFieldSelect, FormFieldSelectMulti, FormFieldValidateText, FormState } from "../types"
import {Buttons, FieldFieldContainer, FieldLabel, FormBody, FormContainer, FormTitle, Required } from "./form.style"
import { get, set } from "lodash"
import { SelectMulti } from "../components/select-multi/select-multi"
import { Select } from "../components/select/select"
import { Textarea } from "../components/textarea/textarea"
import { ValidateText } from "../components/validate-text/validate-text"

export const Form =({formConfig,formState}:{formConfig:FormConfig, formState: FormState})=>{
    const {title, icon, fields} = formConfig;
    const [currentFormState, setCurrentFormState] =  useState(formState);
    const [allValid, setAllValid] = useState<Record<string, boolean>>({});

    const setFieldSelectedValues = (field:FormField, values:string | Array<string>)=>{
        setCurrentFormState(currentFormState=>{
            const state = {...currentFormState};
            return set(state, field.model, values);
        })
    }

    const isFieldFilled = (field: FormField)=>Boolean(get(currentFormState, field.model).length);
    
    const getFormData = ()=>{
       const isAllFilled = fields.every(field=>!field.required || isFieldFilled(field));
       if(isAllFilled){
        console.log(currentFormState);
       }else{
        console.log('Please fill all required fields')
       }
    }
   
    const isAllValid = useMemo(()=>{
        const keys = Object.keys(allValid);
        return !keys.length || keys.every(key=>allValid[key]!==false);
    },[allValid]);


    const onChangeValid = (field:FormFieldValidateText, isValid:boolean)=>{
        setAllValid(currentAllValid=>{
            return {...currentAllValid, [field.id]:isValid};
        })
    }

    return <FormContainer>
            <FormTitle>
            {icon &&  <img src={`images/${icon}.png`} />}
            {title} 
            </FormTitle>

            <FormBody>
            {fields.map(field=>{
                const {model, label, type, required, id} = field;
                return <FieldFieldContainer key={id}>
                    <FieldLabel>{label} {required && <Required isFilled={isFieldFilled(field)}>(required)</Required>}</FieldLabel>

                    {type==="select" && <Select field={field as FormFieldSelect} 
                        selectedValue={get(currentFormState, field.model)} 
                        onChange={(value)=>{setFieldSelectedValues(field, value)}}
                    />}

                    {type==="selectMulti" && <SelectMulti field={field as FormFieldSelectMulti} 
                        selectedValues={get(currentFormState, field.model)} 
                        onChange={(value)=>{setFieldSelectedValues(field, value)}}
                    />}

                    {type==="textarea" && <Textarea selectedValue={get(currentFormState, field.model)} 
                        onChange={(value)=>{setFieldSelectedValues(field, value)}}
                    />}

                    {type==="validateText" && <ValidateText field={field as FormFieldValidateText} 
                        selectedValue={get(currentFormState, field.model)} 
                        onChange={(value)=>{setFieldSelectedValues(field, value)}}
                        onChangeValid={(field, isValid)=>onChangeValid(field, isValid)}
                    />}

                </FieldFieldContainer>;
            })}
            </FormBody>

            <Buttons><Button onClick={getFormData} $isDisabled={!isAllValid}>Create</Button></Buttons>
    </FormContainer>
}