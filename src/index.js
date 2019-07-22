const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./db/mongoose');

const productRoutes = require('./routes/product');
const appRoutes = require('./routes/app');
const checkoutRoutes = require('./routes/checkout');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const app = express();

const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.use(bodyParser.json());

app.use('/api/product', productRoutes);
app.use('/api/app', appRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

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
//         // СREATE;
//
//         // const cities = await rp({
//         //     url: 'https://api.novaposhta.ua/v2.0/json/',
//         //     method: 'POST',
//         //     body: {
//         //         modelName: 'Address',
//         //         calledMethod: 'getCities',
//         //         methodProperties: {},
//         //         apiKey: '1e89d76cd765e999771b836cf8cc1e8c'
//         //     },
//         //     json: true
//         // });
//         // await City.create(
//         //     cities.data.map(city => ({
//         //         name: city.DescriptionRu || city.Description,
//         //         ID: city.CityID,
//         //         countryID: 1,
//         //         deliveryIDs: [1]
//         //     }))
//         // );
//         await City.updateOne({ ID: 10 }, { $push: { deliveryIDs: 2 } });
//
//         res.send(await City.findOne({ ID: 10 }));
//     } catch (e) {
//         console.log(e);
//     }
// });

// app.get('/delivery', async (req, res) => {
//     try {
//         await Delivery.updateOne(
//             { ID: 1 },
//             { deliveryPrice: { price: 25, description: '25 грн' } }
//         );
//
//         await Delivery.updateOne(
//             { ID: 2 },
//             { deliveryPrice: { price: 0, description: 'бесплатно' } }
//         );
//
//         res.send(Delivery.find({}));
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

// app.get('/departments', async (req, res) => {
//     try {
//         const promises = [];
//         const departments = await rp({
//             url: 'https://api.novaposhta.ua/v2.0/json/',
//             method: 'POST',
//             body: {
//                 modelName: 'AddressGeneral',
//                 calledMethod: 'getWarehouses',
//                 methodProperties: {
//                     Language: 'ru'
//                 },
//                 apiKey: '1e89d76cd765e999771b836cf8cc1e8c'
//             },
//             json: true
//         });
//         const neededTypes = [
//             '6f8c7162-4b72-4b0a-88e5-906948c6a92f',
//             '841339c7-591a-42e2-8233-7a0a00f0ed6f',
//             '9a68df70-0267-42a8-bb5c-37f427e36ee4'
//         ];
//
//         departments.data.forEach(department => {
//             promises.push(
//                 new Promise(async resolve => {
//                     try {
//                         const city = await City.findOne({
//                             name:
//                                 department.CityDescriptionRu ||
//                                 department.CityDescription
//                         });
//
//                         if (!neededTypes.includes(department.TypeOfWarehouse)) {
//                             return resolve('');
//                         }
//
//                         const newDepartment = new Department({
//                             name:
//                                 department.DescriptionRu ||
//                                 department.Description,
//                             latitude: department.Latitude,
//                             longitude: department.Longitude,
//                             phone: department.Phone,
//                             ID: department.Ref,
//                             cityID: city.ID,
//                             deliveryID: 1,
//                             schedule: department.Schedule
//                         });
//                         await newDepartment.save();
//                         resolve(newDepartment);
//                     } catch (e) {
//                         resolve({ desc: department.Description, e });
//                     }
//                 })
//             );
//         });
//         // cities.slice(0, 50).forEach(city => {
//         //     promises.push(
//         //         new Promise(async (resolve, rej) => {
//         //             try {
//         //                 const departments = await rp({
//         //                     url: 'https://api.novaposhta.ua/v2.0/json/',
//         //                     method: 'POST',
//         //                     body: {
//         //                         modelName: 'AddressGeneral',
//         //                         calledMethod: 'getWarehouses',
//         //                         methodProperties: {
//         //                             Language: 'ru',
//         //                             CityName: 'Бердянск'
//         //                         },
//         //                         apiKey: '1e89d76cd765e999771b836cf8cc1e8c'
//         //                     },
//         //                     json: true
//         //                 });
//         //                 // console.log()
//         //                 resolve({ city, departments });
//         //             } catch (e) {
//         //                 console.log(city.name);
//         //
//         //                 resolve({ city: city.name, e });
//         //             }
//         //         })
//         //     );
//         // });
//
//         const data = await Promise.all(promises);
//
//         res.send(await Department.find({ cityID: 10 }, 'name'));
//     } catch (e) {
//         res.send(e);
//     }
// });

// app.get('/streets', async (req, res) => {
//     try {
//         const streets = await rp({
//             url:
//                 'https://me.citrus.ua/pub/v1/order-types/99/cities/4074/delivery/types/4/streets',
//             method: 'GET',
//             json: true
//         });
//
//         await Street.create(
//             streets.data.map(street => ({
//                 name: street.name,
//                 ID: street.id,
//                 type: street.type,
//                 cityID: 10
//             }))
//         );
//         res.send(await Street.find({}));
//     } catch (e) {
//         console.log(e);
//         res.send(e);
//     }
// });

const port = process.env.PORT || '5000';

app.listen(port);
