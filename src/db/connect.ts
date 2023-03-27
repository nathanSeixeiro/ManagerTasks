import mongoose from 'mongoose'

async function main(){
    try{
        await mongoose.connect('mongodb+srv://seixeiro:didis1212@cluster0.6kllojl.mongodb.net/?retryWrites=true&w=majority')
        console.log('✔ connect');
        
    }catch(err){
        console.log(err);
    }
}

export default main