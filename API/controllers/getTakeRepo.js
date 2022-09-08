const axios = require('axios')

module.exports = {
    async index(request, response){
        try{
            let {data} = await axios ('https://api.github.com/orgs/takenet/repos')
            data = data.filter(function(item) {
                return item.language === "C#"
            });

            let res = []
            for (let index = 0; index < 5; index++) {
                res.push({
                    name: data[index].name,
                    description: data[index].description,
                    created_at: data[index].created_at
                });
            }
            return response.json(res)
        }catch(e){
            response.status(500).send('Something broke! Sorry for this :/');
        }
        
    }
};