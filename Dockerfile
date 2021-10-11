FROM php:7.4-apache

LABEL maintainer="Cole Tapiaqaguilar"

RUN docker-php-ext-install pdo_mysql

#Set the working directory in the image
WORKDIR /srv/app

#Copy our app folder to the image
COPY app /srv/app

# PHP configuration (Set our php.ini in replace of the local php.ini)
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# Apache configuration (Copy our vhost.conf and compy is over where the server is looking for the conf file)
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf