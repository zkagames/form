import { FormState } from "../types";

// in practice, this woul be fetched from app state / backend

export const formState:FormState = {
    spec: {
        description: '',
        runtime:'python:3.9',
        permissions: ['read'],
        serviceName: ''
    },
    metadata: {
        name: '',
        categories: []
    }
}