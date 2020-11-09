module.exports = {
    name: 'ping',
    description: 'ping pong',
    execute(message, args){
        //outputs 'pong' to chat when called
        message.channel.send('pong');
    }
}