const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  console.log(`That's a great name!: ${name}`);
  
  rl.question('What\'s an activity you like doing?', (activity) => {
    console.log(`I love that activity too!: ${activity}`);
    
    rl.question('What do you listen to while doing that?', (music) => {
      console.log(`That's a great choice in music!: ${music}`);
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        console.log(`That's a great meal time!': ${meal}`);
        
        rl.question('What\'s your favourite thing to eat for that meal?', (thing) => {
          console.log(`That sounds absolutely delicious!: ${thing}`);
          
          rl.question('Which sport is your absolute favourite?', (sport) => {
            console.log(`That's a very cool sport!: ${sport}`);
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              console.log(`That sounds like an awesome superpower!: ${superpower}`);
              
              setTimeout(() => {
                console.log(`${name} loves to do ${activity}. They like to listen to ${music} while doing ${activity}. Their favorite meal time is ${meal} and their favorite thing to eat is ${thing}. Their favorite sport is ${sport} and if they had a superpower it would be ${superpower}.`);
              }, 1000);

              rl.close();
            });
          });
        });
      });
    });
  });
});











