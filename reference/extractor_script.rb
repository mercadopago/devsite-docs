require 'net/http'
require 'json'
require 'yaml'
require 'pp'
require 'cgi'
require 'ruby-progressbar'
require 'fileutils'

module Extractor

  # APIs to explore 
  APIS = { 
    invoices: '/v1/invoices/'
  }

  @@get_attributes    = Array.new
  @@post_attributes   = Array.new
  @@put_attributes    = Array.new 

  @@progressbar = nil

  def self.get_attributes
    @@get_attributes
  end

  def self.post_attributes
    @@post_attributes
  end

  def self.put_attributes
    @@put_attributes
  end

  # Make the request 

  def self.parse_recursive(json, is_master_level = true)
    json.map do |k, v|

      if is_master_level 
        @@progressbar.increment
      end

      if v["mode"]
        if v["mode"].include?("readable")
          get_attributes << k
        end
        if v["mode"].include?("writable") && v["mode"].include?("readable")
          put_attributes << k 
        end
        if v["mode"].include?("writable")
          post_attributes << k
        end 
      end
      result = { "#{k}" => Hash.new }
      result[k]["type"] = v["data_type"]
      result[k]["description"] = { 
        "en" => v["description"],
        "es" => self.yandex_translate(CGI.escape(v["description"]), "en-es"),
        "pt" => self.yandex_translate(CGI.escape(v["description"]), "en-pt")
      } 
      result[k]["properties"] = self.parse_recursive(v["attributes"], false) if v["attributes"]
      result[k]["enum"] = v["values"].map{
        |x| { "#{x.first[0]}" => {"en" => "#{x.first[1]}"} }
      } if v["values"]
      result
    end
  end

  def self.parse_errors(json)
    json.map do |k, v|
      { "#{k}" => v.map { |x| self.error_desc(x["code"], x["description"]) } } 
    end
  end

  def self.error_desc(code, description)
    {
      "#{code}" => {
        "description" => {
          "en" => description,
          "es" => self.yandex_translate(CGI.escape(description), "en-es"),
          "pt" => self.yandex_translate(CGI.escape(description), "en-pt")
        }
      }
    }
  end

  def self.google_transalte(text, to)
    translate = Google::Cloud::Translate.new
    translation = translate.translate text, to: to
    return translation.text
  end

  def self.yandex_translate(text, lang) 
    service_uri = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
    key = 'trnsl.1.1.20160713T211117Z.250bd295ce2d1043.e4530217cbbab3ee462d241ecb1ae5887ac505fd' 
    response = Net::HTTP.get(URI("#{service_uri}&key=#{key}&lang=#{lang}&text=#{text}")) 
    translation = JSON.parse(response)
    @@progressbar.log "tramslated #{translation["text"]}"
    return translation["text"].join 
  end

  # Do request
  def self.run 
    json = nil
    APIS.each do |name, api|
      
      FileUtils.mkdir_p(name.to_s) 
      FileUtils.mkdir_p("#{name.to_s}/data_structures")
      
      uri = URI("https://api.mercadopago.com/#{api}")
      response, json = "", ""
      Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
        request = Net::HTTP::Options.new(uri)
        response = http.request request
      end
      json = JSON.parse(response.body)

      @@progressbar = ProgressBar.create(
        total: json["attributes"].count, 
        :format => "%a %b\u{15E7}%i %p%% %t",
        :progress_mark  => ' ',
        :remainder_mark => "\u{FF65}")

      chunk = {
        "type" => "object",
        "properties" => self.parse_recursive(json["attributes"]) 
      }
 

      resource_file = File.open("#{name}/data_structures/#{name}.raml", 'w')
      on_get_file = File.open("#{name}/data_structures/on_get.yaml", 'w')
      on_post_file = File.open("#{name}/data_structures/on_post.yaml", 'w')
      on_put_file = File.open("#{name}/data_structures/on_put.yaml", 'w')
      resource_file.write(YAML.dump(chunk))

      on_get_file.write(YAML.dump({
        "resource" => "#{name}.raml",
        "use" => Extractor.get_attributes,
        "errors" => self.parse_errors(json["errors"]) 
      }))

      on_post_file.write(YAML.dump({
        "resource" => "#{name}.raml",
        "use" => Extractor.post_attributes,
        "errors" => self.parse_errors(json["errors"]) 
      }))

      on_put_file.write(YAML.dump({
        "resource" => "#{name}.raml",
        "use" => Extractor.put_attributes,
        "errors" => self.parse_errors(json["errors"]) 
      }))
    end
 
  end 
end

Extractor.run