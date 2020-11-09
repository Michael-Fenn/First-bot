const { execute } = require("./ping");
const math = require('mathjs');
module.exports = {
    name: 'math',
    description: 'can do simple equations',
    execute(message, args){
        //makes sure the user entered equation is valid
        let resp;
        try{
            resp = math.evaluate(args.join(' '));
        }
        catch(t){
            return message.channel.send('Invalid input');
        }
        //outputs the equations results to the chat
        message.channel.send(resp);
    }
}