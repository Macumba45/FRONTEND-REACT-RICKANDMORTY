import { Formik } from 'formik';
import { FC, memo } from 'react';
import { MainContainer, CustomInput, InputContainer, CustomButton, FormContainer, CustomField, CustomLabel, FormTitle } from './styles';
import { validationSchema, initialValues } from './constants';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuthenticatedToken } from '../../services/storage';

const CharacterForm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = async (values: { name: string, status: string, species: string }) => {
        console.log({values});
        const token = getAuthenticatedToken();
        const response = await fetch(`http://localhost:8000/characters/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(values)
        })
        await response.json();
        navigate('/characters')
    }
    
    return (
        <MainContainer>
            <FormTitle>
                EDIT CHARACTER
            </FormTitle>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={initialValues}
            >
                <FormContainer>
                    <CustomField name='name' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <CustomLabel>Name</CustomLabel>
                                <CustomInput type='text' {...field} />
                                {meta.error && <span>{meta.error}</span>}
                            </InputContainer>
                        )}
                    </CustomField>
                    <CustomField name='status' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <CustomLabel>Status</CustomLabel>
                                <CustomInput type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </CustomField>
                    <CustomField name='species' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <CustomLabel>Species</CustomLabel>
                                <CustomInput type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </CustomField>
                        <CustomButton type='submit'>
                            Update
                        </CustomButton>
                </FormContainer>
            </Formik>
        </MainContainer>
    )
};



export default memo(CharacterForm);