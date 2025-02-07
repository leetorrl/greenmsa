

import { Long } from 'bson';
import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/testdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log('mongodb연결 성공')})
.catch(err => {console.log("mongodb 연결실패 :", err)})


const counterSchema = new mongoose.Schema({
    _id: String,
    sequence_value: {type: Number, default: 0}
})

const Counter = mongoose.model('Counter', counterSchema);

const UserSchema = new mongoose.Schema({
    idx: {type: Number, unique: true},
    name: String,
    age: Number
})

const User = mongoose.model('User', UserSchema);

const getNextSequenceValue = async (sequenceName) => {
    const sequenceDocument = await Counter.findOneAndUpdate(
      { _id: sequenceName },  // 카운터 이름을 기준으로 업데이트
      { $inc: { sequence_value: 1 } },  // sequence_value를 1 증가
      { new: true, upsert: true }  // 문서가 없으면 새로 만들기
    );
    return sequenceDocument.sequence_value;
  };


const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('hello');
})

app.get('/aa',(req,res)=>{

    res.send({name,age})
})

app.post('/save', async (req, res) => {
    const { name, age } = req.body;
  
    try {
      // 새로운 idx 값을 생성
      const idx = await getNextSequenceValue('users');
  
      // 사용자 데이터 저장
      const newUser = new User({ idx, name, age });
      await newUser.save();
  
      res.json({
        status: 200,
        message: '데이터 저장 성공',
        savedData: { idx, name, age }
      });
    } catch (err) {
      console.log('저장 중 오류 발생:', err);
      res.status(500).json({
        status: 500,
        message: '데이터 저장 실패',
        error: err.message
      });
    }
  });

app.listen(3000, () => {
    console.log("서버시작")
})