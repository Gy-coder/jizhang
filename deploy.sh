rm -rf build &&
npm run build &&
cd build &&
git init &&
git add . &&
git commit -m 'page' &&
git remote add origin git@github.com:Gy-coder/banana-bookkeeping-website.git && 
git push -f origin master
