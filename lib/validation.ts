/**
 * Form Validation Utilities
 * Provides reusable validation functions for email, password, and other form fields
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
 */
export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validate password strength with detailed feedback
 */
export const validatePasswordStrength = (password: string): {
  isValid: boolean;
  feedback: string[];
} => {
  const feedback: string[] = [];

  if (password.length < 8) {
    feedback.push("Password must be at least 8 characters long");
  }
  if (!/[A-Z]/.test(password)) {
    feedback.push("Password must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    feedback.push("Password must contain at least one lowercase letter");
  }
  if (!/\d/.test(password)) {
    feedback.push("Password must contain at least one number");
  }
  if (!/[@$!%*?&]/.test(password)) {
    feedback.push("Password must contain at least one special character (@$!%*?&)");
  }

  return {
    isValid: feedback.length === 0,
    feedback,
  };
};

/**
 * Validate name field
 */
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

/**
 * Login form validation
 */
export const validateLoginForm = (email: string, password: string): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!email) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!validateEmail(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  if (!password) {
    errors.push({ field: "password", message: "Password is required" });
  } else if (password.length < 6) {
    errors.push({ field: "password", message: "Password must be at least 6 characters" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Signup form validation
 */
export const validateSignupForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!name) {
    errors.push({ field: "name", message: "Full name is required" });
  } else if (!validateName(name)) {
    errors.push({ field: "name", message: "Name must be between 2 and 50 characters" });
  }

  if (!email) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!validateEmail(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  if (!password) {
    errors.push({ field: "password", message: "Password is required" });
  } else if (!validatePassword(password)) {
    errors.push({
      field: "password",
      message: "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    });
  }

  if (!confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Please confirm your password" });
  } else if (password !== confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Passwords do not match" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
