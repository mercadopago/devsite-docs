require 'net/http'
require 'yaml'
require 'json'
require 'ruby-progressbar'

module Translator
  
  def self.get_yaml_files
    Dir.glob("./**/resource.yaml") 
  end

  def self.do_translation
    self.get_yaml_files.each do |file|
      resource = YAML.load_file(file)
      @@progressbar.increment
      resource["properties"].each_with_index do |property, index|
        property.each do |key, values|
          spanish = values["description"]["es"]
          portuguese = self.yandex_translate(spanish, "es-pt")
          resource["properties"][index][key]["description"]["pt"] = portuguese
        end
      end
      YAML.dump(resource, File.open(file, 'w+'))
    end
  end

  def self.t(spanish)
    return spanish
  end

  def self.yandex_translate(text, lang) 
    service_uri = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
    key = 'trnsl.1.1.20160713T211117Z.250bd295ce2d1043.e4530217cbbab3ee462d241ecb1ae5887ac505fd'
    uri = URI.escape("#{service_uri}&key=#{key}&lang=#{lang}&text=#{text}") 
    response = Net::HTTP.get(URI.parse(uri))
    translation = JSON.parse(response)
    
    return translation["text"].join 
  end

  def self.run
    
    @@progressbar = ProgressBar.create(
      total: self.get_yaml_files.count, 
      :format => "%a %b\u{15E7}%i %p%% %t",
      :progress_mark  => ' ',
      :remainder_mark => "\u{FF65}")

    self.do_translation
  end


  #origin_files.map { |f| YAML.load_file(f) }
end

Translator.run