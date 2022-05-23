import {  IconButton, Typography } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadWords } from '../wordReducer';


export default function Score(){

  const[words,setWords]=useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(loadWords());
        fetch("http://localhost:8080/words/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setWords(result);
        }
    )
    },[]
    )

    
    return (
      <>
      
          <IconButton onClick={() => {navigate("/")}} >
              <BackIcon />
          </IconButton>
          <Typography color='primary' variant="h4">
              Score
          </Typography>
            
           
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Word</th>
                <th>Description</th>
                <th>Score</th>           
              </tr>
            </thead>
            <tbody>
              {
                words.map((word =>(
                  <tr key={word.id}>
                    <td>{word.word}</td>
                    <td>{word.description}</td>
                    <td>{word.score}</td>
                  </tr>
                )))
              }
            </tbody>
          </table>
        </div>      
      </>
    )
}


