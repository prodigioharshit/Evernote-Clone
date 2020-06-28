import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }
    render(){
        const { classes } = this.props; 

        return (
        <div className={classes.editorContainer}>
            <ReactQuill 
               value={this.state.text} 
               onChange={this.updateBody}>
            </ReactQuill>
        </div>
        );
    }
    updateBody = async (val) => {
        await this.setState({text: val});
        this.update();
    };
    // update db after user stopped typing for 1.5s ...this is debouncing...cancel http request made just when user stopped typing
    update = debounce(() => {
        console.log("Updating Database")
    },1500);
}

export default withStyles(styles)(EditorComponent);