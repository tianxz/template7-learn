/**
 * Created by Jao on 2017/6/24.
 */
define(
    [
        paths.jQuery.name,
        paths.templateEngine.name,
        paths.createModuleTextPath("first/template.html")
    ],
    function ($, engine, template) {
        var compiledTemplate = engine.compile(template);
        var context = {
            firstName: 'Vinci',
            lastName: 'Tian'
        };
        var html = compiledTemplate(context);
        $("body").append(html);
    }
);