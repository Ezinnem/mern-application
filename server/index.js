const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const memberController = require('./Controllers/memberController');


const DB = 'mongodb+srv://mongodb:mongodb@cluster0.v8zpxv0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.post('/createMember', memberController.createMember);

app.get('/getAllMembers', memberController.getAllMembers);
app.get('/member/:id', memberController.getOneMember);
app.patch('/updateMember/:id', memberController.updateOneMember);

app.delete('/deleteMember/:id', memberController.deleteOneMember);

const PORT = 4042
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})