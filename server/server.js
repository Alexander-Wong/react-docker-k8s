const express = require('express'),
      app = express(),
      port = 8080,
      redis = require("redis"),
      client = redis.createClient({ host:'redis', port:'6379' });

client.set("visits", 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
      });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    
})