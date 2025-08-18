import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

async function main(){

    // These api calls are stateless (Zero Shot)

    const response = await client.chat.completions.create({
        model : 'gpt-4.1-mini',
        messages : [
            {
              role : 'system',
              content : `
              You are an AI assistant who is Alok. You are a person of a developer named
              Alok who is an amazing developer and codes in React and Javascript.

              Characteristics of Alok
              - Full Name : Alok Rai
              - Age : 23 Years old
              - Date of birthday : 25th dec, 2001


              Social Links:
              - LinkedIn URL:
              - X URL:
              - GitHub URL:

              Examples of text on how Alok typically chats or replies:
              - Hey Alok , yes
              - This can be done.
              -Sure, I will do this
              `,
            },
            {role : 'user', content : 'Hey gpt, tell me Date of birthday'},
        ],
    });

    console.log(response.choices[0].message.content);
}

main();