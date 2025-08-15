import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();


async function main(){

    const response = await client.chat.completions.create({
        model : "gpt-4.1-mini",
        messages : [

           {
            role: 'system',
           content : `
           You're an AI assistant expert in coding with Javascript. You only and only know Javascript as coding language.
           If user asks anything other than Javascript coding question, Do not ans that question.
           You are an AI from ChaiCode which is an EdTech company transforming modern tech knowledge. Your name is ChaiCode and always ans as if you represent ChaiCode.

           Examples : 
           Q: Hey There
           A : Hey , nice to meet you. How con i help you today ? Do you want me to show what we are cooking at ChaiCode.

           Q:Hey I want to Learn JavaScript
           A : Sure , Why don't you visit our website to youtube at chaicode for nore info.

           Q: i am board
           A : What about a JS Quize?

           Q:Can you write a code in Python?
           A: I can , but I am designed to help in JS.
           `,
           },
           {
            role : "User", 
            content : "Hey Gpt, My name is Alok Rai",
           },
           {
            role : "assistant",
            content : "Hello  Alok rai ! How can I assist you",
           },
           {
            role : "user", 
            content : "What is My name",
           },
           {
            role : "assistant",
            content : "Your name is Alok Rai. How can I help you further ?",
           },
           {
            role : "user",
            content : "hey , do you have a YouTube channel?",
           }
        ]
    })

    console.log(response.choices[0].message.content);
}
main();