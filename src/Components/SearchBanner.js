import React, { useEffect, useRef, useLayoutEffect } from 'react'
import {
    MenuList, Table, TableCell, TextField,
    InputAdornment, TableHead, Menu, List, Paper,
    makeStyles, createTheme, Button, MenuItem,
    FormControl, InputLabel, Select, Checkbox, IconButton,
} from '@mui/material'
import { KeyboardArrowDown, CheckCircleOutline, Search, Close } from '@mui/icons-material';
import './SearchBanner.scss'
import { names } from '../constants'

const SearchBanner = () => {
    const [open, setOpen] = React.useState(null);


    const handleChangeMultiple = e => {
        console.log(e)
    };

    return (
        <div className='search-results banner column'>
            <h6 className='bold c-white text-left mb-5' >Search Courses and Programs</h6>
            <div className='d-flex maxh-50 bg-white'>
                <TextField placeholder='What do you want to learn'
                    className='input-search'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end" disablePointerEvents>
                                <Search fontSize="medium" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button className='search-btn' variant='contained'
                    onClick={() => ''}>Search</Button>
            </div>
            <div className='d-flex maxh-50 relative'>
                {names.map((value, idx) => <FormControl key={idx}
                    sx={{ m: 1, marginLeft: idx === 0 ? '0px' : '5px' }}>
                    <Select value='none' name={value.name}
                        id={value.name} onClick={e => ''} onChange={e => console.log(e)}>
                        <option value='none' className='d-none maxh-50 bg-white' >
                            {value.name}
                        </option>
                        {value.options.map((name, i) => (
                            <div key={i} className='row d-flex align-c ml-5'
                                style={{}} >
                                <input type="checkbox" value="Bike" />
                                <MenuItem focusRipple={false} disableRipple key={i} value={name}>
                                    {name}
                                </MenuItem>
                            </div>
                        ))}
                    </Select>
                </FormControl>)}

            </div>
            <div className='d-flex selected-main'>
                {names.map((v, i) => <div key={i}
                    style={{ marginLeft: i === 0 ? '0px' : '5px' }}
                    className='selected-container'>
                    <p>{v.name}</p>
                    <IconButton onClick={() => ''} size='small'>
                        <Close color='gray' fontSize='small' />
                    </IconButton>
                </div>
                )}
            </div>
        </div >
    )
}

export default SearchBanner;
// {/* <FormControl sx={{ m: 1, }}>
//     <Select value='none' onChange={e => console.log(e)}>
//         <option value='none' className='d-none maxh-50' >
//             Subject
//         </option>
//         {names[0].options.map((name, i) => (
//             <div key={i} className='row d-flex align-c ml-5'
//                 style={{}} >
//                 <input type="checkbox" value="Bike" />
//                 <MenuItem focusRipple={false} disableRipple key={i} value={name}>
//                     {name}
//                 </MenuItem>
//             </div>
//         ))}
//     </Select>
// </FormControl> */}