import { type Client, type IAgentRuntime, elizaLogger } from "@elizaos/core";

export class AutoClient {
    interval: NodeJS.Timeout | null = null;
    runtime: IAgentRuntime;

    constructor(runtime: IAgentRuntime) {
        this.runtime = runtime;
        this.startLoop();
    }

    startLoop() {
        this.interval = setInterval(async () => {
            elizaLogger.log("running auto client...");
            // maybe add your agent logic here
        }, 60 * 60 * 1000);
    }

    stopLoop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            elizaLogger.log("Auto client interval cleared.");
        }
    }
}

export const AutoClientInterface: Client = {
    start: async (runtime: IAgentRuntime) => {
        const client = new AutoClient(runtime);
        return client;
    },
    stop: async (_runtime: IAgentRuntime) => {
        console.warn("Direct client does not support stopping yet");
    },
};

export default AutoClientInterface;
