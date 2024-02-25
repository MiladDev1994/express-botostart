const express = require("express");
const router = express.Router();

const route_1 = require("./route_1");
const route_2 = require("./route_2");
const route_3 = require("./route_3");
const route_4 = require("./route_4");

router.use("/route_1", route_1)
router.use("/route_2", route_2)
router.use("/route_3", route_3)
router.use("/route_4", route_4)

// ما میتونیم برای تمام مسیر ها کنترلر بنویسیم
// مثلا get بره به فلان کنترلر و post هم .....

// کنترلر ها میتونن به دو صورت فانکشنال یا oop باشن
// در oop باید از کلاس ها استفاده کنیم که بسار کار راحتیه و فعلا بهش نمیپردازم
// فانکشنال هم که بلدیم

module.exports = router