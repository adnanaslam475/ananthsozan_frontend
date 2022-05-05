const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://adnan:adnannaslam475@cluster0.olyyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(res => {
        console.log('connetced');
    })
    .catch(e => console.log('errto connnt', process.env.DATABASE, e))