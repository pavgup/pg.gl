# mask up site

For some context, this site was bootstrapped using some random [hackathon starter site](https://github.com/sahat/hackathon-starter/)

## Running
We use supervisor to manage the node process serving the app:

```supervisord -c supervisord.conf```

If you are wondering where the actual command is to run the application, see ```supervisord.conf```.

## Debt
 - There is still a ton of bloat from the original bootstrapping off of hackathon-starter. We can gut this as time permits.
