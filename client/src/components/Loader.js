import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStore } from '../ContextApi/MyContext'
import { loaderDispatch } from '../ContextApi/actions'

function Loader() {
    const [, dispatch] = useStore()
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            onClick={() => dispatch(loaderDispatch(false))}
            open
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loader