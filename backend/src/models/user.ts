import {model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
    nombre: string,
    apellido: string,
    usuario: string,
    email: string,
    password: string,
    foto: string
}

const userSchema = new Schema({
    nombre: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    usuario: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: false
    }
});

userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();  
});

userSchema.methods.comparePassword = async function(password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', userSchema);