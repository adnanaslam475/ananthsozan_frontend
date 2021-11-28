import React, { useEffect, useRef, useLayoutEffect, useState } from 'react'
import {
    MenuList, Table, TableCell, TextField,
    InputAdornment,  Button
} from '@mui/material'
import { KeyboardArrowDown, CheckCircleOutline, Search } from '@mui/icons-material';
import './Header.scss'

const Header = () => {
    const input = useRef(null);
    const [searchshow, setsearchshow] = useState(false)
    useEffect(() => {
        // input.current.classList.add('inp');
    }, [])
    
    return (
        <div className='header'>
            <img src='https://www.edx.org/images/logos/edx-logo-elm.svg'
                className='logo' />
            <div className='hover'>
                <div className='d-flex align-center pd-lr-10'>
                    <p>Courses</p>
                    <KeyboardArrowDown color='black' />
                </div>
            </div>
            <div className='hover '>
                <div className='d-flex align-center pd-lr-10'>
                    <p>Program & degrees</p>
                    <KeyboardArrowDown color='black' />
                </div>
            </div>
            <div className='hover'>
                <div className='d-flex align-center mr-5 pd-lr-10'>
                    <p>School & Partners</p></div>
            </div>
            <span className='search-div'>
                <TextField placeholder='What do you want to learn'
                    className='input-search' ref={input}
                    onFocus={() => { input.current.classList.add('inp'); setsearchshow(true) }}
                    onBlur={() => { input.current.classList.remove('inp'); setsearchshow(false) }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" disablePointerEvents>
                                <Search fontSize="medium" />
                            </InputAdornment>
                        ),
                    }}
                />
                {searchshow && <Button className='search-btn' variant='contained'
                    onClick={() => ''}>Search</Button>}
            </span>
        </div >
    )
}

export default Header;