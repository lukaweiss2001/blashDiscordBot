from apscheduler.schedulers.asyncio import AsyncIOScheduler
from discord.ext.commands import Bot as BotBase

PREFIX = "<"
OWNER_IDS = []


class Bot(BotBase):
    def __init__(self):
        self.PREFIX = PREFIX
        self.ready = False
        self.guild = None
        self.scheduler = AsyncIOScheduler()

        super().__init__(command_prefix=PREFIX, owner_ids=OWNER_IDS)
    
    def run(self):
        pass
    
    async def on_connect(self):
        print("Bot connected")
    
    async def on_disconnect(self):
        print("Bot Disconnected")

    async def on_ready(self):
        pass

    async def on_message(self, message):
        pass


bot = Bot()