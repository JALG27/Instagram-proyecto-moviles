import { Request, Response} from 'express'
import User, { IUser } from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import bcrypt from "bcrypt"

function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400 //24 horas o 1 dia
    });
}

//controlador de registro

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Porfavor, envia tu email y tu password'})
    }
    
    const user = await User.findOne({email: req.body.email});
    console.log(req.body)
    if(user) {
        return res.status(400).json({msg: 'El usuario ya existe'});
    }
    console.log('hola')
    const Newuser = new User(req.body);
    await Newuser.save();
    return res.status(201).json(Newuser);
}

//controlador de login

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Porfavor, envia tu email y tu password'})
    }

    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(400).json({msg: 'El usuario no existe'});
    }
    const isMatch = await user.comparePassword(req.body.password)
    if (isMatch) {
        return res.status(200).json({token: createToken(user)})
    }

    return res.status(400).json({
        msg: 'El email o el password son incorrectos'
    });
}