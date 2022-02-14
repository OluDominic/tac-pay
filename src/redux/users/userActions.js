import {userService} from './userService'
import userTypes from './userTypes';


export const userLoading=()=> ({
    type: userTypes.USER_LOADING
})

export const userLogin=(user)=> ({
    type: userTypes.USER_LOGIN,
    payload: user
})

export const userLogout=()=> ({
    type: userTypes.USER_LOGOUT
})

export const userAuthenticate=(data)=>({
    type: userTypes.USER_AUTHENTICATE,
    payload: data
})

export const userDeposit=(data)=> ({
    type: userTypes.USER_DEPOSIT,
    payload: data
})

export const paymentHistory=()=> ({
    type: userTypes.USER_PAYMENT_HIS
})

export const userTransactionHis=(data)=> ({
    type: userTypes.USER_TRANSACTION_HIS,
    payload: data
})

export const userErrors=(error)=> ({
    type: userTypes.USER_ERRORS,
    payload: error
})

export const fetchUser=(username, password)=> {
    
    return (dispatch)=> {
        dispatch(userLoading({username}))
        userService.login(username, password)
        .then((response)=> {
            let data = response.data
            dispatch(userLogin(data))
            return data
        },
        error=> {
            dispatch(userErrors.error(error.toString()))
        }
        )
    }
}

export const fetchUserDeposit=(id)=> {

    return (dispatch)=> {
        dispatch(userLoading())
        userService.getUserDepo(id)
        .then(({data})=> {
            dispatch(userDeposit(data))
        })
        .catch((error)=> {
            dispatch(userErrors(error.toString()))
            console.log(error)
        })
    }
}

export const fetchUserTrans=(id)=> {

    return (dispatch)=> {
        dispatch(userLoading())
        userService.getUserTrans(id)
        .then(({data})=> {
            dispatch(userTransactionHis(data))
        })
        .catch((error)=> {
            dispatch(userErrors(error.toString()))
            console.log(error)
        })
    }
}

export const logoutUser=()=> {
    userService.logout();
    return userLogout();
}

export const getAll=()=> {

        
            (userService.getUser())
        
}

export const fetchLogout=()=> {
    userService.logout();
}