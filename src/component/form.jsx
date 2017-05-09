import React,{Component} from 'react';
import Button from './button';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            info:"",
            expire:""
        };
        this.action = this.action.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
    action() {

        this.props.action({
            info:this.state.info,
            expire:this.state.expire
        })
    }

    render(){
        return <div>
            <input placeholder="Info" name="info" onChange={this.handleChange} value={this.state.info}/>
            <input placeholder="number" name="expire" onChange={this.handleChange} value={this.state.expire}/>
            <Button action={this.action} name="Add item"/>
        </div>
    }
}

export default Form;