require "rubygems"
require "bundler/setup"
require "stringex"
require "colorator"

## -- config --##
site_dir        = "_app" #site source directory
posts_dir       = "_app/_posts"    # directory for blog files
new_post_ext    = "md"  # default new post file extension when using the new_post task
new_page_ext    = "md"  # default new page file extension when using the new_page task

# usage rake post
desc "Create a new post in #{posts_dir}"
task :post do
  puts "Title:" .blue
  title = $stdin.gets.strip
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if
    File.exist? "#{filename}"
    puts "file exists" .red
    exit
  else
    puts "Creating post:" .red
    touch "#{filename}"
  end
  puts "Creating Front Matter" .red
  puts "Tags comma separated:" .blue
  tags = $stdin.gets.strip
  puts "Post excerpt:" .blue
  excer = $stdin.gets.strip
  puts "Layout:"  .blue
  lay = $stdin.gets.strip
  puts "Done! posts created at #{filename}" .red
  File.open("#{filename}", 'w') do |posts|
    posts.puts "---"
    posts.puts "layout: #{lay}"
    posts.puts "title: #{title}"
    posts.puts "tags: #{tags}"
    posts.puts "excerpt: #{excer}"
    posts.puts "---"
  end
end


# usage rake page
desc "Create a new page in #{site_dir}"
task :page do
  puts "Title:" .blue
  title = $stdin.gets.strip
  filename = "#{site_dir}/#{title.to_url}.#{new_post_ext}"
  if
    File.exist? "#{filename}"
    puts "file exists" .red
    exit
  else
    puts "Creating page:" .red
    touch "#{filename}"
  end
  puts "Creating Front Matter" .red
  puts "Tags comma separated:" .blue
  tags = $stdin.gets.strip
  puts "Page excerpt:" .blue
  excer = $stdin.gets.strip
  puts "Layout:"  .blue
  lay = $stdin.gets.strip
  puts "Done! Page created at #{filename}" .red
  File.open("#{filename}", 'w') do |page|
    page.puts "---"
    page.puts "layout: #{lay}"
    page.puts "title: #{title}"
    page.puts "tags: #{tags}"
    page.puts "excerpt: #{excer}"
    page.puts "---"
  end
end
