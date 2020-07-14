'use strict';

var rbs = ReactBootstrap
const e = React.createElement;
var OverlayTrigger = rbs.OverlayTrigger;
var Tooltip = rbs.Tooltip;
var ToggleButtonGroup = rbs.ToggleButtonGroup;
var ToggleButton = rbs.ToggleButton;
var Button = rbs.Button;
var ButtonToolbar = rbs.ButtonToolbar;

alert('테스트페이지 입니다');

let color_code_list = {"적": "red", "청": "blue", "황": "yellow"};
let color_name_list = {"적": "적속성", "황": "황속성", "청": "청속성"};
let type_name_list = {"검": "검병", "창": "창병", "책": "책략병", "특": "특수병"};
let country_name_list = {"위": "위나라", "촉": "촉나라", "오": "오나라", "군": "군웅"};


function sort_by_key(data, eval_func){
    return data.sort(function(a,b) {
        if(eval_func(a) < eval_func(b))
            return -1
        else if(eval_func(a) == eval_func(b))
            return 0
        else
            return 1
    })
}

class Deck extends React.Component{

    load_data(){
        let _self = this;

        function ajax1() {
            return $.ajax({
                url: "../organization_info.json",
                dataType: "json",
                success: function(data) {
                    _self.default_organiztion_txt = data;
                }
            });
        }
        
        function ajax2() {
            return $.ajax({
                url: "../member_info.json",
                dataType: "json",
                success: function(data) {
                    _self.default_member_info = data;
                }
            });
        }
        
        function ajax3() {
            return $.ajax({
                url: "../love_cnt_info.json",
                dataType: "json",
                success: function(data) {
                    _self.default_love_cnt_info = data;
                }
            });
        }
        
        function ajax4() {
            return $.ajax({
                url: "../love_info.json",
                dataType: "json",
                success: function(data) {
                    _self.default_love_info = data;
                }
            });
        }
        
        $.when(ajax1(), ajax2(), ajax3(), ajax4(), _self.setState({})).done(function(a1, a2, a3, a4){
            //console.log("ajax호출")

            _self.select_id.length.each(function(idx){
                console.log(_self.select_id[idx]);
            })
        });
    }
    
    urlCheck(){
        let _self = this;

        let check_url = document.location;
        let stringLength = check_url.length;
        //console.log(check_url);
        

        let a = check_url.href.indexOf("?");
        
        if(a != -1){
            let b = check_url.href.substring(a+1, stringLength)
            _self.select_id = b.split(",");
            _self.current_url = check_url.href.substring(0, a+1);
        }else{
            window.history.pushState( 'select_id', 'select_id', check_url.href + "?");
            _self.current_url = document.location.href;
            _self.select_id = [];
        }

        alert('선택된 id값 : '+ _self.select_id);
    }

    constructor(){
        super();

        let _self = this;

        this.load_data();
        this.urlCheck();

        this.default_member_info = [];

        this.result_member_txt = $('.type1');
        this.result_organization_txt = $('.type2');
        this.result_member_skill_txt = $('.type3');

        // this.select_id = arr;
        // this.current_url = "";
        //console.log(this.select_id);
        this.select_member = [];
        this.select_organization = [];

        
        this.color_blue = 0;
        this.color_red = 0;
        this.color_yellow = 0;

        this.country_wei = 0;
        this.country_shu = 0;
        this.country_wo = 0;
        this.country_king = 0;

        this.type_sword = 0;
        this.type_lance = 0;
        this.type_deceit = 0;
        this.type_special = 0;
        this.type_add_love = [];

        this.view_mode = 1;
        this.order_mode = 1;

        this.state = {
            member_info: this.default_member_info
        }
    }

    order_spec(item) {
        switch(this.order_mode) {
            case 1: return e("span", null, item.slot + "슬롯")
            case 2: return e("span", null, "기력 " + item.skill_point)
            case 3: 
                switch(item.target){
                    case "가까운 적": return e("span", null, "사거리 " + item.distance)
                    case "가장 먼 적": return e("span", {className: "text-danger"}, "사거리 " + item.distance)
                }
        }
    }

    renderCheckBox(item, list_code, index){
        let _self = this;

        let color_code = color_code_list[item.color];
        let input_id = list_code + "_" + index;
        //console.log('장수 호출');
        return e(OverlayTrigger, {
                    placement: "bottom-start",
                    overlay: e(
                        Tooltip, {className: "skill-tooltip"}, 
                        "편성효과: " + item.love, e("br"), 
                        "사거리: " + item.distance + " (" + item.target + ")", e("br"), 
                        item.point, e("br"), 
                        item.skill, e("br"), 
                        item.skill_b, e("br"), 
                        item.skill_a, e("br"), 
                        item.skill_s
                        )
                },
                e("li", {className: color_code + " text-center"},
                    e("input", {
                        type: "checkbox", name:"s", id:input_id, "data-name":item.name, "data-id":item.id,
                        onChange: (e) => _self._select_Event(item, e),
                        checked : item.selected
                    }),
                    e("label", {htmlFor: input_id, className: "text-muted"},
                        e("span", null, item.name),
                        _self.order_spec(item),
                        item.slot + "슬롯/" + type_name_list[item.type]
                    )
                )
            )
    }

    renderList(list, list_name, list_code, list_class="col col-3"){
        return e("li", {className: list_class},
                e("h2", null, list_name),
                e("ul", null, 
                    list.map((item, index) => this.renderCheckBox(item, list_code, index))
                )
            )
    }

    renderListByNation(){
        return e("ul", {className: "row total"},
                this.renderList(
                    this.default_member_info.filter((item, index) => item.country=="위"), "위나라", "wei"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.country=="촉"), "촉나라", "shu"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.country=="오"), "오나라", "wo"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.country=="군"), "군웅", "king"
                ),
            );
    }

    renderListBySlot(){
        return e("ul", {className: "row total"},
                this.renderList(
                    this.default_member_info.filter((item, index) => item.slot==1), "1슬롯", "s1", "col col-4"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.slot==2), "2슬롯", "s2", "col col-4"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.slot==3), "3슬롯", "s3", "col col-4"
                ),
            );
    }

    renderListByClass(){
        return e("ul", {className: "row total"},
                this.renderList(
                    this.default_member_info.filter((item, index) => item.type=="검"), "검병", "sword"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.type=="창"), "창병", "lance"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.type=="책"), "책사", "deceit"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.type=="특"), "특수병", "special"
                ),
            );
    }

    renderListByColor(){
        return e("ul", {className: "row total"},
                this.renderList(
                    this.default_member_info.filter((item, index) => item.color=="적"), "적색", "red", "col col-4"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.color=="황"), "황색", "yellow", "col col-4"
                ),
                this.renderList(
                    this.default_member_info.filter((item, index) => item.color=="청"), "청색", "blue", "col col-4"
                ),
            );
    }

    renderSubMenuBar(){
        //console.log("서브메뉴 호출");
        var _self = this;
        return e("div", {className: "clearfix"}, 
                e(ButtonToolbar, {
                    className: "float-left"
                },
                    e(ToggleButtonGroup, {
                        type: "radio",
                        defaultValue: this.order_mode,
                        onChange: function(value){ 
                            _self.order_mode = value;
                            switch(value){
                                case 1: _self.default_member_info = sort_by_key(_self.default_member_info, (x) => x.slot); break;
                                case 2: _self.default_member_info = sort_by_key(_self.default_member_info, (x) => x.skill_point); break;
                                case 3: _self.default_member_info = sort_by_key(_self.default_member_info, (x) => x.distance)
                            }
                            _self.setState({}); 
                        },
                        name:"color_option"
                    }, 
                        e(ToggleButton, {
                            value: 1,
                            variant: "light"
                        }, "슬롯순"), 
                        e(ToggleButton, {
                            value: 2,
                            variant: "light"
                        }, "사용기력순"), 
                        e(ToggleButton, {
                            value: 3,
                            variant: "light"
                        }, "사거리순"),
                    ),
                ),
                e(ButtonToolbar, {
                    className: "float-right"
                },
                    e(ToggleButtonGroup, {
                        type: "radio",
                        defaultValue: this.view_mode,
                        onChange: function(value){ 
                            _self.view_mode = value;
                            _self.setState({}); 
                        },
                        name:"display_option"
                    }, 
                        e(ToggleButton, {
                            value: 1,
                            variant: "light"
                        }, "국가별"), 
                        e(ToggleButton, {
                            value: 2,
                            variant: "light"
                        }, "슬롯별"), 
                        e(ToggleButton, {
                            value: 3,
                            variant: "light"
                        }, "직업별"),
                        e(ToggleButton, {
                            value: 4,
                            variant: "light"
                        }, "색상별"), 
                        e("button", {
                            "className": "btn btn-danger float-right js_reset", onClick: () => this._reset()
                        }, "선택 초기화"),
                    ),
                ),
            )
    }

    render(){
        var _self = this;
        var renderedList = null;

        switch(this.view_mode) {
            case 1: renderedList = this.renderListByNation(); break;
            case 2: renderedList = this.renderListBySlot(); break;
            case 3: renderedList = this.renderListByClass(); break;
            case 4: renderedList = this.renderListByColor(); break;
        }
        //console.log("장수 선택툴 시작");

        return e("div", {className: "container-fluid"}, 
                e("div", {className: "row"}, 
                    e("div", {className: "col col-12"},
                        e("h1", null, 
                            "로망[Roman] 군단 장수 선택 툴"
                        )
                    )
                ),
                e("div", {className: "row"}, renderedList),
                this.renderSubMenuBar()
            )
    }

    _select_Event(item, e) {
        //console.log("장수 선택")
        console.log(item);

        if(!item.selected) { 
            if(this.select_member.length <= 5){
                item.selected = true;
                this._add_Event(item);
            }else{
                e.target.checked = false;
                $("#max_general_error").toast("show");
            }
        }else{
            item.selected = false;
            this._del_Event(item);
        }
        
        window.history.pushState( 'page2', '선택된 장수', this.current_url + this.select_id);
        this.setState({});
    }

    _add_Event(item){
        this._add_member(item);
        this._add_color_check(item);
        this._add_country_check(item);
        this._add_type_check(item);
        this._add_love_check(item);
    }

    _del_Event(item){
        this._del_member(item);
        this._del_color_check(item);
        this._del_country_check(item);
        this._del_type_check(item);
        this._del_love_check(item);
    }

    _add_member(item){
        let _id = item.id;
        let _name = item.name;
        // let _info = item.info;
        // [1슬롯 / 청속성 / 책략병 / 위나라 / 가장 먼 적 / 사거리 : 34]
        let _info = "[" + 
            item.slot + "슬롯 / " + 
            color_name_list[item.color] + " / " + 
            type_name_list[item.type] + " / " + 
            country_name_list[item.country] + " / " + 
            "기력 " + item.skill_point + " / " + 
            "사거리 " + item.distance + " (" + item.target + ")" +
            "]";


        let _skill = item.skill;
        let _skill_p = item.point;
        let _skill_b = item.skill_b;
        let _skill_a = item.skill_a;
        let _skill_s = item.skill_s;

        if(this.select_id.indexOf(_id) == -1){
            this.select_id.push(_id);
        }
        this.select_member.push(_name);

        let _a = $("<li></li>");
        _a.append($("<span></span>").text(_name), _info);

        let _b = $("<li></li>");
        _b.append($("<span></span").text(_name));
        _b.append(_skill, "<br/>", _skill_p, "<br/>", _skill_b, "<br/>", _skill_a, "<br/>", _skill_s);

        this.result_member_txt.append(_a);
        this.result_member_skill_txt.append(_b);
    }

    _del_member(item){
        let _id = item.id;
        let _name = item.name;

        let _idx = this.select_id.indexOf(_id);
        this.select_id.splice(_idx, 1);
        
        let _idx2 = this.select_member.findIndex(function(item) {return item.name === _name});
        this.select_member.splice(_idx2, 1);

        $.each(this.result_member_txt.children('li'),function(idx, _e){
            if(_e.childNodes[0].textContent == _name){
                _e.remove();
            }
        });
        $.each(this.result_member_skill_txt.children('li'),function(idx, _e){
            if(_e.childNodes[0].textContent == _name){
                _e.remove();
            }
        });
    }
    

    _add_color_check(item){
        switch(item.color){
            case '청' :
                this.color_blue++;
                if(this.color_blue >= 3){
                    this._add_organization(this.default_organiztion_txt[0]);
                }
                break;

            case '적' :
                this.color_red++;
                if(this.color_red >= 3){
                    this._add_organization(this.default_organiztion_txt[1]);
                }
                break;

            case '황' :
                this.color_yellow++;
                if(this.color_yellow >= 3){
                    this._add_organization(this.default_organiztion_txt[2]);
                }
                break;   
        }

        if(this.color_blue >= 4 || this.color_red >= 4 || this.color_yellow >= 4){
            this._add_organization(this.default_organiztion_txt[3]);
        }
        
        if(this.color_blue == 2 && this.color_red == 2 && this.color_yellow == 2){
            this._add_organization(this.default_organiztion_txt[4]);
        }

        if(this.select_member.length == 6){
            if(this.color_blue == 0 || this.color_red == 0 || this.color_yellow == 0){
                this._add_organization(this.default_organiztion_txt[5]);
            }
        }
    }
    
    _del_color_check(item){
        if(this.select_member.length != 6){
            this._del_organization(this.default_organiztion_txt[5]);
        }else{
            if(this.color_blue != 0 || this.color_red != 0 || this.color_yellow != 0){
                this._del_organization(this.default_organiztion_txt[5]);
            }
        }                
        
        if(this.color_blue == 2 || this.color_red == 2 || this.color_yellow == 2){
            this._del_organization(this.default_organiztion_txt[4]);
        }
        
        switch(item.color){
            case '청' :
                if(this.color_blue == 4){
                    this._del_organization(this.default_organiztion_txt[3]);
                }
                if(this.color_blue == 3){
                    this._del_organization(this.default_organiztion_txt[0]);
                }
                this.color_blue--;
                break;
            case '적' :
                if(this.color_red == 4){
                    this._del_organization(this.default_organiztion_txt[3]);
                }
                if(this.color_red == 3){
                    this._del_organization(this.default_organiztion_txt[1]);
                }
                this.color_red--;
                break;
            case '황' :
                if(this.color_yellow == 4){
                    this._del_organization(this.default_organiztion_txt[3]);
                }
                if(this.color_yellow == 3){
                    this._del_organization(this.default_organiztion_txt[2]);
                }
                this.color_yellow--;
                break;
        }
    }

    _add_country_check(item){
        switch(item.country){
            case '위' :
                this.country_wei++;
                if(this.country_wei >= 4){
                    this._add_organization(this.default_organiztion_txt[6]);
                }
                break;

            case '촉' :
                this.country_shu++;
                if(this.country_shu >= 4){
                    this._add_organization(this.default_organiztion_txt[7]);
                }
                break;

            case '오' :
                this.country_wo++;
                if(this.country_wo >= 4){
                    this._add_organization(this.default_organiztion_txt[8]);
                }
                break;

            case '군' :
                this.country_king++;
                if(this.country_king >= 4){
                    this._add_organization(this.default_organiztion_txt[9]);
                }
                break;
        }

        if(this.country_wei >= 1 && this.country_shu >= 1 && this.country_wo >= 1 && this.country_king >= 1){
            this._add_organization(this.default_organiztion_txt[10]);
        }
    }
    
    _del_country_check(item){
        switch(item.country){
            case '위' :
                if(this.country_wei == 4){
                    this._del_organization(this.default_organiztion_txt[6]);
                }
                if(this.country_wei == 1){
                    this._del_organization(this.default_organiztion_txt[10]);
                }
                this.country_wei--;
                break;
            case '촉' :
                if(this.country_shu == 4){
                    this._del_organization(this.default_organiztion_txt[7]);
                }
                if(this.country_shu == 1){
                    this._del_organization(this.default_organiztion_txt[10]);
                }
                this.country_shu--;
                break;
            case '오' :
                if(this.country_wo == 4){
                    this._del_organization(this.default_organiztion_txt[8]);
                }
                if(this.country_wo == 1){
                    this._del_organization(this.default_organiztion_txt[10]);
                }
                this.country_wo--;
                break;

            case '군' :
                if(this.country_king == 4){
                    this._del_organization(this.default_organiztion_txt[9]);
                }
                if(this.country_king == 1){
                    this._del_organization(this.default_organiztion_txt[10]);
                }
                this.country_king--;
                break;
        }
    }

    _add_type_check(item){
        switch(item.type){
            case '검' :
                this.type_sword++;
                if(this.type_sword >= 3){
                    this._add_organization(this.default_organiztion_txt[11]);
                }
                break;

            case '창' :
                this.type_lance++;
                if(this.type_lance >= 3){
                    this._add_organization(this.default_organiztion_txt[12]);
                }
                break;

            case '책' :
                this.type_deceit++;
                if(this.type_deceit >= 3){
                    this._add_organization(this.default_organiztion_txt[13]);
                }
                break;

            case '특' :
                this.type_special++;
                if(this.type_special >= 3){
                    this._add_organization(this.default_organiztion_txt[14]);
                }
                break;

            case '정' :
                // this.country_king++;
                // if(this.country_king >= 4){
                //     this._add_organization(this.default_organiztion_txt[15]);
                // }
                break;
        }

        if(this.country_wei >= 1 && this.country_shu >= 1 && this.country_wo >= 1 && this.country_king >= 1){
            this._add_organization(this.default_organiztion_txt[10]);
        }
    }

    _del_type_check(item){
        
        switch(item.type){
            case '검' :
                if(this.type_sword == 3){
                    this._del_organization(this.default_organiztion_txt[11]);
                }
                this.type_sword--;
                break;
            case '창' :
                if(this.type_lance == 3){
                    this._del_organization(this.default_organiztion_txt[12]);
                }
                this.type_lance--;
                break;
            case '책' :
                if(this.type_deceit == 3){
                    this._del_organization(this.default_organiztion_txt[13]);
                }
                this.type_deceit--;
                break;

            case '특' :
                if(this.type_special == 3){
                    this._del_organization(this.default_organiztion_txt[14]);
                }
                this.type_special--;
                break;
                
            case '정' :
                // if(this.country_king == 4){
                //     this._del_organization(this.default_organiztion_txt[15]);
                // }
                // this.country_king--;
                break;
        }
    }            

    _add_love_check(item){
        if(item.love != null) {
            for(var i = 0 ; i < item.love.length ; i++) {
                this.type_add_love.push(item.love[i]);
            }
        }

        var array = [];

        for(var i = 0 ; i < this.type_add_love.length ; i++) {
            if(array.indexOf(this.type_add_love[i]) < 0) {
                array.push(this.type_add_love[i]);
            }
        }

        for(var i = 0 ; i < array.length ; i++) {
            var cnt = 0;

            for(var j = 0 ; j < this.type_add_love.length ; j++) {
                if(array[i] == this.type_add_love[j]) {
                    cnt++;
                }
            }

            if(this.default_love_cnt_info[array[i]] == cnt) {
                this._add_organization("["+array[i]+"] - "+this.default_love_info[array[i]]);
            }
        }
    }
    _del_love_check(item){
        if(item.love != null ) {
            for(var i = 0 ; i < item.love.length ; i++) {
                this.type_add_love.splice(this.type_add_love.indexOf(item.love[i]),1);
            }
        }
        var array = [];

        for(var i = 0 ; i < this.type_add_love.length ; i++) {
            if(array.indexOf(this.type_add_love[i]) < 0) {
                array.push(this.type_add_love[i]);
            }
        }

        for(var i = 0 ; i < array.length ; i++) {
            var cnt = 0;

            for(var j = 0 ; j < this.type_add_love.length ; j++) {
                if(array[i] == this.type_add_love[j]) {
                    cnt++;
                }
            }

            if(this.default_love_cnt_info[array[i]] != cnt) {
                this._del_organization("["+array[i]+"] - "+this.default_love_info[array[i]]);
            }
        }
    }

    _add_organization(_txt){
        let _idx = this.select_organization.indexOf(_txt);

        if(_idx == -1){
            //console.log('없음 - 추가완료');
            this.select_organization.push(_txt);
            //console.log(this.select_organization);

            //console.log(_txt);
            let _a = $("<li></li>").text(_txt);
            this.result_organization_txt.append(_a);
        }else{
            //console.log('이미 추가되어 있음');
        }
    }

    _del_organization(_txt){
        //console.log(_txt);
        let _idx = this.select_organization.indexOf(_txt);

        if(_idx != -1){
            //console.log('있음 - 삭제완료');
            this.select_organization.splice(_idx, 1);
            //console.log(this.select_organization);
            $.each(this.result_organization_txt.children('li'), function(idx, _e){
                if(_e.textContent == _txt){
                    _e.remove();
                }
            });
        }else{
            //console.log('없음 - 추가조건 아님');
        }
    }

    _reset(){                
        this.select_id = [];
        this.select_member = [];
        this.select_organization = [];
        this.type_add_love = [];

        this.color_blue = 0;
        this.color_red = 0;
        this.color_yellow = 0;

        this.country_wei = 0;
        this.country_shu = 0;
        this.country_wo = 0;
        this.country_king = 0;

        this.type_sword = 0;
        this.type_lance = 0;
        this.type_deceit = 0;
        this.type_special = 0;

        this.result_member_txt.html("");
        this.result_organization_txt.html("");
        this.result_member_skill_txt.html("");

        $.each($("input"), function(idx, _e){
            if(_e.checked) _e.checked = false;
        });
        $.each(this.default_member_info, function(idx, _e){
            _e.selected=false;
        })
    }
}

ReactDOM.render(   
    e(Deck, null),
    document.getElementById('root')
);
