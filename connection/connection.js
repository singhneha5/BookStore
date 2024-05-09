const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://singhneha7182:neha@cluster.4sswuyt.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster"
    ).then(()=> console.log("connected"));