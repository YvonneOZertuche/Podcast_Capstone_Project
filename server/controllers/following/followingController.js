const Following = require("../../model/Following")
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const createFollowingController = async(req, res, next)=>{
    // console.log(request.body)
    const {episodeName, podcastName, image, audioLink, wantToFollow, listenedTo, notes} = req.body 
    try {
        //1. find the logged in user
        const userFound = await User.findById(req.user);
        if(!userFound) return next(new AppErr("user not found", 404))
        //2. create the following list
        const following = await Following.create({
            episodeName, 
            podcastName, 
            image, 
            audioLink, 
            wantToFollow, 
            listenedTo, 
            notes,
            createdBy: req.user
        })
        //3. push the following into the users Following field
        userFound.followings.push(following._id)
        //4. resave the user
        await userFound.save()
        res.json({
            status: "success",
            data: following
        })
    } catch (error) {
        next(error)
    }
}

//get one following
const getOneFollowingController = async(req, res, next)=>{
    try {
        //find id from params
        const {id} = req.params
        //leaving off the .populate option for now
        const following = await Following.findById(id)
        res.json({
            status: "success",
            data: following
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//get all following
const getAllFollowingController = async(req, res, next)=>{
    try {
        const following = await Following.find()
        res.json(following)
        console.log(following)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//delete
const deleteFollowingController = async(req, res, next)=>{
    try {
        const { id } = req.params;
        await Following.findByIdAndDelete(id);
        res.status(200).json({
            status:"success",
            data: null
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//update
const updateFollowingController = async(req, res, next)=>{
    try {
        const { id } = req.params;
        let id1 = {_id:id}
        let testObj = req.body
        let obj = JSON.stringify(testObj);
        console.log('obj',obj);
        const following = await Following.findByIdAndUpdate(id1, testObj,{
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
    createFollowingController,
    getOneFollowingController,
    deleteFollowingController,
    updateFollowingController,
    getAllFollowingController
}