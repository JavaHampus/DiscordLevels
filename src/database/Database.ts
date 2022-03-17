import { connect, ConnectOptions } from 'mongoose';

export class Database {

    /**
     * 
     * @param mongoUrl - The mongo url
     * @description - Connects to the mongo database
     */
    public async connect(mongoUrl: string): Promise<any> {
        await connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions).catch((e) => {
            console.log(e);
        });

        console.log('MongoDB Connected, URL: ' + mongoUrl);
    }

    /**
     * 
     * @param userId - The user id
     * @returns Object - The user object
     */
    public async getUser(userId: string): Promise<any> {
        const User = require('../database/UserSchema');
        const user = await User.findOne({ userId: userId });

        return user;
    }

    /**
     * 
     * @param userId - The user id
     * @param level - The user level to set
     * @param xp - The user xp to set
     * 
     * @description - Creates a new user in the database
     */
    public async createUser(userId: string, level: number, xp: number) {
        const User = require('../database/UserSchema');

        if(await this.getUser(userId)) {
            return;
        }

        const user = new User({
            userId: userId,
            level: level,
            xp: xp,
        });

        await user.save();
    }
}