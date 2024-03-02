const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { v4: uuidv4 } = require('uuid'); // unique ID

router.post('/create', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const file = req.file;
    const imageId = uuidv4();



    try {
        // Upload the image to S3 with the unique integer ID as the key
        const uploadResult = await s3.upload({
            Bucket: 'project-jzaxy',
            Key: imageId, // Use the integer ID as the key
            Body: file.buffer
        }).promise();

        // Only store the imageId in MongoDB, not the image URL
        const listingsData = { name: title, desc: description, imageId: imageId};
        const newListings = new schemas.Listings(listingsData);
        const savedListings = await newListings.save();
        if (savedListings) {
            res.status(201).json(savedListings);
        }
        else {
            res.send('Message not sent. Error occurred.');
        }

        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router