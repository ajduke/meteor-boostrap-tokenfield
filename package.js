Package.describe({
    summary: "A jQuery tag/token input plugin for Twitter's Bootstrap, by the guys from Sliptree, repackaged for Meteor."
});

Package.on_use(function (api) {
    api.use('bootstrap-3', 'client');
    
    api.add_files('lib/bootstrap-tokenfield/dist/bootstrap-tokenfield.min.js', 'client');
    api.add_files('lib/bootstrap-tokenfield/dist/css/tokenfield-typeahead.css', 'client');
    api.add_files('lib/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css', 'client');
});

