import { TextField } from "@mui/material";

export default function DataField(props: DataFieldProps) {
  const gridColumn = `span ${props.span || 1}`;
  return (
    <div style={{ gridColumn }}>
      <TextField
        value={props.value}
        fullWidth
        required={props.required}
        aria-required
        label={props.label}
        variant="standard"
        sx={{
          "& .MuiFormLabel-root": {
            left: "16px",
            fontWeight: 500,
            fontSize: "13px",
            fontFamily: "'Poppins', sans-serif",
            color: "#adadad",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#1976d2",
          },
          "& .MuiInputBase-input": {
            fontWeight: 600,
            paddingLeft: "10px",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
          },
        }}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
}

interface DataFieldProps {
  span?: number;
  required?: boolean;
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  name?: string;
}
