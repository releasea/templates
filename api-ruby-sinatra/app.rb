require 'sinatra'
require 'json'

set :bind, '0.0.0.0'
set :port, ENV.fetch('PORT', '8080').to_i

get '/' do
  content_type :json
  { status: 'ok' }.to_json
end

get '/healthz' do
  content_type :json
  { status: 'healthy' }.to_json
end
