"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const uri = 'mongodb+srv://dautchekovikj:F3Ei%40ZWDKe7F7A%40@cluster0.dug6qbv.mongodb.net/?retryWrites=true&w=majority';
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map