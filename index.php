<?php include("mail.php");?>
<!DOCTYPE html>
<html>
<?php include("head.php"); ?>
<body>
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
        }
    </script>
    <div id="container">
        <header></header>
        <main>
            <?php include("intro.php"); ?>
            <?php include("dashboard.php"); ?>
            <?php include("innovation.php"); ?>
        </main>
        <footer></footer>
    </div>
</body>
</html>