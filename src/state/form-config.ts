import { FormConfig } from "../types";


export const formConfig:FormConfig = {
    title: 'Deployment Form',
    icon: 'logo',
    fields: [
        {
            id: 'name',
            label: 'Function name',
            type: 'validateText',
            required: true,
            model: 'metadata.name',
            validationRules: [
            {label: 'Valid characters: a–z, 0–9, –', value: '[a-z,0-9,-]$'}, 
            {label: 'Must begin and end with: a–z, 0–9', value: '^[a-z,0-9,-]*[a-z,0-9,-]$'},
            {label: 'Max length: 56', value: '^[a-z,0-9,-]{0,56}$'}]
        },
        {
            id: 'description',
            label: 'Description',
            type: 'textarea',
            required: false,
            model: 'spec.description'
        },
        {
        id: 'runtime',
        label: 'Runtime',
        values: [
            {label: 'Go', value: 'golang'},
            {label: 'Java', value: 'java'},
            {label: 'NodeJs', value: 'nodejs'},
            {label: 'Python 3.7',value: 'python:3.7'},
            {label: 'Python 3.9',value: 'python:3.9'}
        ],
        type: 'select',
        required: true,
        model: 'spec.runtime'
    },{
        id: 'categories',
        label: 'Categories',
        values: [
            {label: 'Data Collection', value: 'collect'},
            {label: 'Data Processing', value: 'process'},
            {label: 'Analytics & Reporting', value: 'report'},
            {label: 'Sorting, filtering, tagging',value: 'sort'}
        ],
        type: 'selectMulti',
        required: false,
        model: 'metadata.categories'
    },
    {
        id: 'serviceName',
        label: 'Service name',
        type: 'validateText',
        required: true,
        model: 'spec.serviceName',
        validationRules: [
            {label: 'Valid characters: a–z, 0–9, –', value: '[a-z,0-9,-]$' },
            {label: 'Must begin with: a–z', value: '^[a-z]' },
            {label: 'Must end with: a–z, 0–9', value: '[a-z, 0,9]$' },
            {label: 'Max length: 53', value: '^[a-z,0-9,-]{0,53}$' },]
    },
    {
        id: 'permissions',
        label: 'Permissions',
        values: [
            {label: 'Read files', value: 'read'},
            {label: 'Write fields', value: 'write'},
            {label: 'Execute fiels', value: 'execute'}
        ],
        type: 'selectMulti',
        required: true,
        model: 'spec.permissions'
    }]
}