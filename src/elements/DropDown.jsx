import  React,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({data,width,placeholder,callback}) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    callback(data[event.target.value])
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120,width:{width} }} size="small">
      <InputLabel id="select-smal">{placeholder}</InputLabel>
      <Select
        labelId="select-smal"
        id="select-smal"
        value={age}
        label={placeholder}
        onChange={handleChange}
      >
        {data.map((item,index)=>(
        <MenuItem key={index} value={index}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
