
export type FieldType = 'select' | 'selectMulti' | 'textarea' | 'validateText';

export type FieldOption = {label:string, value:string}

export type FormFieldBase = {
    id:string;
    label: string;
    type: FieldType,
    required: boolean,
    model: string,
}

export type FormFieldSelect = {
    values: Array<FieldOption>;
    selectedValue?: string;
} & FormFieldBase

export type FormFieldSelectMulti = {
    values: Array<FieldOption>;
    selectedValues?: Array<string>;
} & FormFieldBase

export type FormFieldValidateText = {
    validationRules: Array<FieldOption>;
} & FormFieldBase

export type FormFieldTextarea = FormFieldBase

export type FormField = FormFieldSelect | FormFieldSelectMulti | FormFieldTextarea | FormFieldValidateText;

export type FormConfig = {
    title: string;
    icon?: string;
    fields: Array<FormField>
}

export type FormState = object;