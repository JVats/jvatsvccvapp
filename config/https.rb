require 'webrick'
require 'webrick/https'

cert_name = [
    %w[CN localhost],
]

server = WEBrick::HTTPServer.new(:Port => 8000,
                                 :SSLEnable => true,
                                 :SSLCertName => cert_name)