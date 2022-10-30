import { AppThunk } from "../state";
import { selectHashesWithSums, setHashesWithSums, setLoading } from "../state/hashSlice";
import { IHashWithSum } from "../types";
import { getHashBalance } from "../utils";

export const addHash = ({ keyHash }: Pick<IHashWithSum, 'keyHash'>): AppThunk => async (dispatch, getState) => {
    dispatch(setLoading(true))

    try {
        const newHashSum = await getHashBalance({ keyHash })

        const newHashesWithSums = [...selectHashesWithSums(getState()), newHashSum]

        dispatch(setHashesWithSums(newHashesWithSums))

        localStorage.setItem('hashesWithSums', JSON.stringify(newHashesWithSums))
    } catch (error) {
        alert("Sorry there was an error");
    } finally {
        dispatch(setLoading(false))
    }

}

export const removeHash = ({ hashId }: Pick<IHashWithSum, 'hashId'>): AppThunk => async (dispatch, getState) => {
    dispatch(setLoading(true))

    const newHashesWithSums = selectHashesWithSums(getState()).filter(el => el.hashId !== hashId)

    dispatch(setHashesWithSums(newHashesWithSums))

    localStorage.setItem('hashesWithSums', JSON.stringify(newHashesWithSums))

    dispatch(setLoading(false))
}