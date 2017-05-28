import  React,{Component} from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Link} from 'react-router';

import style from './style.less';



class Footer extends React.Component{

    // action(data) {
    //     this.props.testClick(data);
    // }

     render(){
       return <footer className={style.footer+" _js_main-footer"}>
                   <nav>
                       <ul className={style.list}>
                           <li className={style.item}><Link to="/">Home</Link></li>
                           <li className="css_test"><Link to="/about">About</Link></li>
                           <li><Link to="/user"><span className="icon-account"/></Link></li>
                           <li><Link to="/user"><span className="icon-tour-guide"/></Link></li>
                           <li><Link to="/user"><span className="icon-logo"/></Link></li>
                           <li><Link to="/user"><span className="icon-shopping-cart"/></Link></li>
                       </ul>
                   </nav>
             </footer>
    }
}

// const mapStateToProps = function(state){
//     return {
//         data : state.data
//     }
// };
//
// const mapDispatchToProps = function (dispatch) {
//     return bindActionCreators({
//         testClick:(value) => addItem(value),
//         dispatch:dispatch
//     }, dispatch)
// };


export default Footer;
