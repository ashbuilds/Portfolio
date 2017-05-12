import  React,{Component} from 'react';
import style from "../component/style.less";

class List extends Component {

    render() {
        return <ul className={style.list}>
            {this.props.listData.map((item, index) => <li key={index}><span className={style.text_node}>{item.info}</span><span>{item.expire}</span>
            </li>)}
        </ul>

    }

}

export default List;