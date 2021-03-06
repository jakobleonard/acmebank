/**
Copyright 2018 IBM
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
'use strict';

const express = require('express');

const documents = require('../../lib/v1/documents');

const router = express.Router();

router.get('/:documentId', getDocument);
router.post('/:documentId/sign', signDocument);

// eslint-disable-next-line no-unused-vars
async function getDocument(req, res, next) {
  let documentId = req.params.documentId;
  try {
    let document = await documents.getDocument(documentId);
    res.send(document);
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
}

// eslint-disable-next-line no-unused-vars
async function signDocument(req, res, next) {
  let documentId = req.params.documentId;
  try {
    let document = await documents.signDocument(documentId);
    res.send({
      document,
    });
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
}

module.exports = router;
