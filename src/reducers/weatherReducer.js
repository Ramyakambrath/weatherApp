export const weatherReducer=(state,action)=>{

    switch(action.type){

        case 'GET_CURRENT_POSITION':
            return [...state,{
             latitude:action.payload.lat,
             longitude:action.payload.lng
            }]

    }


}