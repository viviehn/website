
GH_PAGES_DIR = "compiled_site"
ORIGIN_REPO = "https://github.com/viviehn/website.git"

desc "Build Jekyll site and copy files"
task :build_gh_pages do
  # system "git merge master"
  system "jekyll build"
  if not File.exists? "../#{GH_PAGES_DIR}/"
    system "mkdir ../#{GH_PAGES_DIR}/"
    system "cd ../#{GH_PAGES_DIR}/ && git init . && git remote add origin #{ORIGIN_REPO}"
  end
  last_commit_msg = `git log -1 --pretty=%B`
  system "rm -r ../#{GH_PAGES_DIR}/*" unless Dir['../#{GH_PAGES_DIR}/*'].empty?
  system "cp -r _site/* ../#{GH_PAGES_DIR}/"
  system "cd ../#{GH_PAGES_DIR}/ && git add -A && git commit -m '#{last_commit_msg}' && git push --force origin master:gh-pages"
end