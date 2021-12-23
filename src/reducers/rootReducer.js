const initialState = {
    cards: [
        { id: 1, title: 'victor', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        { id: 2, title: 'salim', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        { id: 3, title: 'faith', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore vero accusamus minima exercitationem eos modi! Ullam at dolore delectus!.' },
        
    ]
}
const rootReducer = (state=initialState, action) => {
    return state;
}

export default rootReducer;
