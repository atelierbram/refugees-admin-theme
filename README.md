# Refugees Admin Theme

Lightweight WordPress Admin Theme Plugin

![Screenshot Refugees Admin Theme](http://atelierbram.github.io/refugees-admin-theme/colorscheme/assets/img/screenshot_refugees-admin-theme_800x600.png "Screenshot Refugees Admin Theme")

### Install
Upload in plugins folder and activate in WordPress dashboard.

```bash
wp-content/
| plugins/
| | refugees-admin-theme/
|   | refugees-admin-theme.php
|   | refugees-admin-theme.css
|
| themes/
  | refugees/
    | assets/
      | sass/
        | cms/
        | | refugees-admin-theme.scss
        |
        | variables-site/
        | | _colors.scss
        | | _colors-extended.scss
```

### Only Colors
All this plugin really does is register this custom stylesheet and insert it in the head of the document when visiting the WordPress admin. Values for color; background-color, border-color, box-shadow etc. all come from these colorscheme variables, with a bit of fine tuning (layout is left alone). The declarations override those defined in the default admin.css.

### Typography
This theme depends on the webfont [Fira Sans](https://www.google.com/fonts/specimen/Fira+Sans) being available. The medium 500 weight is used for bold, and the light 300 weight is used for the light-on-dark text in the interface. The fonts are enqueued in the plugin, and pulled in from Google Webfonts.

### Colorscheme
Colors of this theme come from [this colorscheme](https://atelierbram.github.io/refugees-admin-theme/colorscheme/).

![Refugees colorscheme](https://atelierbram.github.io/refugees-admin-theme/colorscheme/assets/img/refugees-colorscheme.svg "Refugees colorscheme")

Knowing your way around Sass and being able to trigger the `grunt build` command will surely help tweaking this theme to create your own admin-theme. There are basically 16 values for color-variables to edit in order to generate a colorscheme, other variations of color-values are generated with Sass.


```scss
$base00: #203b46; // hsl(198, 37%, 20%)
$base01: #294956; // hsl(198, 35%, 25%)
$base02: #5e7b87; // hsl(198, 18%, 45%)
$base03: #6b8894; // hsl(198, 16%, 50%)
$base04: #899ca4; // hsl(198, 13%, 60%)
$base05: #97abb4; // hsl(198, 16%, 65%)
$base06: #dfecf1; // hsl(198, 39%, 91%)
$base07: #f5fcff; // hsl(198, 100%, 98%)
$base08: #c14467; // hsl(343, 50%, 51%)
$base09: #a0593b; // hsl(18, 46%, 43%)
$base0A: #a19445; // hsl(52, 40%, 45%)
$base0B: #40964a; // hsl(127, 40%, 42%)
$base0C: #358d74; // hsl(163, 45%, 38%)
$base0D: #119ad4; // hsl(198, 85%, 45%)
$base0E: #6a75cd; // hsl(233, 50%, 61%)
$base0F: #ae429f; // hsl(308, 45%, 47%)

$red:     $base08;
$orange:  $base09;
$yellow:  $base0A;
$green:   $base0B;
$cyan:    $base0C;
$blue:    $base0D;
$violet:  $base0E;
$magenta: $base0F;
```

### Resources
- [Creating Admin Themes](https://codex.wordpress.org/Creating_Admin_Themes)
- [Apply Custom CSS to Admin Area](https://css-tricks.com/snippets/wordpress/apply-custom-css-to-admin-area/)


