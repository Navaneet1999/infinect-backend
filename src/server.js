const app = require('./index');
const server = require('./configs/db')

app.listen(process.env.PORT || 3002, async(req,res) => {
    try{
        await server()
        console.log("Default port is active on PORT");
    } catch(err){
        console.log("err",err);
    }
})