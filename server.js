const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
    res.send([{
        'id':1,
        'image': 'https://placeimg.com/64/64/1',
        'name':'홍길동',
        'birthday':'950615',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id':2,
        'image': 'https://placeimg.com/64/64/2',
        'name':'김동준',
        'birthday':'951125',
        'gender':'남자',
        'job':'개발자'
      },
      {
        'id':3,
        'image': 'https://placeimg.com/64/64/3',
        'name':'아무개',
        'birthday':'951215',
        'gender':'남자',
        'job':'고등학생'
      }
      ]);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));
