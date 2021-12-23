const initialState = {
    cards: [
        { id: 1, title: 'victor', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        { id: 2, title: 'salim', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        { id: 3, title: 'faith', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        
    ]
}
const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !==card.id
            })
            return {
                ...state,
                cards:newCard
            }
        default:
            return state;
   }
}

export default rootReducer;
 