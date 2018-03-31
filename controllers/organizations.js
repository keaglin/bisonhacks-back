const express       = require('express')
const parser        = require('body-parser')
const router        = express.Router()


router.get('some url' , (req, res) => {
    Organization.find({})
        .then(oraganization => {
            res.json({oraganization: oraganization})
        })
        .catch(err => {
            console.log(err)
        })
})
