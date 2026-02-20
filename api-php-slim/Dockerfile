FROM composer:2 as deps
WORKDIR /app
COPY composer.json ./
RUN composer install --no-dev --no-interaction --prefer-dist

FROM php:8.2-cli
WORKDIR /app
COPY --from=deps /app/vendor ./vendor
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
