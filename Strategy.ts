class Context{

    private strategy: Strategy

    constructor(strategy: Strategy){
        this.strategy = strategy
    }

    public setStrategy(strategy: Strategy){
        this.strategy = strategy
    }

    public execute(a:number,b:number): number {
        // ...
        const result = this.strategy.execute(a, b)
        console.log(result);
        return result

        // ...
    }

}

interface Strategy {
    execute(a:number,b: number): number;
}


class ConcreteStrategyAdd  implements Strategy {
    public execute(a:number,b: number): number {
        return a + b;
    }
}

class ConcreteStrategySubtract implements Strategy {
    public execute(a:number,b: number): number {
        return a - b;
    }
}

class ConcreteStrategyMultiply  implements Strategy {
    public execute(a:number,b: number): number {
        return a * b;
    }
}

class ConcreteStrategyDivide implements Strategy {
    public execute(a:number,b: number): number {
        return a / b;
    }
}

const context = new Context(new ConcreteStrategyAdd());
console.log('Client: Strategy is set to normal add.');
context.execute(2,3);

console.log('');

console.log('Client: Strategy is set to substreact.');
context.setStrategy(new ConcreteStrategySubtract());
context.execute(2,3);