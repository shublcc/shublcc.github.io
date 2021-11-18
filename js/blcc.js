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

var types = ['工程师', '老师', '在读研究生', '毕业研究生', '在读博士生', '毕业博士生', '在读本科生', '毕业本科生'];

var members = new Vue({
    el: '#members',
    data: {
        items: []
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
})

var links = new Vue({
    el: '#links',
    data: {
        items: []
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
})

var researches = new Vue({
    el: '#researches',
    data: {
        items: []
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
})

$(document).ready(function(){
    $('#copy-year').html(showYears());
});

window.onload = function() {
    changeModel();
}
