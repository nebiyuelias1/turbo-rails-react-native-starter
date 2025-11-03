# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#

# Create or find tags
tag_names = %w[አማርኛ ፍቅር ታሪክ ባህል የኢትዮጵያ_ልቦና]
tags = tag_names.index_with { |name| Tag.find_or_create_by!(name: name) }

# Array of Ethiopian books (currently one)
books_data = [
  {
    title: "ፍቅር እስከ መቃብር",
    author: "ሐዲስ አለማየሁ",
    description: <<~DESC.strip,
      "ፍቅር እስከ መቃብር" በኢትዮጵያ ሥነ ልቦና ውስጥ ከፍተኛ ዋጋ ያለው መፅሀፍ ነው። 
      የአንድ ወጣት ወንድና የአንዲት ወጣት ሴት ፍቅርን በኢትዮጵያዊ ህይወትና ባህላዊ ተነሳስተኝነት ይገልጻል።
      የፍቅር ታሪክ በኢትዮጵያ ባህላዊ እና ማኅበራዊ አካባቢ ውስጥ የተደረገ ትንታኔ ነው።
    DESC
    published_at: Date.new(1968, 1, 1),
    language: "am",
    publisher: "Addis Ababa University Press",
    isbn: "9789994400010",
    cover_image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fikir_Esike_Mekabir.jpg",
    average_rating: 4.9,
    reviews_count: 0,
    tag_names: %w[አማርኛ ፍቅር ታሪክ ባህል]
  }
]

# Create books and associate tags
books_data.each do |data|
  tag_list = data.delete(:tag_names)
  book = Book.find_or_create_by!(title: data[:title]) do |b|
    b.assign_attributes(data)
  end
  book.tags = tag_list.map { |name| tags[name] }
  puts "✅ Created book: #{book.title} (Tags: #{tag_list.join(', ')})"
end
