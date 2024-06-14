//as we will be working with mongodb and mongoose whenever we interact with mongodb we will be getting a  so use asyn await

const express=require("express");
const router=express.Router();
const {getContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact}=require("../controllers/contactControllers");

const validateToken = require("../middlewares/validateTokenHandler");
router.use(validateToken);

router.route("/").get(getContacts);

router.route("/").post(createContact);
router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports=router;
