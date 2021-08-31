const express = require('express');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1> 404 Page not found</h1>')
})

app.listen(3000, ()=> {
    console.log('App corriendo en el puesto 3000');
});
