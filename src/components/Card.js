import React from 'react';
import { connect } from 'react-redux';

class Card extends React.Component{

    //state = { user: '' }
    
    // componentDidMount() {
    //     let user = this.props.match.params.user;
    //     this.setState({ user })
    // }
    onButtonClick = () => {
        let id = this.props.card.id
        this.props.deletecard(id)
        this.props.history.push('/contact')
        
    }
    render() {
       // const { user } = this.state
        
        const { title, body } = this.props.card;
        return (
            <div
                className='ui raised very padded text container segment'
                style={{marginTop:'80px'}}
            >
                <h3 className='ui header'>{title}</h3>
                <p>{body}</p>
                <button
                    className='ui primary right floated button'
                    onClick={this.onButtonClick}
                >delete</button>
            
            </div>
        ) 
    }
}

const mapStateToprops = (state, ownProps) => {
    let title = ownProps.match.params.user
    return {
        card: state.cards.find(card =>  card.title === title )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletecard:(id)=>{dispatch({type:'DELETE_CARD',id})}
    }
    
}

export default connect(mapStateToprops,mapDispatchToProps)(Card);