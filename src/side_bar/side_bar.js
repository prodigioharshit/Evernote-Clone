import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side_bar_item/side_bar_item';

class SidebarComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render(){

        const {notes, classes, selectedNoteIndex} = this.props

        return (
        
            <div className={classes.sidebarContainer}>
                <Button 
                onClick={this.newNoteBtnClick}
                className={classes.newNoteBtn}>New Note</Button>
                {
                    this.state.addingNote ? 
                    <div>
                        <input 
                            type="text"
                            className={classes.newNoteInput}
                            placeholder='Enter note title'
                            onKeyUp={(e) => this.updateTitle(e.target.value)}>

                        </input>
                    </div> :
                    null
                }
            </div>
            );
    }

    newNoteBtnClick = () => {
        this.setState({title: null ,addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        console.log('Here It is: ', txt);
    }
}

export default withStyles(styles)(SidebarComponent);