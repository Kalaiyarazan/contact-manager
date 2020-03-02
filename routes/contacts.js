const express = require('express');

const contactRouter = express.Router();

//@Route        Get api/contacts
//@desc         Get contacts from db
//@access       Private

contactRouter.get('/', (req, res) => {
  res.send('Get contacts from db');
});

//@Route        Post api/contacts
//@desc         Add a contact
//@access       Private

contactRouter.post('/', (req, res) => {
  res.send('Add a contact');
});

//@Route        PUT api/contacts:id
//@desc         Update a contact
//@access       Private

contactRouter.put('/:id', (req, res) => {
  res.send('Update a contact');
});

//@Route        DELETE api/contacts:id
//@desc         Delete a contact
//@access       Private

contactRouter.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = contactRouter;
