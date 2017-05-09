import  React,{Component} from 'react';
import Form from './form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem,getItems } from '../actions';
import styles from './style.less';
// import store from '../store';

class List extends Component {

    render() {
        return <ul className={styles.list}>
            {this.props.listData.map((item, index) => <li key={index}><span className={styles.text_node}>{item.info}</span><span>{item.expire}</span>
            </li>)}
        </ul>
    }

}


class Welcome extends React.Component{

    action(data) {
        this.props.testClick(data);
    }

     componentWillMount(){
        this.props.dispatch(getItems())
     }

     render(){
       return <div>
                    <List listData={this.props.list}/>
                    <Form action={this.action.bind(this)}/>
             </div>
    }
}

const mapStateToProps = function(state){
    return {
        list : state.list
    }
};

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        testClick:(value) => addItem(value),
        dispatch:dispatch
    }, dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Welcome);

// export default Welcome;  my huge mistake