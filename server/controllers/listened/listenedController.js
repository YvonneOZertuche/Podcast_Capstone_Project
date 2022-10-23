const Listened = require("../../model/Listened");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const createListenedController = async(req, res, next)=>{
    const {episodeName, podcastName, image, audioLink, wantToFollow, listenedTo, notes} = req.body 
    try {
        //1. find the logged in user
        const userFound = await User.findById(req.user);
        if(!userFound) return next(new AppErr("user not found", 404))
        //2. create the listened list
        const listened = await Listened.create({
            episodeName, 
            podcastName, 
            image, 
            audioLink, 
            wantToFollow, 
            listenedTo, 
            notes,
            createdBy: req.user
        })
        //3. push the listened into the users listened field
        userFound.listeneds.push(listened._id)
        //4. resave the user
        await userFound.save()
        res.json({
            status: "success",
            data: listened
        })
    } catch (error) {
        next(error)
    }
}

//all listened
const getAllListenedController = async(req, res, next)=>{
    try {
        const listened = await Listened.find()
        res.json(listened)
        console.log(listened)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// get one listened
const getOneListenedController = async(req, res, next)=>{
    try {
        //find id from params
        const {id} = req.params
        //leaving off the .populate option for now
        const listened = await Listened.findById(id)
        res.json({
            status: "success",
            data: listened
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//delete
const deleteListenedController = async(req, res, next)=>{
    try {
        const { id } = req.params;
        await Listened.findByIdAndDelete(id);
        res.status(200).json({
            status:"success",
            data: null
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//update
const updateListenedController = async(req, res, next)=>{
    try {
        const { id } = req.params;
        let id1 = {_id:id}
        let testObj = req.body
        let obj = JSON.stringify(testObj);
        console.log('obj',obj);
        const listened = await Listened.findByIdAndUpdate(id1, testObj,{
            new: true,
            runValidators: true
        })
        res.json({
            status:"success",
            data: listened
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    createListenedController,
    getAllListenedController,
    getOneListenedController,
    deleteListenedController,
    updateListenedController
}