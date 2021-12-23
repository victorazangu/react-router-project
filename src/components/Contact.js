import React from 'react';
import { Link } from 'react-router-dom';
//import Modal from './Modal';
import { connect } from 'react-redux';


const Contact = ({ cards }) => {
    
    return (
        <div>
            {/*<Modal />*/}
            
            {
                cards.map(card => {
                    return (
                         <div
                              className='ui raised very padded text container segment'
                              style={{ marginTop: '80px' }}
                              key={card.id}
                         >
                            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
                            <p>{ card.body }</p>
            
                         </div>
                    )
           
                })
            }
          
        {/*<div
            className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
        >
            <Link to='/card/william'className='ui header'>William</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cumque. Magnam debitis facere adipisci beatae omnis vel recusandae earum accusantium eum commodi in sit, quia at magni expedita cumque! Quis dolore aut fugit beatae vitae. Vero suscipit, fuga magnam iste quibusdam totam rerum amet voluptas iusto. Expedita vero eius vitae beatae illo suscipit quam totam incidunt! Repellendus voluptas molestias quod quas distinctio fuga, nulla vero maxime veritatis voluptatibus nisi nihil dolor id enim? Aut quisquam exercitationem est mollitia, omnis neque nisi aliquam. Maxime eligendi soluta, quo odit minus mollitia consectetur maiores exercitationem quia ab alias ipsum placeat facilis voluptas consequatur nemo, in totam vero ut nam, impedit temporibus. Sint, laboriosam ullam. Praesentium, distinctio magnam. Commodi, eos cum. Molestias, cum eius ut rerum placeat omnis exercitationem doloribus quia voluptatibus. Aliquam commodi accusantium dicta veritatis quia optio similique facilis molestiae voluptatum, earum deserunt vel adipisci repudiandae. Velit est dolorem in at perferendis!</p>
            
    </div>*/}
        </div>
    
    )
}
const mapStateToprops = (state) => {
    return {
        cards:state.cards
    }
    
}

export default connect(mapStateToprops) (Contact);