import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";



import "./styles.css";

const RadioOptions = ({ options, titulo, setFunction, validation}) => {
  return (
    <>
    <div className="radio-container">
      <FormControl className="radio-form">
        <FormLabel
        className="title"
        >{titulo}</FormLabel>
        <RadioGroup
        className="radio-group"
        >
          {options.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <FormControlLabel
              value={item}
              onChange={validation === item ? () => setFunction(item) : null}
              control={
                <Radio
                 />
              }
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>
      
      </div>
    </>
  );
};

export default RadioOptions;
