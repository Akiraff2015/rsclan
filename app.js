var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.set('view engine', 'pug');

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/:user', function(req, res) {
  var username = req.params.user
  url = 'http://services.runescape.com/m=hiscore/index_lite.ws?player=' + username;
  detailsObj = {};
  tempDetailsArr = [];

  request(url, function(error, response, html) {
    if (!error) {
      tempDetailsArr = html.split('\n');

      detailsObj = {
        overall: {
          rank: tempDetailsArr[0].split(',')[0],
          level: tempDetailsArr[0].split(',')[1],
          totalExperience: tempDetailsArr[0].split(',')[2]
        },

        attack: {
          rank: tempDetailsArr[1].split(',')[0],
          level: tempDetailsArr[1].split(',')[1],
          totalExperience: tempDetailsArr[1].split(',')[2]
        },

        defence: {
          rank: tempDetailsArr[2].split(',')[0],
          level: tempDetailsArr[2].split(',')[1],
          totalExperience: tempDetailsArr[2].split(',')[2]
        },

        strength: {
          rank: tempDetailsArr[3].split(',')[0],
          level: tempDetailsArr[3].split(',')[1],
          totalExperience: tempDetailsArr[3].split(',')[2]
        },

        constitution: {
          rank: tempDetailsArr[4].split(',')[0],
          level: tempDetailsArr[4].split(',')[1],
          totalExperience: tempDetailsArr[4].split(',')[2]
        },

        ranged: {
          rank: tempDetailsArr[5].split(',')[0],
          level: tempDetailsArr[5].split(',')[1],
          totalExperience: tempDetailsArr[5].split(',')[2]
        },

        prayer: {
          rank: tempDetailsArr[6].split(',')[0],
          level: tempDetailsArr[6].split(',')[1],
          totalExperience: tempDetailsArr[6].split(',')[2]
        },

        magic: {
          rank: tempDetailsArr[7].split(',')[0],
          level: tempDetailsArr[7].split(',')[1],
          totalExperience: tempDetailsArr[7].split(',')[2]
        },

        cooking: {
          rank: tempDetailsArr[8].split(',')[0],
          level: tempDetailsArr[8].split(',')[1],
          totalExperience: tempDetailsArr[8].split(',')[2]
        },

        woodcutting: {
          rank: tempDetailsArr[9].split(',')[0],
          level: tempDetailsArr[9].split(',')[1],
          totalExperience: tempDetailsArr[9].split(',')[2]
        },

        fletching: {
          rank: tempDetailsArr[10].split(',')[0],
          level: tempDetailsArr[10].split(',')[1],
          totalExperience: tempDetailsArr[10].split(',')[2]
        },

        fishing: {
          rank: tempDetailsArr[11].split(',')[0],
          level: tempDetailsArr[11].split(',')[1],
          totalExperience: tempDetailsArr[11].split(',')[2]
        },

        firemaking: {
          rank: tempDetailsArr[12].split(',')[0],
          level: tempDetailsArr[12].split(',')[1],
          totalExperience: tempDetailsArr[12].split(',')[2]
        },

        crafting: {
          rank: tempDetailsArr[13].split(',')[0],
          level: tempDetailsArr[13].split(',')[1],
          totalExperience: tempDetailsArr[13].split(',')[2]
        },

        smithing: {
          rank: tempDetailsArr[14].split(',')[0],
          level: tempDetailsArr[14].split(',')[1],
          totalExperience: tempDetailsArr[14].split(',')[2]
        },

        mining: {
          rank: tempDetailsArr[15].split(',')[0],
          level: tempDetailsArr[15].split(',')[1],
          totalExperience: tempDetailsArr[15].split(',')[2]
        },

        herblore: {
          rank: tempDetailsArr[16].split(',')[0],
          level: tempDetailsArr[16].split(',')[1],
          totalExperience: tempDetailsArr[16].split(',')[2]
        },

        agility: {
          rank: tempDetailsArr[17].split(',')[0],
          level: tempDetailsArr[17].split(',')[1],
          totalExperience: tempDetailsArr[17].split(',')[2]
        },

        thieving: {
          rank: tempDetailsArr[18].split(',')[0],
          level: tempDetailsArr[18].split(',')[1],
          totalExperience: tempDetailsArr[18].split(',')[2]
        },

        slayer: {
          rank: tempDetailsArr[19].split(',')[0],
          level: tempDetailsArr[19].split(',')[1],
          totalExperience: tempDetailsArr[19].split(',')[2]
        },

        farming: {
          rank: tempDetailsArr[20].split(',')[0],
          level: tempDetailsArr[20].split(',')[1],
          totalExperience: tempDetailsArr[20].split(',')[2]
        },

        runecrafting: {
          rank: tempDetailsArr[21].split(',')[0],
          level: tempDetailsArr[21].split(',')[1],
          totalExperience: tempDetailsArr[21].split(',')[2]
        },

        hunter: {
          rank: tempDetailsArr[22].split(',')[0],
          level: tempDetailsArr[22].split(',')[1],
          totalExperience: tempDetailsArr[22].split(',')[2]
        },

        construction: {
          rank: tempDetailsArr[23].split(',')[0],
          level: tempDetailsArr[23].split(',')[1],
          totalExperience: tempDetailsArr[23].split(',')[2]
        },

        summoning: {
          rank: tempDetailsArr[24].split(',')[0],
          level: tempDetailsArr[24].split(',')[1],
          totalExperience: tempDetailsArr[24].split(',')[2]
        },

        dungeoneering: {
          rank: tempDetailsArr[25].split(',')[0],
          level: tempDetailsArr[25].split(',')[1],
          totalExperience: tempDetailsArr[25].split(',')[2]
        },

        divination: {
          rank: tempDetailsArr[26].split(',')[0],
          level: tempDetailsArr[26].split(',')[1],
          totalExperience: tempDetailsArr[26].split(',')[2]
        },

        invention: {
          rank: tempDetailsArr[27].split(',')[0],
          level: tempDetailsArr[27].split(',')[1],
          totalExperience: tempDetailsArr[27].split(',')[2]
        },

        user: username,
      };
      res.render('index', detailsObj);
    }
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;