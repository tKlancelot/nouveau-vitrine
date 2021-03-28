<!DOCTYPE html>
<html lang="fr">
<head>
    <?php $title = "portfolio vitrine v-1"; ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <link rel="icon" href="./assets/icons/temp-favicon.svg"/>
    <link rel="stylesheet" href="css/style.css">
    <title><?= $title?></title>

    <!-- jquery -->
    
    <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    
    <!-- three.js -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js'></script>
    <script src='https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js'></script>
    <script src="https://unpkg.com/three@0.85.0/examples/js/controls/OrbitControls.js"></script>
    
    <?php include ("homepage.php"); ?>   
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N91KK6BTFG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N91KK6BTFG');
    </script>
</head>