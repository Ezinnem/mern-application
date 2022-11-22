const memberController = require('../Controllers/memberController');
const express = require('express');
const app = express();

app.post('/createMember', memberController.createMember);

app.get('/getAllMembers', memberController.getAllMembers);

app.get('/member/:id', memberController.getOneMember);

app.patch('/updateMember/:id', memberController.updateOneMember);

app.delete('/deleteMember/:id', memberController.deleteOneMember)