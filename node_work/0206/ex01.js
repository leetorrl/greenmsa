import express from 'express';
import mongoose from 'mongoose';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



const app = express();

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => { console.log('몽고db 연결 성공') })
.catch(e => { console.log('몽고db 연결 실패', e) });

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: String,
  age: Number,
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;  // `__v` 필드 삭제
    return ret;
  },
});

const User = mongoose.model('User', userSchema);

const counterSchema = new mongoose.Schema({
  _id: String,  // 카운터의 이름
  seq: { type: Number, default: 0 },  // 현재 카운트 값
});

const Counter = mongoose.model('Counter', counterSchema);

// 자동 증가 ID 생성 함수
const getNextSequenceValue = async (counterName) => {
  const result = await Counter.findOneAndUpdate(
    { _id: counterName },
    { $inc: { seq: 1 } },  // 카운트 증가
    { new: true, upsert: true }  // 새로 생성하거나 갱신
  );
  return result.seq;
};

app.use(express.json());


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API documentation for user management',
    },
    basePath: '/',  // 기본 경로
  },
  apis: ['./ex01.js'],  // 이 파일을 기준으로 Swagger 문서화
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI 설정
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: "사용자 목록 조회"
 *     responses:
 *       200:
 *         description: "사용자 목록 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: 홍길동
 *                   age:
 *                     type: integer
 *                     example: 30
 */
app.get('/', (req, res) => {
  User.find().lean()
    .then(users => {
      console.log('저장된 사용자 목록:', users);
      res.status(200).json(users);  // 사용자 목록을 JSON 형식으로 응답
    })
    .catch(err => {
      console.log('사용자 목록 조회 실패:', err);
      res.status(500).send('서버 오류');
    });
});


/**
 * @swagger
 * /save:
 *   post:
 *     summary: "새 사용자 저장"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "길동"
 *               age:
 *                 type: integer
 *                 example: 21
 *     responses:
 *       200:
 *         description: "사용자 저장 성공"
 *       500:
 *         description: "서버 오류"
 */
app.post('/save', async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send('name과 age는 필수 입력값입니다.');
  }

  console.log(name, age);
  const nextId = await getNextSequenceValue('userId');

  const newUser = new User({
    _id: nextId,
    name: name,
    age: age,
  });

  newUser.save()
    .then(() => {
      console.log('사용자 저장 완료 :', name, age);
      res.status(200).send('사용자 저장 완료');
    })
    .catch((e) => {
      console.log('사용자 저장 실패 :', e);
      res.status(500).send('서버 오류');
    });
});



/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: "사용자 삭제"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 사용자 ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: "사용자 삭제 성공"
 *       404:
 *         description: "사용자 찾을 수 없음"
 *       500:
 *         description: "서버 오류"
 */
app.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;  // URL에서 id 파라미터로 전달된 값

  User.findByIdAndDelete(userId)  // 해당 _id로 사용자 찾고 삭제
    .then((deletedUser) => {
      if (deletedUser) {
        console.log('삭제된 사용자:', deletedUser);
        res.status(200).send('사용자 삭제 완료');
      } else {
        res.status(404).send('사용자 찾을 수 없음');
      }
    })
    .catch((err) => {
      console.log('사용자 삭제 실패:', err);
      res.status(500).send('서버 오류');
    });
});

app.listen(3000, () => {
  console.log("서버 시작");
});
