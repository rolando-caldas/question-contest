import React from "react";
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemIcon} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {Link} from "react-router-dom";

class Contest extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            contests: []
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8082/contest')
            .then(response => {
                this.setState({contests: response.data.data})
            })
            .catch(error => {
                this.setState({contests: error})
            });
    };

    handleClick = () => {
        console.log('hola');
    };

    render() {
        return (<List>{this.state.contests.map(contest => {
            return (
                <ListItem button component={Link} to={"/play/" + contest._id}>
                    <ListItemIcon>
                        <PlayCircleFilledIcon/>
                    </ListItemIcon>
                    <ListItemText multiline primary={contest._title} secondary={
                        <React.Fragment>
                            <div>{contest._author}</div>
                            <div>{contest._description}</div>
                        </React.Fragment>
                    }/>
                </ListItem>
            )
        })}</List>);
    }
}

export default Contest;