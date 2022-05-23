import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography, Box} from '@material-ui/core';
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addWord } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1), 
     
    },
  },
}));

export default function Word() {
  const[word,setWord]=useState('')
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const words = useSelector((state) => state.words);


  const onAdd = (w) => {
    dispatch(addWord(w));
    
    const inputWord = {word}

    if(word.length<2){
      console.log("Word is too small!")
      Store.addNotification({
        title: "UPS!",
        message: "Word must have at least two letters!",
        type: "danger",
        insert: "top",
        container: "center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return
    }


    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/'+word, true);
    request1.onload = function () {
       
        if (request1.status >= 200 && request1.status < 400) {
            fetch("http://localhost:8080/words/add",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(inputWord)
            }).then(()=>{
              console.log("New word added! ");
              Store.addNotification({
                title: "Success!",
                message: "Word is added! Check out your score!",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
  
            })
                  
        } else {
            Store.addNotification({
              title: "UPS!",
              message: "Word is not from english dictionary!",
              type: "danger",
              insert: "top",
              container: "center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true
              }
            });

        }
    }
    request1.send();
  }


  return (
    <Box>

      <img src="/win.jpg" alt="Book" variant="image"></img>
      <Typography color='primary' variant="h4">Palindrome game</Typography>
      <Typography color="primary" variant="subtitle1">Type word and find your score</Typography>
     
      <form className={classes.root} noValidate autoComplete="off">
        <Box >
          <TextField id="outlined-basic" label="Enter word" variant="outlined" 
          value={word}
          onChange={(e)=>setWord(e.target.value)} 
          />
        </Box>

        <Button variant="contained" color='primary' onClick={onAdd}>Submit</Button>
        <Button variant="contained" color='primary' onClick={() => {navigate("/score")}}> Score</Button>

      </form>
      
    </Box>
  )
}
