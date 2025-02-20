import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import StandardInput from "@/_components/StandardInput";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import { isValidPhoneNumber } from "react-phone-number-input";

export interface UserInfoFormValues {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  state: string;
  town: string;
  postCode: string;
  phoneNumber: string;
  email: string;
}

const UserInfo: React.FC<{
  onValidate: (isValid: boolean, data: UserInfoFormValues) => void;
  onNext: () => void;
}> = ({ onValidate, onNext }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<UserInfoFormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      address: "",
      town: "",
      postCode: "",
      phoneNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: UserInfoFormValues) => {
    onValidate(isValid, data);
    if (isValid) {
      onNext();
    }
  };

  const handleNextClick = async () => {
    const valid = await trigger();
    if (valid) {
      onNext();
    }
  };

  const inputBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: "10px", lg: "20px" },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", lg: "20px", xl: "40px" },
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ...inputBox }}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="First Name"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="Last Name"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />
        </Box>

        <Box sx={{ ...inputBox }}>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="Country"
                error={!!errors.country}
                helperText={errors.country?.message}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="State"
                error={!!errors.state}
                helperText={errors.state?.message}
              />
            )}
          />
        </Box>
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address is required" }}
          render={({ field }) => (
            <StandardInput
              {...field}
              label="Address"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
        <Box sx={{ ...inputBox }}>
          <Controller
            name="town"
            control={control}
            rules={{ required: "Town/City is required" }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="Town / City"
                error={!!errors.town}
                helperText={errors.town?.message}
              />
            )}
          />
          <Controller
            name="postCode"
            control={control}
            rules={{
              required: "Postcode is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Postcode must be a number",
              },
            }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="Post Code"
                type="number"
                error={!!errors.postCode}
                helperText={errors.postCode?.message}
              />
            )}
          />
        </Box>
        <Box sx={{ ...inputBox, width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone number is required",
                validate: (value) => {
                  if (!value) return "Phone number is required";
                  if (!isValidPhoneNumber(value))
                    return "Please enter a valid phone number";
                  return true;
                },
              }}
              render={({ field }) => (
                <>
                  <PhoneInput
                    {...field}
                    placeholder="Enter phone number"
                    defaultCountry="GB"
                    international
                    countryCallingCodeEditable={false}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      border: `1px solid ${
                        errors.phoneNumber ? "red" : colorTheme.muddyMossGray
                      }`,
                      height: "55px",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  />
                  {errors.phoneNumber && (
                    <Typography
                      color="error"
                      sx={{ fontSize: fontSize.p6, mt: 1 }}
                    >
                      {errors.phoneNumber.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Box>
          {/* <Box sx={{ width: "100%", height: "55px" }}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone number is required",
                validate: (value) => {
                  console.log(value, isValidPhoneNumber(value));
                  return (
                    isValidPhoneNumber(value) ||
                    "Please enter a valid phone number"
                  );
                },
              }}
              render={({ field }) => (
                <>
                  <PhoneInput
                    {...field}
                    placeholder="Enter phone number"
                    defaultCountry="US"
                    international
                    countryCallingCodeEditable={false}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      border: `1px solid ${
                        errors.phoneNumber ? "red" : colorTheme.muddyMossGray
                      }`,
                      height: "55px",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  />
                  {errors.phoneNumber && (
                    <Typography
                      color="error"
                      sx={{ fontSize: fontSize.p6, mt: 1 }}
                    >
                      {errors.phoneNumber.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Box> */}

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <StandardInput
                {...field}
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  height: "100%",
                }}
              />
            )}
          />
        </Box>
        <Box sx={{ textAlign: "right", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UserInfo;
