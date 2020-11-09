module.exports = {
    name: 'wiki',
    description: 'Finds LU wiki pages',
    execute(message, args){
        //replaces the ',' generated from the array into '_'
        //this is done since the LU wiki seperates words with '_'
        const words = args.join().replace(/,/g, "_");
        
        //makes the first letter of each word uppercase
        //this is done because the LU wiki articles are case sensitive
        for(let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
        }
       //prints the actual URL to the chat
        message.channel.send("https://legouniverse.fandom.com/wiki/" + words);
    }
}