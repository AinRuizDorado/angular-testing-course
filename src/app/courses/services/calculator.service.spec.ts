import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () =>{

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        console.log('Before Each');
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);


        calculator = new CalculatorService(loggerSpy);
    })


    it('should add two numbers', () => {
        console.log('Add test');

        const result = calculator.add(2,2);

        expect(result).toBe(4, 'Unexpected add result');

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });

    it('should subtract two numbers', () => {
        console.log('Substract test');
        const result = calculator.subtract(2,2);

        expect(result).toBe(0, 'Unexpected substraction result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });
})