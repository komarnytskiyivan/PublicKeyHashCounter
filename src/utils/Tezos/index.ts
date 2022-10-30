import { TezosToolkit } from '@taquito/taquito';
import uuid from 'react-uuid';
import { IHashWithSum } from '../../types';

const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');

const getHashBalance = async ({ keyHash }: Pick<IHashWithSum, 'keyHash'>): Promise<IHashWithSum> => {
    const hashSum = await Tezos.tz.getBalance(keyHash)
    return { keyHash, hashSum: hashSum.toString(), hashId: uuid() }
}

export {
    getHashBalance
}