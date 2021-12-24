import React from 'react';
import { connect } from 'react-redux';
import { deleteCard ,fetchUsers} from '../actions/cardAction'

class Card extends React.Component{

    //state = { user: '' }
    
    componentDidMount() {
        this.props.fetchUsers()
        // let user = this.props.match.params.user;
        // this.setState({ user })
    }
    onButtonClick = () => {
        let id = this.props.card.id
        this.props.deletecard(id) 
        this.props.history.push('/contact ')
        
    }
    render() {
        //console.log(this.props.users)
       // const { user } = this.state
        
        const { users } = this.props;
        return (
            users.map(user => {
                return (
                     <div
                        className='ui raised very padded text container segment'
                        style={{ marginTop: '80px' }}
                        key={user.id}
                        
            >
                       <h3 className='ui header'>{user.name}</h3>
                       <p>{user.email}</p>
                       <button
                            className='ui primary right floated button'
                             onClick={this.onButtonClick} 
                       >delete</button>
            
                </div>
                )
               
            })
            
        ) 
    }
}

const mapStateToprops = (state, ownProps) => {
    let title = ownProps.match.params.user
    return {
        card: state.cards.find(card => card.title === title),
        users: state.users
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUsers:()=>{dispatch(fetchUsers())}
    }
    
}

export default connect(mapStateToprops,mapDispatchToProps)(Card);