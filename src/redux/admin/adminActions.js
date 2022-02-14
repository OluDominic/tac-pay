import { adminService } from "./adminService";
import adminTypes from "./adminTypes";


export const adminGetByID=(id)=> ({
    type: adminTypes.ADMIN_GET_BY_ID,
    payload: id
})

export const adminBalance=(data)=> ({
    type: adminTypes.ADMIN_BALANCE,
    payload: data
})

export const deposit=(data)=> ({
    type: adminTypes.DEPOSIT,
    payload: data
})

export const adminUserTrans=(id)=> ({
    type: adminTypes.ADMIN_USER_TRANS_HIS,
    payload: id
})

export const adminUserDepHis=(id)=> ({
    type: adminTypes.ADMIN_USER_DEPO_HIS,
    payload: id
})

export const adminTransHis=(data)=> ({
    type: adminTypes.ALL_TRANS_HIS,
    payload: data
})

export const adminPayHis=(data)=> ({
    type: adminTypes.ALL_PAYMENT_HIS,
    payload: data
})

export const allStudents=(data)=> ({
    type: adminTypes.ALL_STUDENTS,
    payload: data
})

export const register=(data)=> ({
    type: adminTypes.ADMIN_REGISTER,
    payload: data
})

export const updateUserById=(id)=> ({
    type: adminTypes.UPDATE_USER,
    payload: id
})

export const update=(data)=> ({
    type: adminTypes.UPDATE,
    payload: data
})

export const deleteAction=(data)=> ({
    type: adminTypes.DELETE_USER,
    payload: data
})

export const adminLoading=()=> ({
    type: adminTypes.LOADING
})

export const adminError=(err)=> ({
    type: adminTypes.ADMIN_ERROR,
    payload: err
})



export const fetchBalance=(id)=>{

    return (dispatch) => {
        dispatch(adminLoading(true))
        adminService.getByID(id)
        .then(({data})=> {
            dispatch(adminBalance(data[0]))
        });
    };
}

export const postDeposit=(id, money, date, comment)=> {

    return (dispatch)=> {
        adminService.studentDeposit(id, money, date, comment)
        .then(({data})=> {
            dispatch(deposit(data))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}

export const getTransaction=(id)=> {

    return (dispatch)=> {
        dispatch(adminLoading())
        dispatch(adminGetByID(id))
        adminService.getTransactionHis(id)
        .then(({data})=>{
            dispatch(adminUserTrans(data))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}

export const fetchUserDepHis=(id)=> {

    return (dispatch)=> {
        dispatch(adminLoading())
        dispatch(adminGetByID(id))
        adminService.getDepHis(id)
        .then(({data})=> {
            dispatch(adminUserDepHis(data))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}

export const fetchAllTransHis=()=>{

    return (dispatch) => {
        dispatch(adminLoading())
        adminService.getAllTransHis()
        .then(({data})=> {
            dispatch(adminTransHis(data))
        });
    };
}

export const fetchAllPayHis=()=>{

    return (dispatch) => {
        dispatch(adminLoading())
        adminService.getAllPayHis()
        .then(({data})=> {
            dispatch(adminPayHis(data))
        });
    };
}

export const fetchAllStudents=()=>{

    return (dispatch) => {
        dispatch(adminLoading())
        adminService.getAllStudents()
        .then(({data})=> {
            dispatch(allStudents(data))
        });
    };
}

export const postRegister=(tagid, fname, lname, pin, money, password, active, email)=> {

    return (dispatch)=> {
        dispatch(adminLoading())
        adminService.registerStudent(tagid, fname, lname, pin, money, password, active, email)
        .then(({data})=> {
            dispatch(register(data))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}

export const getUserUpdate=(id)=> {

    return (dispatch)=> {
        dispatch(adminLoading())
        dispatch(adminGetByID(id))
        adminService.getByID(id)
        .then(({data})=> {
            dispatch(updateUserById(data[0]))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}

export const fetchUpdate=(id, tagid, fname, lname, pin, password, active, email)=> {

    return (dispatch)=> {
        adminService.updateUser(id, tagid, fname, lname, pin, password, active, email)
    .then(({data})=> {
        dispatch(update(data))
    })
    .catch((error)=> {
        dispatch(adminError(error.toString()))
        console.log(error)
    })
    }
}

export const fetchDelete=(id)=> {

    return (dispatch)=> {
        dispatch(adminLoading())
        adminService.deleteUser(id)
        .then(({data})=> {
            dispatch(register(data))
        })
        .catch((error)=> {
            dispatch(adminError(error.toString()))
            console.log(error)
        })
    }
}



