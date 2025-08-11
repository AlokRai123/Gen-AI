import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const query = "Hello Mister ChatGpt How are you";

const token = enc.encode(query);
console.log(token);


const decodeQuery =  [  13225, 130028,
  17554,     38,
    555,   3253,
    553,    481 ];

const decodedQuery = enc.decode(decodeQuery);
console.log(decodedQuery);