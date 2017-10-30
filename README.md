WEBTEC website Jan Bucher
=========================

# Used frameworks
- Skeleton CSS framework (http://getskeleton.com/)
- JQuery 2.1.1
- js-cookie (https://github.com/js-cookie/js-cookie)
- reimg (https://github.com/gillyb/reimg)
- sweetalert (https://sweetalert.js.org/)

# Deployment
Just serve all files of the webroot folder with a standard webserver.

Configuration for apache2: [apache2-webtec.conf](apache2-webtec.conf)

Generate Letsencrypt certificate:
```
    wget https://dl.eff.org/certbot-auto
    sudo ./certbot-auto certonly --webroot -w /var/www/html/webtec/webtec/webroot/ -d webtec.jan-bucher.ch --no-bootstrap
```
