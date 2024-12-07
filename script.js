const quote = document.getElementById("Quote");
const author = document.getElementById("author");
const btn = document.getElementById('bt');

let quotes = [
            
            ' "Everyone thinks of changing the world, but no one thinks of changing himself."',
            
            "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
            
            ' "The world is a book, and those who do not travel read only a page."',
            
            "First say to yourself what you would be; and then do what you have to do.",
            
            '"To bring anything into your life, imagine that its already there."',
            
            '"Better than a thousand hollow words, is one word that brings peace."',
            
            "The opportunity for brotherhood presents itself every time you meet a human being.",
            
            '"Freedom is the right to live as we wish."',

            "Whenever She say...chalo off ho rhi My heart say Please thodi der aur rok jao na.",

            "Ever tried Ever failed No matter. Try again fail again fail better the world is yours.",

            "My body wants sleep My mind wants success My heart wants her",

            "just tired",

            "some people want to see you fail, disoppoint them.",
            
            "If you are bitter, you are like a dry leaf that you can just squash, and you can get blown away by the wind. There is much more wisdom in forgiveness."


];
btn.addEventListener("click",function(){
// let random = Math.floor(Math.random() * lines.length) +1;
var random = quotes[Math.floor(Math.random() * quotes.length)]
// quote.innerHTML= random;
author.innerHTML=random;
})

// let btn = document.querySelector("#bt");
// let url = "https://api.quotable.io/random";
// async function quote() {
//     try{
//         let res = await axios.get(url);
//         // return res.data.content;
//         console.log(res);
//     } catch(e) {
//         console.log("error in api",e);
//     }
// }

// btn.addEventListener("click" , async () =>{
//     quote();
    // let content = await  quote();
    // let p = document.querySelector("#quote");
    // p.innerHTML = content;
// })