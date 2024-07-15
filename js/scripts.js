/*5. Bottone */

const ticketBtn = document.getElementById('ticket-button');
ticketBtn.addEventListener(
    'click',
    function () {
        /*1. Chiedere il nome all'utente */
        const NameInput = document.getElementById('Name');
        const Name = NameInput.value;
        console.log(Name, typeof Name);

        /*2. Chiedere all'utente dove deve andare (i chilometri da fare)*/
        const KmInput = document.getElementById('Km')
        const Km = KmInput.value;
        console.log( Km, typeof Km);
        const NumberKm = parseInt(Km);
        console.log('NumberKm', NumberKm, typeof NumberKm);

        /*3. Chiedere l'età del passeggero*/
        const ageInput = document.getElementById('age');
        const age = ageInput.value;
        console.log('age', age, typeof age);
        const NumberAge = parseInt(age);
        console.log('NumberAge', NumberAge, typeof NumberAge);

        /*4. Calcolo il prezzo base del biglietto*/
        if (NumberAge < 18){
            const price = NumberKm * 0.21;
            console.log('price', price, typeof price);

            const discount = (price / 100) * 20;
            console.log('discount', discount, typeof discount);

            const finalprice = price - discount;

            const resultPrice = document.getElementById('result-price');
            resultPrice.innerHTML = price.toFixed(2);
        }
        else if (NumberAge > 65){
            const price = NumberKm * 0.21;
            console.log('price', price, typeof price);

            const discount = (price / 100) * 40;
            console.log('discount', discount, typeof discount);

            const finalprice = price - discount;

            const resultPrice = document.getElementById('result-price');
            resultPrice.innerHTML = price.toFixed(2);
        }
        else {
            const price = NumberKm * 0.21;
            console.log('price', price, typeof price);

            const resultPrice = document.getElementById('result-price');
            resultPrice.innerHTML = price.toFixed(2);
        }
    }
)
