(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'prodMode': 'src/app/prodMode',
    'wp1': 'src/app/wp1',
    'wp2': 'src/app/wp2',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'prodMode': { main: 'main.js', defaultExtension: 'js' },
    'wp1': { main: 'main.js', defaultExtension: 'js' },
    'wp2': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var packageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    bundles: {
      'dist/common.min': [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
      ],
      'dist/prodMode.min': ['src/app/prodMode'],
      'dist/wp1.min': ['src/app/wp1'],
      'dist/wp2.min': ['src/app/wp2']
    },
    typescriptOptions: {
      "module": "system",
      "sourceMap": true
    },
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
