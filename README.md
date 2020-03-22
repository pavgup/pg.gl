# mask up site

For some context, this site was bootstrapped using some random [hackathon starter site](https://github.com/sahat/hackathon-starter/)

## Running
We use supervisor to manage the node process serving the app:

```supervisord -c supervisord.conf```

If you are wondering where the actual command is to run the application, see ```supervisord.conf```.

## Developing

TODO: flesh this out properly

What I can say is this, I've had some mild success running the following commands:
1. Install deps using ```npm install```. Sometimes weird stuff happens and you might need to blow away the ```node_modules``` away
2. Run using ```node app.js``` (I don't have experience with node but this server seems to hotswap stuff out)
3. Visit localhost


## Debt
 - There is still a ton of bloat from the original bootstrapping off of hackathon-starter. We can gut this as time permits.
