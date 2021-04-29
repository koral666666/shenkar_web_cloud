<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="js/christmas.js"></script>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" rel="stylesheet">       
        <link rel="stylesheet" href="css/christmas.css">
        
        <title>Koral Gov-Ari</title>    
    </head>

    <body id="christmas">

        <section>

            <section>
                <section class="lightBulbs">
                    <section class="lightBulb" id="one"></section>
                    <section class="lightBulb" id="two"></section>
                    <section class="lightBulb" id="three"></section>
                    <section class="lightBulb" id="four"></section>
                    <section class="lightBulb" id="five"></section>
                    <section class="lightBulb" id="six"></section>
                </section>
        
                <?php
                    $goodORbad = $_GET["good_OR_bad"];
                    $gift      = $_GET["gift_"];

                    if($goodORbad == "Yes")
                        echo 
                            "<section>
                                <h2>WE KNOW you weren't good<br>It's not nice to<br>LIE</h2>
                                <section class='gift'>
                                    <img src='images/stink.svg' title='stink' alt='stink' id='stink'>
                                </section>
                            </section>";
                    elseif($goodORbad == "No")
                        echo
                            "<section>
                                <h2>You weren't good<br>But you were honest !<br>So we'll give you a christmas gift :</h2>
                                <section id='effect' class='gift'>
                                    <img src='images/eraser.svg' title='eraser' alt='eraser' id='eraser'>
                                </section>
                            </section>";
                    elseif($goodORbad == "Hope_So")
                        echo
                            "<section>
                                <h2>You were good !!<br>But we ran out of ".$gift."..<br>So we'll give you this instead :</h2>
                                <section id='effect' class='gift'>
                                    <img src='images/mouse.svg' title='mouse' alt='mouse' id='mouse'>
                                </section>
                            </section>";
                ?>
            
            </section>    

            <section>
                <section class="wrapper">
                <section class="face">
                    <section class="hat-wrapper">
                        <section class="hat">
                                <section class="hat-top">
                                </section>
                        </section>
                    <section class="hat-brim">
                
                    </section>
                    </section>
                    <section class="eyes">
                        <section class="eyePhp left-eyePhp">
                        </section>
                        <section class="eyePhp right-eyePhp">
                        </section>
                    </section>
                    <section class="mouth">
                
                    </section>
                    <section class="beard">
                        <section class="mustache">
                                <section class="mustache-left">
                                </section>
                                <section class="mustache-right">
                                </section>
                        </section>
                    </section>

                </section>
                </section>
            </section>

        </section>

        <div id="snow"></div>

    </body>
</html>