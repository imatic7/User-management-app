// styledComponents
import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
} from "./../components/Styles";

import Logo from "./../imgs/logo.png";
// Formik
import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";

//Redirect to /dashboard
import { useHistory } from "react-router-dom";

//YUP
import * as Yup from "yup";

//Icons
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

//LoginSpinner
import Loader from "react-loader-spinner";

const Login = () => {
  const history = useHistory();
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Admin Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            const LoginInfo = {
              email: values.email,
              password: values.password,
            };
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(LoginInfo),
            };
            const a = await fetch(
              "https://reqres.in/api/login",
              requestOptions
            ).then((response) => response.json());

            if (a.token) {
              history.push("/dashboard");
            } else console.error("Wrong Login Info");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="ivan@example.com"
                icon={<AiOutlineMail />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<AiOutlineLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type="TailSpin"
                    color={colors.theme}
                    height={45}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </div>
  );
};

export default Login;
