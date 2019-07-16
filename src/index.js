const express = require('express');
const path = require('path');
require('./db/mongoose');

const productRoutes = require('./routes/product');
const appRoutes = require('./routes/app');
const checkoutRoutes = require('./routes/checkout');

const app = express();

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.use('/api/product', productRoutes);
app.use('/api/app', appRoutes);
app.use('/api/checkout', checkoutRoutes);

// app.get('/setup', async (req, res) => {
//     try {
//         const cities = await rp.post({
//             url: 'https://api.novaposhta.ua/v2.0/json/',
//             body: {
//                 apiKey: '1e89d76cd765e999771b836cf8cc1e8c',
//                 modelName: 'Address',
//                 calledMethod: 'getCities'
//             },
//             json: true
//         });
//         console.log(
//             cities.data.map(el => ({
//                 text: el.DescriptionRu,
//                 ID: el.CityID,
//                 countryID: 1
//             }))
//         );
//         await City.insertMany(
//             cities.data.map(el => ({
//                 text: el.DescriptionRu || el.Description,
//                 ID: el.CityID,
//                 countryID: 1
//             }))
//         );
//         res.send(cities);
//     } catch (e) {
//         console.log(e);
//         res.send(e);
//     }
// });

// app.get('/update-cities', async (req, res) => {
//     try {
//         // const { _id } = await Delivery.findOne({ ID: 1 });
//         // await City.updateMany({}, { $pop: { deliveryIDs: 1 } });
//         res.send(
//             await City.find()
//                 .sort({ ID: 1 })
//                 .populate('delivery')
//                 .limit(10)
//         );
//     } catch (e) {
//         console.log(e);
//     }
// });

// app.get('/delivery', async (req, res) => {
//     try {
//         const delivery = new Delivery({
//             name: "Курьер Dr.Clauder's",
//             ID: 2,
//             descr:
//                 'Доставка осуществляется с пн. по сб. с 09:00 до 19:00 бесплатно.'
//         });
//
//         await delivery.save();
//
//         res.send(delivery);
//     } catch (e) {
//         console.log(e);
//     }
// });

// app.get('/payment', async (req, res) => {
//     try {
//         const payment = new Payment({
//             name: 'Наложенный платеж',
//             ID: 3
//         });
//
//         await payment.save();
//         res.send(payment);
//     } catch (e) {
//         console.log(e);
//         res.send(e);
//     }
// });

// app.get('/update-delivery', async (req, res) => {
//     try {
//         await Delivery.updateOne({ ID: 2 }, { $push: { paymentIDs: 2 } });
//         res.send(await Delivery.find().populate('payment'));
//     } catch (e) {
//         res.send(e);
//     }
// });

const port = process.env.PORT || '5000';

app.listen(port);
