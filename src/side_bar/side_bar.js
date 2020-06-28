import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side_bar_item/side_bar_item';

class SidebarComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<div>Hello From Side Bar</div>);
    }
}

export default withStyles(styles)(SidebarComponent);