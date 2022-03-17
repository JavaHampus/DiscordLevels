import { Database } from "../database/Database";

export class LevelHandler extends Database {
    /**
     * LevelHandler constructor
     * @extends Database
     */
    constructor() {
        super();
    }

    /**
     * 
     * @param userId - The user id
     * @returns - The level of the user
     */
    public async getLevel(userId: string): Promise<number> {
        const user = await this.getUser(userId);

        if(!user) {
            this.createUser(userId, 1, 0);

            return 0;
        }

        return user.level;
    }

    /**
     * 
     * @param userId - The user id
     * @param level - The level to set
     */
    public async setLevel(userId: string, level: number) {
        const user = await this.getUser(userId);
        user.level = level;

        await user.save();
    }

    /**
     * 
     * @param userId - The user id
     */
    public async levelUp(userId: string) {
        const user = await this.getUser(userId);
        user.level += 1;

        await user.save();
    }
    
}