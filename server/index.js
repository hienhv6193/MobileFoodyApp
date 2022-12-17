var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.listen(9001, function () {
    console.log('server is running...')
})
const { db } = require("./config/admin")

//Api
app.get("/api/category", async (req, res) => {
    // res.status(201).json(items)
    const courseRef = db.collection('Danh mục');
    try {
        courseRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data()
            }))
            console.log(items);
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
})
app.get("/api/:keyword", async (req, res) => {
    const courseRef = db.collection('Danh mục');
    try {
        courseRef.get().then((snapshot) => {
            const data = snapshot.docs.map((value) => (
                {
                    id: value.id,
                    ...value.data(),
                }
            ));
            let key = req.params.keyword
            const newData = data.filter((item) => {
                const itemData = item.TenDM
                    ? item.TenDM.toLowerCase()
                    : ''.toLowerCase();
                const textData = key.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            res.status(200).json(newData);
        })
    } catch (err) {
        res.status(500).json(err);
    }
})
app.get("/countCate", async (req, res) => {
    const courseRef = db.collection('Danh mục');
    courseRef.get().then((snapshot) => {
        const count = snapshot.size
        res.status(201).json(count)
    })
})
app.post("/cate", async (req, res) => {
    const { HinhDM, MaDM, TenDM } = req.body;

    try {
        const body = db.collection('Danh mục').doc();

        const item = {
            HinhDM: HinhDM,
            MaDM: MaDM,
            TenDM: TenDM
        }
        console.log('add', item)

        body.set(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }

});
app.put("/updateCate/:docId", async (req, res) => {
    const { HinhDM, MaDM, TenDM } = req.body;
    try {
        const docId = req.params.docId
        const body = db.collection('Danh mục').doc(docId)

        const item = {
            HinhDM: HinhDM,
            MaDM: MaDM,
            TenDM: TenDM
        }
        console.log('update', item)

        body.update(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.delete("/delCate/:docId", async (req, res) => {
    try {
        const docId = req.params.docId
        db.collection('Danh mục').doc(docId).delete()
        res.status(200).send({
            message: 'successful',

        })
    } catch (error) {
        res.status(500).json({ message: error });
    }

});

// food api
app.get("/foods", async (req, res) => {
    // res.status(201).json(items)
    const courseRef = db.collection('Món ăn');
    try {
        courseRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data()
            }))
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
})
app.get("/countFood", async (req, res) => {
    const courseRef = db.collection('Món ăn');
    courseRef.get().then((snapshot) => {
        const count = snapshot.size
        res.status(201).json(count)
    })
})
app.get("/foods/:keyword", async (req, res) => {
    const courseRef = db.collection('Món ăn');
    try {
        courseRef.get().then((snapshot) => {
            const data = snapshot.docs.map((value) => (
                {
                    id: value.id,
                    ...value.data(),
                }
            ));
            let key = req.params.keyword
            const newData = data.filter((item) => {
                const itemData = item.TenMA
                    ? item.TenMA.toLowerCase()
                    : ''.toLowerCase();
                const textData = key.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            res.status(200).json(newData);
        })
    } catch (err) {
        res.status(500).json(err);
    }
})
app.post("/food", async (req, res) => {
    const { HinhMA, MaDM, Gia, TenMA, MoTa } = req.body;

    try {
        const body = db.collection('Món ăn').doc();

        const item = {
            HinhMA: HinhMA,
            MaDM: MaDM,
            TenMA: TenMA,
            Gia: Gia,
            MoTa: MoTa,
        }
        console.log('add', item)

        body.set(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.put("/updatefood/:docId", async (req, res) => {
    const { HinhMA, MaDM, Gia, TenMA, MoTa } = req.body;
    try {
        const docId = req.params.docId
        const body = db.collection('Món ăn').doc(docId)

        const item = {
            HinhMA: HinhMA,
            MaDM: MaDM,
            TenMA: TenMA,
            Gia: Gia,
            MoTa: MoTa,
        }
        console.log('update', item)

        body.update(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.delete("/deleteFood/:docId", async (req, res) => {
    try {
        const docId = req.params.docId
        db.collection('Món ăn').doc(docId).delete()
        res.status(200).send({
            message: 'successful',
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// discount
app.get("/Discount", async (req, res) => {
    const courseRef = db.collection('Giảm Giá');
    try {
        courseRef.get().then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data()
            }))
            res.status(201).json(items);
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.post("/Discount", async (req, res) => {
    const { HinhGG, TenGG, MucGG } = req.body;

    try {
        const body = db.collection('Giảm Giá').doc();

        const item = {
            HinhGG: HinhGG,
            TenGG: TenGG,
            MucGG: MucGG,
        }
        console.log('add', item)

        body.set(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.put("/updateDiscount/:docId", async (req, res) => {
    const { HinhGG, TenGG, MucGG } = req.body;
    try {
        const docId = req.params.docId
        const body = db.collection('Giảm Giá').doc(docId)

        const item = {
            HinhGG: HinhGG,
            TenGG: TenGG,
            MucGG: MucGG,
        }
        console.log('update', item)

        body.update(item);

        res.status(200).send({
            message: 'successful',
            data: item
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.delete("/deleteDiscount/:docId", async (req, res) => {
    try {
        const docId = req.params.docId
        db.collection('Giảm Giá').doc(docId).delete()
        res.status(200).send({
            message: 'successful',
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
});