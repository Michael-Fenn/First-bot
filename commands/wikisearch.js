const fetch = require('node-fetch');
module.exports = {
    name: "wikisearch",
    description: "Properly searches the LU Wiki",
    execute(message,args){
        //formats to fit the proper url
        var term = args.join().replace(/,/g, "_");
        term = term.toLowerCase();
        //creates the api url being used
        var apiurl = 'https://legouniverse.fandom.com/api/v1/Search/List?query=' + term + '&limit=1';
        
        var result;
        fetch(apiurl)
            //converts response into a json format
            .then(response => response.json())
            //sends the proper url into the chat
            .then(data => message.channel.send(data.items[0].url))
            //for when a page isn't found
            .catch(function(e){
                message.channel.send('No results found')
            });
            
    }
}