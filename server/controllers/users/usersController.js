const bcrypt = require('bcryptjs')
const User = require("../../model/User")
const { AppErr, appErr } = require('../../utils/appErr')
const generateToken = require('../../utils/generateToken')
const verifyToken = require('../../utils/verifyToken')



//register
const registerUserController = async(req, res, next)=>{
    const { fullname, password, email } = req.body
    // console.log('test')
    try{
        //check if email exsists
        const userFound = await User.findOne({ email })
        if(userFound){
            next(appErr('user already exists', 400))
            return
        }
        //hash userpassword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            fullname,
            email, 
            password: hashedPassword,
        });
        res.json({
            status: "success",
            fullname: user.fullname,
            email: user.email,
            id: user._id,
        });
    } catch (error) {
        // console.log(error)
        next(new AppErr(error.message, 500))
    }
}

//login
const userLoginController = async(req, res, next)=>{
    const { email, password } = req.body
    console.log(req.body)
    try {
        //check if email exists
        const userFound = await User.findOne({email})
        if(!userFound) 
            return next(new AppErr("invalid login credentials", 400))

        //check if password is correct
        const isPasswordMatch = await bcrypt.compare(password, userFound.password)
        if(!isPasswordMatch) 
        return next(new AppErr("invalid login credentials", 400))

        res.json({
            status: "success", 
            fullname: userFound.fullname,
            id: userFound._id,
            token: generateToken(userFound._id)
        })
    } catch (error) {
        console.log(error)
        next(new AppErr(error.message, 500))
    }
}

//profile
const userProfileController = async(req, res, next)=>{
    console.log(req.user)
    try {
        const user = await User.findById(req.user)({
            path:"followings",
            //the below code didn't return relevant info
            // populate: {
            //     path:"followings",
            //     model:"Following"
            // }
        })
        res.json(user)
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//delete
const deleteUserController = async(req, res, next)=>{
    try {
        await User.findByIdAndDelete(req.user)
        res.status(200).json({
            status:"success",
            data: null
        })
        res.json({msg: 'Delete user route'})
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

//update
const updateUserController = async(req, res, next)=>{
    try {
        //check if email exists
        if(req.body.email){
        const userFound = await User.findOne({email: req.body.email})
        if(userFound) return next(
            new AppErr('email is taken by another user or you already have this email registered with us', 400)
            )
        }
        //check if user is updating their password
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            //update the user
            const user = await User.findByIdAndUpdate(
                req.user,
                {
                password: hashedPassword,
                },
                {
                new: true,
                runValidators: true
                }
            )
            //send response to the user
            return res.status(200).json({
                status:"success",
                data: user
            })
        }
        const user = await User.findByIdAndUpdate(req.user, req.body, {
            new: true,
            runValidators: true
        })
        //send response
        res.status(200).json({
            status:"success",
            data: user
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    registerUserController,
    userLoginController,
    userProfileController,
    deleteUserController,
    updateUserController
}