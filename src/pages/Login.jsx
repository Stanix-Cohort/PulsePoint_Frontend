import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

function EyeIcon({ open }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path
            d="M2.5 12C4.2 8.2 7.5 6 12 6C16.5 6 19.8 8.2 21.5 12C19.8 15.8 16.5 18 12 18C7.5 18 4.2 15.8 2.5 12Z"
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
        </>
      ) : (
        <>
          <path
            d="M3 3L21 21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.6 6.2C11.05 6.07 11.52 6 12 6C16.5 6 19.8 8.2 21.5 12C20.82 13.52 19.87 14.76 18.7 15.69"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1 8.1C4.63 9.04 3.42 10.35 2.5 12C4.2 15.8 7.5 18 12 18C13.1 18 14.14 17.83 15.1 17.51"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

function FieldError({ message }) {
  if (!message) return null;

  return (
    <p
      className="
        mt-2
        px-4
        font-['Montserrat']
        text-[11px]
        font-medium
        text-red-500
        sm:text-[12px]
      "
    >
      {message}
    </p>
  );
}

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Backend login integration will be added once the API contract is available.
    console.log("Login form submitted:", formData);
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

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar authPage />

      {/* Mobile + Tablet Hero */}
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
        {/* Desktop Hero */}
        <section className="relative hidden min-h-screen w-1/2 overflow-hidden lg:block">
          <img
            src="/signup.png"
            alt=""
            aria-hidden="true"
            className="
              absolute
              left-[11px]
              top-[60px]
              h-auto
              w-[741px]
              max-w-none
            "
          />
        </section>

        {/* Login Form */}
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
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    gap-[15.13px]
                    max-md:gap-3
                  "
                >
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
                    Welcome Back
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
                    Sign in to access your PulsePoint dashboard.
                  </p>
                </div>

                {/* Form Fields */}
                <div
                  className="
                    flex
                    w-full
                    min-w-0
                    flex-col
                    gap-[27px]
                    max-md:gap-[24px]
                  "
                >
                  {/* Email */}
                  <div className="w-full min-w-0">
                    <label
                      htmlFor="email"
                      className="
                        mb-[14.52px]
                        block
                        font-['Montserrat']
                        text-[14.52px]
                        font-semibold
                        text-black
                        max-md:mb-2.5
                        max-md:text-[12px]
                      "
                    >
                      Email Address*
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="You@gmail.com"
                      className={inputClass("email")}
                    />

                    <FieldError message={errors.email} />
                  </div>

                  {/* Password */}
                  <div className="w-full min-w-0">
                    <label
                      htmlFor="password"
                      className="
                        mb-[14.52px]
                        block
                        font-['Montserrat']
                        text-[14.52px]
                        font-semibold
                        text-black
                        max-md:mb-2.5
                        max-md:text-[12px]
                      "
                    >
                      Password*
                    </label>

                    <div className="relative w-full">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={(event) =>
                          updateField("password", event.target.value)
                        }
                        placeholder="Your Password"
                        className={`${inputClass("password")} pr-[70px]`}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((previous) => !previous)}
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="
                          absolute
                          right-[24px]
                          top-1/2
                          flex
                          -translate-y-1/2
                          items-center
                          justify-center
                          text-[#96999E]
                          transition-colors
                          hover:text-[#1A1A1A]
                          max-md:right-4
                        "
                      >
                        <EyeIcon open={showPassword} />
                      </button>
                    </div>

                    <FieldError message={errors.password} />
                  </div>

                  {/* Submit */}
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
                    <span>Log in</span>
                    <span
                      aria-hidden="true"
                      className="text-[18px]"
                    >
                      →
                    </span>
                  </button>
                </div>

                {/* Footer */}
                <p
                  className="
                    m-0
                    text-center
                    font-['Montserrat']
                    text-[13px]
                    font-medium
                    text-[#96999E]
                    max-md:text-[12px]
                  "
                >
                  Don't have an account?{" "}
                  <Link
                    to="/signup/donor"
                    className="font-bold text-[#BC1010] hover:underline"
                  >
                    Register
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

export default Login;