import React, { FC, Dispatch } from "react";
import { Text, Box, Icon, Input, useBoolean } from "@chakra-ui/react";

import { FaEye as visibiltyButton } from "react-icons/fa";

import { Font, color } from "../../utils/constants";

import {
  PasswordTestResult,
  validatePassword,
} from "../../utils/Passwordvalidator";

interface PasswordComparisonProps {
  dispatch: React.Dispatch<any>;
  password: string;
  passwordConfirm: string;
}

const PasswordComparison: FC<PasswordComparisonProps> = ({
  dispatch,
  password,
  passwordConfirm,
}) => {
  const [visible, setVisible] = useBoolean();

  const allowSubmit = (
    dispatch: Dispatch<any>,
    msg: string,
    setDisabled: boolean
  ) => {
    dispatch({ payload: setDisabled, type: "isSubmitDisabled" });
    dispatch({ payload: msg, type: "resultMsg" });
  };

  // setting the password state & vaildate registiration , password
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "Password" });

    // Regex password vaildatior to check the password
    const passwordCheck: PasswordTestResult | undefined = validatePassword(
      e.target.value
    );
    if (passwordCheck && !passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true);
    } else allowSubmit(dispatch, "", false);
  };

  // confirming previous filled passwords
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "PasswordConfirm" });

    passwordsSame(passwordConfirm, e.target.value);
  };

  // password same to check if password and password confirmation are the same
  const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
    if (passwordVal !== passwordConfirmVal) {
      allowSubmit(dispatch, "Password don't match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };

  return (
    <Box p={3} alignItems="left">
      <Text
        fontWeight="extrabold"
        color="white"
        fontFamily={Font}
        textAlign="left"
      >
        Password
      </Text>

      <Box
        alignItems="left"
        justifyContent="baseline"
        rounded={"lg"}
        bgColor={color[2]}
      >
        <Input
          type={visible ? "text" : "password"}
          variant="filled"
          placeholder="At least 8 Characters"
          bgColor="transparent"
          color="white"
          fontWeight="bold"
          w="90%"
          fontFamily={Font}
          value={password}
          onChange={onChangePassword}
        />
        <Icon
          as={visibiltyButton}
          mt={0}
          textAlign="center"
          color={color[5]}
          fontSize="20px"
          _hover={{ color: "white" }}
          onClick={setVisible.toggle}
        />
      </Box>
      <Box p={3} alignItems="left">
        <Text
          fontWeight="extrabold"
          color="white"
          fontFamily={Font}
          textAlign="left"
        >
          Password Confirmation
        </Text>
        <Box
          alignItems="left"
          justifyContent="baseline"
          rounded={"lg"}
          bgColor={color[2]}
        >
          <Input
            type={visible ? "text" : "password"}
            variant="filled"
            placeholder="Password Confirmation"
            bgColor="transparent"
            color="white"
            fontWeight="bold"
            w="90%"
            fontFamily={Font}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <Icon
            as={visibiltyButton}
            mt={0}
            textAlign="center"
            color={color[5]}
            fontSize="20px"
            _hover={{ color: "white" }}
            onClick={setVisible.toggle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordComparison;
