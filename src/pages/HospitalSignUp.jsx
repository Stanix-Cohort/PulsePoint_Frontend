import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function SelectArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="pointer-events-none absolute right-[30px] top-1/2 h-5 w-5 -translate-y-1/2 text-[#96999E] max-md:right-5"
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
  );
}

function HospitalSignUp() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    logo: null,
    officialEmail: "",
    licenseId: "",
    phone: "",
    state: "",
    address: "",
    contactName: "",
    contactRole: "",
    contactPhone: "",
    password: "",
    confirmPassword: "",
    authorization: false,
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

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

  const handleLogoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setLogoFile(file);
    setLogoPreview(previewUrl);

    updateField("logo", file);
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview("");

    updateField("logo", null);
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

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.hospitalName.trim()) {
      validationErrors.hospitalName =
        "Hospital / Facility name is required.";
    }

    if (!formData.officialEmail.trim()) {
      validationErrors.officialEmail = "Official email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.officialEmail)
    ) {
      validationErrors.officialEmail =
        "Enter a valid email address.";
    }

    if (!formData.licenseId.trim()) {
      validationErrors.licenseId = "License ID is required.";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required.";
    } else if (phoneDigits.length < 10) {
      validationErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.state) {
      validationErrors.state = "State is required.";
    }

    if (!formData.address.trim()) {
      validationErrors.address = "Hospital address is required.";
    }

    if (!formData.contactName.trim()) {
      validationErrors.contactName = "Contact name is required.";
    }

    if (!formData.contactRole.trim()) {
      validationErrors.contactRole = "Contact role is required.";
    }

    if (!formData.contactPhone.trim()) {
      validationErrors.contactPhone =
        "Contact phone number is required.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword =
        "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!formData.authorization) {
      validationErrors.authorization =
        "You must confirm the hospital authorization.";
    }

    if (!formData.terms) {
      validationErrors.terms =
        "You must agree to the Healthcare Partner and Privacy Policy.";
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
    console.log(
      "Hospital registration form is valid:",
      formData
    );
  };

  const inputClass = (field) => `
    h-[60.5px]
    w-full
    min-w-0
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
    max-md:px-[20px]
    max-md:text-[12px]

    ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[#F5F0F0] focus:border-[#BC1010]"
    }
  `;

  const selectClass = (field) => `
    h-[60.5px]
    w-full
    min-w-0
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
    max-md:px-[20px]
    max-md:pr-[50px]
    max-md:text-[12px]

    ${formData[field] ? "text-black" : "text-[#B5B8BD]"}

    ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[#F5F0F0] focus:border-[#BC1010]"
    }
  `;

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar authPage />

      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
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
                <RegistrationTabs />

                {/* Form Fields */}
                <div
                  className="
                    flex
                    w-full
                    min-w-0
                    flex-col
                    gap-[22px]

                    sm:gap-[24px]

                    lg:gap-[27px]
                  "
                >
                  {/* Hospital / Facility Name */}
                  <div className="min-w-0">
                    <label
                      htmlFor="hospitalName"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Hospital / Facility Name{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="hospitalName"
                      type="text"
                      value={formData.hospitalName}
                      onChange={(event) =>
                        updateField(
                          "hospitalName",
                          event.target.value
                        )
                      }
                      className={inputClass("hospitalName")}
                      placeholder="General Hospital"
                    />

                    <FieldError error={errors.hospitalName} />
                  </div>

                  {/* Hospital Logo */}
                  <div className="min-w-0">
                    <label
                      htmlFor="logo"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Hospital Logo{" "}
                      <span className="font-medium">
                        (Optional)
                      </span>
                    </label>

                    <div
                      className="
                        flex
                        h-[52px]
                        w-full
                        min-w-0
                        items-center
                        justify-between
                        gap-3
                        overflow-hidden
                        rounded-full
                        border-[2px]
                        border-dashed
                        border-[#F0E9E9]
                        px-4
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        text-[#444]

                        sm:h-[56px]
                        sm:text-[13px]

                        lg:h-[60.5px]
                        lg:rounded-[30.25px]
                        lg:text-[14.52px]
                      "
                    >
                      <label
                        htmlFor="logo"
                        className="
                          flex
                          min-w-0
                          flex-1
                          cursor-pointer
                          items-center
                          gap-3
                          overflow-hidden
                          md:pl-[18px]
                        "
                      >
                        {logoPreview ? (
                          <img
                            src={logoPreview}
                            alt="Hospital logo preview"
                            className="
                              h-[36px]
                              w-[36px]
                              shrink-0
                              rounded-full
                              border
                              border-[#F0E9E9]
                              object-cover

                              sm:h-[40px]
                              sm:w-[40px]

                              lg:h-[44px]
                              lg:w-[44px]
                            "
                          />
                        ) : (
                          <span className="shrink-0 text-[#96999E]">
                            Upload Image
                          </span>
                        )}

                        {logoFile && (
                          <span className="min-w-0 truncate text-[#444]">
                            {logoFile.name}
                          </span>
                        )}

                        {!logoFile && (
                          <span className="hidden" aria-hidden="true" >
                            Upload Image
                          </span>
                        )}
                      </label>

                      {logoFile ? (
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="
                            shrink-0
                            cursor-pointer
                            font-['Montserrat']
                            text-[11px]
                            font-semibold
                            text-[#BC1010]
                            underline

                            sm:text-[12px]

                            lg:text-[13px]
                          "
                        >
                          Remove
                        </button>
                      ) : (
                        <label
                          htmlFor="logo"
                          className="shrink-0 cursor-pointer"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="16"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            />
                            <circle
                              cx="8.5"
                              cy="9"
                              r="1.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M4.5 17L9 12.5L12.5 16L15 13.5L19.5 18"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </label>
                      )}

                      <input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="min-w-0">
                    <label
                      htmlFor="officialEmail"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Official Email{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="officialEmail"
                      type="email"
                      value={formData.officialEmail}
                      onChange={(event) =>
                        updateField(
                          "officialEmail",
                          event.target.value
                        )
                      }
                      className={inputClass("officialEmail")}
                      placeholder="olamideakin@gmail.com"
                    />

                    <FieldError error={errors.officialEmail} />
                  </div>

                  {/* License ID / Phone */}
                  <div className="grid min-w-0 grid-cols-2 gap-[10px] sm:gap-[14.52px]">
                    <div className="min-w-0">
                      <label
                        htmlFor="licenseId"
                        className="
                          mb-[10px]
                          block
                          font-['Montserrat']
                          text-[12px]
                          font-semibold
                          leading-[100%]
                          text-black

                          sm:mb-[12px]
                          sm:text-[13px]

                          lg:mb-[14.52px]
                          lg:text-[14.52px]
                        "
                      >
                        License ID{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="licenseId"
                        type="text"
                        value={formData.licenseId}
                        onChange={(event) =>
                          updateField(
                            "licenseId",
                            event.target.value
                          )
                        }
                        className={inputClass("licenseId")}
                        placeholder="CA-HSP-23765729"
                      />

                      <FieldError error={errors.licenseId} />
                    </div>

                    <div className="min-w-0">
                      <label
                        htmlFor="phone"
                        className="
                          mb-[10px]
                          block
                          font-['Montserrat']
                          text-[12px]
                          font-semibold
                          leading-[100%]
                          text-black

                          sm:mb-[12px]
                          sm:text-[13px]

                          lg:mb-[14.52px]
                          lg:text-[14.52px]
                        "
                      >
                        Phone Number{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                        className={inputClass("phone")}
                        placeholder="+234 812 463 8276"
                      />

                      <FieldError error={errors.phone} />
                    </div>
                  </div>

                  {/* State */}
                  <div className="min-w-0">
                    <label
                      htmlFor="state"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      State <span className="text-red-600">*</span>
                    </label>

                    <div className="relative min-w-0">
                      <select
                        id="state"
                        value={formData.state}
                        onChange={(event) =>
                          updateField(
                            "state",
                            event.target.value
                          )
                        }
                        className={selectClass("state")}
                      >
                        <option value="">Select</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Ogun">Ogun</option>
                      </select>

                      <SelectArrow />
                    </div>

                    <FieldError error={errors.state} />
                  </div>

                  {/* Hospital Address */}
                  <div className="min-w-0">
                    <label
                      htmlFor="address"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Hospital Address{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(event) =>
                        updateField(
                          "address",
                          event.target.value
                        )
                      }
                      className={inputClass("address")}
                      placeholder="Ave 1 Alen street 0001, Ondo City 2641"
                    />

                    <FieldError error={errors.address} />
                  </div>

                  {/* Contact Person */}
                  <div className="border-t border-[#EEEEEE] pt-[18px] sm:pt-[20px] lg:pt-[22px]">
                    <h2
                      className="
                        mb-[20px]
                        font-['Montserrat']
                        text-[15px]
                        font-bold
                        text-black

                        sm:mb-[24px]
                        sm:text-[16px]

                        lg:mb-[27px]
                      "
                    >
                      Contact Person
                    </h2>

                    {/* Name / Role */}
                    <div className="grid min-w-0 grid-cols-2 gap-[10px] sm:gap-[14.52px]">
                      <div className="min-w-0">
                        <label
                          htmlFor="contactName"
                          className="
                            mb-[10px]
                            block
                            font-['Montserrat']
                            text-[12px]
                            font-semibold
                            leading-[100%]
                            text-black

                            sm:mb-[12px]
                            sm:text-[13px]

                            lg:mb-[14.52px]
                            lg:text-[14.52px]
                          "
                        >
                          Name{" "}
                          <span className="text-red-600">*</span>
                        </label>

                        <input
                          id="contactName"
                          type="text"
                          value={formData.contactName}
                          onChange={(event) =>
                            updateField(
                              "contactName",
                              event.target.value
                            )
                          }
                          className={inputClass("contactName")}
                          placeholder="Enoch Isaac"
                        />

                        <FieldError
                          error={errors.contactName}
                        />
                      </div>

                      <div className="min-w-0">
                        <label
                          htmlFor="contactRole"
                          className="
                            mb-[10px]
                            block
                            font-['Montserrat']
                            text-[12px]
                            font-semibold
                            leading-[100%]
                            text-black

                            sm:mb-[12px]
                            sm:text-[13px]

                            lg:mb-[14.52px]
                            lg:text-[14.52px]
                          "
                        >
                          Role{" "}
                          <span className="text-red-600">*</span>
                        </label>

                        <input
                          id="contactRole"
                          type="text"
                          value={formData.contactRole}
                          onChange={(event) =>
                            updateField(
                              "contactRole",
                              event.target.value
                            )
                          }
                          className={inputClass("contactRole")}
                          placeholder="Enter Role"
                        />

                        <FieldError
                          error={errors.contactRole}
                        />
                      </div>
                    </div>

                    {/* Contact Phone */}
                    <div className="mt-[22px] sm:mt-[24px] lg:mt-[27px]">
                      <label
                        htmlFor="contactPhone"
                        className="
                          mb-[10px]
                          block
                          font-['Montserrat']
                          text-[12px]
                          font-semibold
                          leading-[100%]
                          text-black

                          sm:mb-[12px]
                          sm:text-[13px]

                          lg:mb-[14.52px]
                          lg:text-[14.52px]
                        "
                      >
                        Phone{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="contactPhone"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(event) =>
                          updateField(
                            "contactPhone",
                            event.target.value
                          )
                        }
                        className={inputClass("contactPhone")}
                        placeholder="Enter here"
                      />

                      <FieldError
                        error={errors.contactPhone}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="min-w-0">
                    <label
                      htmlFor="password"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Password{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <div className="relative min-w-0">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(event) =>
                          updateField(
                            "password",
                            event.target.value
                          )
                        }
                        className={`${inputClass(
                          "password"
                        )} pr-[60px] lg:pr-[70px]`}
                        placeholder="Create a strong password"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            (previous) => !previous
                          )
                        }
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="
                          absolute
                          right-[20px]
                          top-1/2
                          -translate-y-1/2
                          text-[#96999E]
                          hover:text-[#BC1010]

                          lg:right-[28px]
                        "
                      >
                        <EyeIcon open={showPassword} />
                      </button>
                    </div>

                    {formData.password && (
                      <div
                        className="
                          mt-3
                          px-4

                          lg:px-[34.49px]
                        "
                        aria-live="polite"
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className="font-['Montserrat'] text-[10px] font-medium text-[#96999E] sm:text-[11px] lg:text-[12px]">
                            Password strength
                          </span>

                          <span
                            className={`font-['Montserrat'] text-[10px] font-semibold sm:text-[11px] lg:text-[12px] ${getStrengthColor()}`}
                          >
                            {passwordStrength}
                          </span>
                        </div>

                        <div className="mb-3 flex gap-1">
                          {[1, 2, 3].map((bar) => {
                            const isActive =
                              (passwordStrength === "Weak" &&
                                bar === 1) ||
                              (passwordStrength === "Medium" &&
                                bar <= 2) ||
                              (passwordStrength === "Strong" &&
                                bar <= 3);

                            let barColor = "bg-[#E8E8E8]";

                            if (isActive) {
                              if (passwordStrength === "Weak") {
                                barColor = "bg-red-500";
                              } else if (
                                passwordStrength === "Medium"
                              ) {
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

                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-x-3">
                          {passwordRequirements.map(
                            (requirement) => (
                              <span
                                key={requirement.label}
                                className={`font-['Montserrat'] text-[9px] font-medium sm:text-[10px] lg:text-[11px] ${
                                  requirement.valid
                                    ? "text-green-600"
                                    : "text-[#96999E]"
                                }`}
                              >
                                {requirement.valid
                                  ? "✓"
                                  : "○"}{" "}
                                {requirement.label}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    <FieldError error={errors.password} />
                  </div>

                  {/* Confirm Password */}
                  <div className="min-w-0">
                    <label
                      htmlFor="confirmPassword"
                      className="
                        mb-[10px]
                        block
                        font-['Montserrat']
                        text-[12px]
                        font-semibold
                        leading-[100%]
                        text-black

                        sm:mb-[12px]
                        sm:text-[13px]

                        lg:mb-[14.52px]
                        lg:text-[14.52px]
                      "
                    >
                      Confirm Password{" "}
                      <span className="text-red-600">*</span>
                    </label>

                    <div className="relative min-w-0">
                      <input
                        id="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={formData.confirmPassword}
                        onChange={(event) =>
                          updateField(
                            "confirmPassword",
                            event.target.value
                          )
                        }
                        className={`${inputClass(
                          "confirmPassword"
                        )} pr-[60px] lg:pr-[70px]`}
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
                          right-[20px]
                          top-1/2
                          -translate-y-1/2
                          text-[#96999E]
                          hover:text-[#BC1010]

                          lg:right-[28px]
                        "
                      >
                        <EyeIcon
                          open={showConfirmPassword}
                        />
                      </button>
                    </div>

                    {formData.confirmPassword && (
                      <p
                        aria-live="polite"
                        className={`mt-2 px-4 font-['Montserrat'] text-[10px] font-medium sm:text-[11px] lg:px-[34.49px] lg:text-[12px] ${
                          formData.password ===
                          formData.confirmPassword
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {formData.password ===
                        formData.confirmPassword
                          ? "✓ Passwords match"
                          : "Passwords do not match"}
                      </p>
                    )}

                    <FieldError
                      error={errors.confirmPassword}
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="flex flex-col gap-[14px]">
                  {/* Authorization */}
                  <div className="flex items-start gap-[12px] sm:gap-[16px] lg:gap-[19.97px]">
                    <input
                      id="authorization"
                      type="checkbox"
                      checked={formData.authorization}
                      onChange={(event) =>
                        updateField(
                          "authorization",
                          event.target.checked
                        )
                      }
                      className="
                        mt-1
                        h-[24px]
                        w-[24px]
                        shrink-0
                        cursor-pointer
                        appearance-none
                        rounded-full
                        border-[2px]
                        border-[#c4c4c4]
                        bg-white
                        checked:border-[#BC1010]
                        checked:bg-[#BC1010]

                        sm:h-[27px]
                        sm:w-[27px]

                        lg:h-[30.25px]
                        lg:w-[30.25px]
                        lg:border-[3.03px]
                      "
                    />

                    <label
                      htmlFor="authorization"
                      className="
                        font-['Montserrat']
                        text-[11px]
                        font-medium
                        leading-[135%]
                        text-[#96999E]

                        sm:text-[12px]

                        lg:text-[14.52px]
                        lg:leading-[122%]
                      "
                    >
                      I confirm this hospital is licensed and
                      authorized to request blood donations.
                    </label>
                  </div>

                  <FieldError
                    error={errors.authorization}
                  />

                  {/* Terms */}
                  <div className="flex items-start gap-[12px] sm:gap-[16px] lg:gap-[19.97px]">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(event) =>
                        updateField(
                          "terms",
                          event.target.checked
                        )
                      }
                      className="
                        mt-1
                        h-[24px]
                        w-[24px]
                        shrink-0
                        cursor-pointer
                        appearance-none
                        rounded-full
                        border-[2px]
                        border-[#c4c4c4]
                        bg-white
                        checked:border-[#BC1010]
                        checked:bg-[#BC1010]

                        sm:h-[27px]
                        sm:w-[27px]

                        lg:h-[30.25px]
                        lg:w-[30.25px]
                        lg:border-[3.03px]
                      "
                    />

                    <label
                      htmlFor="terms"
                      className="
                        font-['Montserrat']
                        text-[11px]
                        font-medium
                        leading-[135%]
                        text-[#96999E]

                        sm:text-[12px]

                        lg:text-[14.52px]
                        lg:leading-[122%]
                      "
                    >
                      I agree to the PulsePoint{" "}
                      <a
                        href="/#healthcare-policy"
                        className="font-semibold text-[#BC1010] underline"
                      >
                        Healthcare Partner
                      </a>{" "}
                      and{" "}
                      <a
                        href="/#privacy"
                        className="font-semibold text-[#BC1010] underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  <FieldError error={errors.terms} />
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="
                    flex
                    h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border-[2px]
                    border-[#F5F0F0]
                    bg-[#BC1010]
                    px-5
                    font-['Montserrat']
                    text-[12px]
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#a80e0e]

                    sm:h-[56px]
                    sm:text-[13px]

                    lg:h-[60.5px]
                    lg:rounded-[30.25px]
                    lg:border-[3.03px]
                    lg:text-[14.52px]
                  "
                >
                  <span>Register as Hospital</span>

                  <span
                    aria-hidden="true"
                    className="text-[18px]"
                  >
                    →
                  </span>
                </button>

                {/* Login */}
                <p
                  className="
                    m-0
                    text-center
                    font-['Montserrat']
                    text-[12px]
                    font-semibold
                    leading-[120%]
                    text-[#96999E]

                    sm:text-[13px]

                    lg:text-[15.13px]
                    lg:leading-[100%]
                  "
                >
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#BC1010] underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default HospitalSignUp;