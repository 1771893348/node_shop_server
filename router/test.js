const express = require("express");
const router = express();
const config = require("./config");
const base_url = "http://" + config.IP + ":" + config.PORT + "/images/banner/";

router.get("/",(req,res)=>{
    var id = req.query.id;
    console.log("wgw-----",id);
    var data = {
        "code":"0",
        "message":"success",
        "data":{
            "slides":[
                {
                    "image":base_url+"1.jpeg",
                    "goodsId":"001"
                },
                {
                    "image":base_url+"2.jpeg",
                    "goodsId":"002"
                },
                {
                    "image":base_url+"3.jpeg",
                    "goodsId":"003"
                },
            ]
        }
    };
    res.send(data);
});
module.exports = router;