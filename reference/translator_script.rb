require 'net/http'
require 'yaml'
require 'json'
require 'ruby-progressbar'

module Translator
  
  def self.get_yaml_files
    Dir.glob("./**/resource.yaml")
  end

  def self.method_files
  end

  def self.do_translation
    self.get_yaml_files.each do |file|
      resource = YAML.load_file(file)
      @@progressbar.increment
      resource = self.translate(resource) 
      YAML.dump(resource, File.open(file, 'w+'))
    end
  end

  def self.translate(resource)
    resource.each do |property, values| 
      if property == 'description'
        es = values['es'] 
        pt = self.yandex_translate(es, "es-pt")
        resource[property]['pt'] = pt
      end 
      if property == 'properties'
        values.each_with_index do |chunk, index|
          chunk.each do |k, v|
            resource['properties'][index][k] = self.translate(v)
          end
        end
      end
    end
    return resource
  end 

  def self.yandex_translate(text, lang) 
    service_uri = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
    key = 'trnsl.1.1.20160713T211117Z.250bd295ce2d1043.e4530217cbbab3ee462d241ecb1ae5887ac505fd'
    uri = URI.escape("#{service_uri}&key=#{key}&lang=#{lang}&text=#{text}") 
    response = Net::HTTP.get(URI.parse(uri))
    translation = JSON.parse(response)
    @@progressbar.log("#{text} => #{translation['text']}")
    return translation["text"].join rescue ''
  end

  def self.run
    
    @@progressbar = ProgressBar.create(
      total: self.get_yaml_files.count, 
      :format => "%a %b\u{15E7}%i %p%% %t",
      :progress_mark  => ' ',
      :remainder_mark => "\u{FF65}")

    self.do_translation
  end

end

Translator.run