import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import { Store } from 'react-notifications-component';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '20px'
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const onHelp = () =>{
    Store.addNotification({
      title: "Enter word from English dictionary and find out your score!",
      message: "Score is calculated by the following rules: 1 point for each unique letter, 3 extra points if the word is a palindrome and 2 extra points if the word is -almost palindrome-."+
                "Definition of -almost palindrome-: if by removing at most one letter from the word, the word will be a true palindrome!",
      type: "info",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 9000,
        onScreen: true
      }
    });

  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="help" onClick={onHelp}>
            <HelpIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome to word palindrome game 
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
