"use strict";
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    execute(a, b) {
        // ...
        const result = this.strategy.execute(a, b);
        console.log(result);
        return result;
        // ...
    }
}
class ConcreteStrategyAdd {
    execute(a, b) {
        return a + b;
    }
}
class ConcreteStrategySubtract {
    execute(a, b) {
        return a - b;
    }
}
class ConcreteStrategyMultiply {
    execute(a, b) {
        return a * b;
    }
}
class ConcreteStrategyDivide {
    execute(a, b) {
        return a / b;
    }
}
const context = new Context(new ConcreteStrategyAdd());
console.log('Client: Strategy is set to normal add.');
context.execute(2, 3);
console.log('');
console.log('Client: Strategy is set to substreact.');
context.setStrategy(new ConcreteStrategySubtract());
context.execute(2, 3);
