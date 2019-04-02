var pkg = require('../package.json'),
    source = 'src/',
    dest = 'dist/',
    prodBuild = process.argv.indexOf('prod') !== -1,
    devBuild = !prodBuild;

module.exports = {
    source: source,
    dest: dest,
    devBuild: devBuild,
    prodBuild: prodBuild,
    filesToCopy: [
        'node_modules/font-awesome/fonts/**/*.*',
        source + 'fonts/**/*.*'
    ],

    html: { 
        in : source + '**/*.html',
        watch: [source + 'views/**/*.html'],
        out: dest,
        context: {
            devBuild: devBuild,
            author: pkg.author,
            version: pkg.version
        }
    },

    images: { in : source + 'images/*.*',
        out: dest + 'images/'
    },

    css: { 
        in: source + 'scss/main.scss',
        watch: [source + 'scss/**/*.scss', source + 'app/**/*.scss'],
        out: dest + 'css/',
        sassOpts: {
            outputStyle: 'expanded', // nested, expanded, compact, compressed, 
            imagePath: '../images',
            precision: 3,
            sourceComments: 'map',
            errLogToConsole: true
        },
        compassOpts: {
            style: 'expanded',
            css: dest + 'css/',
            sass: source + 'scss/',
            image: 'images',
            sourcemap: true
        },
        pleeeaseOpts: {
            autoprefixer: { browsers: ['last 2 versions', '> 2%'] },
            rem: ['16px'],
            pseudoElements: true,
            mqpacker: true,
            minifier: !devBuild
        }
    },

    componentsCSS: { 
        in : source + 'app/**/*.scss',
        watch: [source + 'app/**/*.scss'],
        out: dest + 'app/'
    },

    fonts: { in : source + 'fonts/*.*',
        out: dest + 'css/fonts/'
    },

    js: { 
        in : source + 'js/**/*.js',
        out: dest + 'js/',
        filename: 'main.min.js',
        vendor: source + 'vendor/'
    },

    vendor: { 
        in : source + 'vendor/**/*',
        out: dest + 'vendor/'
    },

    componentsJS: { 
        in : source + 'app/**/*.js',
        out: dest + 'app/'
    },

    syncOpts: {
        server: {
            baseDir: source,
            index: 'index.html'
        },
        open: true,
        notify: true
    },

    scriptsHtml: source + 'templates/_scripts.html'
};
