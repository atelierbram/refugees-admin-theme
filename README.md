# Refugees Admin Theme

Lightweight WordPress Admin Theme Plugin

![Screenshot Refugees Admin Theme](https://atelierbram.github.io/colorscheme/assets/img/screenshot_refugees-admin-theme_800x600.png "Screenshot Refugees Admin Theme")

### Install
upload in plugins folder and activate in WordPress dashboard

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

### Typography
This theme depends on the webfont [Fira Sans](https://www.google.com/fonts/specimen/Fira+Sans) being available. The medium 500 weight is used for bold, and the light 300 weight is used for the light-on-dark text in the interface. The fonts are enqueued in the plugin, and pulled in from Google Webfonts.

### Colorscheme
![Refugees colorscheme](https://atelierbram.github.io/colorscheme/assets/img/refugees-colorscheme.svg "Refugees colorscheme")

```scss
$base00: #203b46;
$base01: #294956;
$base02: #5e7b87;
$base03: #6b8894;
$base04: #899ca4;
$base05: #97abb4;
$base06: #dfecf1;
$base07: #f5fcff;
$base08: #c14467;
$base09: #a0593b;
$base0A: #a19445;
$base0B: #40964a;
$base0C: #358d74;
$base0D: #119ad4;
$base0E: #6a75cd;
$base0F: #ae429f;

$red:     $base08;
$orange:  $base09;
$yellow:  $base0A;
$green:   $base0B;
$cyan:    $base0C;
$blue:    $base0D;
$violet:  $base0E;
$magenta: $base0F;
```
