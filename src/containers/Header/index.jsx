import  React,{Component} from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Link} from 'react-router';

import style from './style.less';



class Header extends React.Component{

    // action(data) {
    //     this.props.testClick(data);
    // }

     // componentWillMount(){
     //    this.props.dispatch(getItems())
     // }

     render(){



       return <header className={style.header+ " _js_main-header"}>
                   <nav>
                       <ul className={style.static}>
                           <li className={style.logo}>
                               <Link to="/">
                                   <span className="icon-logo"/>
                               </Link>
                           </li>
                           <li>
                               <Link to="/lazy-search">
                                   <span className="icon-search"/>
                               </Link>
                           </li>
                       </ul>
                       <ul className={style.links}>
                           <li className={style.item}><Link to="/">Home</Link></li>
                           <li className={style.item}><Link to="/about">About</Link></li>
                           {/*<li><Link to="/user"><span className="icon-account"/></Link></li>*/}
                           {/*<li><Link to="/user"><span className="icon-tour-guide"/></Link></li>*/}
                           {/*<li><Link to="/user"><span className="icon-logo"/></Link></li>*/}
                           {/*<li><Link to="/user"><span className="icon-shopping-cart"/></Link></li>*/}
                       </ul>
                       <ul className={style.static}>
                           <li>
                               <Link to="cart">
                                   <span className="icon-shopping-cart"/>
                               </Link>
                           </li>
                           <li>
                               <Link to="bookmark">
                                   <span className="icon-book-marked"/>
                               </Link>
                           </li>
                           <li>
                               <Link to="account">
                                   <span className="icon-account"/>
                               </Link>
                           </li>
                       </ul>
                   </nav>
             </header>
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


export default Header;
