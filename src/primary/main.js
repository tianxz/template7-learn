var version = "V=1.0.0";
var versionEx = "?V=" + version;

var paths = {
    //第三方组件
    text: {pathName: "text", pathValue: 'vendor/requirejs-text/text'},
    template7: {pathName: "template7", pathValue: 'vendor/template7/template7'},

    helloTemplate7: {pathName: "helloTemplate7", pathValue: 'module/hello/def'}
};

var text = function (path) {
    return "text!" + path;
};

var genPathsToKeyAndValue = function () {
    var newPaths = {};

    for (var propertyName in paths) {
        var objValue = paths[propertyName];
        newPaths[propertyName] = objValue.pathValue;
    }

    return newPaths;
};

var conf = {
    baseUrl: '',
    waitSeconds: 0,
    urlArgs: version,
    paths: genPathsToKeyAndValue(),

    shim: {
        template7: {
            'deps': [],
            'exports': 'template7'
        },
    }
};

requirejs.config(conf);
requirejs(['text', 'helloTemplate7']);