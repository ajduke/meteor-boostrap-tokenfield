Package.describe({
    name: "ajduke:bootstrap-tokenfield",
    summary: "A jQuery tag/token input plugin for Twitter's Bootstrap, repackaged for Meteor.",
    version: "0.3.1",
    git: "https://github.com/ajduke/meteor-bootstrap-tokenfield.git"
});

Package.on_use(function (api) {
    api.use('ian:bootstrap-3@1.0.3', 'client');
    
    api.add_files('lib/bootstrap-tokenfield/dist/bootstrap-tokenfield.min.js', 'client');
    api.add_files('lib/bootstrap-tokenfield/dist/css/tokenfield-typeahead.min.css', 'client');
    api.add_files('lib/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.min.css', 'client');
});

