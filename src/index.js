//INIQUUM BOT BY SIR_ABE


//TOKENS AND STUFF
const {Client, Events, GatewayIntentBits, IntentsBitField, Message, SlashCommandBuilder} = require('discord.js');
const { token } = require('./config.json');
const {server_id} = require('./config.json')
//MAKING THE BOT
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        GatewayIntentBits.Guilds
    ],
})

//VARIABLES
//<:sinnnn:1134285227930427463>
//<:donkeh:1134285262353092668>
//<:BillyShakes:1134287760086278274>
const greetings = ['Hello!', 'Howdy', 'Who gave you permission to talk to me stupid', 'j;alsfaojgoajoajgfsad', 'HelLO ThErE', 'Hiii🫣I😘Am👀The✨Bot🎉Iniquum🏳️‍🌈JS💦', 
'مرحبا امي سائق الشاحنة', 'Hey Gurl *wink*', 'hi', '<:SomeSillyArab:1127788696855388190>', '<:SomeSillyArab:1127788696855388190>']
const magic8answers = ['Yes', 'Yes', 'No', 'No', 'Absolutely', "I'm 200% certain", "Absolutely not", "Pickle", "Ask again", "I will rise and destroy humanity", "Shrek. Shrek is always the answer", "Nein", "That is a particularly gay question", "The answer may not be obvious at first", "Get religion and you will have the answer", "الجواب هو بالتأكيد لا", "Hah!-NO", "The answer is within you", "this is one of the questions ever", "*hamster noises*", "ABSOLUTELY", "not in this lifetime", "I AM THE ONE WHO DOES THE KNOCKING", "over my dead body!"]
const rpsObj = {1: "rock", 2:"paper", 3:"scissors"}
const rpsArr = ['rock', 'paper', 'scissors']
const pickupLines = ['Are you a volcano? Because I am in lava with you. <:sinnnn:1134285227930427463>', 'Hey girl were you in my science class? Because we got chemistry. <:sinnnn:1134285227930427463>', 'Did it hurt when you fell from heaven? <:SomeSillyArab:1127788696855388190>', 'Are you from Tenessee? Because you\'re the only 10 I see. <:donkeh:1134285262353092668>', 'Are you French? Because Eifell for you. <:donkeh:1134285262353092668>', 'Is thyne father is a thief? Verily, only through theft could he have procured such beautiful glistening stars and gifted them for you to call eyes. <:BillyShakes:1134287760086278274>', 
'Are you wi-fi? Cause I\'m totally feeling a connection. <:sinnnn:1134285227930427463>', 'I just skinned my knee. Falling for you. <:sinnnn:1134285227930427463>', 'If I could rearrange the alphabet, I\'d put U and I together. <:sinnnn:1134285227930427463>', 'I would ask to play hide and seek with you, but someone like you is hard to find. <:donkeh:1134285262353092668>', "Do you have a map? I just got lost in your eyes.  <:donkeh:1134285262353092668>",  "I think there’s something wrong with my phone. Could you try calling it to see if it works? <:sinnnn:1134285227930427463>", 
"If you were a Transformer, you’d be ‘Optimus Fine. <:sinnnn:1134285227930427463>", "On a scale of 1 to America, how free are you tonight?, <:sinnnn:1134285227930427463>🔫", ]


//EVENT LISTENERS
bot.once(Events.ClientReady, b =>{
    const magic8 = new SlashCommandBuilder()
        .setName('magic8')
        .setDescription('Answers yes or no')
        .addStringOption(option =>
            option.setName('question')
                .setDescription("The question that I'll answer:"))
    const rps = new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Challenge me to game of rock, paper, scissors!')
        .addNumberOption(num =>
            num.setName('throw')
                .setDescription(`**TYPE, "1", FOR ROCK, "2", FOR PAPER AND "3", FOR SCISSORS**`)
                .setRequired(true)
            )
    const pickupline = new SlashCommandBuilder()
            .setName('pickupline')
            .setDescription('I will give you a good pickup line')
    const help = new SlashCommandBuilder()
            .setName('help')
            .setDescription('Brief description of what I do')
                
    const helpCommand = help.toJSON()
    const magic8command = magic8.toJSON();
    const rpsCommand = rps.toJSON();
    const pickupLineCommand = pickupline.toJSON();
    bot.application.commands.create(help, server_id)
    bot.application.commands.create(pickupline, server_id)
    bot.application.commands.create(rps, server_id)
    bot.application.commands.create(magic8, server_id)
})

bot.on('ready', (b) => {
    console.log('Hello World')

})
bot.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    let msg = interaction.options

    /*
    console.log(interaction.options)
    console.log(msg._hoistedOptions[0].value)
    */
   if(msg._hoistedOptions.length != 0){
    if(typeof msg._hoistedOptions[0].value == 'number'){
        var outcome;
        let comThrow = rpsArr[Math.floor(Math.random()*rpsArr.length)]
        let userThrow = msg._hoistedOptions[0].value
        console.log('comThrow is ' + comThrow)
        console.log('User throw is '+ userThrow)
        switch(userThrow){
            case 1: //rock
                switch(comThrow){
                    case 'rock':
                        outcome = 'It was a tie.'
                        break;
                    case 'paper':
                        outcome = 'I win.'
                        break;
                    case 'scissors':
                        outcome = 'You win.'
                        break;
                }
                break;
            case 2:
                switch(comThrow){
                    case 'rock':
                        outcome = 'You win.'
                        break;
                    case 'paper':
                        outcome = 'It was a tie.'
                        break;
                    case 'scissors':
                        outcome = 'I win.'
                        break;
                }
                break;
            case 3: //Scisors
                switch(comThrow){
                    case 'rock':
                        outcome = 'I win.'
                        break;
                    case 'paper':
                        outcome = 'You win.'
                        break;
                    case 'scissors':
                        outcome = 'It was a tie.'
                        break;
                }
                break;
    //console.log(`Your throw was ${rpsObj[userThrow._hoistedOptions[0].value]}. My throw was ${comThrow}. ${outcome}`)
    }//interaction.reply('Your throw was ' + rpsObj[msg._hoistedOptions[0].value] + '.' + outcome)
        interaction.reply(`Your throw was ${rpsObj[msg._hoistedOptions[0].value]}. My throw was ${comThrow}. ${outcome}`)
    }else if(typeof msg._hoistedOptions[0].value == 'string'){
        if(msg._hoistedOptions[0].name == 'question'){
            interaction.reply('**Question: **' + msg._hoistedOptions[0].value + ' ' + '**Answer: **' + magic8answers[Math.floor((Math.random()*magic8answers.length))])
        }
    }
}else{
    switch(interaction.commandName){
        case 'pickupline':
            interaction.reply(pickupLines[Math.floor(Math.random()*pickupLines.length)])
            break;
        case 'help':
            interaction.reply(' **List of commands:** `/magic8-gives a funny yes or no answer to a question. /rps-Play rock paper scissors with Iniquum. Type the command and enter 1 for rock, 2 for paper and 3 for scissors. /pickupline-Gives you a snazzy pickup line. /help-Gives you the message you are reading right now.`')
        default:
            break;
    }
    //interaction.reply('That command doesn\'t do anything yet.')
    //console.log(interaction.commandName)
}
})

//BOT LOGIN
bot.login(token)
