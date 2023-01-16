import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alreadyQuote, setQuote } from '../redux/productaction';
import { Helmet } from 'react-helmet';
import { Button, Card } from 'react-bootstrap';
export function Body(){
let data=useSelector((state)=>{return state.quotes})
let quotedata=useSelector((state)=>{return state.quotes.quote})
// console.log(data,quotedata)
let [quotes,setQuotes]=useState(data?[...data.quotes]:[]);
let [quote,setquote]=useState(quotedata?{...quotedata}:{});
let [color,setColor]=useState(randomColors())
// console.log(color)
let dispatch=useDispatch();
async function setQUOTE(){ 
    await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((responce)=>{
        setQuotes([...responce.data.quotes])
        dispatch(setQuote([...responce.data.quotes]))
    }).catch((error)=>{console.log(error)})
    console.log(quotes)
}
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function randomQuote(){
    let index=Math.floor(Math.random()*(quotes.length+1))
    setColor(randomColors())
    setquote(quotes[index])
    dispatch(alreadyQuote(quotes[index]))
    return quote
}
useEffect(()=>{
    setQUOTE()
    randomQuote()
},[])
 return<>
 <Helmet><title>quotes</title></Helmet>
 <div className='d-flex vh-100'style={{backgroundColor:color}}> <Card className='w-50 m-auto text-end'>
      <Card.Body style={{padding: '40px 50px'}}>
        <blockquote className="blockquote" style={{color:color,fontSize: '1.75em'}}>
          <p className='font-weight-bold text-center'>
            <i className='fas fa-quote-left'></i>
            {quote?quote.quote:""}
          </p>
          <footer className="blockquote-footer "style={{color:color,fontSize: '10px'}}>
             <cite title="Source Title">{quote?quote.author:''}</cite>

          </footer>
          <div className='d-flex justify-content-between'> 
            
    <div className='d-flex justify-content-around w-25'><Button style={{backgroundColor:color,borderColor:color}} >
        <i className='fab fa-tumblr'></i>
      </Button>
      <Button style={{backgroundColor:color,borderColor:color}} >
        <i className='fab fa-twitter'></i>
      </Button></div>  
      <Button style={{backgroundColor:color,borderColor:color}} onClick={randomQuote}>
        New quote 
      </Button>
      </div>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
 </>

}