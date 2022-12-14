class ImageUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "./"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add an allowlist of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_allowlist
    %w(jpg jpeg png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

  #上限変更
  process :resize_to_limit => [700, 700]

  #JPGで保存
  process :convert => 'jpg'
  #画像サイズを変更
  process resize_to_fill: [100, 100, "center"]

  #サムネイルを生成
  #version :thumb do
  #  process :resize_to_fill => [150, 150, "center"]
  #end

  #version :thumb100 do  #アイコン用
  #  process resize_to_fill: [100, 100, "center"]
  #  end 

  #ファイル名を変更し拡張子を同じにする
  def filename
    super.chomp(File.extname(super)) + '.jpg' 
  end

  #日付で保存
  def filename
    if original_filename.present?
      time = Time.now
      name = "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/" + time.strftime('%Y%m%d%H%M%S') + '.jpg'
      name.downcase
    end
  end

  #デフォルト画像の設定
  def default_url
    "default.png" #デフォルト画像に設定したい画像名を記入
  end
end
