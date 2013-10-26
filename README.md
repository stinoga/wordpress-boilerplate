wordpress-boilerplate
=====================

Boilerplate starter code for Wordpress projects. Uses Grunt and Sass, alongside Bower for package management.

##The Stack

* [NPM](https://npmjs.org/)
  * [grunt](http://gruntjs.com/)
    * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
    * [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars)
    * [grunt-text-replace](https://npmjs.org/package/grunt-text-replace)
    * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [bower](http://twitter.github.com/bower/) installed globally!
* [jQuery](http://jquery.com/)
* [modernizr](http://modernizr.com/)
* [SASS](http://sass-lang.com/)
  * [breakpoint](http://breakpoint-sass.com/)
* [normalize.css](http://necolas.github.com/normalize.css/)

##Installation

#####1: Clone into your Wordpress theme directory.

```js
> git clone https://github.com/stinoga/wordpress-boilerplate.git
```

#####2: Install dependent Node and Bower packagaes.

```js
> npm install && bower install
```

#####3: If your wordpress install is in git, move the gitignore to your root directory.

##Thanks

Thanks to the folks at [Bearded](http://bearded.com/). I stole some some pieces from their excellent starter kit, [Stubble](https://github.com/beardedstudio/stubble?source=cc).
