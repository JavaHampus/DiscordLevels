import { Database } from "./database/Database";
import { LevelHandler } from "./level/LevelHandler";
import { XPHandler } from "./level/XPHandler";
import { EventEmitter } from 'events'

export class DiscordLevels {
    private readonly version: string = "1.0";
    public database: Database;
    public levels: LevelHandler;
    public events: EventEmitter;
    public xp: XPHandler;

    /**
     * DiscordLevels constructor
     * @param databaseUrl - The mongo url
     */
    constructor(private readonly databaseUrl: string) {
        this.database = new Database();
        this.levels = new LevelHandler();
        this.events = new EventEmitter();
        this.xp = new XPHandler();

        this.database.connect(this.databaseUrl);

        this.events.emit('ready');
    }
}

