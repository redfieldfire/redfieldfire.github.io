<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Globals</title>
</head>
<body>
    <?php 

    $GLOBALS['x'] = 10;

    while (true){

        $GLOBALS['x']++;
        echo "\n".$GLOBALS['x'];
        sleep(1);

    }

    ?>
</body>
</html>