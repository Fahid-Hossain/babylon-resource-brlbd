import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./Forms.css";
import Select from "react-select";


const Forms = () => {
//   const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { control, handleSubmit,register } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-dark">First Name</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        {/* <label className="text-dark">Last Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
        <label className="text-dark">Company Name</label>
        <input {...register("Company Name", { pattern: /^[A-Za-z]+$/i })} />
        <label className="text-dark">Business Email</label>
        <input type={"email"} {...register("email")} />
        <label className="text-dark">Phone</label>
        <input
          type="number"
          {...register("phone", { minLength: 11, maxLength: 14 })}
        />
        
        <label className="text-dark">Select Country</label>
        <Controller
        name="select"
        control={control}
        render={({ field }) => <Select
          {...field} 
          options={[
            { value: "Bangladesh", label: "Bangladesh" },
            { value: "India", label: "India" },
            { value: "Nepal", label: "Nepal" }
          ]} 
        />}
      />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
