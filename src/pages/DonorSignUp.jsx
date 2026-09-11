import { useState } from "react";
import Navbar from "../components/NavBar";
import RegistrationTabs from "../components/RegistrationTabs";

function EyeIcon({ open }) {
  return open ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M2.5 12C4.2 7.8 7.8 5.5 12 5.5S19.8 7.8 21.5 12C19.8 16.2 16.2 18.5 12 18.5S4.2 16.2 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M3 3L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.6 5.7C11.05 5.57 11.52 5.5 12 5.5C16.2 5.5 19.8 7.8 21.5 12C20.86 13.58 19.94 14.92 18.8 15.95"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.15 6.15C4.57 6.15 3.32 9.34 2.5 12C4.2 16.2 7.8 18.5 12 18.5C13.5 18.5 14.9 18.18 16.15 17.62"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.88 9.88C9.32 10.44 9 11.2 9 12C9 13.66 10.34 15 12 15C12.8 15 13.56 14.68 14.12 14.12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldError({ error }) {
  if (!error) return null;

  return (
    <p className="mt-2 px-[34.49px] font-['Montserrat'] text-[12px] font-medium text-red-600 max-md:px-4">
      {error}
    </p>
  );
}

function DonorSignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cityState: "",
    phone: "",
    dateOfBirth: "",
    bloodType: "",
    gender: "",
    availability: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => {
      if (!previous[field]) return previous;

      const updatedErrors = { ...previous };
      delete updatedErrors[field];

      return updatedErrors;
    });
  };

  const handleDateOfBirthChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 8);

    let formattedValue = digits;

    if (digits.length > 2 && digits.length <= 4) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else if (digits.length > 4) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(
        2,
        4
      )}/${digits.slice(4)}`;
    }

    updateField("dateOfBirth", formattedValue);
  };

  const passwordRequirements = [
    {
      label: "At least 8 characters",
      valid: formData.password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(formData.password),
    },
    {
      label: "One lowercase letter",
      valid: /[a-z]/.test(formData.password),
    },
    {
      label: "One number",
      valid: /\d/.test(formData.password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(formData.password),
    },
  ];

  const passwordScore = passwordRequirements.filter(
    (requirement) => requirement.valid
  ).length;

  let passwordStrength = "";

  if (formData.password) {
    if (passwordScore <= 2) {
      passwordStrength = "Weak";
    } else if (passwordScore <= 4) {
      passwordStrength = "Medium";
    } else {
      passwordStrength = "Strong";
    }
  }

  const getStrengthColor = () => {
    if (passwordStrength === "Weak") return "text-red-600";
    if (passwordStrength === "Medium") return "text-orange-500";
    if (passwordStrength === "Strong") return "text-green-600";

    return "text-gray-500";
  };

  const isValidDate = (value) => {
    const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

    if (!match) return false;

    const [, dayString, monthString, yearString] = match;

    const day = Number(dayString);
    const month = Number(monthString);
    const year = Number(yearString);

    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const getAge = (dateOfBirth) => {
  const match = dateOfBirth.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) return null;

  const [, dayString, monthString, yearString] = match;

  const day = Number(dayString);
  const month = Number(monthString);
  const year = Number(yearString);

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!formData.cityState.trim()) {
      validationErrors.cityState = "City / State is required.";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required.";
    } else if (phoneDigits.length < 10) {
      validationErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.dateOfBirth) {
    validationErrors.dateOfBirth = "Date of birth is required.";
    } else if (!isValidDate(formData.dateOfBirth)) {
    validationErrors.dateOfBirth =
        "Enter a valid date in DD/MM/YYYY format.";
    } else {
    const age = getAge(formData.dateOfBirth);

    if (age < 18) {
        validationErrors.dateOfBirth =
        "You must be at least 18 years old to donate.";
    } else if (age > 65) {
        validationErrors.dateOfBirth =
        "You must be 65 years old or younger to donate.";
    }
    }

    if (!formData.bloodType) {
      validationErrors.bloodType = "Blood type is required.";
    }

    if (!formData.gender) {
      validationErrors.gender = "Gender is required.";
    }

    if (!formData.availability) {
      validationErrors.availability =
        "Please select your availability to donate.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      validationErrors.terms =
        "You must agree to the Terms of Service and Privacy Policy.";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    const firstErrorField = Object.keys(validationErrors)[0];

    if (firstErrorField) {
      requestAnimationFrame(() => {
        const element = document.getElementById(firstErrorField);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          element.focus();
        }
      });

      return;
    }

    // Backend registration will be connected here
    // once the authentication API contract is provided.
    console.log("Donor registration form is valid:", formData);
  };

  const inputClass = (field) => `
    h-[60.5px]
    w-full
    rounded-[30.25px]
    border-[3.03px]
    bg-white
    px-[34.49px]
    font-['Montserrat']
    text-[14.52px]
    font-semibold
    outline-none
    transition-colors

    max-md:h-[52px]
    max-md:rounded-full
    max-md:border-[2px]
    max-md:px-4
    max-md:text-[14px]

    ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[#F5F0F0] focus:border-[#BC1010]"
    }
  `;

  const selectClass = (field) => `
    h-[60.5px]
    w-full
    appearance-none
    rounded-[30.25px]
    border-[3.03px]
    bg-white
    px-[34.49px]
    font-['Montserrat']
    text-[14.52px]
    font-semibold
    outline-none
    transition-colors

    max-md:h-[52px]
    max-md:rounded-full
    max-md:border-[2px]
    max-md:px-4
    max-md:text-[14px]

    ${formData[field] ? "text-black" : "text-[#B5B8BD]"}

    ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[#F5F0F0] focus:border-[#BC1010]"
    }
  `;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar authPage />

        {/* Mobile + Tablet Signup Banner */}
        <section className="w-full pt-[64px] lg:hidden">
        <img
            src="/signup.png"
            alt=""
            aria-hidden="true"
            className="
            block
            h-[305px]
            w-full
            object-cover
            object-center
            md:h-[420px]
            "
        />
        </section>

<div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
  {/* Desktop Left Visual */}
  <section className="relative hidden min-h-screen w-1/2 overflow-hidden lg:block">
    <img
      src="/signup.png"
      alt=""
      aria-hidden="true"
      className="absolute left-[11px] top-[60px] h-auto w-[741px] max-w-none"
    />
  </section>
        {/* Right Form */}
<section
  className="
    flex
    min-h-screen
    w-full
    min-w-0
    items-start
    justify-center
    px-4
    pb-12
    pt-10
    sm:px-6
    sm:pt-12
    lg:w-1/2
    lg:px-12
    lg:pb-12
    lg:pt-[193px]
  "
>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full min-w-0 max-w-[542px]"
          >
            <div
              className="
                w-full
                min-w-0
                rounded-[24.2px]
                bg-white
                p-0

                sm:p-2

                lg:p-[29px]
              "
            >
              <div
                className="
                  flex
                  w-full
                  min-w-0
                  flex-col
                  gap-[32px]

                  sm:gap-[40px]

                  lg:gap-[48px]
                "
              >
                {/* Header */}
                <div className="flex w-[285.57px] flex-col gap-[15.13px] max-md:w-full max-md:gap-3">
                  <h1
                    className="
                      m-0
                      font-['Montserrat']
                      text-[26.48px]
                      font-bold
                      leading-[100%]
                      text-black

                      max-md:text-[24px]
                    "
                  >
                    Create Your Account
                  </h1>

                  <p
                    className="
                      m-0
                      font-['Montserrat']
                      text-[14.71px]
                      font-medium
                      leading-[100%]
                      text-[#96999E]
                    "
                  >
                    Join the network. Save lives.
                  </p>
                </div>

                {/* Registration Tabs */}
                <RegistrationTabs/>

                {/* Form Fields */}
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    gap-[27px]

                    max-md:gap-[24px]
                  "
                >
                  {/* First Name / Last Name */}
                  <div className="grid grid-cols-2 gap-[14.52px] max-md:gap-[12px]">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        First Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(event) =>
                          updateField("firstName", event.target.value)
                        }
                        className={inputClass("firstName")}
                        placeholder="Olamide"
                      />

                      <FieldError error={errors.firstName} />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Last Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(event) =>
                          updateField("lastName", event.target.value)
                        }
                        className={inputClass("lastName")}
                        placeholder="Adebayo"
                      />

                      <FieldError error={errors.lastName} />
                    </div>
                  </div>

                  {/* Email / City & State */}
                  <div className="grid grid-cols-2 gap-[14.52px] max-md:gap-[12px]">
                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        className={inputClass("email")}
                        placeholder="Enter here"
                      />

                      <FieldError error={errors.email} />
                    </div>

                    <div>
                      <label
                        htmlFor="cityState"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        City / State <span className="text-red-600">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="cityState"
                          value={formData.cityState}
                          onChange={(event) =>
                            updateField("cityState", event.target.value)
                          }
                          className={selectClass("cityState")}
                        >
                          <option value="">Select...</option>
                          <option value="Lagos">
                            Lagos
                          </option>
                          <option value="Ogun">
                            Ogun
                          </option>
                        </select>

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="
                            pointer-events-none
                            absolute
                            right-[30px]
                            top-1/2
                            h-5
                            w-5
                            -translate-y-1/2
                            text-[#96999E]

                            max-md:right-3
                            max-md:h-4
                            max-md:w-4
                          "
                          aria-hidden="true"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <FieldError error={errors.cityState} />
                    </div>
                  </div>

                  {/* Phone / Date of Birth */}
                  <div className="grid grid-cols-2 gap-[14.52px] max-md:gap-[12px]">
                    <div>
                      <label
                        htmlFor="phone"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        className={inputClass("phone")}
                        placeholder="+234 812 463 8276"
                      />

                      <FieldError error={errors.phone} />
                    </div>

                    <div>
                      <label
                        htmlFor="dateOfBirth"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Date of Birth <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="dateOfBirth"
                        type="text"
                        inputMode="numeric"
                        value={formData.dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        maxLength={10}
                        className={inputClass("dateOfBirth")}
                        placeholder="mm/dd/yyyy"
                      />

                      <FieldError error={errors.dateOfBirth} />
                    </div>
                  </div>

                  {/* Blood Type / Gender */}
                  <div className="grid grid-cols-2 gap-[14.52px] max-md:gap-[12px]">
                    <div>
                      <label
                        htmlFor="bloodType"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Blood Type <span className="text-red-600">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="bloodType"
                          value={formData.bloodType}
                          onChange={(event) =>
                            updateField("bloodType", event.target.value)
                          }
                          className={selectClass("bloodType")}
                        >
                          <option value="">Select...</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="
                            pointer-events-none
                            absolute
                            right-[30px]
                            top-1/2
                            h-5
                            w-5
                            -translate-y-1/2
                            text-[#96999E]

                            max-md:right-3
                            max-md:h-4
                            max-md:w-4
                          "
                          aria-hidden="true"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <FieldError error={errors.bloodType} />
                    </div>

                    <div>
                      <label
                        htmlFor="gender"
                        className="
                          mb-[14.52px]
                          block
                          font-['Montserrat']
                          text-[14.52px]
                          font-semibold
                          leading-[100%]
                          text-black

                          max-md:mb-[10px]
                          max-md:text-[12px]
                        "
                      >
                        Gender <span className="text-red-600">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="gender"
                          value={formData.gender}
                          onChange={(event) =>
                            updateField("gender", event.target.value)
                          }
                          className={selectClass("gender")}
                        >
                          <option value="">Select...</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="
                            pointer-events-none
                            absolute
                            right-[30px]
                            top-1/2
                            h-5
                            w-5
                            -translate-y-1/2
                            text-[#96999E]

                            max-md:right-3
                            max-md:h-4
                            max-md:w-4
                          "
                          aria-hidden="true"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <FieldError error={errors.gender} />
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <label
                      htmlFor="availability"
                      className="
                        mb-[14.52px]
                        block
                        font-['Montserrat']
                        text-[14.52px]
                        font-semibold
                        leading-[100%]
                        text-black

                        max-md:mb-[10px]
                        max-md:text-[12px]
                      "
                    >
                      Are You Available To Donate?{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="availability"
                        value={formData.availability}
                        onChange={(event) =>
                          updateField("availability", event.target.value)
                        }
                        className={selectClass("availability")}
                      >
                        <option value="">Select...</option>
                        <option value="Yes, I am available">
                          Yes, I am available
                        </option>
                        <option value="No, I am not available">
                          No, I am not available
                        </option>
                      </select>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="
                          pointer-events-none
                          absolute
                          right-[30px]
                          top-1/2
                          h-5
                          w-5
                          -translate-y-1/2
                          text-[#96999E]

                          max-md:right-3
                          max-md:h-4
                          max-md:w-4
                        "
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <FieldError error={errors.availability} />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="
                        mb-[14.52px]
                        block
                        font-['Montserrat']
                        text-[14.52px]
                        font-semibold
                        leading-[100%]
                        text-black

                        max-md:mb-[10px]
                        max-md:text-[12px]
                      "
                    >
                      Password <span className="text-red-600">*</span>
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(event) =>
                          updateField("password", event.target.value)
                        }
                        className={`${inputClass(
                          "password"
                        )} pr-[70px] max-md:pr-[52px]`}
                        placeholder="Create a strong password"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((previous) => !previous)
                        }
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="
                          absolute
                          right-[28px]
                          top-1/2
                          -translate-y-1/2
                          text-[#96999E]
                          transition-colors
                          hover:text-[#BC1010]

                          max-md:right-4
                        "
                      >
                        <EyeIcon open={showPassword} />
                      </button>
                    </div>

                    {formData.password && (
                      <div
                        className="mt-3 px-[34.49px] max-md:px-4"
                        aria-live="polite"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-['Montserrat'] text-[12px] font-medium text-[#96999E]">
                            Password strength
                          </span>

                          <span
                            className={`font-['Montserrat'] text-[12px] font-semibold ${getStrengthColor()}`}
                          >
                            {passwordStrength}
                          </span>
                        </div>

                        <div className="mb-3 flex gap-1">
                          {[1, 2, 3].map((bar) => {
                            const isActive =
                              (passwordStrength === "Weak" && bar === 1) ||
                              (passwordStrength === "Medium" && bar <= 2) ||
                              (passwordStrength === "Strong" && bar <= 3);

                            let barColor = "bg-[#E8E8E8]";

                            if (isActive) {
                              if (passwordStrength === "Weak") {
                                barColor = "bg-red-500";
                              } else if (passwordStrength === "Medium") {
                                barColor = "bg-orange-500";
                              } else {
                                barColor = "bg-green-500";
                              }
                            }

                            return (
                              <div
                                key={bar}
                                className={`h-[4px] flex-1 rounded-full ${barColor}`}
                              />
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 max-md:grid-cols-1">
                          {passwordRequirements.map((requirement) => (
                            <span
                              key={requirement.label}
                              className={`font-['Montserrat'] text-[11px] font-medium ${
                                requirement.valid
                                  ? "text-green-600"
                                  : "text-[#96999E]"
                              }`}
                            >
                              {requirement.valid ? "✓" : "○"}{" "}
                              {requirement.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <FieldError error={errors.password} />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="
                        mb-[14.52px]
                        block
                        font-['Montserrat']
                        text-[14.52px]
                        font-semibold
                        leading-[100%]
                        text-black

                        max-md:mb-[10px]
                        max-md:text-[12px]
                      "
                    >
                      Confirm Password{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(event) =>
                          updateField(
                            "confirmPassword",
                            event.target.value
                          )
                        }
                        className={`${inputClass(
                          "confirmPassword"
                        )} pr-[70px] max-md:pr-[52px]`}
                        placeholder="Re-enter password"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            (previous) => !previous
                          )
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="
                          absolute
                          right-[28px]
                          top-1/2
                          -translate-y-1/2
                          text-[#96999E]
                          transition-colors
                          hover:text-[#BC1010]

                          max-md:right-4
                        "
                      >
                        <EyeIcon open={showConfirmPassword} />
                      </button>
                    </div>

                    {formData.confirmPassword && (
                      <p
                        aria-live="polite"
                        className={`mt-2 px-[34.49px] font-['Montserrat'] text-[12px] font-medium max-md:px-4 ${
                          formData.password === formData.confirmPassword
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {formData.password === formData.confirmPassword
                          ? "✓ Passwords match"
                          : "Passwords do not match"}
                      </p>
                    )}

                    <FieldError error={errors.confirmPassword} />
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <div className="flex w-full items-start gap-[19.97px] max-md:gap-3">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(event) =>
                        updateField("terms", event.target.checked)
                      }
                      className="
                        mt-1
                        h-[30.25px]
                        w-[30.25px]
                        shrink-0
                        cursor-pointer
                        appearance-none
                        rounded-full
                        border-[3.03px]
                        border-[#c4c4c4]
                        bg-white
                        checked:border-[#BC1010]
                        checked:bg-[#BC1010]
                        max-md:h-[24px]
                        max-md:w-[24px]
                        max-md:border-[2px]
                      "
                    />

                    <label
                      htmlFor="terms"
                      className="
                        font-['Montserrat']
                        text-[14.52px]
                        font-medium
                        leading-[122%]
                        text-[#96999E]

                        max-md:text-[11px]
                        max-md:leading-[125%]
                      "
                    >
                      By creating an account, you agree to our{" "}
                      <a
                        href="/#terms"
                        className="font-semibold text-[#BC1010] underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/#privacy"
                        className="font-semibold text-[#BC1010] underline"
                      >
                        Privacy Policy
                      </a>
                      , confirming that you are between 18-65 years old.
                    </label>
                  </div>

                  <FieldError error={errors.terms} />
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="
                    flex
                    h-[60.5px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[30.25px]
                    border-[3.03px]
                    border-[#F5F0F0]
                    bg-[#BC1010]
                    px-[20px]
                    font-['Montserrat']
                    text-[14.52px]
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#a80e0e]

                    max-md:h-[52px]
                    max-md:rounded-full
                    max-md:border-[2px]
                    max-md:text-[12px]
                  "
                >
                  <span>Register as Donor</span>
                  <span aria-hidden="true" className="text-[18px]">
                    →
                  </span>
                </button>

                {/* Login */}
                <p
                  className="
                    m-0
                    text-center
                    font-['Montserrat']
                    text-[15.13px]
                    font-semibold
                    leading-[100%]
                    text-[#96999E]

                    max-md:text-[12px]
                  "
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-[#BC1010] underline"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default DonorSignUp;