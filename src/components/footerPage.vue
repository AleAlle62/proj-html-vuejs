<template>
    <div class="footer">
        <!-- parte sinistra  -->
        <div class="foo-l">
            <div><img src="@/immagini/avada-bakery-logo-retina-200x97.png" alt=""></div>
            <div class="ciclo">
                <div class = "list" v-for = "ciclo in arrMenu" :key=" ciclo">{{ciclo}}</div>
                <div><font-awesome-icon icon="fa-solid fa-cart-shopping" /></div>
            </div>
            <div><p>copirygting 2012 - 2020 | avada themeFusion | All ights reserved | powerd by wordpress</p></div>
        </div>
        <!-- parte destra  -->
        <div class="foo-r">
            <h3>Subscribe to Newsletter</h3>
            <form class="form">
                <input type="text" placeholder="enter email adress*">
                <div>Subscribe</div>
            </form>
            <div class="social">
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <font-awesome-icon icon="fa-brands fa-pinterest" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerPage',
    props: {
        arrMenu: Array,

    },
}
</script>

<style lang="scss" scoped>
.footer {
    font-family: 'Unna', serif;
    img {
        height: 80px;
    }
    .ciclo {
        display: flex;
        gap: 20px;
        color:rgba(127,101,168,255);
        font-size: 10px;
    }
    margin-top: 50px;
    display: flex;
    height: 40vh;
    width: 100%;
    .foo-l {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 50px;
        height: 100%;
        width: 60%;
        p {
            font-size: 10px;
        }
    }
    .foo-r {
        margin-right: 50px;
        gap: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        width: 40%;
        .form {
            display: flex;
            gap: 30px;
            align-items: center;
            div {
                padding: 0.3em;
                text-align: center;
                width: 100px;
                border-radius: 10px;
                color: white;
                background-color:  rgba(88,54,141,255);
            }
        }
        div:hover {
            color: rgba(88,54,141,255) ;
            background-color: white;
            transition: 1.2s;
            scale: 1.2;
        }
        h3 {
            color:  rgba(88,54,141,255);
        }
        .social {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 30px;
        }
    }
}
.list:hover {
        border-bottom: 2px solid  rgba(88,54,141,255);
    }

    
// font 
@import url('https://fonts.googleapis.com/css2?family=Unna:wght@700&display=swap')

</style>