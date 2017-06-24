var version = "VERSION=10010010002";
var versionEx = "?V=" + version;

var paths = {
    /* 第三方组件 */
    //requirejs-text
    requireJsText: {name: "text", path: 'vendor/requirejs-text/text'},
    //template7
    templateEngine: {name: "template7", path: 'vendor/template7/template7'},
    //jquery
    jQuery: {name: 'jquery', path: 'vendor/jquery/jquery'},

    /* 项目模块 */
    first: {name: "first", path: 'module/first/def'},

    /* 路径生成函数 */
    //create text/html/json path
    createTextPath: function (path) {
        return "text!" + path;
    },
    createModuleTextPath: function (path) {
        return "text!module/" + path;
    },
    createPrimaryTextPath: function (path) {
        return "text!primary/" + path;
    },
    createStyleextPath: function (path) {
        return "text!style/" + path;
    },
    createVendorTextPath: function (path) {
        return "text!vendor/" + path;
    },
    // create js path
    createJsPath: function (path) {
        return path;
    },
    createModuleJsPath: function (path) {
        return "module/" + path;
    },
    createPrimaryJsPath: function (path) {
        return "primary/" + path;
    },
    createStyleJsPath: function (path) {
        return "style/" + path;
    },
    createVendorJsPath: function (path) {
        return "vendor/" + path;
    }
};

var isFunction = function (functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

var genPathsToKeyAndValue = function () {
    var newPaths = {};

    for (var propertyName in paths) {
        var objValue = paths[propertyName];

        if (!isFunction(objValue)) {
            newPaths[objValue.name] = objValue.path;
        }
    }

    return newPaths;
};

var conf = {
    baseUrl: '',
    waitSeconds: 0,
    urlArgs: version,
    paths: genPathsToKeyAndValue(),

    shim: {
        // template7: {
        //     'deps': ['$'],
        //     'exports': 'template7'
        // },
    }
};

requirejs.config(conf);
requirejs([paths.first.name]);