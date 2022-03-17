import { Database } from "../database/Database";

export class XPHandler extends Database {
    /**
     * XPHandler constructor
     * @extends Database
     */
    constructor() {
        super();
    }

    /**
     * 
     * @param userId - The user id
     * @returns - The xp of the user
     */
    public async getXp(userId: string): Promise<number> {
        const user = await this.getUser(userId);

        if (!user) {
            this.createUser(userId, 1, 0);

            return 0;
        }

        return user.xp;
    }

    /**
     * 
     * @param userId - The user id
     * @param xp - The xp to set
     */
    public async setXp(userId: string, xp: number) {
        const user = await this.getUser(userId);
        user.xp = xp;

        await user.save();
    }

    /**
     * 
     * @param userId - The user id
     * @param xp - The xp to add
     */
    public async addXp(userId: string, xp: number) {
        const user = await this.getUser(userId);
        user.xp += xp;

        await user.save();
    }
}