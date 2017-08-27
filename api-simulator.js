/*
 * api-simulator
 *   A server system that acts as a simulator for testing purposes 
 *   that communicates with clients such as smartphones using JSON API
 * Copyright (C) 2017  yoshidah
 * 
 * This file is part of api-simulator.
 * 
 * api-simulator is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 * 
 * api-simulator is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with api-simulator.  If not, see <http://www.gnu.org/licenses/>.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api.json', function(req, res) {
  console.log('request from a client:');
  console.log(req.body);
  console.log('response to a client:');
  const response = {'your request is ': req.body};
  console.log(response);
  res.json(response);
});

app.listen(80);
console.log('Now, api-simulator is running...');
