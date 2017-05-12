import  React,{Component} from 'react';

class List extends Component {

    render() {

        let styles =  process.env.BROWSER?require("../component/style.less"):{};

        return <ul className={styles.list}>
            {this.props.listData.map((item, index) => <li key={index}><span className={styles.text_node}>{item.info}</span><span>{item.expire}</span>
            </li>)}
        </ul>

    }

}

export default List;