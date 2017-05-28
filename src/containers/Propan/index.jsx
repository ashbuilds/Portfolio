import  React,{Component} from 'react';

import { connect } from 'react-redux';
import style from './style.less';


class Propan extends React.Component{

    render(){
        return <div className={style.fixed_cont}>
            <div className={style.text_cont}>
                <h1><a href="https://www.microsoft.com/en-za/store/p/propan/9wzdncrdn7bk">Propan</a> Privacy Policy</h1>
                <p>This app requires internet connection in order to work with links that you may add while coding like : CDN links,images etc. This app won't collect any information or personal data from user. User is responsible what content links you write while writing your code in <a href="https://www.microsoft.com/en-za/store/p/propan/9wzdncrdn7bk">Propan</a>.</p>
            </div>
        </div>
    }
}

// const mapStateToProps = function(state){
//     return {
//         data : state.data
//     }
// };

// export default connect(mapStateToProps)(Propan) ;
export default Propan;
