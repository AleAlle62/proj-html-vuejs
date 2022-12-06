<template>
    <div class="reset">
        <!-- primo blocco -->
        <div class="con-slider-uno">
            <div class="slider-left">
                <p>OUR PRODUCTS</p>
                <h4>All our delectable pastries are backed fresh in our Kitchen very mornig, and are made with all natural, all organics ingredients.</h4>
                <p class="btn-shop">Start Shopping</p>
            </div>
            <div>
                <h1>ciao</h1>
            </div>
        </div>
        <!-- secondo blocco -->
        <div class="special">
            <div class="s-top">
                <p>CORPORATE & WEDDINGS</p>
                <h4>Baking Special Moments</h4>
            </div>
            <div class="s-img">
                <div class="foto"><img src="@/immagini/wedding-bg.jpg"></div>
                <div class="foto-due"><img src="@/immagini/corporate-bg.jpg" alt=""></div>
                
            </div>
        </div>
        <!-- terzo blocco -->
        <div class="secondo-slider">
            <div class="secondo-l">
                <h3>Find a freshly baked product perfect for you</h3>
                <p>integer a nibh ex porttito retrum et ut velit. Etiam felis at leo feugiat placerat. Sed ac nulla id orci temport conovallis sed.</p>
                <p class="btn-s-l">Shop All Products</p>
            </div>
            <div class="slider-slider">
                <h1>SLIDER</h1>
            </div>
        </div>
        <!-- quarto blocco  -->
        <div class="tell">
            <div class="h1">
                <h1>Tell us what you have in mind</h1>
            </div>
                <div class="tell-r">
                    <div class="zero">01</div>
                    <div>
                        <p>MANUAL INGREDIENTS SELECTION</p>
                        <h6>Cras consequat lectus vestibulum tortom pulvinar, quis eusimod nils varius. Ut eu leoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectutetor ulteicesies ac congue. Donec lorem erat, finibus in velit placeat, return augue.</h6>
                    </div>
                </div>
        </div>
        <!-- quinto blocco -->
        <div class="grande-cinque">
            <div class="cinque-l">
                <div class="l-inside">
                    <h1>We Start Baking</h1>
                    <p>02</p>
                </div>
                <div class="l-inside-due">
                    <p>SWEET & DELICIUS</p>
                    <h6>Cras consequat lectus vestibulum tortom pulvinar, quis eusimod nils varius. Ut eu leoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectutetor ulteicesies ac congue. Donec lorem erat, finibus in velit placeat, return augue.</h6>
                </div>
            </div>
            <div class="cinque-r">
                <p>DONT JUST  TAKE OUR WORD FOR IT</p>
                <h3>"Finally found an alternative to the mass produced products. Sometigh that incorporates real organic ingredientrs, nutrient dense wellness while promothing sustainibility and activity."</h3>
                <p>Rachel Cooper, Founder</p>
            </div>
        </div>
        <!-- sesto blocco -->
        <div class="delivero">
            <div class="del-up">
                <h1>Delivered to your home</h1>
                <p>03</p>
            </div>
            <div class="del-down">
                <p>BAKED TO ORDER & GIT WRAPPED</p>
                <h6>Cras consequat lectus vestibulum tortom pulvinar, quis eusimod nils varius. Ut eu leoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectutetor ulteicesies ac congue. Donec lorem erat, finibus in velit placeat, return augue.</h6>
            </div>
        </div>
        <!-- settimo blocco -->
        <div class="sette-con">
            <p>LOCATIONS</p>
            <h3>Visit our Bakeries</h3>
            <div>img</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'centralPage',
}
</script>

<style lang="scss" scoped>
.reset {
    margin: 50px;
}
.con-slider-uno {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    .slider-left {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        h4 {
            color: rgba(85,50,139,255);
        }
        .btn-shop {
            color: white;
            background-color: rgba(85,50,139,255);
            padding: 1.5em;
            border-radius: 5px;
        }
        .btn-shop:hover {
            transition: 1.2s;
            color: rgba(85,50,139,255);
            background-color: #bda2f3 ;
        }
        p {
            color: rgba(182,180,199,255);
            font-size: 10px;
        }
    }
}

//secondo blocco

.special {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    gap: 30px;
    .s-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        p {
            font-size: 10px;
            color: rgba(152,149,172,255);
        }
        h4 {
            color: rgba(85,50,139,255);
        }
    }
    .s-img {
        display: flex;
        justify-content: space-around;
        width: 100%;
        gap: 10px;
        img {
            height: 100%;
        }
        .foto {
            height:60vh ;
        }
        .foto-due {
            height: 60vh;
        }
    }
}

//terzo blocco
.secondo-slider {
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1 {
        color: black;
    }
    .secondo-l {
        text-align: center;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        p {
            color: rgba(152,149,172,255);
            font-size: 15px;
        }
        h3 {
            color: rgba(85,50,139,255);
        }
        .btn-s-l {
            color: white;
            background-color: rgba(85,50,139,255);
            padding: 1em;
            border-radius: 5px;
        }
        .btn-s-l:hover {
            transition: 1.2s;
            color: rgba(85,50,139,255);
            background-color: #bda2f3 ;
        }
    }
}

// quarto blocco

.tell {
    background-image: url('@/immagini/bakery-process-1.jpg');
    background-size: cover;
    position: relative;
    height: 400px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .h1 {
        color: white;
        width: 350px;
        margin: 50px;
    }
    .tell-r {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 15px;
        .zero {
            display: flex;
            justify-content: flex-end;
            color: white;
            font-size: 45px;
        }
        p {
            text-align: center;
            font-size: 10px;
            color: rgba(152,149,172,255);
        }
        h6 {
            color: white;
            font-size: 15px;
        }
    }
}
.tell::before{
    color: white;
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.365);
}
div {
    position: relative;
    color: white;
}

//quinto blocco

.grande-cinque {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .cinque-l {
        color: white;
        background-image: url('@/immagini/bakery-process-2.jpg');
        position: relative;
        background-size: cover;
        height: 70vh;
        width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .l-inside {
            margin: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            p {
                font-size: 45px;
            }
        }
        .l-inside-due {
            margin: 40px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            p {
                font-size: 10px;
            }
            h6 {
                font-size: 15px;
                width: 350px;
            }
        }
    }
    .cinque-r {
        width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: rgba(248,241,242,255);
        p {
            font-size: 10px;
            color: rgba(152,149,172,255);
        }
        h3 {
            text-align: center;
            color: rgba(85,50,139,255);
        }
    }
}
.cinque-l::before{
    color: white;
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.365);
}
div {
    position: relative;
    color: white;
}

// sesto blocco 
.delivero {
    position: relative;
    margin-top: 30px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    background-image: url('@/immagini/bakery-process-3.jpg');
    background-size: cover;
    .del-up {
        display: flex;
        justify-content: space-between;
        margin: 50px;
        p {
            font-size: 55px;
        }
    }
    .del-down {
        margin: 50px;
        display: flex;
        flex-direction: column;
        p {
            color: rgba(152,149,172,255);
        }
        h6 {
            width: 40%;
        }
    }
}

.delivero::before{
    color: white;
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.365);
}
div {
    position: relative;
    color: white;
}

//settimo blocco

.sette-con {
    margin-top: 150px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 10px;
        color: rgba(152,149,172,255);
    }
    h3 {
        color: rgba(85,50,139,255);
    }
}

</style>
