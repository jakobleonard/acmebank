/**
Copyright 2018 IBM
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

const express = require('express');

const admin = require('../../lib/v1/admin');

const router = express.Router();

router.post('/resetDemo', resetDemo);
router.post('/addTransactions', addTransactions);
router.post('/triggerWarningNotification', triggerWarningNotification);
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => res.send({hello: 'world'}));

// eslint-disable-next-line no-unused-vars
async function resetDemo(req, res, next) {
  try {
    await admin.resetDemo();
    res.send({success: true});
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
}

// eslint-disable-next-line no-unused-vars
async function addTransactions(req, res, next) {
  try {
    await admin.createTransactionsForAccounts();
    res.send({success: true});
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
}

// eslint-disable-next-line no-unused-vars
async function triggerWarningNotification(req, res, next) {
  try {
    await admin.triggerWarningNotification();
    res.send({success: true});
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
}

module.exports = router;
