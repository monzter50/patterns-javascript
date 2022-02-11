"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet({ message, name }) {
    return `${message}, ${name}`;
}
exports.greet = greet;
const message = greet({ message: 'Hello', name: 'Jose' });
console.log(message);
