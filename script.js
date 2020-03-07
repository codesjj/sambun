'use strict';

const e = React.createElement;

class Deck extends React.Component{
    load_data(){
        let _self = this;
        $.getJSON("organization_info.json", function(data){
            _self.default_organiztion_txt = data;
        })

        $.getJSON("member_info.json", function(data){
            _self.default_member_info = data;
        })

        $.getJSON("love_cnt_info.json", function(data){
            _self.default_love_cnt_info = data;
        })

        $.getJSON("love_info.json", function(data){
            _self.default_love_info = data;
        })
    }
    constructor(){
        super();

        let _self = this;

        this.load_data();

        this.select_Btn = $('input');
        this.reset_Btn = $('.js_reset');

        this.result_member_txt = $('.type1');
        this.result_organization_txt = $('.type2');
        this.result_member_skill_txt = $('.type3');

        this.select_member = [];
        this.select_organization = [];

        this.current_select_member = undefined;
        
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
        this.mount();
    }

    mount(){
        let _self = this;
        this.select_Btn.click(function(){
            let _name = this.getAttribute('data-name');
            let _idx = _self.default_member_info.findIndex(function(item) {return item.name === _name});

            let selectTarget = _self.default_member_info[_idx];
            
            _self.current_select_member = selectTarget;

            if(this.checked) {
                if(_self.select_member.length <= 5){
                    _self._add_Event();
                }else{
                    alert('6명의 장수만 선택가능합니다.');
                    this.checked = false;
                }
            }else{
                //console.log('cancel');
                _self._del_Event();
            }
        });

        this.reset_Btn.click(function(){
            _self._reset();
        });
    }

    render(){
    }

    _add_Event(){
        this._add_member();
        this._add_color_check();
        this._add_country_check();
        this._add_type_check();
        this._add_love_check();
    }

    _del_Event(){
        this._del_member();
        this._del_color_check();
        this._del_country_check();
        this._del_type_check();
        this._del_love_check();
    }

    _add_color_check(){
        switch(this.current_select_member.color){
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
    
    _del_color_check(){
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
        
        switch(this.current_select_member.color){
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

    _add_country_check(){
        switch(this.current_select_member.country){
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
    
    _del_country_check(){
        
        switch(this.current_select_member.country){
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

    _add_type_check(){
        switch(this.current_select_member.type){
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

    _del_type_check(){
        
        switch(this.current_select_member.type){
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

    _add_love_check(){
        if(this.current_select_member.love != null) {
            for(var i = 0 ; i < this.current_select_member.love.length ; i++) {
                this.type_add_love.push(this.current_select_member.love[i]);
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
    _del_love_check(){
        if(this.current_select_member.love != null ) {
            for(var i = 0 ; i < this.current_select_member.love.length ; i++) {
                this.type_add_love.splice(this.type_add_love.indexOf(this.current_select_member.love[i]),1);
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

    _add_member(){
        let _name = this.current_select_member.name;
        let _info = this.current_select_member.info;

        let _skill = this.current_select_member.skill;
        let _skill_p = this.current_select_member.point;
        let _skill_b = this.current_select_member.skill_b;
        let _skill_a = this.current_select_member.skill_a;
        let _skill_s = this.current_select_member.skill_s;

        this.select_member.push(_name);

        let _a = $("<li></li>");
        _a.append($("<span></span>").text(_name), _info);

        let _b = $("<li></li>");
        _b.append($("<span></span").text(_name));
        _b.append(_skill, "<br/>", _skill_p, "<br/>", _skill_b, "<br/>", _skill_a, "<br/>", _skill_s);

        this.result_member_txt.append(_a);
        this.result_member_skill_txt.append(_b);
    }

    _del_member(){
        let _name = this.current_select_member.name;
        let _idx = this.select_member.findIndex(function(item) {return item.name === _name});
        this.select_member.splice(_idx, 1);

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
        this.select_member = [];
        this.select_organization = [];
        this.type_add_love = [];

        this.current_select_member = undefined;
        
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

        $.each(this.select_Btn, function(idx, _e){
            if(_e.checked) _e.checked = false;
        });
    }
}

ReactDOM.render(   
    e(Deck, null),
    document.getElementById('root')
);

// $(function(){
    // new Deck().mount()
// })