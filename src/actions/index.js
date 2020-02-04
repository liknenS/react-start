import {
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    GET_NEWS_STARTED,
} from '../constants/action-types';
import axios from 'axios';

export const getNewsAction = () => {
    return dispatch => {
        dispatch(getNewsStarted());

        axios
            .get(`https://5d962aafa824b400141d24bd.mockapi.io/api/forte/news`)
            .then(res => {
                dispatch(getNewsSuccess(res.data));
            })
            .catch(err => {
                dispatch(getNewsFailure(err.message));
            });
    };
};

const getNewsSuccess = news => {
    return {
        type: GET_NEWS_SUCCESS,
        payload: news
    }
};

const getNewsStarted = () => ({
    type: GET_NEWS_STARTED
});

const getNewsFailure = error => ({
    type: GET_NEWS_FAILURE,
    payload: {
        error
    }
});