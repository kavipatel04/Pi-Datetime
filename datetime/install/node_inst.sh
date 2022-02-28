sudo apt-get purge --auto-remove nodejs;
sudo apt-get autoremove;
sudo apt-get update;
sudo apt-get upgrade;
wget https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-armv7l.tar.xz;
tar -xzf node-v16.14.0-linux-armv7l.tar.xz;
cd node-v11.15.0-linux-armv6l;
sudo cp -R * /usr/local/;
node -v;
npm -v;

