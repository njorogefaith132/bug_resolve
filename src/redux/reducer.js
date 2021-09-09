import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./types";

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

        case RESOLVE_BUG:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved : true} )

        default: 
            return state;
            
    }

}

