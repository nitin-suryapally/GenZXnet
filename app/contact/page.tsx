import { Metadata } from "next";
import ContactForm from "../_components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Us",
};
const Contact = () => {
    return ( 
        <ContactForm />
     );
}
 
export default Contact;