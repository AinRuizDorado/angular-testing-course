import { fakeAsync, flush, tick } from "@angular/core/testing";


fdescribe("Async Testing Example", () => {

    it("Asynchronous text example with jasmine done()", (done : DoneFn ) => {
        let test = false;

        setTimeout(() => {

            console.log('Running Assertions');
            
            test = true;

            expect(test).toBeTruthy();
            done();
        }, 1000);

    } )


    it(' Asynchronous test example', fakeAsync( () =>{
        let test = false;

        setTimeout(() => {
            test = true;

            

        }, 1000);

        flush();

        expect(test).toBeTruthy();

    }));

})