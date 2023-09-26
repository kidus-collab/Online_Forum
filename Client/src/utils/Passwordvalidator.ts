/* 
 validate password strength when we register 
 uses Regular expression (RegEx)
*/

export interface PasswordTestResult {
  isValid: boolean;
  message: string;
}

export const validatePassword = (password: any) => {
  const strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const passwordTestResult: PasswordTestResult = {
    isValid: true,
    message: "",
  };

  if (!strongPassword.test(password)) {
    passwordTestResult.message =
      "Password must contain at least 1 special character, 1 capital letter, and 1 number";
    passwordTestResult.isValid = false;

    return passwordTestResult;
  }
};
