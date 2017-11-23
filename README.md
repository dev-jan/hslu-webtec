WEBTEC website Jan Bucher
=========================

Online-Version: https://webtec.jan-bucher.ch/ (deployed in Amazon EC2 cloud)

This website is a small demo page for the HSLU module WEBTEC. The main goal of this module is to learn how to make web application. The focus is primary on the client side (HTML5, CSS and JS). Also techniques like responsive design and web accessibility is important.

# Used frameworks
- Skeleton CSS framework (http://getskeleton.com/)
- JQuery 2.1.1
- Font Awesome 4.7.0 (http://fontawesome.io/)
- js-cookie (https://github.com/js-cookie/js-cookie)
- reimg (https://github.com/gillyb/reimg)
- sweetalert (https://sweetalert.js.org/)

# Deployment
Just serve all files of the webroot folder with a standard webserver.

Democonfiguration for apache2: [apache2-webtec.conf](apache2-webtec.conf)

Generate Letsencrypt certificate:
```
    wget https://dl.eff.org/certbot-auto
    sudo ./certbot-auto certonly --webroot -w /var/www/html/webtec/webtec/webroot/ -d webtec.jan-bucher.ch --no-bootstrap
```
