/**
 * Created by Jao on 2017/6/24.
 */
define(
    [
        paths.jQuery.name,
        paths.templateEngine.name,
        paths.createModuleTextPath("first/template.html")
    ],
    function ($, template7, template) {
        var compiledTemplate = template7.compile(template);
        var context = {
            firstName: 'Vinci',
            lastName: 'Tian'
        };
        var html = compiledTemplate(context);
        $("body").html(html);
    }
);