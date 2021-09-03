let banner = $('#banner')

banner.append(`
<div class = "banner">
<div class = "banner-left">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <img src="../../image/dt.jpg" class="d-block w-100 banner-height"  alt="html_banner1">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="../../image/hp-vb-dt.png" class="d-block w-100 banner-height" alt="html_banner2">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="../../image/dekstop.jpg" class="d-block w-100 banner-height" alt="html_banner3">
            </div>
            <div class="carousel-item">
                <img src="../../image/mac.jpg" class="d-block w-100 banner-height" alt="html_banner4">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
     </button>
</div>
</div>

<div class = "banner-right">
<div class = "item-banner margin-banner"><img src="../../image/Legion.jpg" alt=""></div>
<div class = "item-banner margin-banner"><img src="../../image/MSI.jpg" alt=""></div>
<div class = "item-banner"><img src="../../image/Thinkbook.jpg" alt=""></div>
</div>
</div> 
`)