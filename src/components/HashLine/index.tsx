
import React from 'react';
import { FaTrash } from 'react-icons/fa'

import './styles.css';
import { HashLineProps } from './types';

import { removeHash } from '../../api';
import { useAppDispatch } from '../../hooks';

import type { FC } from 'react';

export const HashLine: FC<HashLineProps> = ({ hashWithSum: { keyHash, hashSum, hashId } }: HashLineProps ) => {

    const dispatch = useAppDispatch()

    return (
        <div className='hashLineContainer'>
            <div className="keyHash">{keyHash}</div>
            <div className="hashSum">{hashSum}</div>
            <button className='deleteButton' onClick={() => dispatch(removeHash({ hashId }))}>
                <FaTrash />
            </button>
        </div>
    )
}