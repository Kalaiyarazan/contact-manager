const express = require('express');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const contactRouter = express.Router();

//@Route        Get api/contacts
//@desc         Get contacts from db
//@access       Private

contactRouter.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id });
    res.json(contact);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@Route        Post api/contacts
//@desc         Add a contact
//@access       Private

contactRouter.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@Route        PUT api/contacts:id
//@desc         Update a contact
//@access       Private

contactRouter.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactUpdate = {};

  if (name) contactUpdate.name = name;
  if (email) contactUpdate.email = email;
  if (phone) contactUpdate.phone = phone;
  if (type) contactUpdate.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }

    //Check Ownership of Contact

    if (req.user.id !== contact.user.toString()) {
      return res.status(401).json({ msg: 'User Not Authorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactUpdate
      },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@Route        DELETE api/contacts:id
//@desc         Delete a contact
//@access       Private

contactRouter.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Contact Deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = contactRouter;
