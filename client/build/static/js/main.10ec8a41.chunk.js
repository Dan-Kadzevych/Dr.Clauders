(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        364: function(n, e, t) {
            n.exports = t.p + 'static/media/sprite.9cd39295.svg';
        },
        377: function(n, e, t) {
            n.exports = t.p + 'static/media/story-1.44015291.jpg';
        },
        378: function(n, e, t) {
            n.exports = t.p + 'static/media/story-2.2d8097b7.jpg';
        },
        379: function(n, e, t) {
            n.exports = t.p + 'static/media/back.f250e126.jpg';
        },
        380: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-1.c1be2ef1.jpg';
        },
        381: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-2.a1749dd0.jpg';
        },
        382: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-3.83ce8d3e.jpg';
        },
        383: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-4.474f15ed.jpeg';
        },
        384: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-5.051ca274.jpg';
        },
        385: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-6.d7f9995b.jpg';
        },
        386: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-7.d7178cf4.jpg';
        },
        387: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-8.30c83157.jpg';
        },
        388: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-9.2f3350c5.webp';
        },
        389: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-10.6f833fd4.webp';
        },
        390: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-11.024df8b3.jpg';
        },
        391: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-12.aeccaa9f.jpg';
        },
        392: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-13.85f3950a.jpg';
        },
        393: function(n, e, t) {
            n.exports = t.p + 'static/media/gallery-14.e70c7075.jpg';
        },
        397: function(n, e, t) {
            n.exports = t.p + 'static/media/404-image.cfdd838c.jpg';
        },
        398: function(n, e, t) {
            n.exports = t.p + 'static/media/logo.fb8e0a1e.jpg';
        },
        420: function(n, e, t) {
            n.exports = t(808);
        },
        808: function(n, e, t) {
            'use strict';
            t.r(e);
            var r,
                a = t(0),
                c = t.n(a),
                o = t(43),
                i = t.n(o),
                u = t(58),
                l = t(349),
                s = t(20),
                d = t(18),
                p = t(358),
                m = t(119),
                f = t(353),
                g = t(23),
                b = ''.concat('GET_PRODUCTS', '_REQUEST'),
                E = ''.concat('GET_PRODUCTS', '_SUCCESS'),
                v = ''.concat('GET_PRODUCTS', '_FAILURE'),
                h = {
                    GET_PRODUCTS_REQUEST: b,
                    GET_PRODUCTS_SUCCESS: E,
                    GET_PRODUCTS_FAILURE: v
                },
                O = ''.concat('ADD_CATEGORY', '_REQUEST'),
                y = ''.concat('ADD_CATEGORY', '_SUCCESS'),
                j = ''.concat('ADD_CATEGORY', '_FAILURE'),
                _ = ''.concat('REMOVE_CATEGORY', '_REQUEST'),
                C = ''.concat('REMOVE_CATEGORY', '_SUCCESS'),
                S = ''.concat('REMOVE_CATEGORY', '_FAILURE'),
                T = ''.concat('UPDATE_CATEGORY', '_REQUEST'),
                R = ''.concat('UPDATE_CATEGORY', '_SUCCESS'),
                U = ''.concat('UPDATE_CATEGORY', '_FAILURE'),
                D = ''.concat('ADD_PRODUCT', '_REQUEST'),
                A = ''.concat('ADD_PRODUCT', '_SUCCESS'),
                I = ''.concat('ADD_PRODUCT', '_FAILURE'),
                P = ''.concat('REMOVE_PRODUCT', '_REQUEST'),
                x = ''.concat('REMOVE_PRODUCT', '_SUCCESS'),
                k = ''.concat('REMOVE_PRODUCT', '_FAILURE'),
                w = ''.concat('UPDATE_PRODUCT', '_REQUEST'),
                L = ''.concat('UPDATE_PRODUCT', '_SUCCESS'),
                N = ''.concat('UPDATE_PRODUCT', '_FAILURE'),
                M = {
                    ADD_CATEGORY_REQUEST: O,
                    ADD_CATEGORY_SUCCESS: y,
                    ADD_CATEGORY_FAILURE: j,
                    REMOVE_CATEGORY_REQUEST: _,
                    REMOVE_CATEGORY_SUCCESS: C,
                    REMOVE_CATEGORY_FAILURE: S,
                    UPDATE_CATEGORY_REQUEST: T,
                    UPDATE_CATEGORY_SUCCESS: R,
                    UPDATE_CATEGORY_FAILURE: U,
                    START_UPDATING_CATEGORY: 'START_UPDATING_CATEGORY',
                    STOP_UPDATING_CATEGORY: 'STOP_UPDATING_CATEGORY',
                    ADD_PRODUCT_REQUEST: D,
                    ADD_PRODUCT_SUCCESS: A,
                    ADD_PRODUCT_FAILURE: I,
                    REMOVE_PRODUCT_REQUEST: P,
                    REMOVE_PRODUCT_SUCCESS: x,
                    REMOVE_PRODUCT_FAILURE: k,
                    UPDATE_PRODUCT_REQUEST: w,
                    UPDATE_PRODUCT_SUCCESS: L,
                    UPDATE_PRODUCT_FAILURE: N,
                    START_UPDATING_PRODUCT: 'START_UPDATING_PRODUCT',
                    STOP_UPDATING_PRODUCT: 'STOP_UPDATING_PRODUCT'
                },
                F = { products: [] },
                G = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : F,
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        t = e.type,
                        r = e.payload;
                    switch (t) {
                        case h.GET_PRODUCTS_REQUEST:
                            return Object(g.a)({}, n, { products: [] });
                        case h.GET_PRODUCTS_SUCCESS:
                        case x:
                        case L:
                        case A:
                            return Object(g.a)({}, n, { products: r.products });
                        default:
                            return n;
                    }
                },
                Y = t(10),
                V = t.n(Y),
                z = t(22),
                Q = t(46),
                B = t.n(Q),
                H = t(93),
                q = t(32),
                W = t(6),
                X = t.n(W),
                J = t(183),
                $ = t(11),
                K = ''.concat('GET_APP_CONFIG', '_REQUEST'),
                Z = ''.concat('GET_APP_CONFIG', '_SUCCESS'),
                nn = ''.concat('GET_APP_CONFIG', '_FAILURE'),
                en = {
                    GET_APP_CONFIG_REQUEST: K,
                    GET_APP_CONFIG_SUCCESS: Z,
                    GET_APP_CONFIG_FAILURE: nn
                },
                tn = {
                    GET_MY_PROFILE_REQUEST: ''.concat(
                        'GET_MY_PROFILE',
                        '_REQUEST'
                    ),
                    GET_MY_PROFILE_SUCCESS: ''.concat(
                        'GET_MY_PROFILE',
                        '_SUCCESS'
                    ),
                    GET_MY_PROFILE_FAILURE: ''.concat(
                        'GET_MY_PROFILE',
                        '_FAILURE'
                    ),
                    LOGOUT_REQUEST: ''.concat('LOGOUT', '_REQUEST'),
                    LOGOUT_SUCCESS: ''.concat('LOGOUT', '_SUCCESS')
                },
                rn = ''.concat('INIT_CART', '_REQUEST'),
                an = ''.concat('INIT_CART', '_SUCCESS'),
                cn = ''.concat('INIT_CART', '_FAILURE'),
                on = ''.concat('SYNC_CART', '_REQUEST'),
                un = ''.concat('SYNC_CART', '_SUCCESS'),
                ln = ''.concat('SYNC_CART', '_FAILURE'),
                sn = ''.concat('UPDATE_CART', '_REQUEST'),
                dn = ''.concat('UPDATE_CART', '_SUCCESS'),
                pn = ''.concat('UPDATE_CART', '_FAILURE'),
                mn = {
                    INIT_CART_REQUEST: rn,
                    INIT_CART_SUCCESS: an,
                    INIT_CART_FAILURE: cn,
                    SYNC_CART_REQUEST: on,
                    SYNC_CART_SUCCESS: un,
                    SYNC_CART_FAILURE: ln,
                    ADD_TO_CART_REQUEST: ''.concat('ADD_TO_CART', '_REQUEST'),
                    ADD_TO_CART_SUCCESS: ''.concat('ADD_TO_CART', '_SUCCESS'),
                    ADD_TO_CART_FAILURE: ''.concat('ADD_TO_CART', '_FAILURE'),
                    REMOVE_FROM_CART_REQUEST: ''.concat(
                        'REMOVE_FROM_CART',
                        '_REQUEST'
                    ),
                    REMOVE_FROM_CART_SUCCESS: ''.concat(
                        'REMOVE_FROM_CART',
                        '_SUCCESS'
                    ),
                    REMOVE_FROM_CART_FAILURE: ''.concat(
                        'REMOVE_FROM_CART',
                        '_FAILURE'
                    ),
                    UPDATE_CART_REQUEST: sn,
                    UPDATE_CART_SUCCESS: dn,
                    UPDATE_CART_FAILURE: pn
                },
                fn =
                    ((r = {}),
                    Object($.a)(r, 'GET_APP_CONFIG', !0),
                    Object($.a)(r, 'GET_MY_PROFILE', !0),
                    Object($.a)(r, 'INIT_CART', !0),
                    r),
                gn = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : fn,
                        e = (arguments.length > 1 ? arguments[1] : void 0).type,
                        t = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(e);
                    if (!t) return n;
                    var r = Object(J.a)(t, 3),
                        a = r[1],
                        c = r[2];
                    return Object(g.a)(
                        {},
                        n,
                        Object($.a)({}, a, 'REQUEST' === c)
                    );
                },
                bn = function(n) {
                    return function(e) {
                        return n.some(function(n) {
                            return X()(e, 'loading.'.concat(n));
                        });
                    };
                },
                En = [
                    { path: '/about-us', name: 'About Us' },
                    { path: '/contact-us', name: 'Contact Us' }
                ],
                vn = [],
                hn = bn(['GET_APP_CONFIG', 'GET_MY_PROFILE', 'INIT_CART']),
                On = function(n) {
                    return X()(n, 'router.location.pathname');
                },
                yn = Object(q.a)(
                    function(n) {
                        return X()(n, 'appConfig.categoriesByID') || vn;
                    },
                    function(n) {
                        return Object.values(n);
                    }
                ),
                jn = Object(q.a)(yn, function(n) {
                    var e = [];
                    return (
                        n.forEach(function(n) {
                            var t = X()(n, 'subCategories');
                            t &&
                                t.length &&
                                t.forEach(function(n) {
                                    return e.push(n);
                                }),
                                e.push(n);
                        }),
                        e
                    );
                }),
                _n = Object(q.a)(yn, function(n) {
                    return [].concat(Object(H.a)(n), Object(H.a)(En));
                }),
                Cn = function() {
                    return { type: h.GET_PRODUCTS_REQUEST };
                },
                Sn = function(n) {
                    return {
                        type: h.GET_PRODUCTS_SUCCESS,
                        payload: { products: n }
                    };
                },
                Tn = function(n) {
                    return {
                        type: h.GET_PRODUCTS_SUCCESS,
                        payload: { error: n }
                    };
                },
                Rn = function(n) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                    return (function() {
                        var t = Object(z.a)(
                            V.a.mark(function t(r, a) {
                                var c, o, i;
                                return V.a.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        r(Cn()),
                                                        (c =
                                                            '/api/product/get_products'),
                                                        e.categoryID &&
                                                            (c = ''
                                                                .concat(c, '/')
                                                                .concat(
                                                                    e.categoryID
                                                                )),
                                                        (t.next = 6),
                                                        B.a.get(c)
                                                    );
                                                case 6:
                                                    if (
                                                        ((o = t.sent),
                                                        (i = o.data),
                                                        On(a()) !== n)
                                                    ) {
                                                        t.next = 10;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'return',
                                                        r(Sn(i))
                                                    );
                                                case 10:
                                                    t.next = 15;
                                                    break;
                                                case 12:
                                                    return (
                                                        (t.prev = 12),
                                                        (t.t0 = t.catch(0)),
                                                        t.abrupt(
                                                            'return',
                                                            r(Tn(t.t0.message))
                                                        )
                                                    );
                                                case 15:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 12]]
                                );
                            })
                        );
                        return function(n, e) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                Un = Rn,
                Dn = {},
                An = [],
                In = bn(['GET_PRODUCTS']),
                Pn = function(n) {
                    return X()(n, 'productsPage.products', An);
                },
                xn = Object(q.a)([On, jn], function(n, e) {
                    return (
                        e.find(function(e) {
                            return e.path === n;
                        }) || Dn
                    );
                }),
                kn = { getProducts: Pn, getCurrentCategory: xn, isLoading: In },
                wn = {},
                Ln = function(n) {
                    var e = X()(n, 'name'),
                        t = X()(n, 'pet');
                    return X()(n, 'parent') ? ''.concat(t, ' - ').concat(e) : e;
                },
                Nn = function(n) {
                    return X()(n, '_id') || null;
                },
                Mn = function(n) {
                    return X()(n, 'media') || wn;
                },
                Fn = {
                    GET_PRODUCT_REQUEST: ''.concat('GET_PRODUCT', '_REQUEST'),
                    GET_PRODUCT_SUCCESS: ''.concat('GET_PRODUCT', '_SUCCESS'),
                    GET_PRODUCT_FAILURE: ''.concat('GET_PRODUCT', '_FAILURE'),
                    REMOVE_PRODUCT: 'REMOVE_PRODUCT'
                },
                Gn = { product: null },
                Yn = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : Gn,
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        t = e.type,
                        r = e.payload;
                    switch (t) {
                        case Fn.REMOVE_PRODUCT:
                        case Fn.GET_PRODUCT_REQUEST:
                            return Object(g.a)({}, n, { product: null });
                        case Fn.GET_PRODUCT_SUCCESS:
                            return Object(g.a)({}, n, { product: r.product });
                        default:
                            return n;
                    }
                },
                Vn = function() {
                    return { type: Fn.GET_PRODUCT_REQUEST };
                },
                zn = function(n) {
                    return {
                        type: Fn.GET_PRODUCT_SUCCESS,
                        payload: { product: n }
                    };
                },
                Qn = function(n) {
                    return {
                        type: Fn.GET_PRODUCT_FAILURE,
                        payload: { error: n }
                    };
                },
                Bn = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t, r) {
                                var a, c, o;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t(Vn()),
                                                        (a = n.replace(
                                                            '/products/',
                                                            ''
                                                        )),
                                                        (e.next = 5),
                                                        B.a.get(
                                                            '/api/product/get_product',
                                                            {
                                                                params: {
                                                                    slug: a
                                                                }
                                                            }
                                                        )
                                                    );
                                                case 5:
                                                    if (
                                                        ((c = e.sent),
                                                        (o = c.data),
                                                        n !== On(r()))
                                                    ) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        'return',
                                                        t(zn(o))
                                                    );
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    return (
                                                        (e.prev = 11),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                            'return',
                                                            t(Qn(e.t0.message))
                                                        )
                                                    );
                                                case 14:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 11]]
                                );
                            })
                        );
                        return function(n, t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                Hn = function() {
                    return { type: Fn.REMOVE_PRODUCT };
                },
                qn = {
                    getProduct: function(n) {
                        return X()(n, 'productPage.product');
                    },
                    isProductLoading: bn(['GET_PRODUCT'])
                },
                Wn = t(126),
                Xn = t.n(Wn),
                Jn = t(143),
                $n = t.n(Jn),
                Kn = t(173),
                Zn = t.n(Kn),
                ne = t(120),
                ee = t.n(ne),
                te = {
                    productIDs: [],
                    productsByID: {},
                    quantityByID: {},
                    requestedIDs: []
                },
                re = Object(s.c)({
                    productIDs: function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : te.productIDs,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case mn.UPDATE_CART_SUCCESS:
                            case mn.INIT_CART_SUCCESS:
                                var t = e.payload.cart.productIDs;
                                return t || n;
                            case mn.ADD_TO_CART_SUCCESS:
                                var r = e.payload.productID;
                                return Xn()(n, r)
                                    ? n
                                    : [].concat(Object(H.a)(n), [r]);
                            case mn.REMOVE_FROM_CART_SUCCESS:
                                return Zn()(n, e.productIDs);
                            case mn.UPDATE_CART_FAILURE:
                            case mn.REMOVE_FROM_CART_FAILURE:
                            case mn.ADD_TO_CART_FAILURE:
                                return te.productIDs;
                            default:
                                return n;
                        }
                    },
                    quantityByID: function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : te.quantityByID,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case mn.UPDATE_CART_SUCCESS:
                            case mn.INIT_CART_SUCCESS:
                                var t = e.payload.cart.quantityByID;
                                return t || n;
                            case mn.ADD_TO_CART_SUCCESS:
                                var r = e.payload,
                                    a = r.productID,
                                    c = r.quantity;
                                return Object(g.a)(
                                    {},
                                    n,
                                    Object($.a)({}, a, (n[a] || 0) + Number(c))
                                );
                            case mn.REMOVE_FROM_CART_SUCCESS:
                                return $n()(n, e.productIDs);
                            case mn.UPDATE_CART_FAILURE:
                            case mn.REMOVE_FROM_CART_FAILURE:
                            case mn.ADD_TO_CART_FAILURE:
                                return te.quantityByID;
                            default:
                                return n;
                        }
                    },
                    productsByID: function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : te.productsByID,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case mn.UPDATE_CART_SUCCESS:
                            case mn.INIT_CART_SUCCESS:
                                return ee()(e.payload.cart.products, '_id');
                            case mn.ADD_TO_CART_SUCCESS:
                                return X()(e, 'payload.product._id')
                                    ? Object(g.a)(
                                          {},
                                          n,
                                          Object($.a)(
                                              {},
                                              X()(e, 'payload.product._id'),
                                              e.payload.product
                                          )
                                      )
                                    : n;
                            case mn.REMOVE_FROM_CART_SUCCESS:
                                return $n()(n, e.productIDs);
                            case mn.UPDATE_CART_FAILURE:
                            case mn.REMOVE_FROM_CART_FAILURE:
                            case mn.ADD_TO_CART_FAILURE:
                                return te.productsByID;
                            default:
                                return n;
                        }
                    },
                    requestedIDs: function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : te.requestedIDs,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            t = e.type,
                            r = e.payload;
                        switch (t) {
                            case mn.ADD_TO_CART_REQUEST:
                                return Xn()(n, r.productID)
                                    ? n
                                    : [].concat(Object(H.a)(n), [r.productID]);
                            case mn.ADD_TO_CART_SUCCESS:
                            case mn.ADD_TO_CART_FAILURE:
                                return n.filter(function(n) {
                                    return n !== r.productID;
                                });
                            default:
                                return n;
                        }
                    }
                }),
                ae = t(102),
                ce = t.n(ae),
                oe = function(n) {
                    return {
                        type: mn.UPDATE_CART_SUCCESS,
                        payload: { cart: n }
                    };
                },
                ie = function(n) {
                    return { type: mn.INIT_CART_SUCCESS, payload: { cart: n } };
                },
                ue = function(n) {
                    return {
                        type: mn.ADD_TO_CART_REQUEST,
                        payload: { productID: n }
                    };
                },
                le = function(n) {
                    var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1,
                        t = arguments.length > 2 ? arguments[2] : void 0;
                    return {
                        type: mn.ADD_TO_CART_SUCCESS,
                        payload: { productID: n, quantity: e, product: t }
                    };
                },
                se = function(n, e) {
                    return {
                        type: mn.ADD_TO_CART_FAILURE,
                        payload: { error: n, productID: e }
                    };
                },
                de = function(n) {
                    return { type: mn.REMOVE_FROM_CART_SUCCESS, productIDs: n };
                },
                pe = t(84),
                me = t.n(pe),
                fe = t(359),
                ge = t.n(fe),
                be = t(121),
                Ee = t.n(be),
                ve = t(243),
                he = t.n(ve),
                Oe = t(245),
                ye = t.n(Oe),
                je = function(n) {
                    return (
                        !(n instanceof Set) &&
                        'object' === typeof n &&
                        null !== n &&
                        !Object.keys(n)
                            .map(function(e) {
                                return n[e];
                            })
                            .filter(function(n) {
                                return !_e(n);
                            }).length
                    );
                },
                _e = function(n) {
                    return (
                        null == n ||
                        (function(n) {
                            return 'string' === typeof n && '' === n.trim();
                        })(n) ||
                        je(n)
                    );
                },
                Ce = _e,
                Se = t(360),
                Te = t.n(Se),
                Re = { mask: '+{38} (000) 000-00-00' },
                Ue = function(n) {
                    return n.replace(/[_ ()-]/g, '');
                },
                De = function(n) {
                    if (Ce(n))
                        return '\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435';
                },
                Ae = function(n) {
                    if (!Ce(n) && Number.isNaN(Number(n)))
                        return 'Must be a number';
                },
                Ie = function(n) {
                    if (!Ce(n) && !ye.a.isEmail(n))
                        return '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442';
                },
                Pe = function() {
                    var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : '';
                    if (!Ce(n) && !ye.a.isMobilePhone(Ue(n), 'uk-UA'))
                        return '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0440\u0432\u0430\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442';
                },
                xe = function(n) {
                    if (!Ce(n) && n.length < 8)
                        return '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0440\u0432\u0430\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442';
                },
                ke = function(n) {
                    if (!Ce(n) && !/^[a-z0-9-]+$/g.test(n))
                        return '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0440\u0432\u0430\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442';
                },
                we = function(n, e) {
                    return function(t) {
                        if (!Ce(t) && Number(t) < n)
                            return '\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c '.concat(
                                e ? e(n) : n
                            );
                    };
                },
                Le = we(0),
                Ne = function(n, e) {
                    return e > 0 ? e * n : 0;
                },
                Me = function(n) {
                    return Array.isArray(n) ? n : [n];
                },
                Fe = function(n, e, t) {
                    var r,
                        a = ((r = t), me()(r, Number)),
                        c = (function(n, e) {
                            var t = [];
                            return (
                                he()(n, function(n, r) {
                                    e(n) && t.push(r);
                                }),
                                t
                            );
                        })(a, function(n) {
                            return n <= 0;
                        });
                    if (c.length) {
                        var o = c.length
                                ? e.filter(function(n) {
                                      return !c.includes(n._id);
                                  })
                                : e,
                            i = $n()(a, c);
                        return {
                            productIDs: Zn()(n, c),
                            products: o,
                            quantityByID: i
                        };
                    }
                    return { quantityByID: a, productIDs: n, products: e };
                },
                Ge = function(n) {
                    var e = {};
                    return (
                        (e.productIDs = ge()(Ee()(n.productIDs))),
                        (e.quantityByID = ce()(n.quantityByID, e.productIDs)),
                        e
                    );
                },
                Ye = function(n) {
                    return localStorage.setItem('authToken', n);
                },
                Ve = function() {
                    return localStorage.getItem('authToken');
                },
                ze = function(n) {
                    localStorage.setItem('cart', JSON.stringify(n));
                },
                Qe = function() {
                    return JSON.parse(localStorage.getItem('cart')) || {};
                },
                Be = B.a.create({ method: 'get' });
            Be.interceptors.request.use(function(n) {
                var e = Ve();
                return (
                    (n.headers.Authorization = e ? 'Bearer '.concat(e) : ''), n
                );
            });
            var He = Be,
                qe = [],
                We = {},
                Xe = bn(['INIT_CART', 'GET_CART_PRODUCTS']),
                Je = bn([
                    'REMOVE_FROM_CART',
                    'ADD_TO_CART',
                    'GET_CART_PRODUCT',
                    'UPDATE_CART'
                ]),
                $e = function(n) {
                    return X()(n, 'cartPage.requestedIDs', qe);
                },
                Ke = function(n) {
                    return X()(n, 'cartPage.productIDs', qe);
                },
                Ze = function(n) {
                    return X()(n, 'cartPage.productsByID', We);
                },
                nt = function(n) {
                    return X()(n, 'cartPage.quantityByID', We);
                },
                et = Object(q.a)(Ze, function(n) {
                    return !Object.keys(n).length;
                }),
                tt = Object(q.a)([Ke, Ze, et], function(n, e, t) {
                    return t
                        ? []
                        : Ee()(
                              n.map(function(n) {
                                  return e[n];
                              })
                          );
                }),
                rt = Object(q.a)($e, function(n) {
                    return function(e) {
                        return Xn()(n, e);
                    };
                }),
                at = Object(q.a)(Ke, function(n) {
                    return function(e) {
                        return Xn()(n, e);
                    };
                }),
                ct = Object(q.a)(nt, function(n) {
                    return me()(n, String);
                }),
                ot = Object(q.a)([tt, nt], function(n, e) {
                    return {
                        price: n.reduce(function(n, t) {
                            var r = t.price,
                                a = t._id;
                            return n + r * X()(e, a);
                        }, 0),
                        quantity: Object.values(e).reduce(function(n, e) {
                            return n + e;
                        }, 0)
                    };
                }),
                it = Object(q.a)([Je, $e], function(n, e) {
                    return n || !!e.length;
                }),
                ut = {
                    getIsProductRequestedFunc: rt,
                    getIsProductAddedFunc: at,
                    getIsCartLoading: Xe,
                    getIsCartEmpty: et,
                    isCartUpdating: it,
                    getCartProducts: tt,
                    getInitialValues: ct,
                    getCartProductIDs: Ke,
                    getCartSummary: ot
                },
                lt = ['productIDs', 'quantityByID'],
                st = function(n) {
                    return !!X()(n, 'accountPage.user');
                },
                dt = function(n) {
                    return X()(n, 'accountPage.user');
                },
                pt = function() {
                    return (function() {
                        var n = Object(z.a)(
                            V.a.mark(function n(e, t) {
                                var r, a, c, o;
                                return V.a.wrap(
                                    function(n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    return (
                                                        (n.prev = 0),
                                                        e({
                                                            type:
                                                                mn.SYNC_CART_REQUEST
                                                        }),
                                                        (r = t()),
                                                        (a = r.cartPage),
                                                        (c = ce()(a, lt)),
                                                        (o = Ge(c)),
                                                        ze(o),
                                                        n.abrupt(
                                                            'return',
                                                            e({
                                                                type:
                                                                    mn.SYNC_CART_SUCCESS
                                                            })
                                                        )
                                                    );
                                                case 9:
                                                    return (
                                                        (n.prev = 9),
                                                        (n.t0 = n.catch(0)),
                                                        n.abrupt(
                                                            'return',
                                                            e({
                                                                type:
                                                                    mn.SYNC_CART_FAILURE,
                                                                payload: {
                                                                    error: void 0
                                                                }
                                                            })
                                                        )
                                                    );
                                                case 12:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    },
                                    n,
                                    null,
                                    [[0, 9]]
                                );
                            })
                        );
                        return function(e, t) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                mt = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t, r) {
                                var a, c, o, i;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        ((e.prev = 0),
                                                        t({
                                                            type:
                                                                mn.INIT_CART_REQUEST
                                                        }),
                                                        (a = st(r())),
                                                        (c = a && n ? n : Qe()),
                                                        a)
                                                    ) {
                                                        e.next = 10;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 7),
                                                        B.a.get(
                                                            '/api/product/get_cart_products',
                                                            {
                                                                params: {
                                                                    productIDs:
                                                                        c.productIDs
                                                                }
                                                            }
                                                        )
                                                    );
                                                case 7:
                                                    (o = e.sent),
                                                        (i = o.data),
                                                        (c.products = i);
                                                case 10:
                                                    return (
                                                        t(ie(c)),
                                                        e.abrupt(
                                                            'return',
                                                            t(pt())
                                                        )
                                                    );
                                                case 14:
                                                    return (
                                                        (e.prev = 14),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                            'return',
                                                            t(
                                                                ((u =
                                                                    e.t0
                                                                        .message),
                                                                {
                                                                    type:
                                                                        mn.INIT_CART_FAILURE,
                                                                    payload: {
                                                                        error: u
                                                                    }
                                                                })
                                                            )
                                                        )
                                                    );
                                                case 17:
                                                case 'end':
                                                    return e.stop();
                                            }
                                        var u;
                                    },
                                    e,
                                    null,
                                    [[0, 14]]
                                );
                            })
                        );
                        return function(n, t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                ft = function(n) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 1;
                    return (function() {
                        var t = Object(z.a)(
                            V.a.mark(function t(r, a) {
                                var c, o, i, u, l, s, d;
                                return V.a.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (
                                                        ((t.prev = 0),
                                                        r(ue(n)),
                                                        (c = st(a())),
                                                        (o = Ze(a())),
                                                        (i = {}),
                                                        !c)
                                                    ) {
                                                        t.next = 13;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 8),
                                                        He.patch('/api/cart', {
                                                            productID: n,
                                                            quantity: e
                                                        })
                                                    );
                                                case 8:
                                                    (u = t.sent),
                                                        (l = u.data),
                                                        (i = l.product),
                                                        (t.next = 19);
                                                    break;
                                                case 13:
                                                    if (o[n]) {
                                                        t.next = 19;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 16),
                                                        B.a.get(
                                                            '/api/product/get_product',
                                                            {
                                                                params: {
                                                                    _id: n
                                                                }
                                                            }
                                                        )
                                                    );
                                                case 16:
                                                    (s = t.sent),
                                                        (d = s.data),
                                                        (i = d);
                                                case 19:
                                                    return (
                                                        r(le(n, e, i)),
                                                        t.abrupt(
                                                            'return',
                                                            r(pt())
                                                        )
                                                    );
                                                case 23:
                                                    return (
                                                        (t.prev = 23),
                                                        (t.t0 = t.catch(0)),
                                                        t.abrupt(
                                                            'return',
                                                            r(
                                                                se(
                                                                    t.t0
                                                                        .message,
                                                                    n
                                                                )
                                                            )
                                                        )
                                                    );
                                                case 26:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 23]]
                                );
                            })
                        );
                        return function(n, e) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                gt = ft,
                bt = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t, r) {
                                var a;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        ((e.prev = 0),
                                                        (a = Me(n)),
                                                        t({
                                                            type:
                                                                mn.REMOVE_FROM_CART_REQUEST
                                                        }),
                                                        !st(r()))
                                                    ) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 7),
                                                        He.delete('/api/cart', {
                                                            data: {
                                                                productIDs: a
                                                            }
                                                        })
                                                    );
                                                case 7:
                                                    return (
                                                        t(de(a)),
                                                        e.abrupt(
                                                            'return',
                                                            t(pt())
                                                        )
                                                    );
                                                case 11:
                                                    return (
                                                        (e.prev = 11),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                            'return',
                                                            t(
                                                                ((c =
                                                                    e.t0
                                                                        .message),
                                                                {
                                                                    type:
                                                                        mn.REMOVE_FROM_CART_FAILURE,
                                                                    payload: {
                                                                        error: c
                                                                    }
                                                                })
                                                            )
                                                        )
                                                    );
                                                case 14:
                                                case 'end':
                                                    return e.stop();
                                            }
                                        var c;
                                    },
                                    e,
                                    null,
                                    [[0, 11]]
                                );
                            })
                        );
                        return function(n, t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                Et = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t, r) {
                                var a, c, o;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        ((e.prev = 0),
                                                        (a = n),
                                                        t({
                                                            type:
                                                                mn.UPDATE_CART_REQUEST
                                                        }),
                                                        !st(r()))
                                                    ) {
                                                        e.next = 10;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 7),
                                                        He.put('/api/cart', {
                                                            cart: ce()(a, lt)
                                                        })
                                                    );
                                                case 7:
                                                    (c = e.sent),
                                                        (o = c.data),
                                                        (a = o);
                                                case 10:
                                                    return (
                                                        t(oe(a)),
                                                        e.abrupt(
                                                            'return',
                                                            t(pt())
                                                        )
                                                    );
                                                case 14:
                                                    return (
                                                        (e.prev = 14),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                            'return',
                                                            t(
                                                                ((i =
                                                                    e.t0
                                                                        .message),
                                                                {
                                                                    type:
                                                                        mn.UPDATE_CART_FAILURE,
                                                                    payload: {
                                                                        error: i
                                                                    }
                                                                })
                                                            )
                                                        )
                                                    );
                                                case 17:
                                                case 'end':
                                                    return e.stop();
                                            }
                                        var i;
                                    },
                                    e,
                                    null,
                                    [[0, 14]]
                                );
                            })
                        );
                        return function(n, t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                vt = {
                    GET_DELIVERY_METHODS_REQUEST: ''.concat(
                        'GET_DELIVERY_METHODS',
                        '_REQUEST'
                    ),
                    GET_DELIVERY_METHODS_SUCCESS: ''.concat(
                        'GET_DELIVERY_METHODS',
                        '_SUCCESS'
                    ),
                    GET_PAYMENT_METHODS_REQUEST: ''.concat(
                        'GET_PAYMENT_METHODS',
                        '_REQUEST'
                    ),
                    GET_PAYMENT_METHODS_SUCCESS: ''.concat(
                        'GET_PAYMENT_METHODS',
                        '_SUCCESS'
                    ),
                    RESET_OPTIONS: 'RESET_OPTIONS'
                },
                ht = function(n) {
                    return {
                        type: vt.GET_DELIVERY_METHODS_REQUEST,
                        payload: n
                    };
                },
                Ot = {
                    getCities: function(n) {
                        return B.a.get('/api/checkout/cities', {
                            params: { search: n }
                        });
                    },
                    getDepartments: function(n) {
                        return B.a.get('/api/checkout/departments', {
                            params: n
                        });
                    },
                    getStreets: function(n) {
                        return B.a.get('/api/checkout/streets', { params: n });
                    },
                    fetchDeliveryMethods: function(n) {
                        return (function() {
                            var e = Object(z.a)(
                                V.a.mark(function e(t) {
                                    var r, a;
                                    return V.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            t(ht()),
                                                            (e.next = 4),
                                                            B.a.get(
                                                                '/api/checkout/delivery',
                                                                {
                                                                    params: {
                                                                        cityID: n
                                                                    }
                                                                }
                                                            )
                                                        );
                                                    case 4:
                                                        if (
                                                            ((r = e.sent),
                                                            !(a = r.data).error)
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 8:
                                                        return e.abrupt(
                                                            'return',
                                                            t({
                                                                type:
                                                                    vt.GET_DELIVERY_METHODS_SUCCESS,
                                                                payload: a
                                                            })
                                                        );
                                                    case 11:
                                                        return (
                                                            (e.prev = 11),
                                                            (e.t0 = e.catch(0)),
                                                            e.abrupt(
                                                                'return',
                                                                []
                                                            )
                                                        );
                                                    case 14:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 11]]
                                    );
                                })
                            );
                            return function(n) {
                                return e.apply(this, arguments);
                            };
                        })();
                    },
                    fetchPaymentMethods: function(n) {
                        return (function() {
                            var e = Object(z.a)(
                                V.a.mark(function e(t) {
                                    var r, a;
                                    return V.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            t({
                                                                type:
                                                                    vt.GET_PAYMENT_METHODS_REQUEST
                                                            }),
                                                            (e.next = 4),
                                                            B.a.get(
                                                                '/api/checkout/payment',
                                                                {
                                                                    params: {
                                                                        ID: n
                                                                    }
                                                                }
                                                            )
                                                        );
                                                    case 4:
                                                        if (
                                                            ((r = e.sent),
                                                            !(a = r.data).error)
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 8:
                                                        return e.abrupt(
                                                            'return',
                                                            t({
                                                                type:
                                                                    vt.GET_PAYMENT_METHODS_SUCCESS,
                                                                payload: a
                                                            })
                                                        );
                                                    case 11:
                                                        return (
                                                            (e.prev = 11),
                                                            (e.t0 = e.catch(0)),
                                                            e.abrupt(
                                                                'return',
                                                                []
                                                            )
                                                        );
                                                    case 14:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 11]]
                                    );
                                })
                            );
                            return function(n) {
                                return e.apply(this, arguments);
                            };
                        })();
                    },
                    resetOptions: function(n) {
                        return { type: vt.RESET_OPTIONS, payload: n };
                    }
                },
                yt = t(354),
                jt = t(355),
                _t = t(333),
                Ct = t(351),
                St = t(350),
                Tt = t(1),
                Rt = t(70),
                Ut = t(2);
            function Dt() {
                var n = Object(Tt.a)([
                    "\n    font-family: 'Crimson Text', serif;\n"
                ]);
                return (
                    (Dt = function() {
                        return n;
                    }),
                    n
                );
            }
            function At() {
                var n = Object(Tt.a)([
                    "\n    font-family: 'Merriweather Sans', sans-serif;\n"
                ]);
                return (
                    (At = function() {
                        return n;
                    }),
                    n
                );
            }
            function It() {
                var n = Object(Tt.a)([
                    "\n    font-family: 'Raleway', sans-serif;\n"
                ]);
                return (
                    (It = function() {
                        return n;
                    }),
                    n
                );
            }
            function Pt() {
                var n = Object(Tt.a)([
                    "\n    font-family: 'Lato', sans-serif;\n"
                ]);
                return (
                    (Pt = function() {
                        return n;
                    }),
                    n
                );
            }
            var xt = Object(Ut.b)(Pt()),
                kt = Object(Ut.b)(It()),
                wt = Object(Ut.b)(At()),
                Lt = Object(Ut.b)(Dt());
            function Nt() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        display: inline-block;\n        text-decoration: none;\n        color: ',
                    ';\n    }\n\n    :focus {\n        outline: none;\n    }\n'
                ]);
                return (
                    (Nt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Mt = Object(Ut.c)(Rt.a)(Nt(), '#000');
            function Ft() {
                var n = Object(Tt.a)([
                    '\n    background-color: ',
                    ';\n    border: none;\n    padding: 1.7rem 4.5rem;\n    display: inline-block;\n    ',
                    ';\n    font-size: 1.5rem;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    color: ',
                    ';\n\n    :focus {\n        outline: none;\n    }\n\n    :hover {\n        background-color: ',
                    ';\n        border-color: ',
                    ';\n    }\n'
                ]);
                return (
                    (Ft = function() {
                        return n;
                    }),
                    n
                );
            }
            var Gt = Ut.c.button(
                Ft(),
                '#042c59',
                kt,
                '#fff',
                '#f96d0b',
                '#f96d0b'
            );
            function Yt() {
                var n = Object(Tt.a)([
                    '\n    && {\n        padding: 1.2rem 2.5rem;\n        ',
                    ';\n        font-weight: 300 !important;\n        line-height: 1.5rem;\n    }\n'
                ]);
                return (
                    (Yt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Vt = Object(Ut.c)(Gt)(Yt(), wt);
            function zt() {
                var n = Object(Tt.a)([
                    '\n    font-size: 5rem;\n    display: block;\n    line-height: 7rem;\n    ',
                    ';\n    color: ',
                    ';\n    font-weight: 400;\n'
                ]);
                return (
                    (zt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Qt = Ut.c.h1(zt(), wt, '#042c59');
            function Bt() {
                var n = Object(Tt.a)([
                    '\n    font-size: 3.8rem;\n    line-height: 4.9rem;\n    font-weight: 300;\n    color: ',
                    ';\n    ',
                    ';\n'
                ]);
                return (
                    (Bt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ht = Ut.c.h2(Bt(), '#042c59', wt);
            function qt() {
                var n = Object(Tt.a)([
                    '\n    font-size: 3.2rem;\n    display: block;\n    line-height: 4.3rem;\n    ',
                    ';\n    color: ',
                    ';\n'
                ]);
                return (
                    (qt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Wt = Ut.c.h3(qt(), wt, '#042c59');
            function Xt() {
                var n = Object(Tt.a)([
                    '\n    font-size: 2.6rem;\n    display: block;\n    line-height: 3.6rem;\n    ',
                    ';\n    color: ',
                    ';\n    font-weight: 300;\n'
                ]);
                return (
                    (Xt = function() {
                        return n;
                    }),
                    n
                );
            }
            var Jt = Ut.c.h4(Xt(), wt, '#042c59');
            function $t() {
                var n = Object(Tt.a)([
                    '\n    font-size: 2rem;\n    line-height: 3rem;\n    font-weight: 300;\n    color: ',
                    ';\n    ',
                    ';\n'
                ]);
                return (
                    ($t = function() {
                        return n;
                    }),
                    n
                );
            }
            var Kt = Ut.c.h5($t(), '#042c59', wt);
            function Zt() {
                var n = Object(Tt.a)(['']);
                return (
                    (Zt = function() {
                        return n;
                    }),
                    n
                );
            }
            var nr = Ut.c.p(Zt()),
                er = t(28),
                tr = t(33),
                rr = t(30),
                ar = t(29),
                cr = t(31),
                or = t(68),
                ir = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidUpdate',
                                value: function(n) {
                                    this.props.location.pathname !==
                                        n.location.pathname &&
                                        window.scrollTo(0, 0);
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    return this.props.children;
                                }
                            }
                        ]),
                        e
                    );
                })(a.Component),
                ur = Object(or.g)(ir);
            function lr() {
                var n = Object(Tt.a)(['\n    color: ', ';\n    ', ';\n']);
                return (
                    (lr = function() {
                        return n;
                    }),
                    n
                );
            }
            var sr = Ut.c.span(lr(), '#f44336', Lt),
                dr = t(122),
                pr = t.n(dr);
            function mr() {
                var n = Object(Tt.a)([
                    '\n    border-top: 3px solid ',
                    ';\n    color: ',
                    ';\n    padding: 1rem 2rem;\n    background-color: ',
                    ';\n    margin-bottom: 1.5rem;\n    font-weight: 300;\n'
                ]);
                return (
                    (mr = function() {
                        return n;
                    }),
                    n
                );
            }
            var fr = Object(Ut.c)(pr.a)(mr(), '#f44336', '#f44336', '#f7f6f7');
            function gr() {
                var n = Object(Tt.a)([
                    '\n    text-align: center;\n    grid-column: 1 / -1;\n    margin: 1rem 0;\n'
                ]);
                return (
                    (gr = function() {
                        return n;
                    }),
                    n
                );
            }
            var br = Ut.c.header(gr());
            function Er() {
                var n = Object(Tt.a)([
                    '\n    margin-left: 1px;\n    margin-top: 2rem;\n'
                ]);
                return (
                    (Er = function() {
                        return n;
                    }),
                    n
                );
            }
            var vr = Object(Ut.c)(Vt)(Er());
            function hr() {
                var n = Object(Tt.a)([
                    '\n    line-height: 1.9rem;\n\n    ',
                    ';\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n'
                ]);
                return (
                    (hr = function() {
                        return n;
                    }),
                    n
                );
            }
            var Or = Ut.c.div(hr(), Lt);
            function yr() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 2rem;\n\n    & > * {\n        margin-top: 0 !important;\n    }\n'
                ]);
                return (
                    (yr = function() {
                        return n;
                    }),
                    n
                );
            }
            var jr = Ut.c.div(yr());
            function _r() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n\n    :not(:first-child) {\n        margin-top: 1rem;\n    }\n'
                ]);
                return (
                    (_r = function() {
                        return n;
                    }),
                    n
                );
            }
            var Cr = Ut.c.div(_r()),
                Sr = t(76),
                Tr = Object(d.c)(function(n) {
                    return { isAuthorized: st(n) };
                })(function(n) {
                    var e = n.component,
                        t = n.isAuthorized,
                        r =
                            (n.match,
                            Object(Sr.a)(n, [
                                'component',
                                'isAuthorized',
                                'match'
                            ]));
                    return c.a.createElement(
                        or.b,
                        Object.assign({}, r, {
                            render: function(n) {
                                return t
                                    ? c.a.createElement(e, n)
                                    : c.a.createElement(or.a, {
                                          to: {
                                              pathname: '/auth',
                                              state: { from: n.location }
                                          }
                                      });
                            }
                        })
                    );
                }),
                Rr = t(364),
                Ur = t.n(Rr),
                Dr = function(n) {
                    var e = n.className,
                        t = n.icon;
                    return c.a.createElement(
                        'svg',
                        { className: e },
                        c.a.createElement('use', {
                            xlinkHref: ''.concat(Ur.a, '#').concat(t)
                        })
                    );
                };
            function Ar() {
                var n = Object(Tt.a)([
                    '\n    display: ',
                    '\n    height: 1.5rem;\n    width: 1.5rem;\n    fill: ',
                    ';\n    margin-left: 0.7rem;\n'
                ]);
                return (
                    (Ar = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ir() {
                var n = Object(Tt.a)([
                    '\n                opacity: 0.3;\n            '
                ]);
                return (
                    (Ir = function() {
                        return n;
                    }),
                    n
                );
            }
            function Pr() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    :hover {\n        background-color: ',
                    ';\n    }\n\n    ',
                    '\n'
                ]);
                return (
                    (Pr = function() {
                        return n;
                    }),
                    n
                );
            }
            var xr = Object(Ut.c)(Vt)(Pr(), '#f96d0b', function(n) {
                    if (n.isLoading) return Object(Ut.b)(Ir());
                }),
                kr = Object(Ut.c)(Dr)(
                    Ar(),
                    function(n) {
                        return n.hidden ? 'none' : 'inline-block';
                    },
                    '#fff'
                ),
                wr = function(n) {
                    var e = n.onClick,
                        t = n.isLoading,
                        r = n.isAdded,
                        a = n.disabled,
                        o = n.children,
                        i = Object(Sr.a)(n, [
                            'onClick',
                            'isLoading',
                            'isAdded',
                            'disabled',
                            'children'
                        ]);
                    return c.a.createElement(
                        xr,
                        Object.assign(
                            { onClick: e, isLoading: t, disabled: a, added: r },
                            i
                        ),
                        o,
                        c.a.createElement(kr, {
                            hidden: !r || t,
                            icon: 'check'
                        }),
                        c.a.createElement(kr, { hidden: !t, icon: 'refresh' })
                    );
                },
                Lr = t(174),
                Nr = [
                    'constructor',
                    'render',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnMount'
                ];
            var Mr = function(n) {
                    for (
                        var e = arguments.length,
                            t = new Array(e > 1 ? e - 1 : 0),
                            r = 1;
                        r < e;
                        r++
                    )
                        t[r - 1] = arguments[r];
                    Object.getOwnPropertyNames(
                        Object.getPrototypeOf(n)
                    ).forEach(function(e) {
                        if (
                            -1 === Nr.indexOf(e) &&
                            -1 === t.indexOf(e) &&
                            'function' === typeof n[e]
                        )
                            try {
                                n[e] = n[e].bind(n);
                            } catch (r) {
                                return r;
                            }
                    });
                },
                Fr = (function(n) {
                    function e(n) {
                        var t;
                        return (
                            Object(er.a)(this, e),
                            (t = Object(rr.a)(
                                this,
                                Object(ar.a)(e).call(this, n)
                            )),
                            Mr(Object(Lr.a)(t)),
                            t
                        );
                    }
                    return Object(cr.a)(e, n), e;
                })(a.Component);
            function Gr() {
                return (Gr =
                    Object.assign ||
                    function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) &&
                                    (n[r] = t[r]);
                        }
                        return n;
                    }).apply(this, arguments);
            }
            function Yr(n, e) {
                if (null == n) return {};
                var t,
                    r,
                    a = (function(n, e) {
                        if (null == n) return {};
                        var t,
                            r,
                            a = {},
                            c = Object.keys(n);
                        for (r = 0; r < c.length; r++)
                            (t = c[r]), e.indexOf(t) >= 0 || (a[t] = n[t]);
                        return a;
                    })(n, e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < c.length; r++)
                        (t = c[r]),
                            e.indexOf(t) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    n,
                                    t
                                ) &&
                                    (a[t] = n[t]));
                }
                return a;
            }
            var Vr = c.a.createElement(
                    'g',
                    null,
                    c.a.createElement(
                        'g',
                        { id: 'arrow-drop-down' },
                        c.a.createElement('polygon', {
                            points: '0,63.75 127.5,191.25 255,63.75  '
                        })
                    )
                ),
                zr = c.a.createElement('g', null),
                Qr = c.a.createElement('g', null),
                Br = c.a.createElement('g', null),
                Hr = c.a.createElement('g', null),
                qr = c.a.createElement('g', null),
                Wr = c.a.createElement('g', null),
                Xr = c.a.createElement('g', null),
                Jr = c.a.createElement('g', null),
                $r = c.a.createElement('g', null),
                Kr = c.a.createElement('g', null),
                Zr = c.a.createElement('g', null),
                na = c.a.createElement('g', null),
                ea = c.a.createElement('g', null),
                ta = c.a.createElement('g', null),
                ra = c.a.createElement('g', null),
                aa = function(n) {
                    var e = n.svgRef,
                        t = Yr(n, ['svgRef']);
                    return c.a.createElement(
                        'svg',
                        Gr(
                            {
                                id: 'Capa_1',
                                x: '0px',
                                y: '0px',
                                width: '255px',
                                height: '255px',
                                viewBox: '0 0 255 255',
                                style: { enableBackground: 'new 0 0 255 255' },
                                xmlSpace: 'preserve',
                                ref: e
                            },
                            t
                        ),
                        Vr,
                        zr,
                        Qr,
                        Br,
                        Hr,
                        qr,
                        Wr,
                        Xr,
                        Jr,
                        $r,
                        Kr,
                        Zr,
                        na,
                        ea,
                        ta,
                        ra
                    );
                },
                ca = c.a.forwardRef(function(n, e) {
                    return c.a.createElement(aa, Gr({ svgRef: e }, n));
                });
            t.p;
            function oa() {
                var n = Object(Tt.a)([
                    '\n    height: 1rem;\n    width: 1rem;\n    fill: ',
                    ';\n    transform: ',
                    ';\n'
                ]);
                return (
                    (oa = function() {
                        return n;
                    }),
                    n
                );
            }
            var ia = Object(Ut.c)(function(n) {
                    n.isOpen;
                    var e = Object(Sr.a)(n, ['isOpen']);
                    return c.a.createElement(ca, e);
                })(oa(), '#808080', function(n) {
                    return n.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)';
                }),
                ua = function(n) {
                    var e = n.isOpen;
                    return c.a.createElement(ia, { isOpen: e });
                };
            function la() {
                var n = Object(Tt.a)([
                    '\n    position: absolute;\n\n    right: 0;\n    top: 100%;\n    z-index: 1000;\n'
                ]);
                return (
                    (la = function() {
                        return n;
                    }),
                    n
                );
            }
            function sa() {
                var n = Object(Tt.a)(['\n    position: relative;\n']);
                return (
                    (sa = function() {
                        return n;
                    }),
                    n
                );
            }
            var da = Ut.c.div(sa()),
                pa = Ut.c.div(la()),
                ma = (function(n) {
                    function e() {
                        var n, t;
                        Object(er.a)(this, e);
                        for (
                            var r = arguments.length, a = new Array(r), c = 0;
                            c < r;
                            c++
                        )
                            a[c] = arguments[c];
                        return (
                            ((t = Object(rr.a)(
                                this,
                                (n = Object(ar.a)(e)).call.apply(
                                    n,
                                    [this].concat(a)
                                )
                            )).state = { showChildren: !1 }),
                            t
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'showChildren',
                                value: function() {
                                    var n = this;
                                    this.setState(
                                        { showChildren: !0 },
                                        function() {
                                            return document.addEventListener(
                                                'click',
                                                n.hideOnOutsideClick
                                            );
                                        }
                                    );
                                }
                            },
                            {
                                key: 'hideOnOutsideClick',
                                value: function(n) {
                                    this.childrenContainer &&
                                        !this.childrenContainer.contains(
                                            n.target
                                        ) &&
                                        this.hideChildren();
                                }
                            },
                            {
                                key: 'hideChildren',
                                value: function() {
                                    var n = this;
                                    this.setState(
                                        { showChildren: !1 },
                                        function() {
                                            return document.removeEventListener(
                                                'click',
                                                n.hideOnOutsideClick
                                            );
                                        }
                                    );
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this,
                                        e = this.props,
                                        t = e.trigger,
                                        r = e.render,
                                        a = e.className,
                                        o = this.state.showChildren,
                                        i = t;
                                    return c.a.createElement(
                                        da,
                                        {
                                            className: a,
                                            onClick: function(n) {
                                                return n.stopPropagation();
                                            }
                                        },
                                        c.a.createElement(i, {
                                            onClick: this.showChildren
                                        }),
                                        o &&
                                            c.a.createElement(
                                                pa,
                                                {
                                                    ref: function(e) {
                                                        n.childrenContainer = e;
                                                    }
                                                },
                                                c.a.createElement(r, {
                                                    close: this.hideChildren
                                                })
                                            )
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                fa = t(365),
                ga = t.n(fa);
            function ba() {
                var n = Object(Tt.a)(['\n    border-bottom: ', ';\n']);
                return (
                    (ba = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ea() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n\n    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n'
                ]);
                return (
                    (Ea = function() {
                        return n;
                    }),
                    n
                );
            }
            function va() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n\n    grid-template-columns:\n        [full-start] minmax(6rem, 1fr) [center-start] repeat(\n            8,\n            [col-start] minmax(min-content, 14rem) [col-end]\n        )\n        [center-end]\n        minmax(6rem, 1fr) [full-end];\n'
                ]);
                return (
                    (va = function() {
                        return n;
                    }),
                    n
                );
            }
            var ha = Object(Ut.b)(va()),
                Oa = Object(Ut.b)(Ea()),
                ya = Object(Ut.b)(ba(), function(n) {
                    return n.error
                        ? '2px solid '.concat('#f44336')
                        : '1px solid rgba(0, 0, 0, 0.13)';
                });
            function ja() {
                var n = Object(Tt.a)([
                    '\n            background-color: ',
                    ';\n        '
                ]);
                return (
                    (ja = function() {
                        return n;
                    }),
                    n
                );
            }
            function _a() {
                var n = Object(Tt.a)([
                    '\n    line-height: 2.8rem;\n\n    ',
                    ';\n    font-size: 1.5rem;\n    padding: ',
                    ';\n    border: 1px solid rgba(0, 0, 0, 0.13);\n\n    ',
                    '\n\n    :focus {\n        outline: none;\n    }\n\n    ',
                    ';\n'
                ]);
                return (
                    (_a = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ca = Object(Ut.c)(function(n) {
                    n.error, n.touched;
                    var e = n.phone,
                        t =
                            (n.small,
                            Object(Sr.a)(n, [
                                'error',
                                'touched',
                                'phone',
                                'small'
                            ]));
                    return e
                        ? c.a.createElement(
                              ga.a,
                              Object.assign({}, t, {
                                  format: '+38 (###) ###-##-##',
                                  mask: '_'
                              })
                          )
                        : c.a.createElement('input', t);
                })(
                    _a(),
                    Lt,
                    function(n) {
                        return n.small ? '0.6rem 0.8rem' : '1.2rem 1.5rem';
                    },
                    function(n) {
                        return n.disabled && Object(Ut.b)(ja(), '#F2F2F2');
                    },
                    ya
                ),
                Sa = function(n) {
                    var e = n.input,
                        t = n.type,
                        r = n.label,
                        a = n.meta,
                        o = a.touched,
                        i = a.error,
                        u = n.placeholder,
                        l = n.mask,
                        s = n.small,
                        d = n.disabled,
                        p = n.min,
                        m = n.className,
                        f = n.autoComplete;
                    return c.a.createElement(
                        Cr,
                        { disabled: d },
                        r && c.a.createElement(Or, null, ' ', r, ' '),
                        c.a.createElement(
                            Ca,
                            Object.assign({}, e, {
                                className: m,
                                disabled: d,
                                error: o && i,
                                touched: o && !i,
                                placeholder: u,
                                type: t,
                                min: p,
                                phone: 'phone' === l,
                                small: s,
                                autoComplete: f
                            })
                        ),
                        o && i && c.a.createElement(sr, null, i)
                    );
                };
            Sa.defaultProps = {
                small: !1,
                disabled: !1,
                min: null,
                type: 'text',
                label: '',
                placeholder: '',
                mask: '',
                autoComplete: 'on',
                input: {},
                meta: {}
            };
            var Ta = Sa;
            function Ra() {
                var n = Object(Tt.a)([
                    '\n    line-height: 2.8rem;\n    resize: vertical;\n\n    ',
                    ';\n    font-size: 1.5rem;\n    padding: ',
                    ';\n    border: 1px solid rgba(0, 0, 0, 0.13);\n\n    :focus {\n        outline: none;\n    }\n\n    ',
                    ';\n'
                ]);
                return (
                    (Ra = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ua() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n    padding: 3px 0;\n\n    :not(:first-child) {\n        margin-top: 1rem;\n    }\n'
                ]);
                return (
                    (Ua = function() {
                        return n;
                    }),
                    n
                );
            }
            var Da = Ut.c.div(Ua()),
                Aa = Ut.c.textarea(
                    Ra(),
                    Lt,
                    function(n) {
                        return n.small ? '0.6rem 0.8rem' : '1.2rem 1.5rem';
                    },
                    ya
                ),
                Ia = function(n) {
                    var e = n.input,
                        t = n.type,
                        r = n.label,
                        a = n.meta,
                        o = a.touched,
                        i = a.error,
                        u = n.placeholder,
                        l = (n.mask, n.small),
                        s = n.rows;
                    return c.a.createElement(
                        Da,
                        null,
                        c.a.createElement(Or, null, ' ', r, ' '),
                        c.a.createElement(
                            Aa,
                            Object.assign({}, e, {
                                rows: s || 8,
                                error: o && i,
                                touched: o && !i,
                                placeholder: u,
                                type: t,
                                small: l
                            })
                        ),
                        o && i && c.a.createElement(sr, null, i)
                    );
                },
                Pa = t(25);
            function xa() {
                return (xa =
                    Object.assign ||
                    function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) &&
                                    (n[r] = t[r]);
                        }
                        return n;
                    }).apply(this, arguments);
            }
            function ka(n, e) {
                if (null == n) return {};
                var t,
                    r,
                    a = (function(n, e) {
                        if (null == n) return {};
                        var t,
                            r,
                            a = {},
                            c = Object.keys(n);
                        for (r = 0; r < c.length; r++)
                            (t = c[r]), e.indexOf(t) >= 0 || (a[t] = n[t]);
                        return a;
                    })(n, e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < c.length; r++)
                        (t = c[r]),
                            e.indexOf(t) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    n,
                                    t
                                ) &&
                                    (a[t] = n[t]));
                }
                return a;
            }
            var wa = c.a.createElement(
                    'g',
                    null,
                    c.a.createElement(
                        'g',
                        { id: 'close' },
                        c.a.createElement('polygon', {
                            points:
                                '357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3  214.2,178.5  '
                        })
                    )
                ),
                La = c.a.createElement('g', null),
                Na = c.a.createElement('g', null),
                Ma = c.a.createElement('g', null),
                Fa = c.a.createElement('g', null),
                Ga = c.a.createElement('g', null),
                Ya = c.a.createElement('g', null),
                Va = c.a.createElement('g', null),
                za = c.a.createElement('g', null),
                Qa = c.a.createElement('g', null),
                Ba = c.a.createElement('g', null),
                Ha = c.a.createElement('g', null),
                qa = c.a.createElement('g', null),
                Wa = c.a.createElement('g', null),
                Xa = c.a.createElement('g', null),
                Ja = c.a.createElement('g', null),
                $a = function(n) {
                    var e = n.svgRef,
                        t = ka(n, ['svgRef']);
                    return c.a.createElement(
                        'svg',
                        xa(
                            {
                                id: 'Capa_1',
                                x: '0px',
                                y: '0px',
                                width: '357px',
                                height: '357px',
                                viewBox: '0 0 357 357',
                                style: { enableBackground: 'new 0 0 357 357' },
                                xmlSpace: 'preserve',
                                ref: e
                            },
                            t
                        ),
                        wa,
                        La,
                        Na,
                        Ma,
                        Fa,
                        Ga,
                        Ya,
                        Va,
                        za,
                        Qa,
                        Ba,
                        Ha,
                        qa,
                        Wa,
                        Xa,
                        Ja
                    );
                },
                Ka = c.a.forwardRef(function(n, e) {
                    return c.a.createElement($a, xa({ svgRef: e }, n));
                });
            t.p;
            function Za() {
                var n = Object(Tt.a)([
                    '\n    cursor: pointer;\n\n    :hover {\n        ',
                    ' {\n            fill: ',
                    ';\n        }\n    }\n'
                ]);
                return (
                    (Za = function() {
                        return n;
                    }),
                    n
                );
            }
            function nc() {
                var n = Object(Tt.a)([
                    '\n    height: 1rem;\n    width: 1rem;\n    fill: ',
                    ';\n'
                ]);
                return (
                    (nc = function() {
                        return n;
                    }),
                    n
                );
            }
            var ec = Object(Ut.c)(Ka)(nc(), '#808080'),
                tc = Object(Ut.c)(Pa.z.ClearIndicator)(Za(), ec, '#042c59'),
                rc = function(n) {
                    return c.a.createElement(
                        tc,
                        n,
                        c.a.createElement(ec, null)
                    );
                },
                ac = function(n) {
                    return c.a.createElement(
                        Pa.z.DropdownIndicator,
                        n,
                        c.a.createElement(ua, {
                            isOpen: n.selectProps.menuIsOpen
                        })
                    );
                },
                cc = function(n) {
                    var e = n.children,
                        t = Object(Sr.a)(n, ['children']);
                    return c.a.createElement(
                        Pa.z.MultiValue,
                        t,
                        t.data.parent && ''.concat(t.data.parent, ' - '),
                        e
                    );
                },
                oc = t(186),
                ic = new oc.b({ fixedWidth: !0 }),
                uc = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.updateRowsHeight();
                                }
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function(n) {
                                    n.options.length !==
                                        this.props.options.length &&
                                        this.updateRowsHeight();
                                }
                            },
                            {
                                key: 'updateRowsHeight',
                                value: function() {
                                    this.list &&
                                        (ic.clearAll(),
                                        this.list.recomputeRowHeights());
                                }
                            },
                            {
                                key: 'rowRenderer',
                                value: function(n) {
                                    var e = n.key,
                                        t = n.index,
                                        r =
                                            (n.isScrolling,
                                            n.isVisible,
                                            n.style),
                                        a = n.parent;
                                    return c.a.createElement(
                                        oc.a,
                                        {
                                            cache: ic,
                                            columnIndex: 0,
                                            key: e,
                                            parent: a,
                                            rowIndex: t
                                        },
                                        c.a.createElement(
                                            'div',
                                            { style: r },
                                            this.props.children[t]
                                        )
                                    );
                                }
                            },
                            {
                                key: 'getListHeight',
                                value: function() {
                                    var n =
                                            this.props.options.length > 10
                                                ? 10
                                                : this.props.options.length,
                                        e = Array.from(Array(n).keys()).reduce(
                                            function(n, e) {
                                                return (
                                                    n +
                                                    ic.rowHeight({ index: e })
                                                );
                                            },
                                            0
                                        );
                                    return e > 300 ? 300 : e;
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this;
                                    return this.props.options.length
                                        ? c.a.createElement(oc.c, {
                                              ref: function(e) {
                                                  return (n.list = e);
                                              },
                                              height: this.getListHeight(),
                                              width: 1e3,
                                              style: { width: '100%' },
                                              deferredMeasurementCache: ic,
                                              rowCount: this.props.options
                                                  .length,
                                              rowHeight: ic.rowHeight,
                                              rowRenderer: this.rowRenderer
                                          })
                                        : c.a.createElement(
                                              Pa.z.MenuList,
                                              this.props,
                                              this.props.children
                                          );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                lc = {
                    ClearIndicator: rc,
                    DropdownIndicator: ac,
                    MultiValue: cc
                },
                sc = t(101),
                dc = t(178),
                pc = t(179),
                mc = t(371);
            function fc() {
                var n = Object(Tt.a)([
                    '\n                &__indicator-separator {\n                    display: none;\n                }\n                &__clear-indicator {\n                    display: none;\n                }\n            '
                ]);
                return (
                    (fc = function() {
                        return n;
                    }),
                    n
                );
            }
            function gc() {
                var n = Object(Tt.a)([
                    '\n    & .Select {\n        &__control {\n            line-height: 2.8rem;\n\n            ',
                    ';\n            font-size: 1.5rem;\n            padding: ',
                    ';\n            border: 1px solid rgba(0, 0, 0, 0.13);\n            border-radius: 0;\n            ',
                    ';\n\n            :hover {\n                border: 1px solid rgba(0, 0, 0, 0.13);\n                ',
                    ';\n            }\n\n            &--is-focused {\n                outline: none;\n                border-color: rgba(0, 0, 0, 0.13) !important;\n                box-shadow: none;\n            }\n        }\n\n        &__value-container {\n            padding: 0;\n            line-height: 2rem;\n        }\n        &__input {\n            input {\n                ',
                    ';\n            }\n        }\n\n        ',
                    '\n\n        &__menu {\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n            border-radius: 0;\n\n            ',
                    ';\n        }\n        &__option {\n            padding: 5px 8px;\n            cursor: pointer;\n            &--is-focused,\n            &--is-selected {\n                background-color: #f5fafd;\n                color: #495c68;\n            }\n        }\n    }\n'
                ]);
                return (
                    (gc = function() {
                        return n;
                    }),
                    n
                );
            }
            var bc = Object(Ut.c)(sc.a)(
                    gc(),
                    Lt,
                    function(n) {
                        return n.small ? '0.6rem 0.8rem' : '1.2rem 1.5rem';
                    },
                    ya,
                    ya,
                    Lt,
                    function(n) {
                        return !n.showClear && Object(Ut.b)(fc());
                    },
                    Lt
                ),
                Ec = function(n) {
                    var e = n.async,
                        t = n.creatable,
                        r = n.virtualized,
                        a = n.clearable,
                        o = n.input,
                        i = n.small,
                        u = n.placeholder,
                        l = n.label,
                        s = n.disabled,
                        d = n.handleChange,
                        p = n.meta,
                        m = p.touched,
                        f = p.error,
                        b = n.options,
                        E = n.loadOptions,
                        v = n.noOptionsMessage,
                        h = n.isMulti,
                        O = n.showClear,
                        y = n.closeMenuOnSelect,
                        j = n.cacheOptions,
                        _ = n.defaultOptions,
                        C = n.formatCreateLabel,
                        S = n.loadingMessage,
                        T = n.className,
                        R = lc,
                        U = sc.a;
                    return (
                        r && (R = Object(g.a)({}, R, { MenuList: uc })),
                        t && (U = dc.a),
                        e && (U = pc.a),
                        e && t && (U = mc.a),
                        c.a.createElement(
                            Cr,
                            null,
                            l && c.a.createElement(Or, null, l),
                            c.a.createElement(
                                bc,
                                Object.assign({}, o, {
                                    classNamePrefix: 'Select',
                                    as: U,
                                    small: i,
                                    isClearable: a,
                                    isDisabled: s,
                                    placeholder: u,
                                    isMulti: h,
                                    showClear: O,
                                    closeMenuOnSelect: y,
                                    components: R,
                                    onChange: function(n) {
                                        o.onChange(n), d(n);
                                    },
                                    onBlur: function() {
                                        return o.onBlur(o.value);
                                    },
                                    error: m && f,
                                    noOptionsMessage: v,
                                    options: b,
                                    loadOptions: E,
                                    cacheOptions: j,
                                    defaultOptions: _,
                                    formatCreateLabel: C,
                                    loadingMessage: S,
                                    className: T
                                })
                            ),
                            m && f && c.a.createElement(sr, null, f)
                        )
                    );
                };
            Ec.defaultProps = {
                async: !1,
                creatable: !1,
                virtualized: !1,
                disabled: !1,
                clearable: !0,
                small: !1,
                isMulti: !1,
                showClear: !1,
                closeMenuOnSelect: !0,
                cacheOptions: !0,
                defaultOptions: !0,
                placeholder: '\u0412\u044b\u0431\u0440\u0430\u0442\u044c...',
                label: '',
                className: '',
                input: {},
                meta: {},
                options: [],
                handleChange: function() {},
                loadOptions: function() {},
                noOptionsMessage: function() {
                    return '\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e';
                },
                formatCreateLabel: function(n) {
                    return '\u0412\u044b\u0431\u0440\u0430\u0442\u044c ' + n;
                },
                loadingMessage: function() {
                    return '\u041f\u043e\u0438\u0441\u043a...';
                }
            };
            var vc,
                hc,
                Oc,
                yc,
                jc = Ec,
                _c = {
                    FULL_NAME: 'fullName',
                    EMAIL: 'email',
                    PHONE: 'phone',
                    CITY: 'city',
                    DELIVERY: 'delivery',
                    ADDRESS: 'address',
                    PAYMENT: 'payment'
                },
                Cc = {
                    USER_INFO: 'userInfo',
                    DELIVERY: 'delivery',
                    PAYMENT: 'payment'
                },
                Sc =
                    ((vc = {}),
                    Object($.a)(vc, Cc.USER_INFO, 1),
                    Object($.a)(vc, Cc.DELIVERY, 2),
                    Object($.a)(vc, Cc.PAYMENT, 3),
                    vc),
                Tc =
                    ((hc = {}),
                    Object($.a)(hc, Sc[Cc.USER_INFO], [
                        _c.FULL_NAME,
                        _c.EMAIL,
                        _c.PHONE
                    ]),
                    Object($.a)(hc, Sc[Cc.DELIVERY], [_c.CITY, _c.ADDRESS]),
                    Object($.a)(hc, Sc[Cc.PAYMENT], [_c.PAYMENT]),
                    hc),
                Rc =
                    ((Oc = {}),
                    Object($.a)(Oc, _c.FULL_NAME, ''),
                    Object($.a)(Oc, _c.EMAIL, ''),
                    Object($.a)(Oc, _c.PHONE, ''),
                    Object($.a)(Oc, _c.CITY, null),
                    Object($.a)(Oc, _c.DELIVERY, null),
                    Object($.a)(Oc, _c.ADDRESS, null),
                    Object($.a)(Oc, _c.PAYMENT, null),
                    Oc),
                Uc = {
                    options: { DELIVERY: 'delivery', PAYMENT: 'payment' },
                    fields: _c,
                    FORM_NAME: 'checkout',
                    stepFields: Tc,
                    steps: Cc,
                    stepIDs: Sc,
                    initialValues: Rc
                },
                Dc = t(180),
                Ac = t.n(Dc),
                Ic =
                    ((yc = {}),
                    Object($.a)(yc, _c.FULL_NAME, [De]),
                    Object($.a)(yc, _c.EMAIL, [De, Ie]),
                    Object($.a)(yc, _c.PHONE, [De, Pe]),
                    Object($.a)(yc, _c.CITY, [De]),
                    Object($.a)(yc, _c.DELIVERY, [De]),
                    Object($.a)(yc, _c.ADDRESS, [De]),
                    Object($.a)(yc, _c.PAYMENT, [De]),
                    yc),
                Pc = function(n) {
                    var e = {};
                    return (
                        Ac()(Ic, function(t, r) {
                            var a = (function() {
                                var n =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : [],
                                    e =
                                        arguments.length > 1
                                            ? arguments[1]
                                            : void 0,
                                    t = n.find(function(n) {
                                        return n(e);
                                    });
                                return t ? t(e) : null;
                            })(t, n[r]);
                            a && (e[r] = a);
                        }),
                        e
                    );
                },
                xc = {
                    form: 'checkout',
                    enableReinitialize: !0,
                    onSubmit: (function() {
                        var n = Object(z.a)(
                            V.a.mark(function n(e) {
                                return V.a.wrap(function(n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                            case 'end':
                                                return n.stop();
                                        }
                                }, n);
                            })
                        );
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    })()
                },
                kc = {
                    form: 'checkout',
                    validate: Pc,
                    destroyOnUnmount: !1,
                    forceUnregisterOnUnmount: !0
                };
            function wc() {
                var n = Object(Tt.a)([
                    '\n    width: 100%;\n    margin-bottom: 1.5rem;\n    transition: all 0.2s;\n'
                ]);
                return (
                    (wc = function() {
                        return n;
                    }),
                    n
                );
            }
            var Lc = Ut.c.img(wc());
            function Nc() {
                var n = Object(Tt.a)([
                    '\n    font-size: 1.8rem;\n    font-weight: 700;\n    color: ',
                    ';\n'
                ]);
                return (
                    (Nc = function() {
                        return n;
                    }),
                    n
                );
            }
            var Mc = Ut.c.span(Nc(), '#f96d0b');
            function Fc() {
                var n = Object(Tt.a)([
                    '\n                opacity: 0.3;\n            '
                ]);
                return (
                    (Fc = function() {
                        return n;
                    }),
                    n
                );
            }
            function Gc() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    :hover {\n        background-color: ',
                    ';\n    }\n\n    ',
                    '\n'
                ]);
                return (
                    (Gc = function() {
                        return n;
                    }),
                    n
                );
            }
            var Yc = Object(Ut.c)(Vt)(Gc(), '#f96d0b', function(n) {
                if (n.isLoading) return Object(Ut.b)(Fc());
            });
            function Vc() {
                var n = Object(Tt.a)([
                    '\n    margin-bottom: 1.5rem;\n    cursor: pointer;\n\n    :hover {\n        ',
                    ' {\n            opacity: 0.8;\n        }\n    }\n'
                ]);
                return (
                    (Vc = function() {
                        return n;
                    }),
                    n
                );
            }
            var zc = Object(Ut.c)(Mt)(Vc(), Lc);
            function Qc() {
                var n = Object(Tt.a)([
                    '\n    padding: 1rem 0;\n    font-size: 1.8rem;\n    line-height: normal;\n'
                ]);
                return (
                    (Qc = function() {
                        return n;
                    }),
                    n
                );
            }
            var Bc = Object(Ut.c)(Ht)(Qc());
            function Hc() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 2.5rem;\n'
                ]);
                return (
                    (Hc = function() {
                        return n;
                    }),
                    n
                );
            }
            var qc = Ut.c.div(Hc());
            (qc.Image = Lc),
                (qc.Price = Mc),
                (qc.Button = Yc),
                (qc.Body = zc),
                (qc.Title = Bc);
            var Wc = qc;
            function Xc() {
                var n = Object(Tt.a)([
                    '\n    grid-row: 1 / span 2;\n    fill: ',
                    ';\n    width: 4.5rem;\n    height: 4.5rem;\n    transform: translateY(-1rem);\n'
                ]);
                return (
                    (Xc = function() {
                        return n;
                    }),
                    n
                );
            }
            var Jc = Object(Ut.c)(Dr)(Xc(), '#042c59');
            function $c() {
                var n = Object(Tt.a)([
                    '\n    ',
                    ';\n    font-weight: 300;\n    color: ',
                    ';\n'
                ]);
                return (
                    ($c = function() {
                        return n;
                    }),
                    n
                );
            }
            var Kc = Object(Ut.c)(nr)($c(), kt, '#777'),
                Zc = Kt;
            function no() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-row-gap: 1.5rem;\n    grid-column-gap: 2.5rem;\n    margin: auto;\n'
                ]);
                return (
                    (no = function() {
                        return n;
                    }),
                    n
                );
            }
            var eo = Ut.c.div(no());
            (eo.Icon = Jc), (eo.Text = Kc), (eo.Title = Zc);
            var to = eo,
                ro = t(372),
                ao = t(373),
                co = t.n(ao),
                oo = function(n) {
                    return (
                        co()(n)
                            .rgb()
                            .array()
                            .join(',') + ','
                    );
                };
            function io() {
                var n = Object(Tt.a)([
                    '\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: ',
                    ';\n    z-index: 1000;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'
                ]);
                return (
                    (io = function() {
                        return n;
                    }),
                    n
                );
            }
            var uo = Ut.c.div(io(), function(n) {
                    return n.background;
                }),
                lo = function(n) {
                    var e = n.background,
                        t =
                            void 0 === e
                                ? 'rgba('.concat(oo('#fff'), ' 0.7)')
                                : e;
                    return c.a.createElement(
                        uo,
                        { background: t },
                        c.a.createElement(ro.BounceLoader, {
                            sizeUnit: 'px',
                            size: 40,
                            color: '#f96d0b',
                            loading: !0
                        })
                    );
                };
            function so() {
                var n = Object(Tt.a)(['\n    padding: 2.5rem 0;\n']);
                return (
                    (so = function() {
                        return n;
                    }),
                    n
                );
            }
            var po = Ut.c.div(so());
            function mo() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    background-color: ',
                    ';\n    height: 2.5rem;\n    width: 2.5rem;\n    align-self: center;\n    color: ',
                    ';\n    padding: 5px;\n'
                ]);
                return (
                    (mo = function() {
                        return n;
                    }),
                    n
                );
            }
            var fo = Ut.c.span(mo(), '#042c59', '#fff');
            function go() {
                var n = Object(Tt.a)(['\n    fill: ', ';\n']);
                return (
                    (go = function() {
                        return n;
                    }),
                    n
                );
            }
            var bo = Object(Ut.c)(Dr)(go(), '#fff');
            function Eo() {
                var n = Object(Tt.a)([
                    '\n    color: ',
                    ';\n    cursor: pointer;\n    padding-left: 1rem;\n    display: flex;\n    align-items: center;\n'
                ]);
                return (
                    (Eo = function() {
                        return n;
                    }),
                    n
                );
            }
            var vo = Ut.c.span(Eo(), '#042c59');
            function ho() {
                var n = Object(Tt.a)([
                    '\n    fill: ',
                    ';\n    height: 1.5rem;\n    width: 1.5rem;\n    margin-right: 1rem;\n'
                ]);
                return (
                    (ho = function() {
                        return n;
                    }),
                    n
                );
            }
            var Oo = Object(Ut.c)(Dr)(ho(), '#042c59');
            function yo() {
                var n = Object(Tt.a)([
                    '\n    justify-self: center;\n    width: 1px;\n    background-color: ',
                    ';\n'
                ]);
                return (
                    (yo = function() {
                        return n;
                    }),
                    n
                );
            }
            var jo = Ut.c.div(yo(), '#bfbfbf');
            function _o() {
                var n = Object(Tt.a)([
                    '\n    font-size: 2.6rem;\n    font-weight: 300;\n'
                ]);
                return (
                    (_o = function() {
                        return n;
                    }),
                    n
                );
            }
            var Co = Object(Ut.c)(Wt)(_o());
            function So() {
                var n = Object(Tt.a)([
                    '\n    color: ',
                    ';\n    font-weight: 300;\n    font-size: 1.3rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: start;\n'
                ]);
                return (
                    (So = function() {
                        return n;
                    }),
                    n
                );
            }
            var To = Ut.c.div(So(), '#808080');
            function Ro() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n    grid-template-columns: 2.5rem 1fr;\n    grid-gap: 1rem;\n'
                ]);
                return (
                    (Ro = function() {
                        return n;
                    }),
                    n
                );
            }
            var Uo = Ut.c.div(Ro());
            (Uo.Body = po),
                (Uo.Badge = fo),
                (Uo.CheckedIcon = bo),
                (Uo.Edit = vo),
                (Uo.EditIcon = Oo),
                (Uo.Line = jo),
                (Uo.Title = Co),
                (Uo.Summary = To);
            var Do = Uo;
            function Ao() {
                var n = Object(Tt.a)([
                    '\n    display: none;\n\n    &:checked ~ ',
                    ' {\n        border-color: ',
                    ';\n\n        :after {\n            opacity: 1;\n        }\n    }\n'
                ]);
                return (
                    (Ao = function() {
                        return n;
                    }),
                    n
                );
            }
            function Io() {
                var n = Object(Tt.a)([
                    '\n    width: 2rem;\n    height: 2rem;\n    border: 1px solid ',
                    ";\n    display: block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    top: -1px;\n\n    &:after {\n        content: '';\n        height: 0.8rem;\n        width: 0.8rem;\n        background-color: ",
                    ';\n        display: block;\n        border-radius: 50%;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        opacity: 0;\n    }\n'
                ]);
                return (
                    (Io = function() {
                        return n;
                    }),
                    n
                );
            }
            var Po = Ut.c.span(Io(), '#bfbfbf', '#f96d0b'),
                xo = Ut.c.input(Ao(), Po, '#f96d0b'),
                ko = function(n) {
                    return c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(xo, n),
                        c.a.createElement(Po, null)
                    );
                };
            function wo() {
                var n = Object(Tt.a)(['\n    color: ', ';\n']);
                return (
                    (wo = function() {
                        return n;
                    }),
                    n
                );
            }
            function Lo() {
                var n = Object(Tt.a)([
                    '\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    align-items: center;\n    line-height: normal;\n    padding-left: 3rem;\n    ',
                    ';\n    :first-of-type {\n        margin-top: 1rem;\n    }\n    &:not(:first-of-type) {\n        margin-top: 2rem;\n    }\n'
                ]);
                return (
                    (Lo = function() {
                        return n;
                    }),
                    n
                );
            }
            function No() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n'
                ]);
                return (
                    (No = function() {
                        return n;
                    }),
                    n
                );
            }
            function Mo() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    min-height: 10rem;\n    :not(:first-child) {\n        margin-top: 2rem;\n    }\n'
                ]);
                return (
                    (Mo = function() {
                        return n;
                    }),
                    n
                );
            }
            var Fo = Ut.c.div(Mo()),
                Go = Ut.c.div(No()),
                Yo = Ut.c.label(Lo(), Lt),
                Vo = Ut.c.div(wo(), '#777'),
                zo = function(n) {
                    var e = n.input,
                        t = n.options,
                        r = n.label,
                        a = n.handleChange,
                        o = n.loadAddressOptions,
                        i = n.loading;
                    return c.a.createElement(
                        Fo,
                        null,
                        c.a.createElement(Or, null, r),
                        i &&
                            c.a.createElement(lo, {
                                background: 'transparent'
                            }),
                        t.map(function(n) {
                            var t = n.value,
                                r = n.label,
                                i = n.priceDescription,
                                u = n.renderSection;
                            return c.a.createElement(
                                Go,
                                { key: t },
                                c.a.createElement(
                                    Yo,
                                    null,
                                    c.a.createElement(
                                        ko,
                                        Object.assign({ type: 'radio' }, e, {
                                            value: t,
                                            checked: t === e.value,
                                            onChange: function(n) {
                                                e.onChange(n), a && a(n);
                                            }
                                        })
                                    ),
                                    c.a.createElement(
                                        'div',
                                        null,
                                        r,
                                        i &&
                                            c.a.createElement(
                                                Vo,
                                                null,
                                                '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ',
                                                i
                                            )
                                    )
                                ),
                                t === e.value && u && u({ loadOptions: o })
                            );
                        })
                    );
                },
                Qo = Object(St.a)(kc)(function(n) {
                    var e = n.deliveryLoading,
                        t = n.deliveryOptions,
                        r = n.loadCityOptions,
                        a = n.loadAddressOptions,
                        o = n.handleDeliveryChange,
                        i = n.handleCityChange,
                        u = (n.previousPage, n.handleSubmit),
                        l = n.city;
                    return c.a.createElement(
                        _t.a,
                        { onSubmit: u },
                        c.a.createElement(Ct.a, {
                            name: 'city',
                            label: 'City',
                            loadOptions: r,
                            virtualized: !0,
                            async: !0,
                            creatable: !0,
                            component: jc,
                            handleChange: i,
                            placeholder:
                                '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434'
                        }),
                        l &&
                            c.a.createElement(Ct.a, {
                                name: 'delivery',
                                label: 'Delivery Methods',
                                options: t,
                                loading: e,
                                component: zo,
                                handleChange: o,
                                loadAddressOptions: a,
                                normalize: Number,
                                validate: De
                            }),
                        c.a.createElement(vr, { type: 'submit' }, 'Next')
                    );
                }),
                Bo = t(336);
            function Ho() {
                var n = Object(Tt.a)([
                    '\n    padding-left: 3rem;\n    margin: 2rem 0;\n'
                ]);
                return (
                    (Ho = function() {
                        return n;
                    }),
                    n
                );
            }
            var qo = Ut.c.label(Ho()),
                Wo = function(n) {
                    var e = n.loadOptions,
                        t = n.description;
                    return c.a.createElement(
                        Bo.a,
                        { name: 'address' },
                        c.a.createElement(
                            qo,
                            null,
                            c.a.createElement(Ct.a, {
                                name: 'department',
                                placeholder:
                                    '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435',
                                component: jc,
                                small: !0,
                                creatable: !0,
                                virtualized: !0,
                                async: !0,
                                loadOptions: e,
                                validate: [De],
                                description: t
                            })
                        )
                    );
                };
            function Xo() {
                var n = Object(Tt.a)(['\n    padding: 0;\n    margin: 0;\n']);
                return (
                    (Xo = function() {
                        return n;
                    }),
                    n
                );
            }
            function Jo() {
                var n = Object(Tt.a)([
                    '\n    padding-left: 3rem;\n    margin: 2rem 0;\n    display: grid;\n    grid-template-columns: 6fr 1fr 1fr;\n    align-items: start;\n'
                ]);
                return (
                    (Jo = function() {
                        return n;
                    }),
                    n
                );
            }
            function $o() {
                var n = Object(Tt.a)([
                    '\n    line-height: 2.8rem;\n\n    ',
                    ';\n    font-size: 1.5rem;\n    padding: 0.6rem 0.8rem;\n    border: 1px solid rgba(0, 0, 0, 0.13);\n    width: 100%;\n\n    :focus {\n        outline: none;\n    }\n\n    ',
                    ';\n'
                ]);
                return (
                    ($o = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ko = Ut.c.input($o(), Lt, ya),
                Zo = Ut.c.div(Jo()),
                ni = Object(Ut.c)(jc)(Xo()),
                ei = function(n) {
                    var e = n.input,
                        t = (n.type, n.meta),
                        r = t.touched,
                        a = t.error,
                        o = n.placeholder;
                    return c.a.createElement(
                        Ko,
                        Object.assign({}, e, {
                            error: r && a,
                            type: 'type',
                            placeholder: o
                        })
                    );
                },
                ti = {
                    1: { renderSection: Wo },
                    2: {
                        renderSection: function(n) {
                            var e = n.loadOptions;
                            return c.a.createElement(
                                Bo.a,
                                { name: 'address' },
                                c.a.createElement(
                                    Zo,
                                    null,
                                    c.a.createElement(Ct.a, {
                                        name: 'street',
                                        placeholder:
                                            '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043b\u0438\u0446\u0443',
                                        component: ni,
                                        virtualized: !0,
                                        async: !0,
                                        creatable: !0,
                                        small: !0,
                                        loadOptions: e,
                                        validate: [De]
                                    }),
                                    c.a.createElement(Ct.a, {
                                        name: 'house',
                                        placeholder: '\u0414\u043e\u043c',
                                        component: ei,
                                        validate: [De]
                                    }),
                                    c.a.createElement(Ct.a, {
                                        name: 'apartment',
                                        placeholder: '\u041a\u0432',
                                        component: ei
                                    })
                                )
                            );
                        }
                    }
                },
                ri = bn(['GET_DELIVERY_METHODS']),
                ai = bn(['GET_PAYMENT_METHODS']),
                ci = Object(yt.a)('checkout'),
                oi = {},
                ii = function(n) {
                    return X()(n, 'checkoutPage.delivery.byID', oi);
                },
                ui = function(n) {
                    return X()(n, 'checkoutPage.payment.byID', oi);
                },
                li = Object(q.a)(ii, function(n) {
                    return (function(n) {
                        return Object.values(n).map(function(n) {
                            return Object(
                                g.a
                            )({ value: n.ID, label: n.name, priceDescription: n.deliveryPrice && n.deliveryPrice.description }, ti[n.ID]);
                        });
                    })(n);
                }),
                si = Object(q.a)(ui, function(n) {
                    return (function(n) {
                        return Object.values(n).map(function(n) {
                            return { value: n.ID, label: n.name };
                        });
                    })(n);
                }),
                di = Object(q.a)(ci, function(n) {
                    return !Object.keys(n).length;
                }),
                pi = Object(q.a)(
                    [
                        ii,
                        function(n) {
                            return Object(jt.a)('checkout')(n, _c.DELIVERY);
                        }
                    ],
                    function(n, e) {
                        return X()(n[e], 'deliveryPrice', {
                            price: 0,
                            description: ''
                        });
                    }
                ),
                mi = Object(q.a)([pi, ot], function(n, e) {
                    return e.price + n.price;
                }),
                fi = Object(q.a)([pi], function(n) {
                    return X()(n, 'description');
                }),
                gi = Object(q.a)([st, dt], function(n, e) {
                    return n
                        ? (function(n) {
                              var e;
                              return (
                                  (e = {}),
                                  Object($.a)(e, _c.FULL_NAME, n.name),
                                  Object($.a)(e, _c.EMAIL, n.email),
                                  Object($.a)(e, _c.PHONE, n.phone),
                                  Object($.a)(e, _c.CITY, null),
                                  Object($.a)(e, _c.DELIVERY, null),
                                  Object($.a)(e, _c.ADDRESS, null),
                                  Object($.a)(e, _c.PAYMENT, null),
                                  e
                              );
                          })(e)
                        : Rc;
                }),
                bi = {
                    getDeliveryOptions: li,
                    getPaymentOptions: si,
                    getDeliveryByID: ii,
                    getPaymentByID: ui,
                    getIsFormValid: di,
                    isDeliveryLoading: ri,
                    isPaymentLoading: ai,
                    getTotalPrice: mi,
                    getDeliveryPriceDescription: fi,
                    getInitialValues: gi
                };
            function Ei(n, e) {
                return function() {
                    var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : n,
                        r = arguments.length > 1 ? arguments[1] : void 0;
                    return e.hasOwnProperty(r.type) ? e[r.type](t, r) : t;
                };
            }
            var vi,
                hi,
                Oi,
                yi = function(n) {
                    return Number(n).toString();
                },
                ji = function(n, e) {
                    var t = ee()(n, e);
                    return { byID: t, allIDs: Object.keys(t) };
                },
                _i = {
                    delivery: { byID: {}, allIDs: [] },
                    payment: { byID: {}, allIDs: [] }
                },
                Ci =
                    ((vi = {}),
                    Object($.a)(
                        vi,
                        vt.GET_DELIVERY_METHODS_SUCCESS,
                        function() {
                            var n =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                e = (arguments.length > 1
                                    ? arguments[1]
                                    : void 0
                                ).payload,
                                t = ji(e, 'ID');
                            return Object(g.a)({}, n, { delivery: t });
                        }
                    ),
                    Object($.a)(vi, vt.GET_PAYMENT_METHODS_SUCCESS, function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                            e = (arguments.length > 1 ? arguments[1] : void 0)
                                .payload,
                            t = ji(e, 'ID');
                        return Object(g.a)({}, n, { payment: t });
                    }),
                    Object($.a)(vi, vt.RESET_OPTIONS, function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                            e = (arguments.length > 1 ? arguments[1] : void 0)
                                .payload;
                        return Object(g.a)({}, n, ce()(_i, e));
                    }),
                    vi),
                Si = Ei(_i, Ci),
                Ti = t(52),
                Ri = function() {
                    return (function() {
                        var n = Object(z.a)(
                            V.a.mark(function n(e) {
                                var t, r;
                                return V.a.wrap(
                                    function(n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    if (((n.prev = 0), Ve())) {
                                                        n.next = 4;
                                                        break;
                                                    }
                                                    throw new Error();
                                                case 4:
                                                    return (
                                                        e({
                                                            type:
                                                                tn.GET_MY_PROFILE_REQUEST
                                                        }),
                                                        (n.next = 7),
                                                        He.get('/api/user/me')
                                                    );
                                                case 7:
                                                    return (
                                                        (t = n.sent),
                                                        (r = t.data),
                                                        e(
                                                            ((c = r.user),
                                                            {
                                                                type:
                                                                    tn.GET_MY_PROFILE_SUCCESS,
                                                                payload: c
                                                            })
                                                        ),
                                                        n.abrupt(
                                                            'return',
                                                            e(mt(r.cart))
                                                        )
                                                    );
                                                case 13:
                                                    return (
                                                        (n.prev = 13),
                                                        (n.t0 = n.catch(0)),
                                                        e(
                                                            ((a = n.t0.message),
                                                            {
                                                                type:
                                                                    tn.GET_MY_PROFILE_FAILURE,
                                                                payload: {
                                                                    error: a
                                                                }
                                                            })
                                                        ),
                                                        n.abrupt(
                                                            'return',
                                                            e(mt())
                                                        )
                                                    );
                                                case 17:
                                                case 'end':
                                                    return n.stop();
                                            }
                                        var a, c;
                                    },
                                    n,
                                    null,
                                    [[0, 13]]
                                );
                            })
                        );
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                Ui = function() {
                    return (function() {
                        var n = Object(z.a)(
                            V.a.mark(function n(e) {
                                return V.a.wrap(
                                    function(n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    if (((n.prev = 0), Ve())) {
                                                        n.next = 4;
                                                        break;
                                                    }
                                                    return n.abrupt('return');
                                                case 4:
                                                    return (
                                                        e({
                                                            type:
                                                                tn.LOGOUT_REQUEST
                                                        }),
                                                        (n.next = 7),
                                                        He.get(
                                                            '/api/auth/logout'
                                                        )
                                                    );
                                                case 7:
                                                    if (!n.sent.data.error) {
                                                        n.next = 11;
                                                        break;
                                                    }
                                                    throw new Error();
                                                case 11:
                                                    return (
                                                        e({
                                                            type:
                                                                tn.LOGOUT_SUCCESS
                                                        }),
                                                        e(Object(Ti.d)('/')),
                                                        n.abrupt(
                                                            'return',
                                                            localStorage.removeItem(
                                                                'authToken'
                                                            )
                                                        )
                                                    );
                                                case 16:
                                                    return (
                                                        (n.prev = 16),
                                                        (n.t0 = n.catch(0)),
                                                        n.abrupt('return', null)
                                                    );
                                                case 19:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    },
                                    n,
                                    null,
                                    [[0, 16]]
                                );
                            })
                        );
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                Di = ''.concat('SIGN_UP', '_REQUEST'),
                Ai = ''.concat('SIGN_UP', '_SUCCESS'),
                Ii = ''.concat('SIGN_UP', '_FAILURE'),
                Pi = ''.concat('SIGN_IN', '_REQUEST'),
                xi = ''.concat('SIGN_IN', '_SUCCESS'),
                ki = {
                    SIGN_UP_REQUEST: Di,
                    SIGN_UP_SUCCESS: Ai,
                    SIGN_UP_FAILURE: Ii,
                    SIGN_IN_REQUEST: Pi,
                    SIGN_IN_SUCCESS: xi,
                    SIGN_IN_FAILURE: ''.concat('SIGN_IN', '_FAILURE')
                },
                wi = {
                    phone: function(n) {
                        return Te.a.createMask(Re).resolve(n);
                    }
                },
                Li = { user: null },
                Ni = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                        e = (function(n) {
                            var e = {};
                            return (
                                Ac()(n, function(n, t) {
                                    e[t] = wi[t] ? wi[t](n) : n;
                                }),
                                e
                            );
                        })(
                            (arguments.length > 1 ? arguments[1] : void 0)
                                .payload
                        );
                    return Object(g.a)({}, n, { user: e });
                },
                Mi =
                    ((hi = {}),
                    Object($.a)(hi, Ai, Ni),
                    Object($.a)(hi, xi, Ni),
                    Object($.a)(hi, tn.GET_MY_PROFILE_SUCCESS, Ni),
                    Object($.a)(hi, tn.LOGOUT_SUCCESS, function() {
                        return Li;
                    }),
                    hi),
                Fi = Ei(Li, Mi),
                Gi = t(242),
                Yi = t.n(Gi),
                Vi = [
                    {
                        value: 1,
                        label: '\u0421\u043e\u0431\u0430\u043a\u0430\u043c'
                    },
                    { value: 2, label: '\u041a\u043e\u0448\u043a\u0430\u043c' }
                ],
                zi = {
                    name: '',
                    slug: '',
                    parent: { value: 0, label: '\u041d\u0435\u0442' },
                    pet: null
                },
                Qi = {
                    title: '',
                    slug: '',
                    category: null,
                    description: '',
                    tabs: null
                },
                Bi = function(n, e) {
                    if (!X()(e, 'parent.value') && Ce(n))
                        return '\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f';
                },
                Hi = we(1),
                qi = function(n) {
                    return {
                        value: n._id,
                        label: n.name,
                        pet: n.pet,
                        parent: n.parent && n.parent.name
                    };
                },
                Wi = function(n) {
                    return n.map(qi);
                },
                Xi = function(n) {
                    var e = {};
                    return (
                        (e.title = n.title),
                        (e.price = n.price),
                        (e.slug = n.slug),
                        (e.description = n.description),
                        (e.categoryIDs = n.categories.map(function(n) {
                            return n.value;
                        })),
                        e
                    );
                },
                Ji = function(n) {
                    var e = {},
                        t = X()(n, 'parent.value');
                    return (
                        (e.name = n.name),
                        (e.slug = n.slug),
                        (e.pet = X()(n, 'pet.label')),
                        (e.parent = 0 === t ? null : t),
                        e
                    );
                },
                $i = bn(['ADD_PRODUCT', 'UPDATE_PRODUCT']),
                Ki = bn(['REMOVE_PRODUCT', 'GET_PRODUCTS']),
                Zi = bn(['REMOVE_CATEGORY']),
                nu = bn(['ADD_CATEGORY', 'UPDATE_CATEGORY']),
                eu = function(n) {
                    return X()(n, 'adminPage.update.category');
                },
                tu = function(n) {
                    return X()(n, 'adminPage.update.product');
                },
                ru = Object(q.a)(yn, function(n) {
                    return (function(n) {
                        return n.map(function(n) {
                            return {
                                label: n.name,
                                options: Wi(n.subCategories)
                            };
                        });
                    })(n);
                }),
                au = Object(q.a)([yn, eu], function(n, e) {
                    var t = [{ value: 0, label: '\u041d\u0435\u0442' }].concat(
                        Object(H.a)(Wi(n))
                    );
                    return (
                        e &&
                            (t = t.filter(function(n) {
                                return n.value !== e.id;
                            })),
                        t
                    );
                }),
                cu = {
                    getParentCategoriesOptions: au,
                    getCategoriesOptions: ru,
                    getUpdatedCategory: eu,
                    getCategoryInitialValues: Object(q.a)([eu, au], function(
                        n,
                        e
                    ) {
                        return n
                            ? (function(n, e) {
                                  var t = {};
                                  return (
                                      (t.name = X()(n, 'name')),
                                      (t.slug = X()(n, 'slug')),
                                      (t.pet = Vi.find(function(e) {
                                          return e.label === X()(n, 'pet');
                                      })),
                                      (t.parent = e.find(function(e) {
                                          return (
                                              e.value ===
                                              X()(n, 'parent._id', 0)
                                          );
                                      })),
                                      t
                                  );
                              })(n, e)
                            : zi;
                    }),
                    getUpdatedProduct: tu,
                    getProductInitialValues: Object(q.a)([tu, ru], function(
                        n,
                        e
                    ) {
                        return n
                            ? (function(n, e) {
                                  var t = {},
                                      r = X()(n, 'categoryIDs', []),
                                      a = Yi()(
                                          e.map(function(n) {
                                              return n.options;
                                          })
                                      );
                                  return (
                                      (t.title = X()(n, 'title')),
                                      (t.slug = X()(n, 'slug')),
                                      (t.price = X()(n, 'price')),
                                      (t.description = X()(n, 'description')),
                                      (t.categories = a.filter(function(n) {
                                          return r.includes(n.value);
                                      })),
                                      t
                                  );
                              })(n, e)
                            : Qi;
                    }),
                    isProductFormLoading: $i,
                    isProductsViewLoading: Ki,
                    isCategoriesViewLoading: Zi,
                    isCategoryFormLoading: nu
                },
                ou = t(172),
                iu = t(375),
                uu = t.n(iu)()('response.data.error'),
                lu = function(n) {
                    return {
                        type: M.START_UPDATING_CATEGORY,
                        payload: { category: n }
                    };
                },
                su = function() {
                    return { type: M.STOP_UPDATING_CATEGORY };
                },
                du = function(n) {
                    return {
                        type: M.START_UPDATING_PRODUCT,
                        payload: { product: n }
                    };
                },
                pu = function() {
                    return { type: M.STOP_UPDATING_PRODUCT };
                },
                mu = function() {
                    return { type: M.ADD_CATEGORY_REQUEST };
                },
                fu = function(n) {
                    return {
                        type: M.ADD_CATEGORY_SUCCESS,
                        payload: { categories: n }
                    };
                },
                gu = function(n) {
                    return {
                        type: M.ADD_CATEGORY_FAILURE,
                        payload: { error: n }
                    };
                },
                bu = function() {
                    return { type: M.REMOVE_CATEGORY_REQUEST };
                },
                Eu = function(n) {
                    return {
                        type: M.REMOVE_CATEGORY_SUCCESS,
                        payload: { categories: n }
                    };
                },
                vu = function(n) {
                    return {
                        type: M.REMOVE_CATEGORY_FAILURE,
                        payload: { error: n }
                    };
                },
                hu = function() {
                    return { type: M.UPDATE_CATEGORY_REQUEST };
                },
                Ou = function(n) {
                    return {
                        type: M.UPDATE_CATEGORY_SUCCESS,
                        payload: { categories: n }
                    };
                },
                yu = function(n) {
                    return {
                        type: M.UPDATE_CATEGORY_FAILURE,
                        payload: { error: n }
                    };
                },
                ju = function() {
                    return { type: M.ADD_PRODUCT_REQUEST };
                },
                _u = function(n) {
                    return {
                        type: M.ADD_PRODUCT_SUCCESS,
                        payload: { products: n }
                    };
                },
                Cu = function(n) {
                    return {
                        type: M.ADD_PRODUCT_FAILURE,
                        payload: { error: n }
                    };
                },
                Su = function() {
                    return { type: M.REMOVE_PRODUCT_REQUEST };
                },
                Tu = function(n) {
                    return {
                        type: M.REMOVE_PRODUCT_SUCCESS,
                        payload: { products: n }
                    };
                },
                Ru = function(n) {
                    return {
                        type: M.REMOVE_PRODUCT_FAILURE,
                        payload: { error: n }
                    };
                },
                Uu = function() {
                    return { type: M.UPDATE_PRODUCT_REQUEST };
                },
                Du = function(n) {
                    return {
                        type: M.UPDATE_PRODUCT_SUCCESS,
                        payload: { products: n }
                    };
                },
                Au = function(n) {
                    return {
                        type: M.UPDATE_PRODUCT_FAILURE,
                        payload: { error: n }
                    };
                },
                Iu = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a, c;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t(mu()),
                                                        (e.next = 4),
                                                        He.post(
                                                            '/api/admin/category',
                                                            n
                                                        )
                                                    );
                                                case 4:
                                                    (r = e.sent),
                                                        (a = r.data),
                                                        t(fu(a)),
                                                        (e.next = 14);
                                                    break;
                                                case 9:
                                                    throw ((e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    (c = uu(e.t0)),
                                                    t(gu(c)),
                                                    new ou.a({ _error: c }));
                                                case 14:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 9]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                Pu = function(n, e) {
                    return (function() {
                        var t = Object(z.a)(
                            V.a.mark(function t(r) {
                                var a, c, o;
                                return V.a.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        r(hu()),
                                                        (t.next = 4),
                                                        He.patch(
                                                            '/api/admin/category/'.concat(
                                                                n
                                                            ),
                                                            e
                                                        )
                                                    );
                                                case 4:
                                                    (a = t.sent),
                                                        (c = a.data),
                                                        r(Ou(c)),
                                                        r(su()),
                                                        (t.next = 15);
                                                    break;
                                                case 10:
                                                    throw ((t.prev = 10),
                                                    (t.t0 = t.catch(0)),
                                                    (o = uu(t.t0)),
                                                    r(yu(o)),
                                                    new ou.a({ _error: o }));
                                                case 15:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 10]]
                                );
                            })
                        );
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                xu = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t(bu()),
                                                        (e.next = 4),
                                                        He.delete(
                                                            '/api/admin/category/'.concat(
                                                                n
                                                            )
                                                        )
                                                    );
                                                case 4:
                                                    (r = e.sent),
                                                        (a = r.data),
                                                        t(Eu(a)),
                                                        t(su()),
                                                        (e.next = 13);
                                                    break;
                                                case 10:
                                                    (e.prev = 10),
                                                        (e.t0 = e.catch(0)),
                                                        t(vu(uu(e.t0)));
                                                case 13:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 10]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                ku = lu,
                wu = su,
                Lu = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a, c;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t(ju()),
                                                        (e.next = 4),
                                                        He.post(
                                                            '/api/admin/product',
                                                            n
                                                        )
                                                    );
                                                case 4:
                                                    (r = e.sent),
                                                        (a = r.data),
                                                        t(_u(a)),
                                                        (e.next = 14);
                                                    break;
                                                case 9:
                                                    throw ((e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    (c = uu(e.t0)),
                                                    t(Cu(c)),
                                                    new ou.a({ _error: c }));
                                                case 14:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 9]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                Nu = function(n, e) {
                    return (function() {
                        var t = Object(z.a)(
                            V.a.mark(function t(r) {
                                var a, c, o;
                                return V.a.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.prev = 0),
                                                        r(Uu()),
                                                        (t.next = 4),
                                                        He.patch(
                                                            '/api/admin/product/'.concat(
                                                                n
                                                            ),
                                                            e
                                                        )
                                                    );
                                                case 4:
                                                    (a = t.sent),
                                                        (c = a.data),
                                                        r(Du(c)),
                                                        r(pu()),
                                                        (t.next = 15);
                                                    break;
                                                case 10:
                                                    throw ((t.prev = 10),
                                                    (t.t0 = t.catch(0)),
                                                    (o = uu(t.t0)),
                                                    r(Au(o)),
                                                    new ou.a({ _error: o }));
                                                case 15:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 10]]
                                );
                            })
                        );
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                Mu = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t(Su()),
                                                        (e.next = 4),
                                                        He.delete(
                                                            '/api/admin/product/'.concat(
                                                                n
                                                            )
                                                        )
                                                    );
                                                case 4:
                                                    (r = e.sent),
                                                        (a = r.data),
                                                        t(Tu(a)),
                                                        t(pu()),
                                                        (e.next = 13);
                                                    break;
                                                case 10:
                                                    (e.prev = 10),
                                                        (e.t0 = e.catch(0)),
                                                        t(Ru(uu(e.t0)));
                                                case 13:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 10]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                Fu = du,
                Gu = pu,
                Yu = Ei(
                    { update: { category: null, product: null } },
                    ((Oi = {}),
                    Object($.a)(Oi, M.START_UPDATING_CATEGORY, function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                            e = (arguments.length > 1 ? arguments[1] : void 0)
                                .payload.category;
                        return Object(g.a)({}, n, { update: { category: e } });
                    }),
                    Object($.a)(Oi, M.STOP_UPDATING_CATEGORY, function() {
                        var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                        return Object(
                            g.a
                        )({}, n, { update: { category: null } });
                    }),
                    Object($.a)(Oi, M.START_UPDATING_PRODUCT, function() {
                        var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                            e = (arguments.length > 1 ? arguments[1] : void 0)
                                .payload.product;
                        return Object(g.a)({}, n, { update: { product: e } });
                    }),
                    Object($.a)(Oi, M.STOP_UPDATING_PRODUCT, function() {
                        var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                        return Object(
                            g.a
                        )({}, n, { update: { product: null } });
                    }),
                    Oi)
                ),
                Vu = { categoriesByID: {} },
                zu = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : Vu,
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        t = e.type,
                        r = e.payload;
                    switch (t) {
                        case C:
                        case y:
                        case R:
                        case Z:
                            return Object(g.a)({}, n, {
                                categoriesByID: ee()(r.categories, '_id')
                            });
                        default:
                            return n;
                    }
                },
                Qu = function() {
                    return { type: en.GET_APP_CONFIG_REQUEST };
                },
                Bu = function(n) {
                    var e = n.categories;
                    return {
                        type: en.GET_APP_CONFIG_SUCCESS,
                        payload: { categories: e }
                    };
                },
                Hu = function(n) {
                    return {
                        type: en.GET_APP_CONFIG_FAILURE,
                        payload: { error: n }
                    };
                },
                qu = function() {
                    return (function() {
                        var n = Object(z.a)(
                            V.a.mark(function n(e) {
                                var t, r;
                                return V.a.wrap(
                                    function(n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    return (
                                                        (n.prev = 0),
                                                        e(Qu()),
                                                        (n.next = 4),
                                                        B.a.get(
                                                            '/api/app/get_config'
                                                        )
                                                    );
                                                case 4:
                                                    (t = n.sent),
                                                        (r = t.data),
                                                        e(Bu(r)),
                                                        (n.next = 12);
                                                    break;
                                                case 9:
                                                    (n.prev = 9),
                                                        (n.t0 = n.catch(0)),
                                                        e(Hu(n.t0.message));
                                                case 12:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    },
                                    n,
                                    null,
                                    [[0, 9]]
                                );
                            })
                        );
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                Wu = function() {
                    var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        t = e.type,
                        r = e.payload,
                        a = /(.*)_(REQUEST|FAILURE)/.exec(t);
                    if (!a) return n;
                    var c = Object(J.a)(a, 3),
                        o = c[1],
                        i = c[2];
                    return Object(g.a)(
                        {},
                        n,
                        Object($.a)({}, o, 'FAILURE' === i ? r && r.error : '')
                    );
                },
                Xu = (t(376), t(182));
            function Ju() {
                var n = Object(Tt.a)([
                    '\n    background-color: rgba(168, 168, 168, 0.2);\n    padding: 3rem;\n    border: 1px solid ',
                    ';\n    margin: 3rem 0;\n    position: relative;\n'
                ]);
                return (
                    (Ju = function() {
                        return n;
                    }),
                    n
                );
            }
            var $u = Object(Ut.c)(_t.a)(Ju(), '#bfbfbf'),
                Ku = {
                    form: 'signup',
                    enableReinitialize: !0,
                    initialValues: {
                        name: '',
                        email: '',
                        phone: '',
                        password: null
                    }
                },
                Zu = Object(St.a)(Ku)(function(n) {
                    var e = n.handleSubmit,
                        t = n.error,
                        r = n.isLoading;
                    return c.a.createElement(
                        $u,
                        { onSubmit: e },
                        r && c.a.createElement(lo, null),
                        t && c.a.createElement(fr, null, t),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'name',
                            label: 'Full Name',
                            component: Ta,
                            validate: [De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                            component: Ta,
                            validate: [Ie, De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'tel',
                            name: 'phone',
                            label: 'Phone Number',
                            placeholder: '+38 (___) ___-__-__',
                            component: Ta,
                            validate: [Pe, De],
                            mask: 'phone'
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'password',
                            name: 'password',
                            label: 'Password',
                            component: Ta,
                            validate: [xe, De]
                        }),
                        c.a.createElement(vr, null, 'Register')
                    );
                }),
                nl = {
                    form: 'signin',
                    enableReinitialize: !0,
                    initialValues: { email: '', password: null }
                },
                el = Object(St.a)(nl)(function(n) {
                    var e = n.handleSubmit,
                        t = n.error,
                        r = n.isLoading;
                    return c.a.createElement(
                        $u,
                        { onSubmit: e },
                        r && c.a.createElement(lo, null),
                        t && c.a.createElement(fr, { source: t }),
                        c.a.createElement(Ct.a, {
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                            component: Ta,
                            validate: [Ie, De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'password',
                            name: 'password',
                            label: 'Password',
                            component: Ta,
                            validate: [xe, De]
                        }),
                        c.a.createElement(vr, null, 'Sing in')
                    );
                }),
                tl = function(n) {
                    return { type: ki.SIGN_UP_SUCCESS, payload: n };
                },
                rl = function(n) {
                    return { type: ki.SIGN_UP_FAILURE, payload: { error: n } };
                },
                al = function(n) {
                    return { type: ki.SIGN_IN_FAILURE, payload: { error: n } };
                },
                cl = function(n) {
                    return Object(g.a)({}, n, { phone: Ue(n.phone) });
                },
                ol = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a, c, o, i;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t({
                                                            type:
                                                                ki.SIGN_UP_REQUEST
                                                        }),
                                                        (r = cl(n)),
                                                        (a = Qe()),
                                                        (e.next = 6),
                                                        B.a.post('/api/user', {
                                                            user: r,
                                                            cart: a
                                                        })
                                                    );
                                                case 6:
                                                    return (
                                                        (c = e.sent),
                                                        (o = c.data),
                                                        t(tl(o.user)),
                                                        t(mt(o.cart)),
                                                        e.abrupt(
                                                            'return',
                                                            Ye(o.token)
                                                        )
                                                    );
                                                case 13:
                                                    throw ((e.prev = 13),
                                                    (e.t0 = e.catch(0)),
                                                    (i = uu(e.t0)),
                                                    t(rl(i)),
                                                    new ou.a({ _error: i }));
                                                case 18:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 13]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                il = function(n) {
                    return (function() {
                        var e = Object(z.a)(
                            V.a.mark(function e(t) {
                                var r, a, c, o;
                                return V.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        t({
                                                            type:
                                                                ki.SIGN_IN_REQUEST
                                                        }),
                                                        (r = Qe()),
                                                        (e.next = 5),
                                                        B.a.post(
                                                            '/api/auth/login',
                                                            {
                                                                credentials: n,
                                                                cart: r
                                                            }
                                                        )
                                                    );
                                                case 5:
                                                    return (
                                                        (a = e.sent),
                                                        (c = a.data),
                                                        t(
                                                            ((i = c.user),
                                                            {
                                                                type:
                                                                    ki.SIGN_IN_SUCCESS,
                                                                payload: i
                                                            })
                                                        ),
                                                        t(mt(c.cart)),
                                                        e.abrupt(
                                                            'return',
                                                            Ye(c.token)
                                                        )
                                                    );
                                                case 12:
                                                    throw ((e.prev = 12),
                                                    (e.t0 = e.catch(0)),
                                                    (o = uu(e.t0)),
                                                    t(al(o)),
                                                    new ou.a({ _error: o }));
                                                case 17:
                                                case 'end':
                                                    return e.stop();
                                            }
                                        var i;
                                    },
                                    e,
                                    null,
                                    [[0, 12]]
                                );
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                ul = {
                    signInLoadingSelector: bn(['SIGN_IN']),
                    signUpLoadingSelector: bn(['SIGN_UP'])
                };
            function ll() {
                var n = Object(Tt.a)(['\n    font-weight: 300;\n']);
                return (
                    (ll = function() {
                        return n;
                    }),
                    n
                );
            }
            function sl() {
                var n = Object(Tt.a)([
                    '\n    text-align: center;\n    grid-column: 1 / -1;\n    margin: 1rem 0;\n'
                ]);
                return (
                    (sl = function() {
                        return n;
                    }),
                    n
                );
            }
            function dl() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    margin-bottom: 8.5rem;\n    margin-top: 4rem;\n\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 5rem;\n    align-items: start;\n'
                ]);
                return (
                    (dl = function() {
                        return n;
                    }),
                    n
                );
            }
            var pl = Ut.c.div(dl()),
                ml = Ut.c.header(sl()),
                fl = Object(Ut.c)(Qt)(ll()),
                gl = Object(d.c)(
                    function(n) {
                        return {
                            isAuthorized: st(n),
                            isSignInLoading: ul.signInLoadingSelector(n),
                            isSignUpLoading: ul.signUpLoadingSelector(n)
                        };
                    },
                    function(n) {
                        return {
                            signUp: function(e) {
                                return n(ol(e));
                            },
                            signIn: function(e) {
                                return n(il(e));
                            }
                        };
                    }
                )(function(n) {
                    n.match, n.logout;
                    var e = n.location.state,
                        t = n.isAuthorized,
                        r = n.signUp,
                        a = n.signIn,
                        o = n.isSignInLoading,
                        i = n.isSignUpLoading;
                    if (t) {
                        var u = (e || { from: { pathname: '/' } }).from;
                        return c.a.createElement(or.a, { to: u });
                    }
                    return c.a.createElement(
                        pl,
                        null,
                        c.a.createElement(
                            ml,
                            null,
                            c.a.createElement(fl, null, 'Sign In')
                        ),
                        c.a.createElement(el, { onSubmit: a, isLoading: o }),
                        c.a.createElement(Zu, { onSubmit: r, isLoading: i })
                    );
                });
            function bl() {
                var n = Object(Tt.a)([
                    "\n    grid-column: full-start / full-end;\n    background: url('https://www.dr-clauder.com/images/de/xpa2.jpg.pagespeed.ic.HhlcRypHjH.webp')\n        no-repeat center/cover;\n"
                ]);
                return (
                    (bl = function() {
                        return n;
                    }),
                    n
                );
            }
            var El = Ut.c.div(bl()),
                vl = function() {
                    return c.a.createElement(El, null);
                };
            function hl() {
                var n = Object(Tt.a)([
                    '\n    font-weight: 800;\n    display: block;\n'
                ]);
                return (
                    (hl = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ol() {
                var n = Object(Tt.a)([
                    '\n    font-weight: 200;\n    display: block;\n'
                ]);
                return (
                    (Ol = function() {
                        return n;
                    }),
                    n
                );
            }
            function yl() {
                var n = Object(Tt.a)(['\n    ', ';\n']);
                return (
                    (yl = function() {
                        return n;
                    }),
                    n
                );
            }
            function jl() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n\n    margin: 5rem 0;\n    text-align: center;\n'
                ]);
                return (
                    (jl = function() {
                        return n;
                    }),
                    n
                );
            }
            var _l = Ut.c.section(jl()),
                Cl = Object(Ut.c)(Qt)(yl(), kt),
                Sl = Ut.c.span(Ol()),
                Tl = Ut.c.strong(hl()),
                Rl = function() {
                    return c.a.createElement(
                        _l,
                        null,
                        c.a.createElement(
                            Cl,
                            { className: 'mb-sm-s' },
                            c.a.createElement(
                                Sl,
                                null,
                                'Pet Vitamins and Supplements for a'
                            ),
                            c.a.createElement(Tl, null, 'Long and Healthy Life')
                        ),
                        c.a.createElement(
                            'p',
                            null,
                            "Keeping your dog or cat happy and healthy isn't always easy, especially as they start to age. Healthy Solutions for Pets offers a special veterinarian formulated line of pet vitamins and supplements to improve your pets overall well-being and help ensure a long and healthy life."
                        ),
                        c.a.createElement(
                            Rt.a,
                            { to: '/pet-supplements/dog-supplements' },
                            c.a.createElement(
                                Gt,
                                { className: 'mt-md', to: '/' },
                                'View Our Pet Vitamins and Supplements'
                            )
                        )
                    );
                },
                Ul = [
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'animal-paw-print',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'cat',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'dog-1',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'bone',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'pet',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'dog-2',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'cat',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'dog-3',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'dog',
                        text:
                            'Help to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements.',
                        link: '/'
                    },
                    {
                        title: 'Allergy Skin & Coat',
                        icon: 'report',
                        text:
                            'to reduce the itching & scratching from allergies and keep your pets coat shiny & healthy with our Skin & Coat supplements. Last',
                        link: '/'
                    }
                ];
            function Dl() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n\n    justify-self: center;\n    text-align: center;\n'
                ]);
                return (
                    (Dl = function() {
                        return n;
                    }),
                    n
                );
            }
            function Al() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    ',
                    ';\n    grid-gap: 6rem;\n    align-items: start;\n'
                ]);
                return (
                    (Al = function() {
                        return n;
                    }),
                    n
                );
            }
            function Il() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n    ',
                    ';\n    background-color: ',
                    ';\n    grid-row-gap: 6rem;\n    padding: 4rem 0 6rem 0;\n'
                ]);
                return (
                    (Il = function() {
                        return n;
                    }),
                    n
                );
            }
            var Pl = Ut.c.section(Il(), ha, '#F2F2F2'),
                xl = Ut.c.div(Al(), Oa),
                kl = Ut.c.div(Dl()),
                wl = function() {
                    return c.a.createElement(
                        Pl,
                        null,
                        c.a.createElement(
                            kl,
                            null,
                            c.a.createElement(
                                Ht,
                                null,
                                'Pet Vitamin and Supplement Categories'
                            )
                        ),
                        c.a.createElement(
                            xl,
                            null,
                            Ul.map(function(n, e) {
                                var t = n.title,
                                    r = n.icon,
                                    a = n.text,
                                    o = n.link;
                                return c.a.createElement(
                                    Mt,
                                    { to: o, key: t + e },
                                    c.a.createElement(
                                        to,
                                        null,
                                        c.a.createElement(to.Icon, { icon: r }),
                                        c.a.createElement(to.Title, null, t),
                                        c.a.createElement(to.Text, null, a)
                                    )
                                );
                            })
                        )
                    );
                },
                Ll = t(377),
                Nl = t.n(Ll),
                Ml = t(378),
                Fl = t.n(Ml),
                Gl = t(379),
                Yl = t.n(Gl);
            function Vl() {
                var n = Object(Tt.a)([
                    '\n    width: 110%;\n    grid-column: 4 / 7;\n    grid-row: 4 / 6;\n'
                ]);
                return (
                    (Vl = function() {
                        return n;
                    }),
                    n
                );
            }
            function zl() {
                var n = Object(Tt.a)([
                    '\n    width: 100%;\n    grid-column: 2 / 6;\n    grid-row: 2 / 6;\n'
                ]);
                return (
                    (zl = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ql() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / col-end 4;\n\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-template-columns: repeat(6, 1fr);\n    align-items: center;\n\n    background: linear-gradient(\n            rgba(',
                    ' 0.5),\n            rgba(',
                    ' 0.5)\n        ),\n        url(',
                    ') center/cover no-repeat;\n'
                ]);
                return (
                    (Ql = function() {
                        return n;
                    }),
                    n
                );
            }
            var Bl = Ut.c.div(Ql(), oo('#042c59'), oo('#042c59'), Yl.a),
                Hl = Ut.c.img(zl()),
                ql = Ut.c.img(Vl()),
                Wl = function() {
                    return c.a.createElement(
                        Bl,
                        null,
                        c.a.createElement(Hl, { src: Nl.a, alt: 'Pets' }),
                        c.a.createElement(ql, { src: Fl.a, alt: 'Pets' })
                    );
                };
            function Xl() {
                var n = Object(Tt.a)(['\n    ', ';\n']);
                return (
                    (Xl = function() {
                        return n;
                    }),
                    n
                );
            }
            function Jl() {
                var n = Object(Tt.a)(['\n    ', ';\n']);
                return (
                    (Jl = function() {
                        return n;
                    }),
                    n
                );
            }
            function $l() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 5 / full-end;\n\n    display: grid;\n    align-content: center;\n    justify-items: start;\n    padding: 6rem 8vw;\n'
                ]);
                return (
                    ($l = function() {
                        return n;
                    }),
                    n
                );
            }
            var Kl = Ut.c.div($l()),
                Zl = Object(Ut.c)(Wt)(Jl(), kt),
                ns = Object(Ut.c)(Jt)(Xl(), kt),
                es = function() {
                    return c.a.createElement(
                        Kl,
                        null,
                        c.a.createElement(
                            ns,
                            { className: 'mb-sm-s' },
                            'Happy Customers'
                        ),
                        c.a.createElement(
                            Zl,
                            { className: 'mb-md' },
                            'The best decision for your pets'
                        ),
                        c.a.createElement(
                            'p',
                            { className: 'mb-md-b' },
                            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta! Quidem consequatur harum volupta!'
                        ),
                        c.a.createElement(
                            Gt,
                            { to: '/' },
                            'Become an Opt customer'
                        )
                    );
                },
                ts = t(380),
                rs = t.n(ts),
                as = t(381),
                cs = t.n(as),
                os = t(382),
                is = t.n(os),
                us = t(383),
                ls = t.n(us),
                ss = t(384),
                ds = t.n(ss),
                ps = t(385),
                ms = t.n(ps),
                fs = t(386),
                gs = t.n(fs),
                bs = t(387),
                Es = t.n(bs),
                vs = t(388),
                hs = t.n(vs),
                Os = t(389),
                ys = t.n(Os),
                js = t(390),
                _s = t.n(js),
                Cs = t(391),
                Ss = t.n(Cs),
                Ts = t(392),
                Rs = t.n(Ts),
                Us = t(393),
                Ds = t.n(Us);
            function As() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n    background-color: ',
                    ';\n\n    display: grid;\n    margin-top: 100rem;\n\n    grid-template: repeat(7, 5vw) / repeat(8, 1fr);\n    grid-gap: 1.5rem;\n    padding: 1.5rem;\n\n    & > div {\n        :first-child {\n            grid-row: 1 / span 2;\n            grid-column: 1 / span 2;\n            background-color: orange;\n        }\n\n        :nth-child(2) {\n            grid-row: 1 / span 3;\n            grid-column: 3 / span 3;\n            background-color: orange;\n        }\n        :nth-child(3) {\n            grid-row: 1 / span 2;\n            grid-column: 6 / 7;\n            background-color: orange;\n        }\n        :nth-child(4) {\n            grid-row: 1 / span 2;\n            grid-column: 7 / -1;\n            background-color: orange;\n        }\n        :nth-child(5) {\n            grid-row: 3 / span 3;\n            grid-column: 1 / span 2;\n            background-color: orange;\n        }\n        :nth-child(6) {\n            grid-row: 4 / span 2;\n            grid-column: 3 / span 2;\n            background-color: orange;\n        }\n        :nth-child(7) {\n            grid-row: 4 / 5;\n            grid-column: 5 / 6;\n            background-color: orange;\n        }\n        :nth-child(8) {\n            grid-row: 3 / span 2;\n            grid-column: 6 / span 2;\n            background-color: orange;\n        }\n        :nth-child(9) {\n            grid-row: 3 / span 3;\n            grid-column: 8 / -1;\n            background-color: orange;\n        }\n        :nth-child(10) {\n            grid-row: 6 / span 2;\n            grid-column: 1 / 2;\n            background-color: orange;\n        }\n        :nth-child(11) {\n            grid-row: 6 / span 2;\n            grid-column: 2 / span 2;\n            background-color: orange;\n        }\n        :nth-child(12) {\n            grid-row: 6 / span 2;\n            grid-column: 4 / 5;\n            background-color: orange;\n        }\n        :nth-child(13) {\n            grid-row: 5 / span 3;\n            grid-column: 5 / span 3;\n            background-color: orange;\n        }\n        :nth-child(14) {\n            grid-row: 6 / span 2;\n            grid-column: 8 / -1;\n            background-color: orange;\n        }\n\n        & > img {\n            display: block;\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n'
                ]);
                return (
                    (As = function() {
                        return n;
                    }),
                    n
                );
            }
            var Is = Ut.c.section(As(), '#F2F2F2'),
                Ps = function() {
                    return c.a.createElement(
                        Is,
                        null,
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: rs.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: cs.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: is.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: ls.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: ds.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: ms.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: gs.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: Es.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: hs.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: ys.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: _s.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: Ss.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: Rs.a, alt: '' })
                        ),
                        c.a.createElement(
                            'div',
                            null,
                            c.a.createElement('img', { src: Ds.a, alt: '' })
                        )
                    );
                };
            function xs() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n\n    ',
                    ';\n    grid-template-rows: 40vw repeat(2, min-content) 40vw;\n'
                ]);
                return (
                    (xs = function() {
                        return n;
                    }),
                    n
                );
            }
            var ks = Ut.c.div(xs(), ha),
                ws = function() {
                    return c.a.createElement(
                        ks,
                        null,
                        c.a.createElement(vl, null),
                        c.a.createElement(Rl, null),
                        c.a.createElement(wl, null),
                        c.a.createElement(Wl, null),
                        c.a.createElement(es, null),
                        c.a.createElement(Ps, null)
                    );
                },
                Ls = t(356),
                Ns = t(181),
                Ms = t.n(Ns);
            function Fs() {
                var n = Object(Tt.a)([
                    '\n    && {\n        background-color: transparent;\n        padding: 0;\n        :hover {\n            background-color: transparent;\n            ',
                    ' {\n                fill: ',
                    ';\n            }\n        }\n    }\n'
                ]);
                return (
                    (Fs = function() {
                        return n;
                    }),
                    n
                );
            }
            function Gs() {
                var n = Object(Tt.a)([
                    '\n    fill: ',
                    ';\n    height: 1rem;\n    width: 1rem;\n    display: block;\n    transition: all 0.2s ease;\n'
                ]);
                return (
                    (Gs = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ys = Object(Ut.c)(Dr)(Gs(), '#f96d0b'),
                Vs = Object(Ut.c)(Vt)(Fs(), Ys, '#042c59'),
                zs = function(n) {
                    n.YouCanPassAnyProps;
                    var e = n.closeToast;
                    return c.a.createElement(
                        Vs,
                        { onClick: e },
                        c.a.createElement(Ys, { icon: 'close-button' })
                    );
                },
                Qs = function(n, e) {
                    Xu.b.success(
                        n,
                        Object(g.a)(
                            {
                                className: 'toast-success',
                                progressClassName: 'toast-progress-success',
                                closeButton: c.a.createElement(zs, null)
                            },
                            e
                        )
                    );
                },
                Bs = t(396),
                Hs = t.n(Bs),
                qs = function(n) {
                    return '\u20b4 ' + Hs()(n).format('0, 0');
                };
            function Ws() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        color: ',
                    ';\n        font-weight: 600;\n        line-height: 2.2rem;\n        justify-self: start;\n        :hover {\n            color: ',
                    ';\n        }\n    }\n'
                ]);
                return (
                    (Ws = function() {
                        return n;
                    }),
                    n
                );
            }
            function Xs() {
                var n = Object(Tt.a)([
                    '\n    margin: 2rem 0;\n    position: relative;\n    min-height: 10rem;\n    grid-column: 1 / -1;\n'
                ]);
                return (
                    (Xs = function() {
                        return n;
                    }),
                    n
                );
            }
            var Js = {},
                $s = Object(Ut.c)(_t.a)(Xs()),
                Ks = Object(Ut.c)(Mt)(Ws(), '#f96d0b', '#042c59'),
                Zs = { form: 'cart', enableReinitialize: !0 },
                nd = (function(n) {
                    function e() {
                        var n, t;
                        Object(er.a)(this, e);
                        for (
                            var r = arguments.length, a = new Array(r), c = 0;
                            c < r;
                            c++
                        )
                            a[c] = arguments[c];
                        return (
                            ((t = Object(rr.a)(
                                this,
                                (n = Object(ar.a)(e)).call.apply(
                                    n,
                                    [this].concat(a)
                                )
                            )).onSubmit = function(n) {
                                var e = t.props,
                                    r = e.updateCart,
                                    a = e.products,
                                    c = e.productIDs;
                                r(Fe(c, a, n));
                            }),
                            t
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'handleRemove',
                                value: function(n, e) {
                                    var t = this.props;
                                    (0, t.removeFormCart)(
                                        n,
                                        e,
                                        t.initialValues[n],
                                        this.undoRemove
                                    );
                                }
                            },
                            {
                                key: 'undoRemove',
                                value: function(n, e) {
                                    (0, this.props.addToCart)(n, e);
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this,
                                        e = this.props,
                                        t = e.handleSubmit,
                                        r = e.products,
                                        a = e.isEmpty,
                                        o = e.formValues,
                                        i = e.isEqual,
                                        u = e.isUpdating,
                                        l = e.isLoading;
                                    return a
                                        ? c.a.createElement(Kd, null)
                                        : c.a.createElement(
                                              $s,
                                              { onSubmit: t(this.onSubmit) },
                                              l
                                                  ? c.a.createElement(lo, null)
                                                  : c.a.createElement(
                                                        c.a.Fragment,
                                                        null,
                                                        c.a.createElement(
                                                            sd,
                                                            null
                                                        ),
                                                        r.map(function(e) {
                                                            var t = e.path,
                                                                r = e.title,
                                                                a = e.media.url,
                                                                i = e._id,
                                                                u = e.price;
                                                            return c.a.createElement(
                                                                ld,
                                                                { key: i },
                                                                c.a.createElement(
                                                                    _d,
                                                                    {
                                                                        type:
                                                                            'button',
                                                                        handleClick: function() {
                                                                            return n.handleRemove(
                                                                                i,
                                                                                r
                                                                            );
                                                                        }
                                                                    }
                                                                ),
                                                                c.a.createElement(
                                                                    gd,
                                                                    {
                                                                        path: t,
                                                                        url: a
                                                                    }
                                                                ),
                                                                c.a.createElement(
                                                                    Ks,
                                                                    { to: t },
                                                                    r
                                                                ),
                                                                c.a.createElement(
                                                                    'span',
                                                                    null,
                                                                    qs(u)
                                                                ),
                                                                c.a.createElement(
                                                                    vd,
                                                                    { _id: i }
                                                                ),
                                                                c.a.createElement(
                                                                    'span',
                                                                    null,
                                                                    qs(
                                                                        Ne(
                                                                            u,
                                                                            o[i]
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        }),
                                                        c.a.createElement(id, {
                                                            isEqual: i
                                                        }),
                                                        u &&
                                                            c.a.createElement(
                                                                lo,
                                                                null
                                                            )
                                                    )
                                          );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                ed = Object(s.d)(
                    Object(d.c)(
                        function(n) {
                            var e = ut.getInitialValues(n),
                                t = Object(Ls.a)('cart')(n) || Js;
                            return {
                                products: ut.getCartProducts(n),
                                productIDs: ut.getCartProductIDs(n),
                                initialValues: e,
                                formValues: t,
                                isEqual: Ms()(e, t)
                            };
                        },
                        function(n) {
                            return {
                                addToCart: function(e, t) {
                                    return n(gt(e, t));
                                },
                                removeFormCart: function(e, t, r, a) {
                                    return n(bt(e)).then(function() {
                                        return Qs(
                                            function(n) {
                                                var o = n.closeToast;
                                                return c.a.createElement(qd, {
                                                    handleUndo: function() {
                                                        a(e, r), o();
                                                    },
                                                    text: ''.concat(
                                                        t,
                                                        ' removed.'
                                                    )
                                                });
                                            },
                                            { closeOnClick: !1 }
                                        );
                                    });
                                },
                                updateCart: function(e) {
                                    return n(Et(e)).then(function() {
                                        return Qs(
                                            c.a.createElement(qd, {
                                                text: 'Cart updated'
                                            }),
                                            {
                                                autoClose: 2e3,
                                                hideProgressBar: !0
                                            }
                                        );
                                    });
                                }
                            };
                        }
                    ),
                    Object(St.a)(Zs)
                )(nd);
            function td() {
                var n = Object(Tt.a)([
                    '\n    padding: 2rem 1.2rem;\n    display: flex;\n    justify-content: flex-end;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n'
                ]);
                return (
                    (td = function() {
                        return n;
                    }),
                    n
                );
            }
            function rd() {
                var n = Object(Tt.a)([
                    '\n                  opacity: 0.5;\n                  padding: 0.9rem 1.5rem !important;\n                  cursor: not-allowed;\n                  :hover {\n                      opacity: 0.1;\n                  }\n              '
                ]);
                return (
                    (rd = function() {
                        return n;
                    }),
                    n
                );
            }
            function ad() {
                var n = Object(Tt.a)(['\n    ', '\n']);
                return (
                    (ad = function() {
                        return n;
                    }),
                    n
                );
            }
            var cd = Object(Ut.c)(Vt)(ad(), function(n) {
                    return n.disabled ? Object(Ut.b)(rd()) : '';
                }),
                od = Ut.c.div(td()),
                id = function(n) {
                    var e = n.isEqual;
                    return c.a.createElement(
                        od,
                        null,
                        c.a.createElement(
                            cd,
                            { disabled: e, type: 'submit' },
                            'Update Cart'
                        )
                    );
                };
            function ud() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n    grid-template-columns: [start] 5.5rem [remove] 10rem [image] 1fr [title] 8rem [price] 12rem [quanity] 9rem [end];\n    align-items: center;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n\n    line-height: 2.2rem;\n    &:not(:last-child) {\n        border-bottom: none;\n    }\n\n    & > * {\n        padding: 1.2rem 0.9rem;\n    }\n'
                ]);
                return (
                    (ud = function() {
                        return n;
                    }),
                    n
                );
            }
            var ld = Ut.c.div(ud()),
                sd = function() {
                    return c.a.createElement(
                        ld,
                        null,
                        c.a.createElement('span', null),
                        c.a.createElement('span', null),
                        c.a.createElement('span', null, ' Product '),
                        c.a.createElement('span', null, ' Price '),
                        c.a.createElement('span', null, ' Quantity '),
                        c.a.createElement('span', null, ' Total ')
                    );
                };
            function dd() {
                var n = Object(Tt.a)([
                    '\n    height: 100%;\n    width: 6.4rem;\n    display: block;\n    margin: 0 auto;\n'
                ]);
                return (
                    (dd = function() {
                        return n;
                    }),
                    n
                );
            }
            function pd() {
                var n = Object(Tt.a)(['\n    display: block;\n']);
                return (
                    (pd = function() {
                        return n;
                    }),
                    n
                );
            }
            var md = Object(Ut.c)(Mt)(pd()),
                fd = Ut.c.img(dd()),
                gd = function(n) {
                    var e = n.path,
                        t = n.url;
                    return c.a.createElement(
                        md,
                        { to: e },
                        c.a.createElement(fd, {
                            src: 'https://dr-clauders-server.herokuapp.com/'.concat(
                                t
                            ),
                            alt: ''
                        })
                    );
                };
            function bd() {
                var n = Object(Tt.a)([
                    '\n    && {\n        display: block;\n        width: 7rem;\n        font-size: 1.9rem;\n        line-height: 2.8rem;\n        padding: 1.2rem 1.5rem;\n        text-align: center;\n        border: 1px solid #ccc;\n        height: auto;\n\n        :focus {\n            outline: none;\n        }\n    }\n'
                ]);
                return (
                    (bd = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ed = Object(Ut.c)(Ta)(bd()),
                vd = function(n) {
                    var e = n._id;
                    return c.a.createElement(
                        'div',
                        null,
                        c.a.createElement(Ct.a, {
                            name: e,
                            type: 'number',
                            min: '0',
                            autoComplete: 'off',
                            component: Ed,
                            validate: [De, Ae, Le],
                            format: yi
                        })
                    );
                };
            function hd() {
                var n = Object(Tt.a)([
                    '\n    &&& {\n        background-color: transparent;\n        border-color: transparent;\n        padding: 0.5rem;\n        :hover {\n            background-color: transparent;\n            ',
                    ' {\n                fill: ',
                    ';\n            }\n        }\n    }\n'
                ]);
                return (
                    (hd = function() {
                        return n;
                    }),
                    n
                );
            }
            function Od() {
                var n = Object(Tt.a)([
                    '\n    fill: ',
                    ';\n    height: 1.5rem;\n    width: 1.5rem;\n    display: block;\n    margin: 0 auto;\n    transition: all 0.2s ease;\n'
                ]);
                return (
                    (Od = function() {
                        return n;
                    }),
                    n
                );
            }
            var yd = Object(Ut.c)(Dr)(Od(), '#f96d0b'),
                jd = Object(Ut.c)(Vt)(hd(), yd, '#042c59'),
                _d = function(n) {
                    var e = n.handleClick;
                    return c.a.createElement(
                        jd,
                        { type: 'button', onClick: e },
                        c.a.createElement(yd, { icon: 'close-button' })
                    );
                },
                Cd = ed;
            function Sd() {
                var n = Object(Tt.a)(['\n    width: 100%;\n']);
                return (
                    (Sd = function() {
                        return n;
                    }),
                    n
                );
            }
            function Td() {
                var n = Object(Tt.a)([
                    '\n    font-size: 1.8rem;\n    font-weight: 700;\n    color: ',
                    ';\n'
                ]);
                return (
                    (Td = function() {
                        return n;
                    }),
                    n
                );
            }
            function Rd() {
                var n = Object(Tt.a)(['\n    font-size: 2.6rem;\n']);
                return (
                    (Rd = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ud() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1rem;\n'
                ]);
                return (
                    (Ud = function() {
                        return n;
                    }),
                    n
                );
            }
            function Dd() {
                var n = Object(Tt.a)([
                    '\n    grid-column: 2/-1;\n\n    background-color: rgba(',
                    ' 0.1);\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n'
                ]);
                return (
                    (Dd = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ad = Ut.c.div(Dd(), oo('#2b2b2b')),
                Id = Ut.c.div(Ud()),
                Pd = Object(Ut.c)(Ht)(Rd()),
                xd = Ut.c.span(Td(), '#f96d0b'),
                kd = Object(Ut.c)(Vt)(Sd()),
                wd = function(n) {
                    var e = n.totalPrice,
                        t = n.isUpdating;
                    return c.a.createElement(
                        Ad,
                        null,
                        c.a.createElement(
                            Id,
                            null,
                            c.a.createElement(Pd, null, 'Cart Total:'),
                            c.a.createElement(xd, null, qs(e))
                        ),
                        c.a.createElement(
                            Mt,
                            { to: '/checkout' },
                            c.a.createElement(kd, null, 'Proceed to Checkout')
                        ),
                        t && c.a.createElement(lo, null)
                    );
                };
            function Ld() {
                var n = Object(Tt.a)(['\n    font-weight: 300;\n']);
                return (
                    (Ld = function() {
                        return n;
                    }),
                    n
                );
            }
            function Nd() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start/center-end;\n    margin-bottom: 8.5rem;\n    margin-top: 4rem;\n\n    display: grid;\n    grid-template-columns: 1fr 30rem;\n'
                ]);
                return (
                    (Nd = function() {
                        return n;
                    }),
                    n
                );
            }
            var Md = Ut.c.div(Nd()),
                Fd = Object(Ut.c)(Qt)(Ld()),
                Gd = Object(d.c)(function(n) {
                    return {
                        cartSummary: ut.getCartSummary(n),
                        isUpdating: ut.isCartUpdating(n),
                        isLoading: ut.getIsCartLoading(n),
                        isEmpty: ut.getIsCartEmpty(n)
                    };
                }, null)(function(n) {
                    var e = n.cartSummary,
                        t = n.isUpdating,
                        r = n.isLoading,
                        a = n.isEmpty;
                    return c.a.createElement(
                        Md,
                        null,
                        c.a.createElement(
                            br,
                            null,
                            c.a.createElement(Fd, null, 'Cart')
                        ),
                        c.a.createElement(Cd, {
                            isUpdating: t,
                            isLoading: r,
                            isEmpty: a
                        }),
                        !r &&
                            !a &&
                            c.a.createElement(wd, {
                                totalPrice: e.price,
                                isUpdating: t
                            })
                    );
                });
            function Yd() {
                var n = Object(Tt.a)([
                    '\n    color: ',
                    ';\n    :hover {\n        color: ',
                    ';\n    }\n'
                ]);
                return (
                    (Yd = function() {
                        return n;
                    }),
                    n
                );
            }
            function Vd() {
                var n = Object(Tt.a)([
                    '\n    height: 1.5rem;\n    width: 1.5rem;\n    margin-right: 1rem;\n    position: relative;\n    top: 2px;\n'
                ]);
                return (
                    (Vd = function() {
                        return n;
                    }),
                    n
                );
            }
            function zd() {
                var n = Object(Tt.a)(['\n    padding: 0 1rem;\n']);
                return (
                    (zd = function() {
                        return n;
                    }),
                    n
                );
            }
            var Qd = Ut.c.div(zd()),
                Bd = Object(Ut.c)(Dr)(Vd()),
                Hd = Ut.c.span(Yd(), '#f96d0b', '#042c59'),
                qd = function(n) {
                    var e = n.handleUndo,
                        t = n.text;
                    return c.a.createElement(
                        Qd,
                        null,
                        c.a.createElement(Bd, { icon: 'checked' }),
                        t,
                        ' ',
                        e && c.a.createElement(Hd, { onClick: e }, 'Undo?')
                    );
                };
            function Wd() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        color: #fff;\n        margin-top: 1.5rem;\n    }\n'
                ]);
                return (
                    (Wd = function() {
                        return n;
                    }),
                    n
                );
            }
            function Xd() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n'
                ]);
                return (
                    (Xd = function() {
                        return n;
                    }),
                    n
                );
            }
            var Jd = Ut.c.div(Xd()),
                $d = Object(Ut.c)(Mt)(Wd()),
                Kd = function() {
                    return c.a.createElement(
                        Jd,
                        null,
                        'Your cart is currently empty.',
                        c.a.createElement(
                            $d,
                            { to: '/pet-supplements/dog-supplements' },
                            c.a.createElement(Vt, null, 'Return to shop')
                        )
                    );
                },
                Zd = Gd;
            function np() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n'
                ]);
                return (
                    (np = function() {
                        return n;
                    }),
                    n
                );
            }
            function ep() {
                var n = Object(Tt.a)(['\n    width: 100%;\n']);
                return (
                    (ep = function() {
                        return n;
                    }),
                    n
                );
            }
            function tp() {
                var n = Object(Tt.a)([
                    '\n    grid-column: 1 / 2;\n    margin-bottom: 3rem;\n'
                ]);
                return (
                    (tp = function() {
                        return n;
                    }),
                    n
                );
            }
            var rp = Ut.c.div(tp()),
                ap = Ut.c.img(ep()),
                cp = Ut.c.figure(np()),
                op = function(n) {
                    var e = n.main;
                    return c.a.createElement(
                        rp,
                        null,
                        c.a.createElement(
                            cp,
                            null,
                            c.a.createElement(ap, {
                                src: 'https://dr-clauders-server.herokuapp.com/media/'.concat(
                                    e
                                ),
                                alt: ''
                            })
                        )
                    );
                },
                ip = we(1);
            function up() {
                var n = Object(Tt.a)([
                    '\n    height: 1.5rem;\n    width: 1.5rem;\n    margin-right: 1rem;\n    margin-top: 3px;\n    position: relative;\n    top: 2px;\n'
                ]);
                return (
                    (up = function() {
                        return n;
                    }),
                    n
                );
            }
            function lp() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        color: ',
                    ';\n        :hover {\n            color: ',
                    ';\n        }\n    }\n'
                ]);
                return (
                    (lp = function() {
                        return n;
                    }),
                    n
                );
            }
            function sp() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    align-items: start;\n'
                ]);
                return (
                    (sp = function() {
                        return n;
                    }),
                    n
                );
            }
            function dp() {
                var n = Object(Tt.a)([
                    '\n    width: 7rem;\n    font-size: 1.9rem;\n    text-align: center;\n    height: 3.9rem;\n'
                ]);
                return (
                    (dp = function() {
                        return n;
                    }),
                    n
                );
            }
            function pp() {
                var n = Object(Tt.a)([
                    '\n    margin-right: 1.5rem;\n    display: block;\n'
                ]);
                return (
                    (pp = function() {
                        return n;
                    }),
                    n
                );
            }
            function mp() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    align-items: start;\n    margin: 2rem 0 3rem 0;\n'
                ]);
                return (
                    (mp = function() {
                        return n;
                    }),
                    n
                );
            }
            var fp = Object(Ut.c)(_t.a)(mp()),
                gp = Ut.c.div(pp()),
                bp = Object(Ut.c)(Ta)(dp()),
                Ep = Ut.c.div(sp()),
                vp = Object(Ut.c)(Mt)(lp(), '#f96d0b', '#042c59'),
                hp = Object(Ut.c)(Dr)(up()),
                Op = { form: 'addToCart', initialValues: { quantity: 1 } },
                yp = Object(s.d)(
                    Object(d.c)(
                        function(n, e) {
                            var t = e.ID,
                                r = rt(n),
                                a = at(n);
                            return { isLoading: r(t), isAdded: a(t) };
                        },
                        function(n, e) {
                            var t = e.ID,
                                r = e.title;
                            return {
                                addToCart: function(e) {
                                    n(ft(t, e)).then(function() {
                                        return Qs(function(n) {
                                            var t = n.closeToast;
                                            return c.a.createElement(
                                                Ep,
                                                null,
                                                c.a.createElement(
                                                    'div',
                                                    null,
                                                    c.a.createElement(hp, {
                                                        icon: 'checked'
                                                    }),
                                                    e,
                                                    ' \xd7 "',
                                                    r,
                                                    '" has been added to your cart.',
                                                    ' ',
                                                    c.a.createElement(
                                                        vp,
                                                        {
                                                            onClick: t,
                                                            to: '/cart'
                                                        },
                                                        'View Cart'
                                                    )
                                                )
                                            );
                                        });
                                    });
                                }
                            };
                        }
                    ),
                    Object(St.a)(Op)
                )(function(n) {
                    var e = n.handleSubmit,
                        t = n.isLoading,
                        r = n.isAdded,
                        a = n.addToCart;
                    return c.a.createElement(
                        fp,
                        {
                            onSubmit: e(function(n) {
                                var e = n.quantity;
                                return a(Number(e));
                            })
                        },
                        c.a.createElement(
                            gp,
                            null,
                            c.a.createElement(Ct.a, {
                                name: 'quantity',
                                type: 'number',
                                min: '1',
                                autoComplete: 'off',
                                small: !0,
                                component: bp,
                                validate: [De, Ae, ip],
                                format: yi
                            })
                        ),
                        c.a.createElement(
                            wr,
                            {
                                type: 'submit',
                                isLoading: t,
                                disabled: t,
                                isAdded: r
                            },
                            'Add to cart'
                        )
                    );
                });
            function jp() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 2rem;\n\n    p {\n        &:not(:last-child) {\n            margin-bottom: 1.5rem;\n        }\n    }\n'
                ]);
                return (
                    (jp = function() {
                        return n;
                    }),
                    n
                );
            }
            function _p() {
                var n = Object(Tt.a)([
                    '\n    font-size: 1.9rem;\n    color: ',
                    ';\n    margin-top: 1rem;\n    display: block;\n'
                ]);
                return (
                    (_p = function() {
                        return n;
                    }),
                    n
                );
            }
            function Cp() {
                var n = Object(Tt.a)([
                    '\n    font-size: 3.8rem;\n    line-height: 5rem;\n    font-weight: 300;\n'
                ]);
                return (
                    (Cp = function() {
                        return n;
                    }),
                    n
                );
            }
            function Sp() {
                var n = Object(Tt.a)(['\n    grid-column: 2 / -1;\n']);
                return (
                    (Sp = function() {
                        return n;
                    }),
                    n
                );
            }
            var Tp = Ut.c.div(Sp()),
                Rp = Object(Ut.c)(Qt)(Cp()),
                Up = Ut.c.span(_p(), '#f96d0b'),
                Dp = Object(Ut.c)(pr.a)(jp()),
                Ap = function(n) {
                    var e = n.title,
                        t = n.price,
                        r = n.description,
                        a = n.ID;
                    return c.a.createElement(
                        Tp,
                        null,
                        c.a.createElement(Rp, null, e),
                        c.a.createElement(Up, null, qs(t)),
                        c.a.createElement(Dp, { source: r }),
                        c.a.createElement(yp, { ID: a, title: e })
                    );
                },
                Ip = t(147);
            function Pp() {
                var n = Object(Tt.a)([
                    '\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n    p {\n        &:not(:last-child) {\n            margin-bottom: 1.5rem;\n        }\n    }\n'
                ]);
                return (
                    (Pp = function() {
                        return n;
                    }),
                    n
                );
            }
            function xp() {
                var n = Object(Tt.a)([
                    '\n    position: relative;\n    font-weight: 700;\n    padding: 0.8rem 3rem;\n    cursor: pointer;\n    background-color: ',
                    ';\n    border-radius: 4px 4px 0 0;\n    margin: 0 -5px;\n    border: 1px solid ',
                    ";\n    z-index: 0;\n\n    ::before,\n    ::after {\n        content: '';\n        border: 1px solid #d3ced2;\n        position: absolute;\n        bottom: -1px;\n        width: 5px;\n        height: 5px;\n    }\n\n    ::before {\n        left: -5px;\n        border-width: 0 1px 1px 0;\n        box-shadow: 2px 2px 0 ",
                    ';\n        border-bottom-right-radius: 4px;\n    }\n\n    ::after {\n        right: -5px;\n        border-width: 0 0 1px 1px;\n        box-shadow: -2px 2px 0 ',
                    ';\n        border-bottom-left-radius: 4px;\n    }\n\n    &.is-selected {\n        z-index: 3;\n        background-color: ',
                    ';\n        color: ',
                    ';\n        border-bottom-color: ',
                    ';\n        ::before {\n            box-shadow: 2px 2px 0 ',
                    ';\n        }\n\n        ::after {\n            box-shadow: -2px 2px 0 ',
                    ';\n        }\n    }\n\n    :focus {\n        outline: none;\n    }\n'
                ]);
                return (
                    (xp = function() {
                        return n;
                    }),
                    n
                );
            }
            function kp() {
                var n = Object(Tt.a)([
                    "\n    display: flex;\n    list-style-type: none;\n    position: relative;\n    padding-left: 1.5rem;\n    overflow: hidden;\n    margin-bottom: 2.5rem;\n    ::before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        border-bottom: 1px solid ",
                    ';\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n    }\n'
                ]);
                return (
                    (kp = function() {
                        return n;
                    }),
                    n
                );
            }
            function wp() {
                var n = Object(Tt.a)(['\n    grid-column: 1 / -1;\n']);
                return (
                    (wp = function() {
                        return n;
                    }),
                    n
                );
            }
            var Lp = Object(Ut.c)(Ip.d)(wp()),
                Np = Object(Ut.c)(Ip.b)(kp(), '#d3ced2'),
                Mp = Object(Ut.c)(Ip.a)(
                    xp(),
                    '#ebe9eb',
                    '#d3ced2',
                    '#ebe9eb',
                    '#ebe9eb',
                    '#fff',
                    '#f96d0b',
                    '#fff',
                    '#fff',
                    '#fff'
                ),
                Fp = Object(Ut.c)(Ip.c)(Pp());
            (Mp.tabsRole = 'Tab'),
                (Np.tabsRole = 'TabList'),
                (Fp.tabsRole = 'TabPanel');
            var Gp = function(n) {
                var e = n.tabs;
                return c.a.createElement(
                    Lp,
                    {
                        selectedTabClassName: 'is-selected',
                        selectedTabPanelClassName: 'is-selected'
                    },
                    c.a.createElement(
                        Np,
                        null,
                        e.map(function(n, e) {
                            var t = n.title;
                            return c.a.createElement(Mp, { key: e }, t);
                        })
                    ),
                    e.map(function(n, e) {
                        var t = n.content;
                        return c.a.createElement(
                            Fp,
                            { key: e },
                            c.a.createElement(pr.a, { source: t })
                        );
                    })
                );
            };
            function Yp() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n\n    margin: 8rem 0;\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(min-content, 1fr));\n    grid-column-gap: 5rem;\n    grid-row-gap: 2.5rem;\n    align-content: start;\n    min-height: calc(100vh - 56rem);\n'
                ]);
                return (
                    (Yp = function() {
                        return n;
                    }),
                    n
                );
            }
            var Vp = Ut.c.div(Yp()),
                zp = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var n = this.props,
                                        e = n.match.url;
                                    (0, n.fetchProduct)(e);
                                }
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    (0, this.props.removeProduct)();
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this.props,
                                        e = n.product,
                                        t = n.isLoading;
                                    return e || t
                                        ? c.a.createElement(
                                              Vp,
                                              null,
                                              t
                                                  ? c.a.createElement(lo, null)
                                                  : c.a.createElement(
                                                        c.a.Fragment,
                                                        null,
                                                        c.a.createElement(op, {
                                                            main: e.media.url,
                                                            sub:
                                                                e.description
                                                                    .media
                                                        }),
                                                        c.a.createElement(Ap, {
                                                            title: e.title,
                                                            price: e.price,
                                                            description:
                                                                e.description
                                                                    .main,
                                                            ID: e._id
                                                        }),
                                                        !!e.description.tabs
                                                            .length &&
                                                            c.a.createElement(
                                                                Gp,
                                                                {
                                                                    tabs:
                                                                        e
                                                                            .description
                                                                            .tabs
                                                                }
                                                            )
                                                    )
                                          )
                                        : c.a.createElement(bm, null);
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                Qp = Object(d.c)(
                    function(n) {
                        return {
                            product: qn.getProduct(n),
                            isLoading: qn.isProductLoading(n)
                        };
                    },
                    function(n) {
                        return {
                            fetchProduct: function(e) {
                                return n(Bn(e));
                            },
                            removeProduct: function() {
                                return n(Hn());
                            }
                        };
                    }
                )(zp);
            function Bp() {
                var n = Object(Tt.a)([
                    '\n                  background-color: ',
                    ';\n                  color: ',
                    ';\n                  height: 9rem;\n                  margin: 2rem 0;\n                  ',
                    ' {\n                      color: inherit;\n                      font-weight: 200;\n                  }\n              '
                ]);
                return (
                    (Bp = function() {
                        return n;
                    }),
                    n
                );
            }
            function Hp() {
                var n = Object(Tt.a)([
                    '\n                background: linear-gradient(\n                        rgba(',
                    ' 0.3),\n                        rgba(',
                    " 0.3)\n                    ),\n                    url('https://dr-clauders-server.herokuapp.com/media/",
                    "')\n                        center/cover no-repeat;\n                        height: 30rem;\n                        \n            "
                ]);
                return (
                    (Hp = function() {
                        return n;
                    }),
                    n
                );
            }
            function qp() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n    position: relative;\n\n    ',
                    ';\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'
                ]);
                return (
                    (qp = function() {
                        return n;
                    }),
                    n
                );
            }
            function Wp() {
                var n = Object(Tt.a)(['\n    color: ', ';\n    ', ';\n']);
                return (
                    (Wp = function() {
                        return n;
                    }),
                    n
                );
            }
            var Xp = Object(Ut.c)(Qt)(Wp(), '#fff', kt),
                Jp = Ut.c.section(qp(), function(n) {
                    var e = n.mediaHero,
                        t = X()(e, 'background');
                    return t
                        ? Object(Ut.b)(Hp(), oo('#042c59'), oo('#042c59'), t)
                        : Object(Ut.b)(Bp(), '#f96d0b', '#fff', Xp);
                }),
                $p = function(n) {
                    var e = n.title,
                        t = n.media;
                    return c.a.createElement(
                        Jp,
                        { mediaHero: t },
                        c.a.createElement(Xp, null, e)
                    );
                };
            function Kp() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        position: absolute;\n        bottom: 1%;\n        font-size: 1.3rem;\n        line-height: normal;\n        left: 50%;\n        transform: translateX(-50%);\n        color: ',
                    ';\n\n        :hover {\n            text-decoration: underline;\n        }\n    }\n'
                ]);
                return (
                    (Kp = function() {
                        return n;
                    }),
                    n
                );
            }
            var Zp = Object(Ut.c)(Mt)(Kp(), '#042c59'),
                nm = function(n) {
                    var e = n.product,
                        t = (e._id, e.path),
                        r = e.media.url,
                        a = e.title,
                        o = e.price,
                        i = n.loading,
                        u = n.added,
                        l = n.handleAdd;
                    return c.a.createElement(
                        Wc,
                        null,
                        c.a.createElement(
                            Wc.Body,
                            { to: t },
                            c.a.createElement(Wc.Image, {
                                src: 'https://dr-clauders-server.herokuapp.com/media/'.concat(
                                    r
                                ),
                                alt: ''
                            }),
                            c.a.createElement(Wc.Title, null, a),
                            c.a.createElement(Wc.Price, null, qs(o))
                        ),
                        c.a.createElement(
                            wr,
                            {
                                onClick: l,
                                isLoading: i,
                                disabled: i,
                                isAdded: u
                            },
                            'Add to Cart'
                        ),
                        u && c.a.createElement(Zp, { to: '/cart' }, 'View cart')
                    );
                };
            function em() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    text-align: center;\n    display: grid;\n\n    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));\n    align-items: start;\n    grid-gap: 4rem;\n    margin: 3rem 0 8rem 0;\n    position: relative;\n    min-height: 20rem;\n'
                ]);
                return (
                    (em = function() {
                        return n;
                    }),
                    n
                );
            }
            var tm = Ut.c.main(em()),
                rm = function(n) {
                    var e = n.products,
                        t = n.addToCart,
                        r = n.isAdded,
                        a = n.isRequested,
                        o = n.isLoading;
                    return c.a.createElement(
                        tm,
                        null,
                        o
                            ? c.a.createElement(lo, null)
                            : e.map(function(n) {
                                  return c.a.createElement(nm, {
                                      key: n._id,
                                      loading: a(n._id),
                                      added: r(n._id),
                                      handleAdd: function() {
                                          return t(n._id);
                                      },
                                      product: n
                                  });
                              })
                    );
                };
            function am() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    margin-top: 5rem;\n    color: ',
                    ';\n'
                ]);
                return (
                    (am = function() {
                        return n;
                    }),
                    n
                );
            }
            function cm() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n\n    ',
                    ';\n    min-height: calc(100vh - 5rem);\n    align-content: start;\n'
                ]);
                return (
                    (cm = function() {
                        return n;
                    }),
                    n
                );
            }
            var om = Ut.c.div(cm(), ha),
                im = Ut.c.div(am(), '#bfbfbf'),
                um = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var n = this.props,
                                        e = n.categoryID,
                                        t = n.location;
                                    e && this.props.getProductsByCategory(t, e);
                                }
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function(n) {
                                    var e = n.location,
                                        t = this.props,
                                        r = t.categoryID,
                                        a = t.location;
                                    r &&
                                        a !== e &&
                                        this.props.getProductsByCategory(a, r);
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this.props,
                                        e = n.products,
                                        t = n.categoryName,
                                        r = n.categoryMedia,
                                        a = n.addToCart,
                                        o = n.isProductAddedFunc,
                                        i = n.isProductRequestedFunc,
                                        u = n.isLoading;
                                    return n.categoryID
                                        ? c.a.createElement(
                                              om,
                                              null,
                                              c.a.createElement($p, {
                                                  title: t,
                                                  media: r
                                              }),
                                              c.a.createElement(
                                                  im,
                                                  null,
                                                  'Showing all ',
                                                  e.length,
                                                  ' results'
                                              ),
                                              c.a.createElement(rm, {
                                                  isLoading: u,
                                                  products: e,
                                                  addToCart: a,
                                                  isAdded: o,
                                                  isRequested: i
                                              })
                                          )
                                        : c.a.createElement(bm, null);
                                }
                            }
                        ]),
                        e
                    );
                })(a.Component),
                lm = Object(d.c)(
                    function(n) {
                        var e = kn.getCurrentCategory(n);
                        return {
                            products: kn.getProducts(n),
                            categoryName: Ln(e),
                            categoryID: Nn(e),
                            categoryMedia: Mn(e),
                            isProductRequestedFunc: rt(n),
                            isProductAddedFunc: at(n),
                            isLoading: kn.isLoading(n),
                            location: On(n)
                        };
                    },
                    function(n) {
                        return {
                            getProductsByCategory: function(e, t) {
                                return n(Un(e, { categoryID: t }));
                            },
                            addToCart: function(e) {
                                return n(ft(e));
                            }
                        };
                    }
                )(um),
                sm = t(397),
                dm = t.n(sm);
            function pm() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 1.5rem;\n    width: 100%;\n    max-width: 65rem;\n'
                ]);
                return (
                    (pm = function() {
                        return n;
                    }),
                    n
                );
            }
            function mm() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    text-align: center;\n    margin: 3rem 0;\n    height: calc(100vh - 14rem);\n'
                ]);
                return (
                    (mm = function() {
                        return n;
                    }),
                    n
                );
            }
            var fm = Ut.c.div(mm()),
                gm = Ut.c.img(pm()),
                bm = function() {
                    return c.a.createElement(
                        fm,
                        null,
                        c.a.createElement(
                            Ht,
                            null,
                            'This page is not resting, it has ceased to exist.'
                        ),
                        c.a.createElement(gm, { src: dm.a })
                    );
                };
            function Em() {
                var n = Object(Tt.a)([
                    '\n    font-size: 2.6rem;\n    font-weight: 300;\n    margin-bottom: 1rem;\n'
                ]);
                return (
                    (Em = function() {
                        return n;
                    }),
                    n
                );
            }
            var vm = Object(Ut.c)(Wt)(Em());
            function hm() {
                var n = Object(Tt.a)([
                    '\n                  opacity: 0.5;\n                  cursor: initial;\n\n                  :hover {\n                      opacity: 0.1;\n                      background-color: ',
                    ';\n                  }\n              '
                ]);
                return (
                    (hm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Om() {
                var n = Object(Tt.a)(['\n    margin-top: 2.5rem;\n    ', '\n']);
                return (
                    (Om = function() {
                        return n;
                    }),
                    n
                );
            }
            function ym() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 2.5rem;\n    padding-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n    color: ',
                    ';\n    border-top: 1px solid ',
                    ';\n'
                ]);
                return (
                    (ym = function() {
                        return n;
                    }),
                    n
                );
            }
            function jm() {
                var n = Object(Tt.a)([
                    '\n    font-size: 2.2rem;\n    padding: 0 5px;\n    font-weight: 700;\n    background-color: ',
                    ';\n    color: ',
                    ';\n'
                ]);
                return (
                    (jm = function() {
                        return n;
                    }),
                    n
                );
            }
            function _m() {
                var n = Object(Tt.a)([
                    '\n    font-weight: 700;\n    line-height: 2.2rem;\n    color: ',
                    ';\n'
                ]);
                return (
                    (_m = function() {
                        return n;
                    }),
                    n
                );
            }
            function Cm() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: ',
                    ';\n'
                ]);
                return (
                    (Cm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Sm() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: ',
                    ';\n'
                ]);
                return (
                    (Sm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Tm() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n'
                ]);
                return (
                    (Tm = function() {
                        return n;
                    }),
                    n
                );
            }
            var Rm = Ut.c.div(Tm()),
                Um = Ut.c.div(Sm(), '#777'),
                Dm = Ut.c.div(Cm(), '#777'),
                Am = Ut.c.span(_m(), '#f96d0b'),
                Im = Ut.c.span(jm(), '#f96d0b', '#fff'),
                Pm = Ut.c.div(ym(), '#777', '#bfbfbf'),
                xm = Object(Ut.c)(Vt)(Om(), function(n) {
                    return n.disabled ? Object(Ut.b)(hm(), '#042c59') : '';
                }),
                km = function(n) {
                    var e = n.isValid,
                        t = n.submit,
                        r = n.cartSummary,
                        a = n.totalPrice,
                        o = n.deliveryPrice;
                    return c.a.createElement(
                        Rm,
                        null,
                        c.a.createElement(vm, null, 'Summary'),
                        c.a.createElement(
                            Um,
                            null,
                            r.quantity,
                            ' \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443',
                            c.a.createElement(Am, null, qs(r.price))
                        ),
                        o &&
                            c.a.createElement(
                                Dm,
                                null,
                                '\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ',
                                c.a.createElement(Am, null, o)
                            ),
                        c.a.createElement(
                            Pm,
                            null,
                            '\u041a \u043e\u043f\u043b\u0430\u0442\u0435',
                            c.a.createElement(Im, null, qs(a))
                        ),
                        c.a.createElement(
                            xm,
                            { onClick: t, disabled: !e },
                            '\u0417\u0430\u043a\u0430\u0437 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e'
                        )
                    );
                };
            function wm() {
                var n = Object(Tt.a)(['\n    justify-self: center;\n']);
                return (
                    (wm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Lm() {
                var n = Object(Tt.a)(['\n    justify-self: end;\n']);
                return (
                    (Lm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Nm() {
                var n = Object(Tt.a)([
                    '\n    grid-column: 1/ -1;\n    :link,\n    :visited {\n        color: ',
                    ';\n        font-weight: 600;\n        line-height: 2.2rem;\n        justify-self: start;\n        :hover {\n            color: ',
                    ';\n        }\n    }\n'
                ]);
                return (
                    (Nm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Mm() {
                var n = Object(Tt.a)([
                    '\n    flex-grow: 1;\n    display: grid;\n    padding: 5px 0;\n    grid-column-gap: 1rem;\n    grid-template-columns: repeat(3, 1fr);\n'
                ]);
                return (
                    (Mm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Fm() {
                var n = Object(Tt.a)([
                    '\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n'
                ]);
                return (
                    (Fm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Gm() {
                var n = Object(Tt.a)([
                    '\n    width: 7rem;\n    margin-right: 1.5rem;\n'
                ]);
                return (
                    (Gm = function() {
                        return n;
                    }),
                    n
                );
            }
            function Ym() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    padding: 1.5rem 0;\n\n    border-bottom: 1px solid ',
                    ';\n'
                ]);
                return (
                    (Ym = function() {
                        return n;
                    }),
                    n
                );
            }
            function Vm() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n'
                ]);
                return (
                    (Vm = function() {
                        return n;
                    }),
                    n
                );
            }
            var zm = Ut.c.div(Vm()),
                Qm = Ut.c.div(Ym(), '#bfbfbf'),
                Bm = Object(Ut.c)(Mt)(Gm()),
                Hm = Ut.c.img(Fm()),
                qm = Ut.c.div(Mm()),
                Wm = Object(Ut.c)(Mt)(Nm(), '#f96d0b', '#042c59'),
                Xm = Ut.c.div(Lm()),
                Jm = Ut.c.div(wm()),
                $m = function(n) {
                    var e = n.products,
                        t = n.quantityByID;
                    return c.a.createElement(
                        zm,
                        null,
                        e.map(function(n) {
                            var e = n.path,
                                r = n.title,
                                a = n.media.url,
                                o = n._id,
                                i = n.price;
                            return c.a.createElement(
                                Qm,
                                { key: o },
                                c.a.createElement(
                                    Bm,
                                    { to: e },
                                    c.a.createElement(Hm, {
                                        src: 'https://dr-clauders-server.herokuapp.com/'.concat(
                                            a
                                        ),
                                        alt: ''
                                    })
                                ),
                                c.a.createElement(
                                    qm,
                                    null,
                                    c.a.createElement(Wm, { to: e }, r),
                                    c.a.createElement('span', null, qs(i)),
                                    c.a.createElement(
                                        Jm,
                                        null,
                                        t[o],
                                        ' \u0448\u0442.'
                                    ),
                                    c.a.createElement(
                                        Xm,
                                        null,
                                        c.a.createElement(
                                            'span',
                                            null,
                                            qs(Ne(i, t[o]))
                                        )
                                    )
                                )
                            );
                        })
                    );
                },
                Km = t(42);
            function Zm() {
                var n = Object(Tt.a)([
                    '\n    position: relative;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    padding-left: 2.5rem;\n    border-left: 1px solid ',
                    ';\n'
                ]);
                return (
                    (Zm = function() {
                        return n;
                    }),
                    n
                );
            }
            var nf = Ut.c.div(Zm(), '#bfbfbf'),
                ef = Object(d.c)(
                    function(n) {
                        return {
                            isValid: di(n),
                            products: tt(n),
                            quantityByID: nt(n),
                            cartSummary: ot(n),
                            totalPrice: mi(n),
                            deliveryPrice: fi(n),
                            isCartLoading: Xe(n)
                        };
                    },
                    function(n) {
                        return {
                            submitCheckout: function() {
                                return n(Object(Km.a)('checkout'));
                            }
                        };
                    }
                )(function(n) {
                    var e = n.isValid,
                        t = n.products,
                        r = n.quantityByID,
                        a = n.cartSummary,
                        o = n.totalPrice,
                        i = n.deliveryPrice,
                        u = n.isCartLoading,
                        l = n.submitCheckout;
                    return c.a.createElement(
                        nf,
                        null,
                        u
                            ? c.a.createElement(lo, null)
                            : c.a.createElement(
                                  c.a.Fragment,
                                  null,
                                  c.a.createElement(
                                      'div',
                                      null,
                                      c.a.createElement(vm, null, 'Your Order'),
                                      c.a.createElement($m, {
                                          products: t,
                                          quantityByID: r
                                      })
                                  ),
                                  c.a.createElement(km, {
                                      deliveryPrice: i,
                                      totalPrice: o,
                                      cartSummary: a,
                                      submit: l,
                                      isValid: e
                                  })
                              )
                    );
                }),
                tf = Object(St.a)(kc)(function(n) {
                    var e = n.handleSubmit;
                    return c.a.createElement(
                        _t.a,
                        { onSubmit: e, noValidate: !0 },
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'fullName',
                            label: 'Full Name',
                            component: Ta
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                            component: Ta
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'phone',
                            label: 'Phone Number',
                            placeholder: '+38 (___) ___-__-__',
                            component: Ta,
                            mask: 'phone'
                        }),
                        c.a.createElement(vr, { type: 'submit' }, 'Next')
                    );
                }),
                rf = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentWillMount',
                                value: function() {
                                    (0, this.props.onLoad)();
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this.props,
                                        e = n.handleSubmit,
                                        t = n.paymentOptions,
                                        r = n.paymentLoading;
                                    return c.a.createElement(
                                        _t.a,
                                        { onSubmit: e },
                                        c.a.createElement(Ct.a, {
                                            name: 'payment',
                                            label: 'Payment Methods',
                                            options: t,
                                            component: zo,
                                            loading: r,
                                            format: Number
                                        })
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(a.PureComponent),
                af = Object(St.a)(kc)(rf),
                cf = Object(Ls.a)(Uc.FORM_NAME),
                of = Object(yt.a)(Uc.FORM_NAME),
                uf = (function(n) {
                    function e(n) {
                        var t;
                        return (
                            Object(er.a)(this, e),
                            ((t = Object(rr.a)(
                                this,
                                Object(ar.a)(e).call(this, n)
                            )).getCitiesOptions = (function() {
                                var n = Object(z.a)(
                                    V.a.mark(function n(e) {
                                        var t, r;
                                        return V.a.wrap(function(n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        return (
                                                            (n.next = 2),
                                                            Ot.getCities(e)
                                                        );
                                                    case 2:
                                                        if (
                                                            ((t = n.sent),
                                                            !(r = t.data).error)
                                                        ) {
                                                            n.next = 6;
                                                            break;
                                                        }
                                                        return n.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 6:
                                                        return n.abrupt(
                                                            'return',
                                                            r.map(function(n) {
                                                                return {
                                                                    value: n.ID,
                                                                    label:
                                                                        n.name
                                                                };
                                                            })
                                                        );
                                                    case 7:
                                                    case 'end':
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                );
                                return function(e) {
                                    return n.apply(this, arguments);
                                };
                            })()),
                            (t.getAddressOptions = (function() {
                                var n = Object(z.a)(
                                    V.a.mark(function n(e) {
                                        var r, a;
                                        return V.a.wrap(function(n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        if (
                                                            ((r =
                                                                t.props
                                                                    .formValues),
                                                            (a = X()(
                                                                r,
                                                                Uc.fields
                                                                    .DELIVERY
                                                            )),
                                                            t
                                                                .addressRequestConfig[
                                                                a
                                                            ])
                                                        ) {
                                                            n.next = 4;
                                                            break;
                                                        }
                                                        return n.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 4:
                                                        return (
                                                            (n.next = 6),
                                                            t.addressRequestConfig[
                                                                a
                                                            ](e)
                                                        );
                                                    case 6:
                                                        return n.abrupt(
                                                            'return',
                                                            n.sent
                                                        );
                                                    case 7:
                                                    case 'end':
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                );
                                return function(e) {
                                    return n.apply(this, arguments);
                                };
                            })()),
                            (t.getDepartmentOptions = (function() {
                                var n = Object(z.a)(
                                    V.a.mark(function n(e) {
                                        var r, a, c, o, i;
                                        return V.a.wrap(function(n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        return (
                                                            (r =
                                                                t.props
                                                                    .formValues),
                                                            (a = X()(
                                                                r,
                                                                ''.concat(
                                                                    Uc.fields
                                                                        .CITY,
                                                                    '.value'
                                                                )
                                                            )),
                                                            (c = X()(
                                                                r,
                                                                Uc.fields
                                                                    .DELIVERY
                                                            )),
                                                            (n.next = 5),
                                                            Ot.getDepartments({
                                                                cityID: a,
                                                                deliveryID: c,
                                                                search: e
                                                            })
                                                        );
                                                    case 5:
                                                        if (
                                                            ((o = n.sent),
                                                            !(i = o.data).error)
                                                        ) {
                                                            n.next = 9;
                                                            break;
                                                        }
                                                        return n.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 9:
                                                        return n.abrupt(
                                                            'return',
                                                            i.map(function(n) {
                                                                var e = n.ID,
                                                                    t = n.name,
                                                                    r =
                                                                        n.schedule;
                                                                return {
                                                                    value: e,
                                                                    label: t,
                                                                    phone:
                                                                        n.phone,
                                                                    schedule: r
                                                                };
                                                            })
                                                        );
                                                    case 10:
                                                    case 'end':
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                );
                                return function(e) {
                                    return n.apply(this, arguments);
                                };
                            })()),
                            (t.getStreetOptions = (function() {
                                var n = Object(z.a)(
                                    V.a.mark(function n(e) {
                                        var r, a, c, o;
                                        return V.a.wrap(function(n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        return (
                                                            (r =
                                                                t.props
                                                                    .formValues),
                                                            (a = X()(
                                                                r,
                                                                'city.value'
                                                            )),
                                                            (n.next = 4),
                                                            Ot.getStreets({
                                                                cityID: a,
                                                                search: e
                                                            })
                                                        );
                                                    case 4:
                                                        if (
                                                            ((c = n.sent),
                                                            !(o = c.data).error)
                                                        ) {
                                                            n.next = 8;
                                                            break;
                                                        }
                                                        return n.abrupt(
                                                            'return',
                                                            []
                                                        );
                                                    case 8:
                                                        return n.abrupt(
                                                            'return',
                                                            o.map(function(n) {
                                                                return {
                                                                    value:
                                                                        n.name,
                                                                    label:
                                                                        n.name
                                                                };
                                                            })
                                                        );
                                                    case 9:
                                                    case 'end':
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                );
                                return function(e) {
                                    return n.apply(this, arguments);
                                };
                            })()),
                            (t.handleCityChange = function(n) {
                                var e = t.props,
                                    r = e.fetchDelivery,
                                    a = e.resetOptions,
                                    c = e.change,
                                    o = Uc.options,
                                    i = Uc.fields,
                                    u = X()(n, 'value');
                                t.clearFields([
                                    i.DELIVERY,
                                    i.ADDRESS,
                                    i.PAYMENT
                                ]),
                                    t.untouchAddressFields(),
                                    a(Object.values(o)),
                                    u && (c(i.DELIVERY, 1), r(u));
                            }),
                            (t.handleDeliveryChange = function() {
                                var n = t.props.resetOptions,
                                    e = Uc.options,
                                    r = Uc.fields;
                                t.clearFields([r.ADDRESS, r.PAYMENT]),
                                    t.untouchAddressFields(),
                                    n(Object.values([e.PAYMENT]));
                            }),
                            (t.onPaymentsLoad = function() {
                                var n = t.props,
                                    e = n.fetchPayment,
                                    r = n.formValues,
                                    a = n.change,
                                    c = Uc.fields;
                                r[c.PAYMENT] || a(c.PAYMENT, 1),
                                    e(r[c.DELIVERY]);
                            }),
                            (t.untouchAddressFields = function() {
                                var n = t.props.untouch,
                                    e = Uc.fields;
                                n(
                                    ''.concat(e.ADDRESS, '.department'),
                                    ''.concat(e.ADDRESS, '.street'),
                                    ''.concat(e.ADDRESS, '.house'),
                                    ''.concat(e.ADDRESS, '.apartment')
                                );
                            }),
                            (t.clearFields = function(n) {
                                var e = t.props.change;
                                n.forEach(function(n) {
                                    return e(n, null);
                                });
                            }),
                            (t.isStepCompleted = function(n) {
                                var e = t.props.formErrors;
                                return !Object.keys(e).some(function(e) {
                                    return Uc.stepFields[n].includes(e);
                                });
                            }),
                            (t.state = {
                                step: Uc.stepIDs[Uc.steps.USER_INFO]
                            }),
                            (t.addressRequestConfig = {
                                1: t.getDepartmentOptions,
                                2: t.getStreetOptions
                            }),
                            t
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    (0, this.props.resetOptions)(
                                        Object.values(Uc.options)
                                    );
                                }
                            },
                            {
                                key: 'getSteps',
                                value: function() {
                                    var n = this,
                                        e = this.props,
                                        t = e.formValues,
                                        r = e.deliveryOptions,
                                        a = e.paymentOptions,
                                        o = e.deliveryByID,
                                        i = e.paymentByID,
                                        u = e.deliveryLoading,
                                        l = e.paymentLoading,
                                        s = Uc.stepIDs,
                                        d = Uc.steps,
                                        p = t.fullName,
                                        m = t.email,
                                        f = t.phone,
                                        g = t.delivery,
                                        b = t.city,
                                        E = t.payment,
                                        v = X()(o, ''.concat(g, '.name')),
                                        h = X()(i, ''.concat(E, '.name')),
                                        O = X()(b, 'label');
                                    return [
                                        {
                                            title: 'User Info',
                                            body: c.a.createElement(tf, {
                                                onSubmit: function() {
                                                    return n.changeStep(
                                                        s[d.DELIVERY]
                                                    );
                                                }
                                            }),
                                            completed: this.isStepCompleted(
                                                s[d.USER_INFO]
                                            ),
                                            summary: ''
                                                .concat(p, ', ')
                                                .concat(m, ', ')
                                                .concat(f),
                                            ID: s[d.USER_INFO]
                                        },
                                        {
                                            title: 'Delivery',
                                            body: c.a.createElement(Qo, {
                                                city: t.city,
                                                loadCityOptions: this
                                                    .getCitiesOptions,
                                                deliveryOptions: r,
                                                deliveryLoading: u,
                                                loadAddressOptions: this
                                                    .getAddressOptions,
                                                handleCityChange: this
                                                    .handleCityChange,
                                                handleDeliveryChange: this
                                                    .handleDeliveryChange,
                                                onSubmit: function() {
                                                    return n.changeStep(
                                                        s[d.PAYMENT]
                                                    );
                                                }
                                            }),
                                            completed: this.isStepCompleted(
                                                s[d.DELIVERY]
                                            ),
                                            summary: ''
                                                .concat(O, ', ')
                                                .concat(v),
                                            ID: s[d.DELIVERY]
                                        },
                                        {
                                            title: 'Payment',
                                            body: c.a.createElement(af, {
                                                paymentLoading: l,
                                                onLoad: this.onPaymentsLoad,
                                                paymentOptions: a
                                            }),
                                            completed: this.isStepCompleted(
                                                s[d.PAYMENT]
                                            ),
                                            summary: h,
                                            ID: s[d.PAYMENT]
                                        }
                                    ];
                                }
                            },
                            {
                                key: 'changeStep',
                                value: function(n) {
                                    this.setState({ step: n });
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this,
                                        e = this.state.step;
                                    return c.a.createElement(
                                        'div',
                                        null,
                                        this.getSteps().map(function(t) {
                                            var r = t.title,
                                                a = t.body,
                                                o = t.summary,
                                                i = t.ID,
                                                u = t.completed;
                                            return c.a.createElement(
                                                Do,
                                                { key: i },
                                                c.a.createElement(
                                                    Do.Badge,
                                                    null,
                                                    u
                                                        ? c.a.createElement(
                                                              Do.CheckedIcon,
                                                              { icon: 'check' }
                                                          )
                                                        : i
                                                ),
                                                c.a.createElement(
                                                    Do.Title,
                                                    null,
                                                    r
                                                ),
                                                c.a.createElement(
                                                    Do.Line,
                                                    null
                                                ),
                                                e === i &&
                                                    c.a.createElement(
                                                        Do.Body,
                                                        null,
                                                        a
                                                    ),
                                                u &&
                                                    e > i &&
                                                    c.a.createElement(
                                                        Do.Summary,
                                                        null,
                                                        o,
                                                        c.a.createElement(
                                                            Do.Edit,
                                                            {
                                                                onClick: function() {
                                                                    return n.changeStep(
                                                                        i
                                                                    );
                                                                }
                                                            },
                                                            c.a.createElement(
                                                                Do.EditIcon,
                                                                { icon: 'edit' }
                                                            ),
                                                            '\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c'
                                                        )
                                                    )
                                            );
                                        })
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                lf = Object(s.d)(
                    Object(d.c)(
                        function(n) {
                            return {
                                formValues: cf(n) || {},
                                formErrors: of(n) || {},
                                deliveryOptions: bi.getDeliveryOptions(n),
                                deliveryByID: bi.getDeliveryByID(n),
                                paymentByID: bi.getPaymentByID(n),
                                paymentOptions: bi.getPaymentOptions(n),
                                deliveryLoading: bi.isDeliveryLoading(n),
                                paymentLoading: bi.isPaymentLoading(n),
                                initialValues: bi.getInitialValues(n)
                            };
                        },
                        function(n) {
                            return {
                                fetchDelivery: function(e) {
                                    return n(Ot.fetchDeliveryMethods(e));
                                },
                                fetchPayment: function(e) {
                                    return n(Ot.fetchPaymentMethods(e));
                                },
                                resetOptions: function(e) {
                                    return n(Ot.resetOptions(e));
                                }
                            };
                        }
                    ),
                    Object(St.a)(xc)
                )(uf);
            function sf() {
                var n = Object(Tt.a)(['\n    font-weight: 300;\n']);
                return (
                    (sf = function() {
                        return n;
                    }),
                    n
                );
            }
            function df() {
                var n = Object(Tt.a)([
                    '\n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    grid-column-gap: 5rem;\n    padding: 3rem;\n    background-color: rgba(',
                    ' 0.1);\n'
                ]);
                return (
                    (df = function() {
                        return n;
                    }),
                    n
                );
            }
            function pf() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start/center-end;\n\n    margin-bottom: 8.5rem;\n    margin-top: 4rem;\n'
                ]);
                return (
                    (pf = function() {
                        return n;
                    }),
                    n
                );
            }
            var mf = Ut.c.div(pf()),
                ff = Ut.c.div(df(), oo('#2b2b2b')),
                gf = Object(Ut.c)(Qt)(sf()),
                bf = function() {
                    return c.a.createElement(
                        mf,
                        null,
                        c.a.createElement(
                            br,
                            null,
                            c.a.createElement(gf, null, 'Checkout')
                        ),
                        c.a.createElement(
                            ff,
                            null,
                            c.a.createElement(lf, null),
                            c.a.createElement(ef, null)
                        )
                    );
                };
            function Ef() {
                var n = Object(Tt.a)(['\n    font-weight: 300;\n']);
                return (
                    (Ef = function() {
                        return n;
                    }),
                    n
                );
            }
            function vf() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    margin-bottom: 8.5rem;\n    margin-top: 4rem;\n\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 5rem;\n    align-items: start;\n'
                ]);
                return (
                    (vf = function() {
                        return n;
                    }),
                    n
                );
            }
            var hf = Ut.c.div(vf()),
                Of = Object(Ut.c)(Qt)(Ef()),
                yf = Object(d.c)(null, function(n) {
                    return {
                        logout: function() {
                            return n(Ui());
                        }
                    };
                })(function(n) {
                    var e = n.match,
                        t = n.logout;
                    return c.a.createElement(
                        hf,
                        null,
                        c.a.createElement(
                            br,
                            null,
                            c.a.createElement(Of, null, 'Account')
                        ),
                        c.a.createElement(
                            'ul',
                            null,
                            c.a.createElement('li', null, '1'),
                            c.a.createElement('li', null, '2'),
                            c.a.createElement('li', null, '3'),
                            c.a.createElement('li', null, '4'),
                            c.a.createElement(
                                'li',
                                null,
                                c.a.createElement(Vt, { onClick: t }, 'Logout')
                            )
                        ),
                        c.a.createElement(
                            or.d,
                            null,
                            c.a.createElement(or.b, {
                                exact: !0,
                                path: ''.concat(e.path),
                                component: function() {
                                    return c.a.createElement(
                                        'div',
                                        null,
                                        'Main'
                                    );
                                }
                            }),
                            c.a.createElement(or.b, {
                                exact: !0,
                                path: ''.concat(e.path, '/orders'),
                                component: function() {
                                    return c.a.createElement(
                                        'div',
                                        null,
                                        "'orders'"
                                    );
                                }
                            }),
                            c.a.createElement(or.b, {
                                exact: !0,
                                path: ''.concat(e.path, '/discount'),
                                component: function() {
                                    return c.a.createElement(
                                        'div',
                                        null,
                                        "'orders'"
                                    );
                                }
                            })
                        )
                    );
                });
            function jf() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 4rem;\n    grid-row-gap: 4rem;\n    align-content: start;\n\n    :not(:first-child) {\n        margin-top: 3rem;\n    }\n'
                ]);
                return (
                    (jf = function() {
                        return n;
                    }),
                    n
                );
            }
            var _f = Ut.c.div(jf());
            function Cf() {
                var n = Object(Tt.a)([
                    '\n    height: 1.5rem;\n    width: 1.5rem;\n    margin-right: 1rem;\n    fill: ',
                    ';\n    justify-self: center;\n'
                ]);
                return (
                    (Cf = function() {
                        return n;
                    }),
                    n
                );
            }
            function Sf() {
                var n = Object(Tt.a)([
                    '\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n    font-size: 1.3rem;\n    padding: 0 0.5rem;\n    cursor: pointer;\n\n    :hover {\n        background-color: rgba(',
                    ' 0.3);\n    }\n'
                ]);
                return (
                    (Sf = function() {
                        return n;
                    }),
                    n
                );
            }
            var Tf = Ut.c.li(Sf(), oo('#bfbfbf')),
                Rf = Object(Ut.c)(Dr)(Cf(), '#042c59'),
                Uf = function(n) {
                    var e = n.handleClick,
                        t = n.icon,
                        r = n.text;
                    return c.a.createElement(
                        Tf,
                        { onClick: e },
                        c.a.createElement(Rf, { icon: t }),
                        r
                    );
                };
            function Df() {
                var n = Object(Tt.a)([
                    '\n    height: 1.7rem;\n    width: 1.7rem;\n    display: block;\n    fill: ',
                    ';\n'
                ]);
                return (
                    (Df = function() {
                        return n;
                    }),
                    n
                );
            }
            function Af() {
                var n = Object(Tt.a)([
                    '\n    padding: 1rem;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    height: 100%;\n\n    :hover {\n        background-color: rgba(',
                    ' 0.8);\n    }\n'
                ]);
                return (
                    (Af = function() {
                        return n;
                    }),
                    n
                );
            }
            var If = Ut.c.span(Af(), oo('#bfbfbf')),
                Pf = Object(Ut.c)(Dr)(Df(), '#808080'),
                xf = function(n) {
                    return c.a.createElement(
                        If,
                        n,
                        c.a.createElement(Pf, { icon: 'more' })
                    );
                };
            function kf() {
                var n = Object(Tt.a)([
                    '\n    list-style-type: none;\n    background-color: #fff;\n    border: 1px solid ',
                    ';\n    width: 150px;\n    padding: 0.5rem 0;\n'
                ]);
                return (
                    (kf = function() {
                        return n;
                    }),
                    n
                );
            }
            var wf = Ut.c.ul(kf(), '#808080');
            (wf.Element = Uf), (wf.Trigger = xf);
            var Lf = wf;
            function Nf() {
                var n = Object(Tt.a)(['\n    visibility: hidden;\n']);
                return (
                    (Nf = function() {
                        return n;
                    }),
                    n
                );
            }
            function Mf() {
                var n = Object(Tt.a)([
                    '\n    grid-column: -1;\n    align-self: stretch;\n'
                ]);
                return (
                    (Mf = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ff = Object(Ut.c)(ma)(Mf()),
                Gf = Object(Ut.c)(Lf.Trigger)(Nf()),
                Yf = function(n) {
                    var e = n.handleEdit,
                        t = n.handleRemove;
                    return c.a.createElement(Ff, {
                        trigger: function(n) {
                            return c.a.createElement(Gf, n);
                        },
                        render: function(n) {
                            var r = n.close;
                            return c.a.createElement(
                                Lf,
                                null,
                                c.a.createElement(Lf.Element, {
                                    handleClick: function(n) {
                                        e(n), r(n);
                                    },
                                    icon: 'edit',
                                    text:
                                        '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c'
                                }),
                                c.a.createElement(Lf.Element, {
                                    handleClick: function(n) {
                                        t(n), r(n);
                                    },
                                    icon: 'close-button',
                                    text:
                                        '\u0423\u0434\u0430\u043b\u0438\u0442\u044c'
                                })
                            );
                        }
                    });
                };
            function Vf() {
                var n = Object(Tt.a)([
                    '\n    border-bottom: 1px solid ',
                    ';\n    font-size: 1.5rem;\n    font-weight: 400;\n    letter-spacing: 1px;\n    position: relative;\n    padding-left: 0.5rem;\n\n    display: grid;\n    grid-template-columns: 2rem 1fr auto;\n    align-items: center;\n    grid-column-gap: 0.5rem;\n    cursor: pointer;\n\n    &:hover {\n        color: ',
                    ';\n        background-color: rgba(',
                    ' 0.6);\n        ',
                    ' {\n            visibility: visible;\n        }\n    }\n'
                ]);
                return (
                    (Vf = function() {
                        return n;
                    }),
                    n
                );
            }
            var zf = Ut.c.li(Vf(), '#808080', '#042c59', oo('#bfbfbf'), Gf);
            function Qf() {
                var n = Object(Tt.a)(['\n    position: relative;\n']);
                return (
                    (Qf = function() {
                        return n;
                    }),
                    n
                );
            }
            var Bf = Object(Ut.c)(_t.a)(Qf()),
                Hf = function(n) {
                    var e = n.categories,
                        t = n.removeCategory,
                        r = n.startUpdatingCategory,
                        a = n.isCategoriesLoading;
                    return c.a.createElement(
                        _f,
                        null,
                        c.a.createElement(pg, {
                            categories: e,
                            removeCategory: t,
                            startUpdatingCategory: r,
                            isLoading: a
                        }),
                        c.a.createElement(Zf, null)
                    );
                };
            function qf() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: flex-end;\n    align-items: start;\n    margin-top: 2rem;\n'
                ]);
                return (
                    (qf = function() {
                        return n;
                    }),
                    n
                );
            }
            function Wf() {
                var n = Object(Tt.a)([
                    '\n    && {\n        outline: 1px solid ',
                    ';\n        color: ',
                    ';\n        background-color: ',
                    ';\n        margin-right: 2rem;\n    }\n'
                ]);
                return (
                    (Wf = function() {
                        return n;
                    }),
                    n
                );
            }
            var Xf = { form: 'category', enableReinitialize: !0 },
                Jf = Object(jt.a)('category'),
                $f = Object(Ut.c)(Vt)(Wf(), '#000', '#000', '#fff'),
                Kf = Ut.c.div(qf()),
                Zf = Object(s.d)(
                    Object(d.c)(
                        function(n) {
                            return {
                                categoriesOptions: cu.getParentCategoriesOptions(
                                    n
                                ),
                                updatedCategory: cu.getUpdatedCategory(n),
                                initialValues: cu.getCategoryInitialValues(n),
                                categoryParent: Jf(n, 'parent.value'),
                                isLoading: cu.isCategoryFormLoading(n)
                            };
                        },
                        function(n) {
                            return {
                                addCategory: function(e) {
                                    var t = Ji(e);
                                    return n(Iu(t));
                                },
                                updateCategory: function(n, e, t) {
                                    var r = t.updatedCategory._id,
                                        a = Ji(n);
                                    return e(Pu(r, a));
                                },
                                stopUpdating: function() {
                                    return n(wu());
                                }
                            };
                        }
                    ),
                    Object(St.a)(Xf)
                )(function(n) {
                    var e = n.handleSubmit,
                        t = n.updateCategory,
                        r = n.addCategory,
                        a = n.categoriesOptions,
                        o = n.error,
                        i = n.updatedCategory,
                        u = n.stopUpdating,
                        l = n.categoryParent,
                        s = n.change,
                        d = n.isLoading;
                    return c.a.createElement(
                        Bf,
                        { onSubmit: e(i ? t : r) },
                        d && c.a.createElement(lo, null),
                        o && c.a.createElement(fr, { source: o }),
                        i
                            ? c.a.createElement(
                                  Jt,
                                  null,
                                  '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "',
                                  i.name,
                                  '"'
                              )
                            : c.a.createElement(
                                  Jt,
                                  null,
                                  '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e'
                              ),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'name',
                            label:
                                '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                            small: !0,
                            component: Ta,
                            validate: [De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'slug',
                            label: 'Slug',
                            small: !0,
                            component: Ta,
                            validate: [De, ke]
                        }),
                        c.a.createElement(
                            jr,
                            null,
                            c.a.createElement(Ct.a, {
                                name: 'pet',
                                label: '\u041a\u043e\u043c\u0443',
                                small: !0,
                                options: Vi,
                                disabled: !!l,
                                component: jc,
                                validate: [Bi]
                            }),
                            c.a.createElement(Ct.a, {
                                name: 'parent',
                                label:
                                    '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c',
                                small: !0,
                                handleChange: function(n) {
                                    return s(
                                        'pet',
                                        Vi.find(function(e) {
                                            return e.label === n.pet;
                                        })
                                    );
                                },
                                options: a,
                                component: jc
                            })
                        ),
                        c.a.createElement(
                            Kf,
                            null,
                            i &&
                                c.a.createElement(
                                    $f,
                                    { type: 'button', onClick: u },
                                    '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f'
                                ),
                            c.a.createElement(
                                vr,
                                { className: 'm-n' },
                                i
                                    ? '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'
                                    : '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c'
                            )
                        )
                    );
                });
            function ng() {
                var n = Object(Tt.a)([
                    '\n    padding: 0.5rem 0;\n    grid-column: 2 /3;\n'
                ]);
                return (
                    (ng = function() {
                        return n;
                    }),
                    n
                );
            }
            var eg = Ut.c.span(ng()),
                tg = (function(n) {
                    function e(n) {
                        var t;
                        return (
                            Object(er.a)(this, e),
                            ((t = Object(rr.a)(
                                this,
                                Object(ar.a)(e).call(this, n)
                            )).state = { showSubcategories: !1 }),
                            t
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidUpdate',
                                value: function(n) {
                                    var e = n.category.subCategories,
                                        t = this.props.category.subCategories;
                                    Ms()(t, e) || this.showSubcategories();
                                }
                            },
                            {
                                key: 'showSubcategories',
                                value: function() {
                                    this.setState({ showSubcategories: !0 });
                                }
                            },
                            {
                                key: 'toggleSubcategories',
                                value: function() {
                                    var n = this.state.showSubcategories;
                                    this.setState({ showSubcategories: !n });
                                }
                            },
                            {
                                key: 'handleRemove',
                                value: function(n, e) {
                                    var t = this.props.removeCategory;
                                    n.stopPropagation(), t(e);
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this,
                                        e = this.props,
                                        t = e.category,
                                        r = e.startUpdatingCategory,
                                        a = this.state.showSubcategories,
                                        o = X()(t, 'path'),
                                        i = X()(t, 'name'),
                                        u = X()(t, 'subCategories'),
                                        l = X()(t, '_id');
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(
                                            zf,
                                            {
                                                key: o,
                                                onClick: this
                                                    .toggleSubcategories
                                            },
                                            u &&
                                                !!u.length &&
                                                c.a.createElement(ua, {
                                                    isOpen: a
                                                }),
                                            c.a.createElement(eg, null, i),
                                            c.a.createElement(Yf, {
                                                handleEdit: function() {
                                                    return r(t);
                                                },
                                                handleRemove: function(e) {
                                                    n.handleRemove(e, l);
                                                }
                                            })
                                        ),
                                        a &&
                                            c.a.createElement(dg, {
                                                subCategories: u,
                                                editCategory: r,
                                                removeCategory: this
                                                    .handleRemove
                                            })
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr);
            function rg() {
                var n = Object(Tt.a)([
                    '\n    width: 70%;\n    position: relative;\n    min-height: 10rem;\n'
                ]);
                return (
                    (rg = function() {
                        return n;
                    }),
                    n
                );
            }
            var ag = Ut.c.div(rg()),
                cg = function(n) {
                    var e = n.categories,
                        t = n.removeCategory,
                        r = n.startUpdatingCategory,
                        a = n.isLoading;
                    return c.a.createElement(
                        ag,
                        null,
                        a && c.a.createElement(lo, null),
                        c.a.createElement(
                            Jt,
                            null,
                            ' \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438'
                        ),
                        c.a.createElement(
                            'ul',
                            null,
                            e.map(function(n) {
                                return c.a.createElement(tg, {
                                    category: n,
                                    removeCategory: t,
                                    key: n._id,
                                    startUpdatingCategory: r
                                });
                            })
                        )
                    );
                };
            function og() {
                var n = Object(Tt.a)([
                    '\n    ',
                    ';\n    grid-column: 1/-1;\n    border: none;\n    padding-left: 4rem;\n\n    &:hover {\n        color: ',
                    ';\n        background-color: rgba(',
                    ' 0.3);\n    }\n'
                ]);
                return (
                    (og = function() {
                        return n;
                    }),
                    n
                );
            }
            function ig() {
                var n = Object(Tt.a)(['\n    font-size: 1.4rem;\n']);
                return (
                    (ig = function() {
                        return n;
                    }),
                    n
                );
            }
            var ug = Ut.c.span(ig()),
                lg = Object(Ut.c)(zf)(og(), zf, '#042c59', oo('#bfbfbf')),
                sg = function(n) {
                    var e = n.name,
                        t = n.handleEdit,
                        r = n.handleRemove;
                    return c.a.createElement(
                        lg,
                        null,
                        c.a.createElement(ug, null, e),
                        c.a.createElement(Yf, {
                            handleEdit: t,
                            handleRemove: r
                        })
                    );
                },
                dg = function(n) {
                    var e = n.subCategories,
                        t = n.removeCategory,
                        r = n.editCategory;
                    return c.a.createElement(
                        'ul',
                        null,
                        e &&
                            !!e.length &&
                            e.map(function(n) {
                                var e = n._id,
                                    a = n.name;
                                return c.a.createElement(sg, {
                                    key: e,
                                    name: a,
                                    handleRemove: function(n) {
                                        t(n, e);
                                    },
                                    handleEdit: function() {
                                        return r(n);
                                    }
                                });
                            })
                    );
                },
                pg = cg,
                mg = Hf;
            function fg() {
                var n = Object(Tt.a)([
                    '\n    width: 100%;\n\n    display: block;\n'
                ]);
                return (
                    (fg = function() {
                        return n;
                    }),
                    n
                );
            }
            function gg() {
                var n = Object(Tt.a)([
                    '\n    padding: 1rem 0;\n    border-bottom: 1px solid ',
                    ';\n\n    display: grid;\n    grid-template-columns: 8rem 1fr 5rem;\n    align-items: center;\n'
                ]);
                return (
                    (gg = function() {
                        return n;
                    }),
                    n
                );
            }
            function bg() {
                var n = Object(Tt.a)([
                    '\n    align-self: start;\n    justify-self: end;\n'
                ]);
                return (
                    (bg = function() {
                        return n;
                    }),
                    n
                );
            }
            function Eg() {
                var n = Object(Tt.a)([
                    '\n    :hover {\n        img {\n            opacity: 0.7;\n        }\n    }\n'
                ]);
                return (
                    (Eg = function() {
                        return n;
                    }),
                    n
                );
            }
            function vg() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        color: ',
                    ';\n    }\n\n    :hover {\n        color: ',
                    ';\n    }\n'
                ]);
                return (
                    (vg = function() {
                        return n;
                    }),
                    n
                );
            }
            var hg = Object(Ut.c)(Mt)(vg(), '#042c59', '#f96d0b'),
                Og = Object(Ut.c)(Mt)(Eg()),
                yg = Object(Ut.c)(ma)(bg()),
                jg = Ut.c.li(gg(), '#bfbfbf'),
                _g = Ut.c.img(fg()),
                Cg = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'render',
                                value: function() {
                                    var n = this.props,
                                        e = n.product,
                                        t = n.removeProduct,
                                        r = n.startUpdating,
                                        a = X()(e, 'path'),
                                        o = X()(e, 'title'),
                                        i = X()(e, '_id'),
                                        u = X()(e, 'media.url');
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(
                                            jg,
                                            { key: a },
                                            c.a.createElement(
                                                'div',
                                                null,
                                                c.a.createElement(
                                                    Og,
                                                    { to: a },
                                                    c.a.createElement(_g, {
                                                        src: 'https://dr-clauders-server.herokuapp.com/media/'.concat(
                                                            u
                                                        ),
                                                        alt: ''
                                                    })
                                                )
                                            ),
                                            c.a.createElement(
                                                'div',
                                                null,
                                                c.a.createElement(
                                                    hg,
                                                    { to: a },
                                                    o
                                                )
                                            ),
                                            c.a.createElement(yg, {
                                                trigger: function(n) {
                                                    return c.a.createElement(
                                                        Lf.Trigger,
                                                        n
                                                    );
                                                },
                                                render: function(n) {
                                                    var a = n.close;
                                                    return c.a.createElement(
                                                        Lf,
                                                        null,
                                                        c.a.createElement(
                                                            Lf.Element,
                                                            {
                                                                handleClick: function(
                                                                    n
                                                                ) {
                                                                    r(e), a(n);
                                                                },
                                                                icon: 'edit',
                                                                text:
                                                                    '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c'
                                                            }
                                                        ),
                                                        c.a.createElement(
                                                            Lf.Element,
                                                            {
                                                                handleClick: function(
                                                                    n
                                                                ) {
                                                                    t(i), a(n);
                                                                },
                                                                icon:
                                                                    'close-button',
                                                                text:
                                                                    '\u0423\u0434\u0430\u043b\u0438\u0442\u044c'
                                                            }
                                                        )
                                                    );
                                                }
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr);
            function Sg() {
                var n = Object(Tt.a)([
                    '\n    overflow-y: scroll;\n    max-height: 60rem;\n    padding: 1rem;\n'
                ]);
                return (
                    (Sg = function() {
                        return n;
                    }),
                    n
                );
            }
            function Tg() {
                var n = Object(Tt.a)([
                    '\n    width: 80%;\n    position: relative;\n    min-height: 10rem;\n'
                ]);
                return (
                    (Tg = function() {
                        return n;
                    }),
                    n
                );
            }
            var Rg = Ut.c.div(Tg()),
                Ug = Ut.c.ul(Sg()),
                Dg = function(n) {
                    var e = n.products,
                        t = n.removeProduct,
                        r = n.startUpdatingProduct,
                        a = n.isLoading;
                    return c.a.createElement(
                        Rg,
                        null,
                        a && c.a.createElement(lo, null),
                        c.a.createElement(
                            Jt,
                            null,
                            '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b'
                        ),
                        c.a.createElement(
                            Ug,
                            null,
                            e.map(function(n) {
                                return c.a.createElement(Cg, {
                                    startUpdating: r,
                                    key: n._id,
                                    removeProduct: t,
                                    product: n
                                });
                            })
                        )
                    );
                };
            function Ag() {
                return (Ag =
                    Object.assign ||
                    function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) &&
                                    (n[r] = t[r]);
                        }
                        return n;
                    }).apply(this, arguments);
            }
            function Ig(n, e) {
                if (null == n) return {};
                var t,
                    r,
                    a = (function(n, e) {
                        if (null == n) return {};
                        var t,
                            r,
                            a = {},
                            c = Object.keys(n);
                        for (r = 0; r < c.length; r++)
                            (t = c[r]), e.indexOf(t) >= 0 || (a[t] = n[t]);
                        return a;
                    })(n, e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < c.length; r++)
                        (t = c[r]),
                            e.indexOf(t) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    n,
                                    t
                                ) &&
                                    (a[t] = n[t]));
                }
                return a;
            }
            var Pg = c.a.createElement(
                    'g',
                    null,
                    c.a.createElement('path', {
                        d:
                            'M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'
                    }),
                    c.a.createElement('path', {
                        d:
                            'M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z'
                    })
                ),
                xg = c.a.createElement('g', null),
                kg = c.a.createElement('g', null),
                wg = c.a.createElement('g', null),
                Lg = c.a.createElement('g', null),
                Ng = c.a.createElement('g', null),
                Mg = c.a.createElement('g', null),
                Fg = c.a.createElement('g', null),
                Gg = c.a.createElement('g', null),
                Yg = c.a.createElement('g', null),
                Vg = c.a.createElement('g', null),
                zg = c.a.createElement('g', null),
                Qg = c.a.createElement('g', null),
                Bg = c.a.createElement('g', null),
                Hg = c.a.createElement('g', null),
                qg = c.a.createElement('g', null),
                Wg = function(n) {
                    var e = n.svgRef,
                        t = Ig(n, ['svgRef']);
                    return c.a.createElement(
                        'svg',
                        Ag(
                            {
                                id: 'Capa_1',
                                x: '0px',
                                y: '0px',
                                viewBox: '0 0 52 52',
                                style: { enableBackground: 'new 0 0 52 52' },
                                xmlSpace: 'preserve',
                                ref: e
                            },
                            t
                        ),
                        Pg,
                        xg,
                        kg,
                        wg,
                        Lg,
                        Ng,
                        Mg,
                        Fg,
                        Gg,
                        Yg,
                        Vg,
                        zg,
                        Qg,
                        Bg,
                        Hg,
                        qg
                    );
                },
                Xg = c.a.forwardRef(function(n, e) {
                    return c.a.createElement(Wg, Ag({ svgRef: e }, n));
                });
            t.p;
            function Jg() {
                var n = Object(Tt.a)([
                    '\n    && {\n        background-color: transparent;\n\n        :hover {\n            ',
                    ' {\n                fill: ',
                    ';\n            }\n        }\n    }\n'
                ]);
                return (
                    (Jg = function() {
                        return n;
                    }),
                    n
                );
            }
            function $g() {
                var n = Object(Tt.a)([
                    '\n    && {\n        height: 3rem;\n        width: 3rem;\n        padding: 0.1rem;\n        border-radius: 50%;\n        position: relative;\n    }\n'
                ]);
                return (
                    ($g = function() {
                        return n;
                    }),
                    n
                );
            }
            function Kg() {
                var n = Object(Tt.a)([
                    '\n    ',
                    ';\n    height: 50%;\n    width: 50%;\n    fill: ',
                    ';\n'
                ]);
                return (
                    (Kg = function() {
                        return n;
                    }),
                    n
                );
            }
            function Zg() {
                var n = Object(Tt.a)([
                    '\n    ',
                    ';\n    height: 90%;\n    width: 90%;\n'
                ]);
                return (
                    (Zg = function() {
                        return n;
                    }),
                    n
                );
            }
            function nb() {
                var n = Object(Tt.a)([
                    '\n    fill: ',
                    ';\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n'
                ]);
                return (
                    (nb = function() {
                        return n;
                    }),
                    n
                );
            }
            function eb() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 1rem;\n    list-style-type: none;\n    overflow-y: scroll;\n    max-height: 30rem;\n    border: 1px solid ',
                    ';\n'
                ]);
                return (
                    (eb = function() {
                        return n;
                    }),
                    n
                );
            }
            function tb() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: space-between;\n'
                ]);
                return (
                    (tb = function() {
                        return n;
                    }),
                    n
                );
            }
            function rb() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid ',
                    ';\n    padding: 1rem;\n    background-color: rgba(',
                    ' 0.6);\n'
                ]);
                return (
                    (rb = function() {
                        return n;
                    }),
                    n
                );
            }
            function ab() {
                var n = Object(Tt.a)([
                    '\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n'
                ]);
                return (
                    (ab = function() {
                        return n;
                    }),
                    n
                );
            }
            var cb = Ut.c.div(ab()),
                ob = Ut.c.li(rb(), '#bfbfbf', oo('#bfbfbf')),
                ib = Ut.c.div(tb()),
                ub = Ut.c.ul(eb(), '#bfbfbf'),
                lb = Object(Ut.b)(nb(), '#fff'),
                sb = Object(Ut.c)(Xg)(Zg(), lb),
                db = Object(Ut.c)(Ka)(Kg(), lb, '#042c59'),
                pb = Object(Ut.c)(Vt)($g()),
                mb = Object(Ut.c)(pb)(Jg(), db, '#f96d0b'),
                fb = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidUpdate',
                                value: function(n) {
                                    var e = n.fields;
                                    this.props.fields.length > e.length &&
                                        this.scrollToBottom();
                                }
                            },
                            {
                                key: 'scrollToBottom',
                                value: function() {
                                    this.tabsList.scrollTop = this.tabsList.scrollHeight;
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this,
                                        e = this.props,
                                        t = e.fields,
                                        r = e.meta,
                                        a = r.error,
                                        o = r.submitFailed;
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(
                                            cb,
                                            null,
                                            c.a.createElement(
                                                Kt,
                                                { className: 'm-n' },
                                                '\u0422\u0430\u0431\u044b'
                                            ),
                                            ' ',
                                            c.a.createElement(
                                                pb,
                                                {
                                                    className: 'ml-sm-s',
                                                    type: 'button',
                                                    onClick: function() {
                                                        return t.push({});
                                                    }
                                                },
                                                c.a.createElement(sb, null)
                                            )
                                        ),
                                        !!t.length &&
                                            c.a.createElement(
                                                ub,
                                                {
                                                    ref: function(e) {
                                                        n.tabsList = e;
                                                    }
                                                },
                                                o &&
                                                    a &&
                                                    c.a.createElement(
                                                        'span',
                                                        null,
                                                        a
                                                    ),
                                                t.map(function(n, e) {
                                                    return c.a.createElement(
                                                        ob,
                                                        { key: e },
                                                        c.a.createElement(
                                                            ib,
                                                            null,
                                                            c.a.createElement(
                                                                'h4',
                                                                null,
                                                                '#',
                                                                e + 1
                                                            ),
                                                            c.a.createElement(
                                                                mb,
                                                                {
                                                                    type:
                                                                        'button',
                                                                    onClick: function() {
                                                                        return t.remove(
                                                                            e
                                                                        );
                                                                    }
                                                                },
                                                                c.a.createElement(
                                                                    db,
                                                                    null
                                                                )
                                                            )
                                                        ),
                                                        c.a.createElement(
                                                            'div',
                                                            null,
                                                            c.a.createElement(
                                                                Ct.a,
                                                                {
                                                                    name: ''.concat(
                                                                        n,
                                                                        '.title'
                                                                    ),
                                                                    type:
                                                                        'text',
                                                                    component: Ta,
                                                                    label:
                                                                        '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                                                                    small: !0,
                                                                    validate: [
                                                                        De
                                                                    ]
                                                                }
                                                            ),
                                                            c.a.createElement(
                                                                Ct.a,
                                                                {
                                                                    type:
                                                                        'textarea',
                                                                    name: ''.concat(
                                                                        n,
                                                                        '.content'
                                                                    ),
                                                                    label:
                                                                        '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435',
                                                                    small: !0,
                                                                    rows: '3',
                                                                    component: Ia,
                                                                    validate: [
                                                                        De
                                                                    ]
                                                                }
                                                            )
                                                        )
                                                    );
                                                })
                                            )
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(a.PureComponent),
                gb = t(352);
            function bb() {
                var n = Object(Tt.a)([
                    '\n    display: flex;\n    justify-content: flex-end;\n    align-items: start;\n    margin-top: 2rem;\n'
                ]);
                return (
                    (bb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Eb() {
                var n = Object(Tt.a)([
                    '\n    &&& {\n        outline: 1px solid ',
                    ';\n        color: ',
                    ';\n        background-color: ',
                    ';\n        margin-right: 2rem;\n    }\n'
                ]);
                return (
                    (Eb = function() {
                        return n;
                    }),
                    n
                );
            }
            var vb = { form: 'product', enableReinitialize: !0 },
                hb = Object(Ut.c)(Vt)(Eb(), '#000', '#000', '#fff'),
                Ob = Ut.c.div(bb()),
                yb = Object(s.d)(
                    Object(d.c)(
                        function(n) {
                            return {
                                updatedProduct: cu.getUpdatedProduct(n),
                                categoriesOptions: cu.getCategoriesOptions(n),
                                initialValues: cu.getProductInitialValues(n),
                                isLoading: cu.isProductFormLoading(n)
                            };
                        },
                        function(n) {
                            return {
                                addProduct: function(e) {
                                    var t = Xi(e);
                                    return n(Lu(t));
                                },
                                updateProduct: function(n, e, t) {
                                    var r = t.updatedProduct._id,
                                        a = Xi(n);
                                    return e(Nu(r, a));
                                },
                                stopUpdatingProduct: function() {
                                    return n(Gu());
                                }
                            };
                        }
                    ),
                    Object(St.a)(vb)
                )(function(n) {
                    var e = n.handleSubmit,
                        t = n.addProduct,
                        r = n.updateProduct,
                        a = n.updatedProduct,
                        o = n.stopUpdatingProduct,
                        i = n.categoriesOptions,
                        u = n.error,
                        l = n.isLoading;
                    return c.a.createElement(
                        Bf,
                        { onSubmit: e(a ? r : t) },
                        l && c.a.createElement(lo, null),
                        u && c.a.createElement(fr, { source: u }),
                        a
                            ? c.a.createElement(
                                  Jt,
                                  null,
                                  '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041f\u0440\u043e\u0434\u0443\u043a\u0442 "',
                                  a.title,
                                  '"'
                              )
                            : c.a.createElement(
                                  Jt,
                                  null,
                                  '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u041f\u0440\u043e\u0434\u0443\u043a\u0442'
                              ),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'title',
                            label:
                                '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                            small: !0,
                            component: Ta,
                            validate: [De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'text',
                            name: 'slug',
                            label: 'Slug',
                            small: !0,
                            component: Ta,
                            validate: [De, ke]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'number',
                            name: 'price',
                            label: '\u0426\u0435\u043d\u0430',
                            small: !0,
                            min: '1',
                            component: Ta,
                            validate: [De, Hi]
                        }),
                        c.a.createElement(Ct.a, {
                            name: 'categories',
                            label:
                                '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438',
                            small: !0,
                            isMulti: !0,
                            showClear: !0,
                            closeMenuOnSelect: !1,
                            options: i,
                            component: jc,
                            validate: [De]
                        }),
                        c.a.createElement(Ct.a, {
                            type: 'textarea',
                            name: 'description.main',
                            label:
                                '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435',
                            small: !0,
                            component: Ia,
                            validate: [De]
                        }),
                        c.a.createElement(gb.a, {
                            name: 'description.tabs',
                            component: fb
                        }),
                        c.a.createElement(
                            Ob,
                            null,
                            a &&
                                c.a.createElement(
                                    hb,
                                    { type: 'button', onClick: o },
                                    '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f'
                                ),
                            c.a.createElement(
                                vr,
                                { className: 'm-n' },
                                a
                                    ? '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'
                                    : '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c'
                            )
                        )
                    );
                }),
                jb = function(n) {
                    var e = n.products,
                        t = n.removeProduct,
                        r = n.startUpdatingProduct,
                        a = n.isProductsLoading;
                    return c.a.createElement(
                        _f,
                        null,
                        c.a.createElement(Dg, {
                            products: e,
                            removeProduct: t,
                            startUpdatingProduct: r,
                            isLoading: a
                        }),
                        c.a.createElement(yb, null)
                    );
                };
            function _b() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n    min-height: 100vh;\n    margin-top: 4rem;\n    margin-bottom: 8.5rem;\n\n    display: flex;\n    flex-direction: column;\n'
                ]);
                return (
                    (_b = function() {
                        return n;
                    }),
                    n
                );
            }
            var Cb = Ut.c.div(_b()),
                Sb = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var n = this.props,
                                        e = n.location;
                                    (0, n.getAllProducts)(e);
                                }
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var n = this.props,
                                        e = n.categories,
                                        t = n.products,
                                        r = n.removeCategory,
                                        a = n.startUpdatingCategory,
                                        o = n.removeProduct,
                                        i = n.startUpdatingProduct,
                                        u = n.isProductsLoading,
                                        l = n.isCategoriesLoading;
                                    return c.a.createElement(
                                        Cb,
                                        null,
                                        c.a.createElement(jb, {
                                            products: t,
                                            removeProduct: o,
                                            startUpdatingProduct: i,
                                            isProductsLoading: u
                                        }),
                                        c.a.createElement(mg, {
                                            categories: e,
                                            removeCategory: r,
                                            startUpdatingCategory: a,
                                            isCategoriesLoading: l
                                        })
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(Fr),
                Tb = Object(d.c)(
                    function(n) {
                        return {
                            categories: yn(n),
                            location: On(n),
                            products: Pn(n),
                            isProductsLoading: cu.isProductsViewLoading(n),
                            isCategoriesLoading: cu.isCategoriesViewLoading(n)
                        };
                    },
                    function(n) {
                        return {
                            removeCategory: function(e) {
                                return n(xu(e));
                            },
                            startUpdatingCategory: function(e) {
                                return n(ku(e));
                            },
                            getAllProducts: function(e) {
                                return n(Rn(e));
                            },
                            removeProduct: function(e) {
                                return n(Mu(e));
                            },
                            startUpdatingProduct: function(e) {
                                return n(Fu(e));
                            },
                            stopUpdatingProduct: function() {
                                return n(Gu());
                            }
                        };
                    }
                )(Sb),
                Rb = 'ACTIVE',
                Ub = 'MATCHED',
                Db = 'PASSIVE';
            function Ab() {
                var n = Object(Tt.a)(['\n        ', '\n    ']);
                return (
                    (Ab = function() {
                        return n;
                    }),
                    n
                );
            }
            var Ib = function(n) {
                return '\n        &:nth-child('
                    .concat(n, ') {\n          transition-delay: ')
                    .concat(90 + 15 * n, 'ms;\n         }\n      ');
            };
            function Pb() {
                var n = Object(Tt.a)([
                    '\n    opacity: 0;\n    transform: translateX(-2.5rem);\n    transition: opacity 25ms, transform 0s 0.15s;\n\n    :hover {\n        ',
                    ' {\n            color: ',
                    ';\n            background-color: rgba(',
                    ' 0.94);\n        }\n    }\n'
                ]);
                return (
                    (Pb = function() {
                        return n;
                    }),
                    n
                );
            }
            function xb() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        display: block;\n        line-height: 1.5rem;\n        font-size: 1.2rem;\n        font-weight: 300;\n        letter-spacing: 1px;\n        padding: 1rem 3rem;\n    }\n\n    &.active {\n        color: ',
                    ';\n        background-color: rgba(',
                    ' 0.94);\n    }\n'
                ]);
                return (
                    (xb = function() {
                        return n;
                    }),
                    n
                );
            }
            function kb() {
                var n = Object(Tt.a)([
                    '\n    list-style-type: none;\n    position: absolute;\n    left: -3rem;\n    width: 28rem;\n    transform: scaleY(0);\n    transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform-origin: center top;\n    background-color: rgba(',
                    ' 0.94);\n    z-index: 1000;\n'
                ]);
                return (
                    (kb = function() {
                        return n;
                    }),
                    n
                );
            }
            var wb = Ut.c.ul(kb(), oo('#F2F2F2')),
                Lb = Object(Ut.c)(Mt)(xb(), '#fff', oo('#333')),
                Nb = Ut.c.li(Pb(), Lb, '#fff', oo('#333')),
                Mb = function(n) {
                    var e = n.subCategories;
                    return c.a.createElement(
                        wb,
                        null,
                        e.map(function(n) {
                            var e = X()(n, 'path'),
                                t = X()(n, 'name');
                            return c.a.createElement(
                                Nb,
                                { key: e },
                                c.a.createElement(
                                    Lb,
                                    {
                                        as: Rt.b,
                                        activeClassName: 'active',
                                        to: e
                                    },
                                    t
                                )
                            );
                        })
                    );
                };
            function Fb() {
                var n = Object(Tt.a)([
                    "\n                    ::after {\n                        content: '';\n                        position: absolute;\n                        width: 100%;\n                        height: 2px;\n                        bottom: 5px;\n                        left: 0;\n                        background-color: ",
                    ';\n                    }\n                '
                ]);
                return (
                    (Fb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Gb() {
                var n = Object(Tt.a)([
                    '\n                    && {\n                        color: ',
                    ";\n                    }\n                    ::after {\n                        content: '';\n                        position: absolute;\n                        width: 100%;\n                        height: 2px;\n                        bottom: 5px;\n                        left: 0;\n                        background-color: ",
                    ';\n                    }\n                '
                ]);
                return (
                    (Gb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Yb() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        line-height: 4.6rem;\n        font-size: 1.2rem;\n        font-weight: 300;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        position: relative;\n    }\n    ',
                    '\n\n    &:hover {\n        color: ',
                    ';\n    }\n'
                ]);
                return (
                    (Yb = function() {
                        return n;
                    }),
                    n
                );
            }
            var Vb = Object(Ut.c)(Mt)(
                    Yb(),
                    function(n) {
                        switch (n.state) {
                            case Rb:
                                return Object(Ut.b)(Gb(), '#042c59', '#042c59');
                            case Ub:
                                return Object(Ut.b)(Fb(), '#042c59');
                            default:
                                return;
                        }
                    },
                    '#042c59'
                ),
                zb = function(n) {
                    var e,
                        t = n.path,
                        r = n.link;
                    return (
                        (e = t === r ? Rb : t.includes(r) ? Ub : Db),
                        c.a.createElement(Vb, { state: e, to: r }, n.children)
                    );
                };
            function Qb() {
                var n = Object(Tt.a)([
                    '\n    position: relative;\n    cursor: pointer;\n\n    :hover {\n        ::before {\n            width: 100%;\n            left: 0;\n        }\n\n        & > ul {\n            transform: scaleY(1);\n        }\n\n        & > ul > li {\n            opacity: 1;\n            transform: translateX(0);\n            transition: opacity 0.25s,\n                transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n            ',
                    "\n            :first-child {\n                padding-top: 1.3rem;\n                transition-delay: 90ms;\n            }\n        }\n    }\n\n    ::before {\n        content: '';\n        position: absolute;\n        width: 0;\n        height: 2px;\n        bottom: 5px;\n        left: 50%;\n        background-color: ",
                    ';\n        transition: all 0.2s;\n    }\n'
                ]);
                return (
                    (Qb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Bb() {
                var n = Object(Tt.a)([
                    '\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n'
                ]);
                return (
                    (Bb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Hb() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 5 / col-end 8;\n    font-size: 1.2rem;\n    ',
                    ';\n'
                ]);
                return (
                    (Hb = function() {
                        return n;
                    }),
                    n
                );
            }
            var qb = Ut.c.nav(Hb(), wt),
                Wb = Ut.c.ul(Bb()),
                Xb = Ut.c.li(
                    Qb(),
                    (function() {
                        for (var n = '', e = 2; e <= 10; e++) n += Ib(e);
                        return Object(Ut.b)(Ab(), n);
                    })(),
                    '#042c59'
                ),
                Jb = Object(d.c)(function(n) {
                    return { navConfig: _n(n) };
                })(function(n) {
                    return c.a.createElement(
                        qb,
                        null,
                        c.a.createElement(
                            Wb,
                            null,
                            n.navConfig &&
                                n.navConfig.map(function(e) {
                                    var t = X()(e, 'path'),
                                        r = X()(e, 'subCategories'),
                                        a = X()(e, 'name');
                                    return c.a.createElement(
                                        Xb,
                                        { key: a },
                                        c.a.createElement(
                                            zb,
                                            {
                                                link: t,
                                                path: n.location.pathname
                                            },
                                            a
                                        ),
                                        r &&
                                            !!r.length &&
                                            c.a.createElement(Mb, {
                                                subCategories: r
                                            })
                                    );
                                })
                        )
                    );
                });
            function $b() {
                var n = Object(Tt.a)([
                    '\n    :link,\n    :visited {\n        display: inline-block;\n        padding: 0 1rem;\n        color: inherit;\n\n        :hover {\n            text-decoration: underline;\n        }\n\n        :first-child {\n            padding-left: 0;\n        }\n\n        :last-child {\n            padding-right: 0;\n        }\n    }\n'
                ]);
                return (
                    ($b = function() {
                        return n;
                    }),
                    n
                );
            }
            function Kb() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 6 / center-end;\n    justify-self: end;\n'
                ]);
                return (
                    (Kb = function() {
                        return n;
                    }),
                    n
                );
            }
            function Zb() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 3 / span 3;\n    justify-self: center;\n    font-size: 1.6rem;\n'
                ]);
                return (
                    (Zb = function() {
                        return n;
                    }),
                    n
                );
            }
            function nE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 1 / span 1;\n'
                ]);
                return (
                    (nE = function() {
                        return n;
                    }),
                    n
                );
            }
            function eE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n\n    ',
                    ';\n    padding: 1rem 0;\n    background-color: ',
                    ';\n    color: ',
                    ';\n    ',
                    ';\n    font-weight: 300;\n    line-height: 2.4rem;\n    font-size: 1.3rem;\n'
                ]);
                return (
                    (eE = function() {
                        return n;
                    }),
                    n
                );
            }
            var tE = Ut.c.div(eE(), ha, '#042c59', '#fff', wt),
                rE = Ut.c.div(nE()),
                aE = Ut.c.div(Zb()),
                cE = Ut.c.div(Kb()),
                oE = Object(Ut.c)(Mt)($b()),
                iE = function() {
                    return c.a.createElement(
                        tE,
                        null,
                        c.a.createElement(rE, null, 'Icons'),
                        c.a.createElement(
                            aE,
                            null,
                            'Low Flat Rate Or Free Shipping Over $49!'
                        ),
                        c.a.createElement(
                            cE,
                            null,
                            c.a.createElement(
                                oE,
                                { to: '/account' },
                                'Account'
                            ),
                            ' |',
                            ' ',
                            c.a.createElement(oE, { to: '/cart' }, 'Cart'),
                            ' |',
                            ' ',
                            c.a.createElement(
                                oE,
                                { to: '/checkout' },
                                'Checkout'
                            )
                        )
                    );
                },
                uE = t(398),
                lE = t.n(uE);
            function sE() {
                var n = Object(Tt.a)([
                    '\n    width: 20rem;\n    height: auto;\n'
                ]);
                return (
                    (sE = function() {
                        return n;
                    }),
                    n
                );
            }
            function dE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: col-start 1 / col-end 1;\n    cursor: pointer;\n'
                ]);
                return (
                    (dE = function() {
                        return n;
                    }),
                    n
                );
            }
            function pE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: center-start / center-end;\n\n    display: grid;\n    align-items: center;\n    padding: 2rem 0;\n\n    grid-template-columns:\n        [header-start] repeat(\n            8,\n            [col-start] minmax(min-content, 14rem) [col-end]\n        )\n        [header-end];\n'
                ]);
                return (
                    (pE = function() {
                        return n;
                    }),
                    n
                );
            }
            function mE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n\n    ',
                    ';\n'
                ]);
                return (
                    (mE = function() {
                        return n;
                    }),
                    n
                );
            }
            var fE = Ut.c.header(mE(), ha),
                gE = Ut.c.div(pE()),
                bE = Object(Ut.c)(Mt)(dE()),
                EE = Ut.c.img(sE()),
                vE = function(n) {
                    return c.a.createElement(
                        fE,
                        null,
                        c.a.createElement(iE, null),
                        c.a.createElement(
                            gE,
                            null,
                            c.a.createElement(
                                bE,
                                { to: '/' },
                                c.a.createElement(EE, {
                                    src: lE.a,
                                    alt: "Dr Clauder's"
                                })
                            ),
                            c.a.createElement(Jb, n)
                        )
                    );
                };
            function hE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n    background-color: ',
                    ';\n    color: ',
                    ';\n    padding: 20rem;\n    text-align: center;\n    font-size: 5rem;\n'
                ]);
                return (
                    (hE = function() {
                        return n;
                    }),
                    n
                );
            }
            var OE = Ut.c.footer(hE(), '#042c59', '#fff'),
                yE = function() {
                    return c.a.createElement(OE, null, 'Footer');
                };
            function jE() {
                var n = Object(Tt.a)([
                    "\n    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');\n    @import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');\n    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\n    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');\n    \n    *,\n    *::after,\n    *::before {\n        margin: 0;\n        padding: 0;\n        box-sizing: inherit;\n    }\n\n    body {\n        ",
                    ';\n        font-size: 1.5rem;\n        box-sizing: border-box;\n        line-height: 2.7rem;\n        font-weight: 400;\n        color: ',
                    ';\n    }\n    \n    \n    html {\n        font-size: 62.5%;\n    }\n    \n    ul {\n        list-style-type: none;\n    }\n    \n    .d-none {\n       display: none;\n    }\n    \n    .ml-sm-s {\n    margin-left: 1.5rem;\n    }\n    \n    .mt-sm-s {\n        margin-top: 1.5rem;\n    }\n    \n    .mt-md {\n        margin-top: 3rem;\n    }\n    \n    .mb-sm {\n        margin-bottom: 2rem;\n    }\n    \n    .mb-sm-s {\n        margin-bottom: 1.5rem;\n    }\n    \n    \n    .mb-md {\n        margin-bottom: 3rem;\n    }\n    \n    .mb-md-b {\n        margin-bottom: 4rem;\n    }\n    \n    .m-n {\n        margin: 0;\n    }\n    \n    .toast-success.toast-success {\n        background-color: ',
                    '  ;\n        box-shadow: none ;\n        border-radius: 0 ;\n        color: ',
                    ' ;\n        align-items: start;\n    }\n    \n    .toast-progress-success.toast-progress-success {\n        background-color: ',
                    '  ;\n    }\n    \n    ::selection {\n    background-color: ',
                    ';\n    color: ',
                    ';\n}\n'
                ]);
                return (
                    (jE = function() {
                        return n;
                    }),
                    n
                );
            }
            var _E = Object(Ut.a)(
                jE(),
                xt,
                '#2b2b2b',
                '#F2F2F2',
                '#000',
                '#f96d0b',
                '#042c59',
                '#fff'
            );
            t(807);
            function CE() {
                var n = Object(Tt.a)([
                    '\n    grid-column: full-start / full-end;\n    background-color: orangered;\n    color: #fff;\n    text-align: center;\n    padding: 20rem;\n'
                ]);
                return (
                    (CE = function() {
                        return n;
                    }),
                    n
                );
            }
            function SE() {
                var n = Object(Tt.a)(['\n    ', '\n']);
                return (
                    (SE = function() {
                        return n;
                    }),
                    n
                );
            }
            var TE = Ut.c.div(SE(), ha),
                RE = Ut.c.div(CE()),
                UE = (function(n) {
                    function e() {
                        return (
                            Object(er.a)(this, e),
                            Object(rr.a)(
                                this,
                                Object(ar.a)(e).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(cr.a)(e, n),
                        Object(tr.a)(e, [
                            {
                                key: 'render',
                                value: function() {
                                    return this.props.isLoading
                                        ? c.a.createElement(lo, null)
                                        : c.a.createElement(
                                              TE,
                                              null,
                                              c.a.createElement(_E, null),
                                              c.a.createElement(
                                                  m.a,
                                                  {
                                                      history: this.props
                                                          .history
                                                  },
                                                  c.a.createElement(
                                                      ur,
                                                      null,
                                                      c.a.createElement(
                                                          Xu.a,
                                                          null
                                                      ),
                                                      c.a.createElement(or.b, {
                                                          component: vE
                                                      }),
                                                      c.a.createElement(
                                                          or.d,
                                                          null,
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path: '/',
                                                                  exact: !0,
                                                                  component: ws
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path: '/auth',
                                                                  component: gl
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path: [
                                                                      '/pet-supplements/:pet/:category',
                                                                      '/pet-supplements/:pet'
                                                                  ],
                                                                  exact: !0,
                                                                  component: lm
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path:
                                                                      '/products/:product',
                                                                  exact: !0,
                                                                  component: Qp
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  exact: !0,
                                                                  path: '/cart',
                                                                  component: Zd
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      '/checkout',
                                                                  component: bf
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              Tr,
                                                              {
                                                                  path:
                                                                      '/account',
                                                                  component: yf
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              Tr,
                                                              {
                                                                  path:
                                                                      '/admin',
                                                                  component: Tb
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path:
                                                                      '/about-us',
                                                                  exact: !0,
                                                                  component: function() {
                                                                      return c.a.createElement(
                                                                          RE,
                                                                          null,
                                                                          'About Us'
                                                                      );
                                                                  }
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path:
                                                                      '/contact-us',
                                                                  exact: !0,
                                                                  component: function() {
                                                                      return c.a.createElement(
                                                                          RE,
                                                                          null,
                                                                          'Contact'
                                                                      );
                                                                  }
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              {
                                                                  path: '/404',
                                                                  component: bm
                                                              }
                                                          ),
                                                          c.a.createElement(
                                                              or.b,
                                                              { component: bm }
                                                          )
                                                      ),
                                                      c.a.createElement(
                                                          yE,
                                                          null
                                                      )
                                                  )
                                              )
                                          );
                                }
                            }
                        ]),
                        e
                    );
                })(a.Component),
                DE = Object(d.c)(function(n) {
                    return { isLoading: hn(n) };
                })(UE);
            t.d(e, 'history', function() {
                return IE;
            });
            var AE,
                IE = Object(u.a)(),
                PE = Object(s.e)(
                    ((AE = IE),
                    Object(s.c)({
                        productsPage: G,
                        productPage: Yn,
                        cartPage: re,
                        appConfig: zu,
                        checkoutPage: Si,
                        accountPage: Fi,
                        adminPage: Yu,
                        loading: gn,
                        error: Wu,
                        form: f.a,
                        router: Object(m.b)(AE)
                    })),
                    Object(s.d)(
                        Object(s.a)(Object(l.a)(IE), p.a),
                        window.__REDUX_DEVTOOLS_EXTENSION__ &&
                            window.__REDUX_DEVTOOLS_EXTENSION__()
                    )
                );
            PE.dispatch(Ri()),
                PE.dispatch(qu()),
                i.a.render(
                    c.a.createElement(
                        d.a,
                        { store: PE },
                        c.a.createElement(DE, { history: IE })
                    ),
                    document.getElementById('root')
                );
        }
    },
    [[420, 1, 2]]
]);
//# sourceMappingURL=main.10ec8a41.chunk.js.map
