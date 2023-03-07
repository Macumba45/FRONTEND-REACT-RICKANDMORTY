import {FC, memo} from 'react';
import useLogic from './logic';
import {Field, FieldProps, Formik} from 'formik';
import {validationSchema, initialValues} from './constants';
import NavBar from '../../../componets/NavBar';
import {Props} from './type';
import {
     MainFormContainer,
     LoginTitle,
     Form,
     EmailContainer,
     PasswordContainer,
     LabelContainer,
     Label,
     Input,
     LinkSignupContainer,
     LinkSignupText,
     ButtonLoginContainer,
     ButtonLogin,
     LoginBackImg,
     Error,
     ErrorLogin,
} from './styles';

const Login: FC<Props> = () => {
     const {error, handleSubmit} = useLogic();

     return (
          <>
               <NavBar />
               <LoginBackImg>
                    <MainFormContainer>
                         <Formik
                              validationSchema={validationSchema}
                              onSubmit={handleSubmit}
                              initialValues={initialValues}
                         >
                              <Form>
                                   <LoginTitle>SignIn</LoginTitle>
                                   <Field name="email">
                                        {({field, meta}: FieldProps) => (
                                             <EmailContainer>
                                                  <LabelContainer>
                                                       <Label>Email* </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="email"
                                                       placeholder="Insert your email"
                                                       autoComplete="email"
                                                       {...field}
                                                  />
                                                  {!!meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </EmailContainer>
                                        )}
                                   </Field>
                                   <Field name="password">
                                        {({field, meta}: FieldProps) => (
                                             <PasswordContainer>
                                                  <LabelContainer>
                                                       <Label>Password* </Label>
                                                  </LabelContainer>
                                                  <Input
                                                       $hasError={!!meta?.error}
                                                       type="password"
                                                       autoComplete="current-password"
                                                       placeholder="Insert password"
                                                       {...field}
                                                  />
                                                  {meta?.error && (
                                                       <Error>
                                                            {meta.error}
                                                       </Error>
                                                  )}
                                             </PasswordContainer>
                                        )}
                                   </Field>
                                   <LinkSignupContainer>
                                        <LinkSignupText to="/signup">
                                             If you are not SignUp, click here!
                                        </LinkSignupText>
                                        {error && (
                                             <ErrorLogin>{error}</ErrorLogin>
                                        )}
                                   </LinkSignupContainer>
                                   <ButtonLoginContainer>
                                        <ButtonLogin type="submit">
                                             Log in
                                        </ButtonLogin>
                                   </ButtonLoginContainer>
                              </Form>
                         </Formik>
                    </MainFormContainer>
               </LoginBackImg>
          </>
     );
};

export default memo(Login);
