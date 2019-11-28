import base from '../../apis/base';
import { FETCH_MESSAGE } from "../actions";

export const fetchMessage = () => async dispatch => {
	const response = await base.get('/');

	dispatch({ type: FETCH_MESSAGE, payload: response.data })
};