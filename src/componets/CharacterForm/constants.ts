import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     name: Yup.string().required('Name is required'),
     status: Yup.string().required('Status is required'),
     species: Yup.string().required('Species is required'),
});

export const initialValues = {
     name: '',
     status: '',
     species: '',
};
