import Heading from "../typography/Heading";
import { ContentContainer } from "../styles/ContentStyles";

const Contact = () => {
    return (
        <ContentContainer>
            <Heading title={'Contact'} />
            <p>Østre Vestreås 43</p>
            <p>9999 Underhill</p>
        </ContentContainer>
    );
};

export default Contact; 

// import { Header } from "../styles/HeaderStyles";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//     name: yup.string().required("Please enter your name").min(3,"The name must be at least 3 characters"),
//     age: yup.number().required("Please enter your age").min(10,"Your age must be at least 10").max(20,"Your age can not be higher than 20"),
//     website: yup.string().required("Please enter your URL").url("Must be a valid URL"),
// });

// function Contact() {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema),
//     });

//     function onSubmit(data) {
//         console.log(data);
//     }

//     console.log(errors);

//     return (
//         <>
//             <Header>Contact</Header>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("name")} placeholder="Your name..."/>
//                 {errors.name && <span>{errors.name.message}</span>}

//                 <input {...register("age")} placeholder="Your age..."/>
//                 {errors.age && <span>{errors.age.message}</span>}

//                 <input {...register("website")} placeholder="Your website..."/>
//                 {errors.website && <span>{errors.website.message}</span>}

//                 <button>Send</button>
//             </form>
//         </>
//     );
// }

// export default Contact;