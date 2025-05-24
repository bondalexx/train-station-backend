"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainsService = void 0;
const common_1 = require("@nestjs/common");
let TrainsService = class TrainsService {
    constructor() {
        this.trains = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.trains;
    }
    findOne(id) {
        return this.trains.find(t => t.id === id);
    }
    create(data) {
        const train = { id: this.idCounter++, ...data };
        this.trains.push(train);
        return train;
    }
    update(id, data) {
        const train = this.findOne(id);
        if (!train)
            return null;
        Object.assign(train, data);
        return train;
    }
    delete(id) {
        this.trains = this.trains.filter(t => t.id !== id);
        return { deleted: true };
    }
};
exports.TrainsService = TrainsService;
exports.TrainsService = TrainsService = __decorate([
    (0, common_1.Injectable)()
], TrainsService);
//# sourceMappingURL=trains.service.js.map