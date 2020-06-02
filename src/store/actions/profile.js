import axios from 'axios';
import * as  actionTypes from './actionTypes';


export const fetchProfileStart=()=>{
    return{
        type:actionTypes.FETCH_PROFILE_START
    };
};


export const fetchProfileFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const fetchProfile=()=>{
    return dispatch=>{
        dispatch(fetchProfileStart());
        const headers={
            Authorization:'Bearer' +localStorage.getItem('access_token')
        }

        axios.get("http://localhost:8080/customer/profile",{headers:headers})
        .then(response=>{
            console.log(response.data);
            dispatch(fetchProfileSuccess(response.data));

        })
        .catch(error=>{
            console.log(error.response.data.error);
            dispatch(fetchProfileFail(error.response.data.error))
        });
    }
}


export const fetchProfileSuccess=(profileDetails)=>{
    return{
        type:actionTypes.FETCH_PROFILE_SUCCESS,
        profileDetails:profileDetails
    }
}
