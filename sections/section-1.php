<!-- un header ici -->
<!-- le header est une navbar sur le cote , type scrollspy qui prendra une position fixed -->

<!-- deux row  -->
<div id="section1" class="d-flex column" data-spy>
    <div class="row" id="headRow">
        <h4>portfolio</h4>
    </div>
    <div class="row d-flex" id="block1">
        <div class="bigSquare">
            <div class="row">
                <h1>tarik</h1>
            </div>
            <div class="row">
                <h2>web developer</h2>
            </div>
            <div class="smallSquare"></div> 

        </div>
        <div class="bigSquare">
            <div class="row2">
                <h1>louatah</h1>
            </div>
            <div class="row2">
                <div class="square-white"></div>
            </div>
        </div>
    </div>
    <nav id="navSpy" class="">
        <?php for($i = 1; $i <= 6;$i++): ?>
            <a href="#section<?= $i ?>"></a>
        <?php endfor ?>
    </nav>
    <!-- <hr> -->
    <!-- <div id="panneauAngle">
        <button id="boutonPaint"></button>
    </div> -->
</div>
<!-- <script src="js/switchColors.js" type="module"></script> -->
<script src="js/scrollspy.js" type="module"></script>
