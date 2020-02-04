import {ADD_QUIZ,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    GET_NEWS_STARTED
} from "../constants/action-types";

const initialState= {
    quizList:[{
        name:"quiz name 1",
        questions:[
            {
                type:"text",
                name:'question1',
                text:'Age?',
            },
            {
                type:"select",
                name:'age',
                text:'Age?',
                answers:[
                    "1",
                    "2",
                    "3",
                ]
            }

        ]
    }],
    news:{
        data:[],
        loading:false,
        error:null
    }
};

function rootReducer (state=initialState, action){
    if(action.type===ADD_QUIZ){
        return {...state,
            quizList: state.quizList.concat(action.payload)
        }
    }


    /* news */

    if (action.type === GET_NEWS_STARTED) {
        return {...state,
            news:{
                data:[],
                loading: true,
            }
        };
    }

    if (action.type === GET_NEWS_SUCCESS) {
        return {...state,
            news:{
                data: [...state.news.data, ...action.payload],
                loading: false,
                error: action.payload.error
            }
        };
    }

    if (action.type === GET_NEWS_FAILURE) {
        return {...state,
            news:{
                data:[],
                loading: false,
                error: action.payload.error
            }
        };
    }

    return state;
}

export default rootReducer;