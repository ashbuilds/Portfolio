import  React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem,getItems } from './actions';
import {Form,List} from '../components';

class ItemList extends React.Component{

    action(data) {
        this.props.testClick(data);
    }

     componentWillMount(){
        this.props.dispatch(getItems())
     }

     render(){
       return <div>
                    <List listData={this.props.data.list}/>
                    <Form action={this.action.bind(this)}/>
             </div>
    }
}

const mapStateToProps = function(state){
    return {
        data : state.data
    }
};

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        testClick:(value) => addItem(value),
        dispatch:dispatch
    }, dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(ItemList) ;
