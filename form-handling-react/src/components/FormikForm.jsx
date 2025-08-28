import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
    // Validation schema with Yup
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    // Initial values
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        console.log("User registered with Formik:", values);
        resetForm();
    };

    return (
        <div className="p-4 border rounded max-w-md mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-2">
                            <label className="block">Username</label>
                            <Field
                                type="text"
                                name="username"
                                className="border p-2 w-full"
                            />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="border p-2 w-full"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="border p-2 w-full"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
