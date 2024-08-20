// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// // Function for each TextField variant
// export const RequiredTextField = ({ variant }) => (
//   <TextField
//     required
//     id={`required-${variant}`}
//     label="Required"
//     defaultValue="Hello World"
//     variant={variant}
//   />
// );

// const DisabledTextField = ({ variant }) => (
//   <TextField
//     disabled
//     id={`disabled-${variant}`}
//     label="Disabled"
//     defaultValue="Hello World"
//     variant={variant}
//   />
// );

// const PasswordTextField = ({ variant }) => (
//   <TextField
//     id={`password-input-${variant}`}
//     label="Password"
//     type="password"
//     autoComplete="current-password"
//     variant={variant}
//   />
// );

// const ReadOnlyTextField = ({ variant }) => (
//   <TextField
//     id={`read-only-input-${variant}`}
//     label="Read Only"
//     defaultValue="Hello World"
//     InputProps={{
//       readOnly: true,
//     }}
//     variant={variant}
//   />
// );

// const NumberTextField = ({ variant }) => (
//   <TextField
//     id={`number-${variant}`}
//     label="Number"
//     type="number"
//     InputLabelProps={{
//       shrink: true,
//     }}
//     variant={variant}
//   />
// );

// const SearchTextField = ({ variant }) => (
//   <TextField
//     id={`search-${variant}`}
//     label="Search field"
//     type="search"
//     variant={variant}
//   />
// );

// export const HelperTextField = ({ variant }) => (
//   <TextField
//     id={`helperText-${variant}`}
//     label="Helper text"
//     defaultValue="Default Value"
//     // helperText="Some important text"
//     variant={variant}
//   />
// );

// export default function FormPropsTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <RequiredTextField variant="outlined" />
//         <DisabledTextField variant="outlined" />
//         <PasswordTextField variant="outlined" />
//         <ReadOnlyTextField variant="outlined" />
//         <NumberTextField variant="outlined" />
//         <SearchTextField variant="outlined" />
//         <HelperTextField variant="outlined" />
//       </div>
//       <div>
//         <RequiredTextField variant="filled" />
//         <DisabledTextField variant="filled" />
//         <PasswordTextField variant="filled" />
//         <ReadOnlyTextField variant="filled" />
//         <NumberTextField variant="filled" />
//         <SearchTextField variant="filled" />
//         <HelperTextField variant="filled" />
//       </div>
//       <div>
//         <RequiredTextField variant="standard" />
//         <DisabledTextField variant="standard" />
//         <PasswordTextField variant="standard" />
//         <ReadOnlyTextField variant="standard" />
//         <NumberTextField variant="standard" />
//         <SearchTextField variant="standard" />
//         <HelperTextField variant="standard" />
//       </div>
//     </Box>
//   );
// }
