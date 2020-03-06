import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {Drawer, Paper} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contest from "./Components/Contest";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import New from "./Components/New";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            menuVisible: false,
            msg: 'Welcome to Your React.js App'
        };
    };

    menuVisibleChange = () => {
        this.setState({'menuVisible': !this.state.menuVisible});
    };

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.menuVisibleChange}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            {this.state.msg}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant={"persistent"} open={this.state.menuVisible}>
                    <div>
                        <IconButton onClick={this.menuVisibleChange}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem button component="a" href="/">
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText>All Contests</ListItemText>
                        </ListItem>
                        <ListItem button component="a" href="/new">
                            <ListItemIcon>
                                <CreateNewFolderIcon/>
                            </ListItemIcon>
                            <ListItemText>Create Contest</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
                <Paper>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' exact component={Contest}/>
                            <Route path='/index' exact component={Contest}/>
                            <Route path='/new' exact component={New}/>
                            <Route path='/post/:id'/>
                        </Switch>
                    </BrowserRouter>
                </Paper>
            </div>
        );
    }
}

export default App;
