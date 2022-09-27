const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {

  rl.question('What is an activity you like doing? ', (answer2) => {

    rl.question('What do you listen to while doing that? ', (answer3) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {

        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {

          rl.question('Which sport is your absolute favourite? ', (answer6) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              // inner-most block

              // this is my version of the output, but the prompt wants a predetermined template :(
              // console.log(`${answer} likes ${answer2}. While doing this activity, ${answer} likes to listen to ${answer3}. Moreover, ${answer}'s favorite meal is ${answer4}, with their favorite dish being ${answer5}. ${answer}'s favorite sport is ${answer6}, which sounds like a lot of fun! Lastly, ${answer}'s superpower is ${answer7}. Keep it a secret, though!`);

              console.log(`${answer} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

              rl.close();

            });

          });

        });

      });

    });

  });

});

