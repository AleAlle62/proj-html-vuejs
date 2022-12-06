<template>
    <div>
        <!-- navbar -->
        <div class="navbar">
            <div><img src="@/immagini/avada-bakery-logo-retina.png"></div>
            <div class="navbar2">
                <div class = "list" v-for = "ciclo in arrMenu" :key=" ciclo">{{ciclo}}</div>
                <div><font-awesome-icon icon="fa-solid fa-cart-shopping" /></div>
            </div>
            
        </div>
        <!-- resto header -->
        <div class="under-navbar">
            <div class="text">
                <p>FRESH & TASTY BACKERY DAY</p>
                <h1>The Perfect Fresh Bread</h1>
                <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod misl varius. liquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor</p>
                <p class="button">Explore our products</p> 
            </div>
            <!-- bottoni destri  -->
            <div class="under-r">
                <div class="btn-r">
                    <div class="icon"><font-awesome-icon icon="fa-solid fa-id-card-clip" /></div>
                    <div>demos</div>
                </div>
                <div class="btn-r">
                    <div class="cash">$39</div>
                    <div>On sale</div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'headerPage',
    data() {
        return {
            arrMenu: ['HOME', 'SHOP', 'ABOUT', 'GALLERY', 'LOCATION', 'JURNAL', 'CONTACT', 'MY ACCOUNT']
        }
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 10vh;
    background-color: rgba(241,229,239,255);
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        height: 50px;
    }
    .navbar2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .list {
        color: rgba(88,54,141,255);
        font-size: 10px;
    }
    .list:hover {
        border-bottom: 2px solid  rgba(88,54,141,255);
    }
    
}

.under-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    background-image: url('@/immagini/hero-header-bakery.jpg');
    background-size: cover;
    .text {
        width: 250px;
        margin-left: 200px;
        h1 {
            color: rgba(85,50,139,255);
            width: 300px;
        }
        p {
            color: rgba(137,131,144,255);
            font-size: 10px;
        }
        .button {
            text-align: center;
            padding: 0.5em;
            background-color: white;
            width: 150px;
            border-radius: 5px;
        }
        .button:hover {
                transition: 1.2s;
                background-color: rgba(85,50,139,255);
                color: white;
            }
    }

    .under-r {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 20px;
        margin-bottom: 250px;
    }
    .btn-r {
        font-size: 10px;
        border-radius: 10px;
        text-align: center;
        padding: 0.5em;
        background-color: white;
        .icon {
            font-size: 20px;
        }
        .cash {
            color: rgba(101,188,123,255);
            font-size: 20px;
            text-decoration: double;
        }
    }
    .btn-r:hover {
        transition: 1s;
        box-shadow: 7px 7px rgba(85,50,139,255);
    }
}
</style>