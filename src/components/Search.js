import { TextField } from "@mui/material"

const Search = (props) => {
    const {onChange, value} = props
    return <TextField label='search' type='search' value={value} onChange={onChange} sx={{mb: 5}} ></TextField>
}
export default Search