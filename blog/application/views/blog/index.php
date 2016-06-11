<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Blog</title>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
    <link href="/css/style.css" rel="stylesheet" type="text/css">
    <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
</head>
    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="blog" id="title"><span class="glyphicon glyphicon-adjust"></span> <span class="glyphicon glyphicon-send"></span></a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="page-header">
                <h1>Blog <small>- Eric Liu</small></h1>
            </div>
            <?php
            if($posts) {
                foreach($posts as $post) {?>
                    <div class="row">
                        <div class="col-md-7 col-xs-10">
                            <h3>
                                <?= $post->entry_name;?><br>
                            </h3>
                            <h4>
                                <?= $post->time;?>
                                <?= $post->date;?>
                            </h4>
                            <?= $post->entry_body;?>
                            <?php if($post->comments) {
                                foreach($post->comments as $comment){?>
                                    <h5>
                                        <hr> Comment
                                    </h5>
                                    <h6>
                                    <?= $comment->comment_name;?>
                                    <?= $comment->comment_email;?> <br>
                                    <?= $comment->comment_body;?>
                                    </h6>
                                <? }
                            } ?>
                            <br><button type="button" class="btn btn-default btn-xs leaveComment">Leave Comment</button>
                            <form method="post" action="/blog/post/<?= $post->entry_id?>" style="display:none;">
                                <fieldset class="form-group">
                                    <label for="commentName">Name</label>
                                    <input type="text" class="form-control" name="commentName" id="commentName" placeholder="What's your name?">
                                </fieldset>
                                <fieldset class="form-group">
                                    <label for="emailInput">Email Address</label>
                                    <input type="email" class="form-control" name="emailInput" id="emailInput" placeholder="Enter email">
                                    <small class="text-muted">We'll never share your email with anyone else.</small>
                                </fieldset>
                                <fieldset class="form-group">
                                    <label for="commentText">Type away!</label>
                                    <textarea class="form-control" name="commentText" id="commentText" rows="3" placeholder="Leave a comment."></textarea>
                                </fieldset>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                            <hr style="border-color: dimgray;">
                        </div>
                    </div>
                <? }
            }?>
            <div id="toTop">
                <a onclick="scrollz()"><img src="/css/arrow.png"></a>
            </div>
        </div>
        <script type="text/javascript" src="/assets/jquery/jquery-2.1.4.min.js"></script>
        <script src="/javascript/script.js"></script>
    </body>
</html>
