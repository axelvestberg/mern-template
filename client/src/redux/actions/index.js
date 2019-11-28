import base from '../../apis/base';
import { FETCH_MESSAGE } from "../actions/types";

export const fetchMessage = () => async dispatch => {
	const response = await base.get('/message');
	console.log('response in action:', response.data);
	dispatch({ type: FETCH_MESSAGE, payload: response.data })
};