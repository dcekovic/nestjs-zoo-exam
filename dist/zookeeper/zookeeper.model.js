"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zookeeper = exports.ZookeeperSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ZookeeperSchema = new mongoose_1.default.Schema({
    name: { type: String },
    age: { type: Number },
    location: { type: String },
    isActive: { type: Boolean },
    animals: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Animal' }],
});
exports.Zookeeper = mongoose_1.default.model('Zookeeper', exports.ZookeeperSchema);
//# sourceMappingURL=zookeeper.model.js.map