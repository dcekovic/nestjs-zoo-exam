"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.AnimalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AnimalSchema = new mongoose_1.default.Schema({
    name: { type: String },
    type: { type: String },
    age: { type: Number },
    location: { type: String },
    gender: { type: String },
    characteristics: { type: mongoose_1.Schema.Types.Mixed },
    zookeeper: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Zookeeper' },
});
exports.Animal = mongoose_1.default.model('Animal', exports.AnimalSchema);
//# sourceMappingURL=animal.model.js.map