import { ADD_BUG, REMOVE_BUG } from "./action";

const initialid = 0;



export const bugreducer = (state = [], action) =>{

    switch(action.type){
        case ADD_BUG:
            return[

                ...state,
                {
                    
                    id: ++initialid,
                    description: action.payload.description,
                    resolved :false
                }
            ]
        case REMOVE_BUG:
            return state.filter(bug=> bug.id !== action.payload.id)

        default: 
            return state;
            
    }

}

