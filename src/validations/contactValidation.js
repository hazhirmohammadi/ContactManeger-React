import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("name and last name "),
    photo: Yup.string().url("invalided 🚫").required("It is mandatory"),
    mobile: Yup.number().required("This is not a number"),
    email: Yup.string().email("This is required").required("It is mandatory")
    , group: Yup.string().required("please select group")
})
