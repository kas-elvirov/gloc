module.exports = function( grunt ) {
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        compress: {
            main: {
                options: {
                    archive: './gloc_archive.zip',
                    mode: 'zip',
                },
                files: [
                    {
                        expand: true,
                        cwd: './dist',
                        src: '**',
                    },
                ],
            },
        },
    });

    grunt.loadNpmTasks( 'grunt-contrib-compress' );

    grunt.registerTask( 'default', ['compress']);
};
