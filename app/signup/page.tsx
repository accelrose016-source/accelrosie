"use client";

import Link from "next/link";
import { useState } from "react";
import { validateSignupForm, validatePasswordStrength } from "@/lib/validation";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    church: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFeedback, setPasswordFeedback] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Show password strength feedback
    if (name === "password") {
      const strength = validatePasswordStrength(value);
      setPasswordFeedback(strength.feedback);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    // Validate form
    const validation = validateSignupForm(
      formData.name,
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    if (!validation.isValid) {
      const errorMap: Record<string, string> = {};
      validation.errors.forEach((error) => {
        errorMap[error.field] = error.message;
      });
      setErrors(errorMap);
      return;
    }

    // Simulate API call
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccessMessage("Account created successfully! Redirecting to login...");
      setFormData({
        name: "",
        email: "",
        church: "",
        password: "",
        confirmPassword: "",
      });
      setPasswordFeedback([]);
      // In a real app, you would redirect to login here
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 dark:from-zinc-900 dark:to-zinc-800 px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              Join Accel Rose's Garden
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Create an account to browse and order beautiful flowers
            </p>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-pink-50 dark:bg-rose-900/20 border border-rose-300 dark:border-rose-800 rounded-lg">
              <p className="text-rose-700 dark:text-rose-200 font-medium">{successMessage}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name
                    ? "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/10"
                    : "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700"
                } text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email
                    ? "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/10"
                    : "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700"
                } text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Church Field */}
            <div>
              <label htmlFor="church" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                How did you hear about us?
              </label>
              <input
                type="text"
                id="church"
                name="church"
                value={formData.church}
                onChange={handleChange}
                placeholder="Friend, Social Media, etc."
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.church
                    ? "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/10"
                    : "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700"
                } text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors`}
              />
              {errors.church && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.church}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-900 dark:text-white mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.password
                      ? "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/10"
                      : "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700"
                  } text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M15.171 13.576l1.414 1.414a1 1 0 01-1.414 1.414l-1.415-1.414a4 4 0 01-5.656 0l-1.415 1.415a1 1 0 01-1.414-1.414l1.414-1.414A10.012 10.012 0 01.458 10C1.732 5.943 5.522 3 10 3c2.388 0 4.6.75 6.171 2.076z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Strength Feedback */}
              {formData.password && passwordFeedback.length > 0 && (
                <div className="mt-2 p-3 bg-pink-50 dark:bg-rose-900/20 border border-rose-300 dark:border-rose-800 rounded">
                  <p className="text-sm font-medium text-rose-900 dark:text-rose-200 mb-1">Password requirements:</p>
                  <ul className="text-xs text-rose-700 dark:text-rose-300 space-y-0.5">
                    {passwordFeedback.map((feedback, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="text-red-500">✗</span> {feedback}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {passwordFeedback.length === 0 && formData.password && (
                <div className="mt-2 p-3 bg-pink-50 dark:bg-rose-900/20 border border-rose-300 dark:border-rose-800 rounded">
                  <p className="text-sm font-medium text-rose-900 dark:text-rose-200 flex items-center gap-1">
                    <span className="text-rose-400">✓</span> Password is strong
                  </p>
                </div>
              )}

              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-zinc-900 dark:text-white mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.confirmPassword
                      ? "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/10"
                      : "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700"
                  } text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M15.171 13.576l1.414 1.414a1 1 0 01-1.414 1.414l-1.415-1.414a4 4 0 01-5.656 0l-1.415 1.415a1 1 0 01-1.414-1.414l1.414-1.414A10.012 10.012 0 01.458 10C1.732 5.943 5.522 3 10 3c2.388 0 4.6.75 6.171 2.076z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 disabled:bg-rose-300 disabled:cursor-not-allowed transition-colors font-medium mt-6"
            >
              {isSubmitting ? "Creating Account..." : "Register Now"}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              Already registered?{" "}
              <Link href="/login" className="text-rose-400 hover:text-rose-500 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}