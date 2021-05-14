const quotes = [
    {
        name:'boy',
        quote:'i am a boy and also a student.'
    },
    {
        name:'girl',
        quote:'i am a girl and also a student'
    },
    {
        name:'mother',
        quote:'i love my child very......i dont love them hahahah'
    },
    {
        name:'father',
        quote:'i dont love my child'
    },

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener("click",displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quote.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
