import  React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import { addItem,getItems } from './actions';
import {Form,List} from '../components';


class ItemList extends React.Component{

    action(data) {
        this.props.testClick(data);
    }



     componentWillMount(){
        this.props.dispatch(getItems());
     }

     render(){

         let obj =  [{i: 'banner', x: 0, y: 0, w: 12, h:7, static: true },
                    {i: 'section', x: 0, y: 7, w: 12, h:5, static: true }]
         let layouts = {
             lg: obj,
             md: obj,
             sm: obj,
             xs: obj,
             xxs: obj,
         };


         // return <ResponsiveReactGridLayout className="layout" layouts={layouts} margin={[0,0]} rowHeight={80}
         //                            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
         //                            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} width={1000}>
         //     <div key={"banner"}>  Banner </div>
         //     <div key={"section"}>
         //        section
         //     </div>
         //     </ResponsiveReactGridLayout>
       return <div>
                    {/*<List listData={this.props.data.list}/>*/}
                    {/*<Form action={this.action.bind(this)}/>*/}
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
