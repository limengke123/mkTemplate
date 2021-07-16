#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  npm version $VERSION --message "[release] $VERSION"
  npm run build

  # publish
  BRANCH=$(git symbolic-ref --short HEAD)

  git commit -am "[release] $VERSION"

  git push origin $BRANCH
  if [ $BRANCH == 'master' ]
  then
    echo "Add tag v$VERSION"
    git push origin refs/tags/v$VERSION
  fi
  echo "end"
#
#  if [[ $VERSION =~ [beta] ]]
#  then
#    npm publish --registry=http://registry.npm.qima-inc.com --tag beta
#  elif [[ $VERSION =~ [rc] ]]
#  then
#    npm publish --registry=http://registry.npm.qima-inc.com --tag release
#  else
#    npm publish --registry=http://registry.npm.qima-inc.com
#  fi
fi
