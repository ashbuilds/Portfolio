import  React,{Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './style.less';



class About extends React.Component{

    // action(data) {
    //     this.props.testClick(data);
    // }

     // componentWillMount(){
     //    this.props.dispatch(getItems())
     // }

     render(){
       return <div className={style.header}>
                 <h1>HEY THERE !!!</h1>
             </div>
    }
}

const mapStateToProps = function(state){
    return {
        data : state.data
    }
};
//
// const mapDispatchToProps = function (dispatch) {
//     return bindActionCreators({
//         testClick:(value) => addItem(value),
//         dispatch:dispatch
//     }, dispatch)
// };


export default connect(mapStateToProps)(About) ;
