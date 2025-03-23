import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAgency, setIsAgency] = useState("yes");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Store user details in local storage
    localStorage.setItem("userData", JSON.stringify(data));

    // Navigate to the login page after account creation
    navigate("/sign-in");
  };

  return (
    <div className="container">
      <p className="heading">
        Create your <br /> <span>PopX account</span>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* Full Name */}
        <div className="form-group">
          <label>
            Full Name <span className="star">*</span>
          </label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            placeholder="Enter your name"
          />
          {errors.fullName && (
            <p className="error">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>
            Phone Number <span className="star">*</span>
          </label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <p className="error">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label>
            Email Address <span className="star">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>
            Password <span className="star">*</span>
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            {...register("companyName")}
            placeholder="Enter your company name"
          />
        </div>

        {/* Are you an agency? */}
        <label>
          Are you an Agency? <span className="star">*</span>
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="yes"
              {...register("agency", { required: "Please select an option" })}
              checked={isAgency === "yes"}
              onChange={() => setIsAgency("yes")}
            />
            Yes
          </label>
          <label>
            <input
              className="rad"
              type="radio"
              value="no"
              {...register("agency", { required: "Please select an option" })}
              checked={isAgency === "no"}
              onChange={() => setIsAgency("no")}
            />
            No
          </label>
        </div>
        {errors.agency && <p className="error">{errors.agency.message}</p>}

        {/* Submit Button */}
        <button className="create" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
