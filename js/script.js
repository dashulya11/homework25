function counter(initialValue = 0) {
    let counterStatist = {
        increase: 0,
        decrease: 0,
        get: 0,
        getStatist: 0,
    }
    return  {
        increase(num) {
            counterStatist.increase++;
            return initialValue += num;
        },
        decrease(num) {
            counterStatist.decrease++;
            return initialValue -= num;
        },
        get() {
            counterStatist.get++;
            return initialValue;
        },
        getStatist() {
            counterStatist.getStatist++;
            return counterStatist;
        },
        getClean() {
            initialValue = 0
            counterStatist.increase = 0,
            counterStatist.decrease = 0,
            counterStatist.get = 0,
            counterStatist.getStatist = 0
        }
    }
} 
const counterInst1 = counter();
counterInst1.increase(10);
counterInst1.increase(10);
counterInst1.decrease(5);
counterInst1.decrease(5);
counterInst1.decrease(5);
console.log(counterInst1.get());
console.log(counterInst1.getStatist());

counterInst1.getClean(); 
console.log(counterInst1.get());
console.log(counterInst1.getStatist());









