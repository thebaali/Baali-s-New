import { useState } from "react";
import FormInput from "../Lookby/forminput/FormInput";
import "../Lookby/Reg.css";

const Reg = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    passsword: "",
    confrimpasssword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "ConfrimPassword",
      type: "password",
      placeholder: "ConfrimPassword",
      label: "ConfrimPassword",
    },
  ];

 

  const handleSubmit = (e)=>  {
    e.preventDefault();
  };

  const onChange =(e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }
  console.log(values);
  return (
    <div className="reg">
      <form onSubmit={handleSubmit}>
        {inputs.map(input=>(
            <FormInput 
            key={input.id}
             {...input} 
             defaultValue={values[input.name]}
             onChange={onChange}     

            />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Reg;
