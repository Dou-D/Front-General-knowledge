import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();

const info = [
    {
        name: "dou",
        identity: "2203060411",
        gender: "male",
        hobby: "html,css,js"
    }
];

// 配置multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());


app.post("/add", upload.none(), (req, res) => {
    // 获取表单数据
    const { name, identity, gender, hobby } = req.body;
    console.log(name, identity, gender, hobby);
    // 将新信息添加到info数组中
    info.push({
        name: name,
        identity: identity,
        gender: gender,
        hobby: hobby
    });

    res.status(200).send("数据已添加");
});

app.get('/getAll', (req, res) => {
    res.json(info);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`已运行在${PORT}`);
});