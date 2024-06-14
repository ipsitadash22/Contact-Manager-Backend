//use a middleware other than try catch block in async function to handle our exceptions using async handler route
//it is going to pass them to express async handler
const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModels");
//@desc Get all contacts
//@route GET /api/contacts
//@access private(Access to the api)
//contollers contain logic for request and rwesponse and it will be connected to db
//as we will be working with mongodb and mongoose whenever we interact with mongodb we will be getting a  so use async await
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
  });

//use a middleware other than try catch block in async function

//whenever exception occurs it passes to async handler



//@desc create contacts
//@route POST /api/contacts
//@access private(Access to the api)


const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const{name,email,phone} =req.body;
    if(!name||!email||!phone){
        res.status(400);
    throw new Error("All fieds are mandatory ")
    }
    const contact=await Contact.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        user_id: req.user.id,
    });
    res.status(201).json(contact);
});
//@desc get a contact
//@route GET /api/contacts/:id
//@access private(Access to the api)
const getContact=asyncHandler(async(req,res)=>{
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    res.status(200).json(contact);
});
//@desc update contacts
//@route POST /api/contacts/:id
//@access public(Access to the api)

const updateContact=asyncHandler(async(req,res)=>{
    //fetch the contact first
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedContact);
});

//@desc delete contacts
//@route DELETE /api/contacts
//@access private(Access to the api)

const deleteContact=asyncHandler(async(req,res)=>{
    //check if the contact is present or not
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};




