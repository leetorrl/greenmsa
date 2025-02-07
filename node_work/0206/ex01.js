import express from 'express';
import mongoose from 'mongoose';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import moment from 'moment-timezone';
import jwt from 'jsonwebtoken';

const app = express();
const secretKey = 'your_secret_key'; // JWT 토큰 서명에 사용될 비밀 키

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log('몽고db 연결 성공') })
  .catch(e => { console.log('몽고db 연결 실패', e) });

// 사용자 스키마 정의
const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: String,
  age: Number,
  password: { type: String, required: true }, // 비밀번호 필드 추가
  createdAt: {
    type: Date,
    default: () => moment().tz('Asia/Seoul').toDate(),
  },
});

app.use(express.json());  // <--- 이 부분을 추가해야 req.body가 정상적으로 파싱됨
// 카운터 스키마 정의

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


userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.password; // 비밀번호는 응답에서 제외
    return ret;
  },
});

const User = mongoose.model('User', userSchema);

// JWT 토큰 생성 함수
const generateToken = (user) => {
  return jwt.sign({ id: user._id, name: user.name }, secretKey, { expiresIn: '1h' });
};

// 로그인 요청 처리
/**
 * @swagger
 * /login:
 *   post:
 *     summary: "로그인"
 *     description: "사용자가 로그인하여 JWT 토큰을 발급받습니다."
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
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: "로그인 성공, JWT 토큰 반환"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "jwt-token-example"
 *       400:
 *         description: "이름과 비밀번호는 필수 입력값입니다."
 *       401:
 *         description: "비밀번호가 틀렸습니다."
 *       404:
 *         description: "사용자를 찾을 수 없습니다."
 */
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send('이름과 비밀번호는 필수 입력값입니다.');
  }

  // 사용자 찾기
  const user = await User.findOne({ name });

  if (!user) {
    return res.status(404).send('사용자를 찾을 수 없습니다.');
  }

  // 비밀번호 확인 (여기서는 간단히 비교, 실제 프로젝트에서는 해시비밀번호 비교 필요)
  if (user.password !== password) {
    return res.status(401).send('비밀번호가 틀렸습니다.');
  }

  // 토큰 생성
  const token = generateToken(user);

  res.status(200).json({ token });
  console.log("token : ", token)
});

// 인증 미들웨어
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('인증되지 않은 요청입니다.');
  }

  try {
    const decoded = jwt.verify(token, secretKey); // 토큰 검증
    req.user = decoded; // 요청 객체에 사용자 정보 추가
    next();
  } catch (err) {
    return res.status(401).send('토큰이 유효하지 않습니다.');
  }
};

// 인증이 필요한 API 예시
/**
 * @swagger
 * /protected:
 *   get:
 *     summary: "인증된 사용자만 접근 가능"
 *     description: "JWT 토큰이 유효한 사용자가 접근할 수 있는 보호된 API입니다."
 *     responses:
 *       200:
 *         description: "인증된 사용자만 접근 가능합니다."
 *       401:
 *         description: "인증되지 않은 요청입니다."
 */
app.get('/protected', authenticate, (req, res) => {
  res.status(200).send('인증된 사용자만 접근 가능합니다.');
});

// Swagger 설정
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

app.use(express.json());

// 사용자 목록 조회
/**
 * @swagger
 * /:
 *   get:
 *     summary: "사용자 목록 조회"
 *     description: "저장된 사용자 목록을 조회합니다."
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
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).send('서버 오류');
    });
});

// 새 사용자 저장
/**
 * @swagger
 * /save:
 *   post:
 *     summary: "새 사용자 저장"
 *     description: "새로운 사용자를 데이터베이스에 저장합니다."
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
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: "사용자 저장 성공"
 *       400:
 *         description: "name, age, password는 필수 입력값입니다."
 *       500:
 *         description: "서버 오류"
 */
app.post('/save', async (req, res) => {
  const { name, age, password } = req.body;

  if (!name || !age || !password) {
    return res.status(400).send('name, age, password는 필수 입력값입니다.');
  }

  // 자동 증가 ID 생성
  const nextId = await getNextSequenceValue('userId');

  const newUser = new User({
    _id: nextId,
    name: name,
    age: age,
    password: password,  // 비밀번호도 함께 저장
  });

  newUser.save()
    .then(() => {
      res.status(200).send('사용자 저장 완료');
    })
    .catch((e) => {
      res.status(500).send('서버 오류');
    });
});

// 사용자 삭제
/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: "사용자 삭제"
 *     description: "특정 사용자 ID에 해당하는 사용자를 삭제합니다."
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
 *         description: "사용자를 찾을 수 없음"
 *       500:
 *         description: "서버 오류"
 */
app.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (deletedUser) {
        res.status(200).send('사용자 삭제 완료');
      } else {
        res.status(404).send('사용자 찾을 수 없음');
      }
    })
    .catch((err) => {
      res.status(500).send('서버 오류');
    });
});

// 서버 시작
app.listen(3500, () => {
  console.log("서버 시작");
});
