const Member = require('../Model/Member');


exports.createMember = async (req, res) => {
    const menber = new Member(req.body)
    try {
        await menber.save()
        res.status(201).json({
            status: 'Success',
            data: { Member }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};

exports.getAllMembers = async (req, res) => {
    const members = await Member.find({})
    try {
        res.status(200).json({
            status: 'Success',
            data: { members }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};

exports.getOneMember = async (req, res) => {
    const member = await Member.findById(req.params.id)
    try {
        res.status(200).json({
            status: 'Success',
            data: { member }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};

exports.updateOneMember = async (req, res) => {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    try {
        res.status(200).json({
            status: 'Success',
            data: { updatedMember }
        })
    } catch (err) {
        console.log(err)
    }
};

exports.deleteOneMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)

    try {
        res.status(204).json({
            status: 'Success',
            data: {}
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};