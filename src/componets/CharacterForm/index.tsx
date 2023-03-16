import { Formik } from 'formik';
import { FC, memo, useState } from 'react';
import { MainContainer, CustomInput, InputContainer, CustomButton, FormContainer, CustomField, CustomLabel, FormTitle } from './styles';
import { validationSchema, initialValues } from './constants';
import useLogic from './logic';
import { FormProps } from './types';

const CharacterForm: FC<FormProps> = ({isForEdit}) => {
    const { 
        handleSubmitCreate,
        handleSubmitEdit
    } = useLogic();
    return (
        <MainContainer>
            <FormTitle>
                {isForEdit !== '/create-character' ? 'Edit Character' : 'Create Character'}
            </FormTitle>
            <Formik
                validationSchema={validationSchema}
                onSubmit={isForEdit !== '/create-character' ? handleSubmitEdit : handleSubmitCreate}
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
                            {isForEdit === '/create-character' ? 'Create' : 'Update'}
                        </CustomButton>
                </FormContainer>
            </Formik>
        </MainContainer>
    )
};



export default memo(CharacterForm);