const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '1000kb'}));
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const filePath = path.join(__dirname, 'products.json');
const filePathBanner = path.join(__dirname, 'banner.json');

app.get('/getProducts', (req, res) => {
    const products = JSON.parse(fs.readFileSync(filePath)).clothes;
    res.json(products);
  });
  
  app.get('/getProducts/:sku', (req, res) => {
    const { sku } = req.params;
    const products = JSON.parse(fs.readFileSync(filePath)).clothes;
    const product = products.find((p) => p.sku === sku);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });
  
app.delete('/deleteProduct/:id', (req, res) => {
    // Read the existing data from the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const products = JSON.parse(data);

      const index = products.clothes.findIndex(product => product.sku === req.params.id);

      if (index === -1) {
        return res.status(404).send('Product not found');
      }

      products.clothes.splice(index, 1);

      fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }

        res.send('Product deleted successfully');
      });
    });
  }); 

app.post('/addProduct', (req, res) => {
  const { name, type, price, discount, color, quantity, sku, image, clothe_type } = req.body;
  const products = JSON.parse(fs.readFileSync(filePath)).clothes;
  const newProducts = {
    name,
    type,
    price,
    discount,
    color,
    quantity,
    sku,
    image,
    clothe_type
  };
  products.push(newProducts);
  fs.writeFileSync(filePath, JSON.stringify({ clothes: products }));
  res.redirect('/getProducts');
});

// Update banner endpoints
app.put('/updateBanner', (req, res) => {
  const { alter, image  } = req.body;
  const data = JSON.parse(fs.readFileSync(filePathBanner)); // Read the JSON file
  data.banner = {alter, image }; // Update the banner object
  fs.writeFileSync(filePathBanner, JSON.stringify(data, null, 2)); // Write the updated data back to the JSON file
  res.status(200).json({ message: 'Banner updated successfully' });
});

app.get('/getBanner', (req, res) => {
  const banner = JSON.parse(fs.readFileSync(filePathBanner)).banner;
  res.json(banner);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
