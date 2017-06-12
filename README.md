
wintersmith-static
==================

Simple static file plugin for [Wintersmith](https://github.com/jnordberg/wintersmith) that lets you register glob patterns of files that should be considered static and copied 1:1.


Install
-------

Using wintersmith:

`wintersmith plugin install static`

Manually:

`npm install --save wintersmith-static`

Then add `wintersmith-static` to your plugins list in wintersmith's `config.json`.


Options
-------

Set the patterns you want in your `config.json`, like so:

```js
{
    "static": [
        "assets/**/*",
        "a/specific.file",
        "**/*.static"
    ]
}
```
