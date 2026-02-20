FROM ruby:3.2-alpine
WORKDIR /app
COPY Gemfile ./
RUN bundle install
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["ruby", "app.rb"]
