import {ADD_BUG, REMOVE_BUG} from './types'




export const addbug = description =>{
    return {
        type: ADD_BUG,
        payload:{
            description: description
        }
    }
}

export const removebug = id =>{
    return{
        type: REMOVE_BUG,
        payload:{
            id
        }
    }
}

export const resolvebug = id = ({
    type: REMOVE_BUG,
    payload :{
        id
    }
})