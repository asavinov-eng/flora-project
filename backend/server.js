
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use('/public',express.static('public'));

let bouquets=[
{
id:1,
title:'Rose Dream',
description:'Premium rose bouquet',
price:65,
favorite:false,
photoURL:'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600'
}
];

app.get('/api/bouquets',(req,res)=>{
res.json(bouquets);
});

app.get('/api/bouquets/:id',(req,res)=>{
const bouquet=bouquets.find(item=>item.id===Number(req.params.id));

if(!bouquet){
return res.status(404).json({message:'Not found'});
}

res.json(bouquet);
});

app.post('/api/bouquets',(req,res)=>{
const newBouquet={
id:Date.now(),
...req.body
};

bouquets.push(newBouquet);

res.status(201).json(newBouquet);
});

app.put('/api/bouquets/:id',(req,res)=>{
const index=bouquets.findIndex(item=>item.id===Number(req.params.id));

if(index===-1){
return res.status(404).json({message:'Not found'});
}

bouquets[index]={
...bouquets[index],
...req.body
};

res.json(bouquets[index]);
});

app.patch('/api/bouquets/:id/favorite',(req,res)=>{
const bouquet=bouquets.find(item=>item.id===Number(req.params.id));

if(!bouquet){
return res.status(404).json({message:'Not found'});
}

bouquet.favorite=req.body.favorite;

res.json(bouquet);
});

app.delete('/api/bouquets/:id',(req,res)=>{
bouquets=bouquets.filter(item=>item.id!==Number(req.params.id));

res.json({message:'Deleted'});
});

app.get('/api-docs',(req,res)=>{
res.send('Swagger placeholder');
});

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
console.log(`Server running on ${PORT}`);
});
