function showYears(){
    var myDate = new Date();
    var year = myDate.getFullYear();
    if (year > 2018) {
        return "2018 ~ "+year;
    } else{
        return "2018";
    }
}

function typeClass(e) {
    if (e==1) {
        return 'teacher';
    } else if (e==2) {
        return 'post-graduate';
    } else if (e==3) {
        return 'graduates';
    } else {
        return '';
    }
}

function changeModel() {
    if($(".modal").length>0) {
        $(".modal").each(function() {
            $(".modal").prependTo( "body" );
        });
    }else{
        console.log('fail');
    }
}

var equips = {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.loadEquips();
    },
    methods: {
        loadEquips: function() {
            var vm = this;
            axios.get('/data.json')
            .then(function (response) {
                vm.items = response.data.equips;
                var num = 0;
                for(var item of vm.items) {
                    num++;
                    item.num = num;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted: function() {
        Fancybox.bind('[data-fancybox="gallery1"]', {
            Carousel: {
                on: {
                change: (that) => {
                    mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                    });
                },
                },
            },
        });
    },
}

Vue.createApp(equips).mount('#equips')

var honors = {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.loadHonors();
    },
    methods: {
        loadHonors: function() {
            var vm = this;
            axios.get('/data.json')
            .then(function (response) {
                vm.items = response.data.honors;
                var num = 0;
                for(var item of vm.items) {
                    num++;
                    item.num = num;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

Vue.createApp(honors).mount('#honors')

var types = ['工程师', '老师', '在读研究生', '毕业研究生', '在读博士生', '毕业博士生', '在读本科生', '毕业本科生'];

var members = {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.loadMembers();
    },
    methods: {
        loadMembers: function() {
            var vm = this;
            axios.get('/data.json')
            .then(function (response) {
                vm.items = response.data.members;
                var num = 0;
                for(var item of vm.items) {
                    item.t = types[item.type];
                    num++;
                    item.num = num;
                    item.type = typeClass(item.type);
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

Vue.createApp(members).mount('#members')

var links = {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.loadLinks();
    },
    methods: {
        loadLinks: function() {
            var vm = this;
            axios.get('/data.json')
            .then(function (response) {
                vm.items = response.data.links;                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

Vue.createApp(links).mount('#links')

var researches = {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.loadResearches();
    },
    methods: {
        loadResearches: function() {
            var vm = this;
            axios.get('/data.json')
            .then(function (response) {
                vm.items = response.data.researches;
                var num = 0;
                for(var item of vm.items) {
                    num++;
                    item.num = num;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

Vue.createApp(researches).mount('#researches')

$(document).ready(function(){
    $('#copy-year').html(showYears());

    // Initialise Carousel
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        Dots: false,
    });

    // Thumbnails
    const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
        Sync: {
            target: mainCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
    });

    // Customize Fancybox
    

    Fancybox.bind('[data-fancybox="gallery2"]', {
        Thumbs: {
            Carousel: {
            fill: false,
            center: true,
            },
        },
    });
});

$(window).on('load',function(){
    changeModel();
});
