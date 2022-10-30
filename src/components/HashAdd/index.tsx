
import React, { useState } from 'react';

import './styles.css';
import { addHash } from '../../api';

import type { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectHashesWithSumsLoading } from '../../state/hashSlice';

export const HashAdd: FC = () => {

    const dispatch = useAppDispatch()

    const hashesWithSumsLoading = useAppSelector(selectHashesWithSumsLoading)

    const [hashValue, setHashValue] = useState('')

    const onSubmit = () => {
        dispatch(addHash({ keyHash: hashValue }))
        setHashValue('')
    }

    return (
        <div className='hashAddContainer'>
            <input 
                className="hashInput" 
                placeholder='Enter your pkh here...' 
                value={hashValue} 
                onChange={e => setHashValue(e.target.value)} 
            />
            <button 
                className='submitButton' 
                onClick={onSubmit}
                disabled={hashesWithSumsLoading || !hashValue.trim()}
            >
                Add
            </button>
        </div>
    )
};