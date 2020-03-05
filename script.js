class set{
    constructor(){
        this.default_organiztion_txt = [
            '[청속성 단결] - 모든 아군의 공격력 10% 증가',
            '[적속성 단결] - 모든 아군의 치명타 확률 7% 증가',
            '[황속성 단결] - 모든 아군의 체력 10% 증가',
            '[강력한 의지] - 모든 아군의 물리방어력, 책략방어력 10% 증가',
            '[완벽한 균형] - 모든 아군의 통솔력, 무력, 지력, 순발력이 10 증가',
            '[선택과 집중] - 상성피해량 20% 증가',

            '[위나라 편성] - 모든 아군의 물리 공격력, 책략 공격력 8% 증가',
            '[촉나라 편성] - 모든 아군의 물리 방어력, 책략 방어력 8% 증가',
            '[오나라 편성] - 아군의 모든 기력 2초당 회복량 1 증가',
            '[군웅 편성] - 모든 아군의 치명타 피해량 50% 증가',
            '[영웅집결] - 기력 소모 시 소모량의 5%를 다시 회복',

            '[검병 편성] - 아군 모든 검병의 물리방어력 3% 증가',
            '[창병 편성] - 아군 모든 창병의 물리공격력 3% 증가',
            '[책략병 편성] - 아군 모든 책략병의 책략공격력 3% 증가',
            '[특수병 편성] - 아군 모든 특수병의 공격속도 3% 증가',
            '[정예병 편성] - 아군 모든 정예병사의 통솔력이 10 증가',
        ];

        this.default_member_info = [
            {
                'name' : "가후",
                'info' : "[1슬롯 / 청속성 / 책략병 / 위나라 / 가장 먼 적 / 사거리 : 34]",
                'color':"청",
                'country':"위",
                'd_type':"책",
                'skill' : '고유스킬 : 일반 공격 시, 대상과 속성이 같으면 15% 확률로 8초간 침묵 부여 ',
                'point' : '스킬사용시 기력소모량 : 66 ',
                'skill_b' : 'B 스킬 : 공격력의 240%로 가장 먼 적 3명 타격',
                'skill_a' : 'A 스킬 : 대상과 속성이 다르면 15초간 침묵 부여',
                'skill_s' : 'S 스킬 : 대상의 공격력 12초간 62% 감소'
            },
            {
                'name' : "순욱",
                'info' : "[2슬롯 / 황속성 / 책략병 / 위나라 / 가장 먼 적 / 사거리 : 32 ]",
                'color':"황",
                'country':"위",
                'd_type':"책",
                'love'  : ["왕좌지재"],
                'skill' : '고유스킬 : 적용받는 디버프의 지속시간 90% 감소',
                'point' : '스킬사용시 기력소모량 : 65',
                'skill_b' : 'B 스킬 : 공격력의 200% 만큼 체력비율이 가장 낮은 아군 2명의 체력 회복',
                'skill_a' : 'A 스킬 : 모든 아군의 상태이상 제거',
                'skill_s' : 'S 스킬 : 모든 아군에게 12초간 디버프면역 부여'
            },
            {
                'name' : "장합",
                'info' : "[2슬롯 / 적속성 / 검병 / 위나라 / 가까운 적 / 사거리 : 8 ]",
                'color':"적",
                'country':"위",
                'd_type':"검",
                'skill' : '고유스킬 : 일반 공격 5회를 하거나 스킬을 쓰면 회피 기회 1를 얻는다',
                'point' : '스킬사용시 기력소모량 : 46',
                'skill_b' : 'B 스킬 : 공격력의 300%로 가장 먼 적 1명 타격',
                'skill_a' : 'A 스킬 : 대상이 책사면 공격력의 135%로 3단 추가 타격',
                'skill_s' : 'S 스킬 : 대상에게 8초간 침묵 부여'
            },
            {
                'name' : "조조",
                'info' : "[2슬롯 / 적속성 / 검병 / 위나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"청",
                'country':"위",
                'd_type':"검",
                'love'  : ["맹덕과 봉효", "왕좌지재", "오관참육창"],
                'skill' : '고유스킬 : 디버프를 받으면, 50% 확률로 디버프를 건 상대도 디버프 적용',
                'point' : '스킬사용시 기력소모량 : 55',
                'skill_b' : 'B 스킬 : 공격력의 255%로 가장 가까운 적 2명 타격',
                'skill_a' : 'A 스킬 : 대상이 검병이나 창병이면 12초간 혼란 부여',
                'skill_s' : 'S 스킬 : 대상이 가진 버프를 6~6개 만큼 랜덤 제거'
            },
            {
                'name' : "조창",
                'info' : "[2슬롯 / 적속성 / 창병 / 위나라 / 가까운 적 / 사거리 : 21 ]",
                'color':"적",
                'country':"위",
                'd_type':"창",
                'skill' : '고유스킬 : 일반 공격 시 (대상의 체력비율 x 0.5)% 만큼 피해량 증가',
                'point' : '스킬사용시 기력소모량 : 55',
                'skill_b' : 'B 스킬 : 공격력의 270%로 공격력이 가장 높은 적 1명 타격 후 뒤로 크게 넉백',
                'skill_a' : 'A 스킬 : 타격한 대상의 이동속도 12초간 70% 감소',
                'skill_s' : 'S 스킬 : 타격한 대상의 모든방어력 12초간 55% 감소'
            },
            {
                'name' : "하후연",
                'info' : "[2슬롯 / 적속성 / 특수병 / 위나라 / 가까운 적 / 사거리 : 17 ]",
                'color':"적",
                'country':"위",
                'd_type':"특",
                'love'  : ["하후형제"],
                'skill' : '고유스킬 : 적을 죽이면 5초간 공격속도 50% 증가',
                'point' : '스킬사용시 기력소모량 : 67',
                'skill_b' : 'B 스킬 : 공격력의 220%로 가장 가까운 적 3명 타격 후 넉백',
                'skill_a' : 'A 스킬 : 12초간 공격속도와 이동속도 70% 증가',
                'skill_s' : 'S 스킬 : 대상을 이기는 상성이면 공격력의 100%로 치명타 추가 타격'
            },
            {
                'name' : "하후돈",
                'info' : "[3슬롯 / 황속성 / 검병 / 위나라 / 가까운 적 / 사거리 : 8 ]",
                'color':"황",
                'country':"위",
                'd_type':"검",
                'love'  : ["하후형제"],
                'skill' : '고유스킬 : 공격 시 대상이 보호막을 보유하고 있으면 피해량 80% 증가',
                'point' : '스킬사용시 기력소모량 : 52',
                'skill_b' : 'B 스킬 : 공격력의 290%로 가장 가까운 적 1명 타격',
                'skill_a' : 'A 스킬 : 대상이 디버프를 가지고 있으면 공격력의 280%로 추가 타격',
                'skill_s' : 'S 스킬 : 대상의 물리방어력이 자신보다 높으면 10초간 출혈 부여(초당 최대 체력의 4% 피해)'
            },
            {
                'name' : "곽가",
                'info' : "[3슬롯 / 황속성 / 책략병 / 위나라 / 가까운 적 / 사거리 : 19 ]",
                'color':"황",
                'country':"위",
                'd_type':"책",
                'love'  : ["맹덕과 봉효"],
                'skill' : '고유스킬 : 버프 또는 디버프를 얻을 때마다, 치명타피해 8씩 누적 증가(최대 100)',
                'point' : '스킬사용시 기력소모량 : 75',
                'skill_b' : 'B 스킬 : 공격력의 160%로 모든 적 타격',
                'skill_a' : 'A 스킬 : 모든 적의 공격속도와 이동속도 12초간 40% 감소',
                'skill_s' : 'S 스킬 : 자신이 가진 버프와 디버프를 모두 소진하여 모든 적에게 공격력의 150% x (버프와 디버프 수 x 0.25) 로 추가 타격'
            },
            {
                'name' : "허저",
                'info' : "[3슬롯 / 청속성 / 특수병 / 위나라 / 가까운 적 / 사거리 : 5 ]",
                'color':"청",
                'country':"위",
                'd_type':"특",
                'skill' : '고유스킬 : 지는 상성이라도 추가 피해를 받지 않음',
                'point' : '스킬사용시 기력소모량 : 57',
                'skill_b' : 'B 스킬 : 12초간 모든방어력이 70% 증가',
                'skill_a' : 'A 스킬 : 최대 체력의 50% 만큼의 보호막을 자신에게 12초간 부여',
                'skill_s' : 'S 스킬 : 자신에게 15초간 도발 부여'
            },
            {
                'name' : "황월영",
                'info' : "[1슬롯 / 청속성 / 책략병 / 촉나라 / 가까운 적 / 사거리 : 18 ]",
                'color':"청",
                'country':"촉",
                'd_type':"책",
                'love'  : ["량재녀모"],
                'skill' : '고유스킬 : 일반공격 10회 마다 또는 치명타 타격 시 피해량의 50%만큼 체력비율이 가장 낮은 아군 1명 회복',
                'point' : '스킬사용시 기력소모량 : 65',
                'skill_b' : 'B 스킬 : 공격력의 250%로 가까운 적 2명 타격',
                'skill_a' : 'A 스킬 : 타격한 대상에게 입힌 피해량의 35% 만큼 모든 아군 회복(2명 타격 중 마지막 타격으로 인정)',
                'skill_s' : 'S 스킬 : 타격한 대상에게 12초간 보급선차단 부여'
            },
            {
                'name' : "마초",
                'info' : "[2슬롯 / 적속성 / 창병 / 촉나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"적",
                'country':"촉",
                'd_type':"창",
                'skill' : '고유스킬 : 스킬 피해를 받으면, 다음 일반 공격이 치명타로 발동',
                'point' : '스킬사용시 기력소모량 : 59',
                'skill_b' : 'B 스킬 : 12초간 공격력 70% 증가',
                'skill_a' : 'A 스킬 : 모든 아군 창병의 치명타확률 15초간 62% 증가',
                'skill_s' : 'S 스킬 : 공격력의 255%로 가까운 적 2명 타격 후 넉백'
            },
            {
                'name' : "서서",
                'info' : "[2슬롯 / 청속성 / 책략병 / 촉나라 / 가까운 적 / 사거리 : 20 ]",
                'color':"청",
                'country':"촉",
                'd_type':"책",
                'skill' : '고유스킬 : 죽은 아군 1명 당 스킬 소모 기력 6 감소',
                'point' : '스킬사용시 기력소모량 : 62',
                'skill_b' : 'B 스킬 : 공격력이 가장 높은 아군 3명의 공격속도 8초간 150% 증가',
                'skill_a' : 'A 스킬 : 공격력이 가장 높은 아군 3명의 치명타확률 12초간 55% 증가',
                'skill_s' : 'S 스킬 : 공격력이 가장 높은 아군 3명이 보유한 모든 버프 지속시간 30% 증가'
            },
            {
                'name' : "유비",
                'info' : "[2슬롯 / 황속성 / 검병 / 촉나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"황",
                'country':"촉",
                'd_type':"검",
                'love'  : ["도원결의","수어지교"],
                'skill' : '고유스킬 : 피해를 받으면, 12% 확률로 공격자의 공격력 6초간 10% 감소',
                'point' : '스킬사용시 기력소모량 : 63',
                'skill_b' : 'B 스킬 : 시전자 최대 체력의 30% 만큼 가까운 아군 2명과 자신의 체력 회복',
                'skill_a' : 'A 스킬 : 모든 원거리 공격 아군의 공격속도 12초간 55% 증가',
                'skill_s' : 'S 스킬 : 체력비율이 가장 낮은 적 1명에게 15초간 집중타겟 부여'
            },
            {
                'name' : "황충",
                'info' : "[2슬롯 / 청속성 / 특수병 / 촉나라 / 가장 먼 적 / 사거리 : 32 ]",
                'color':"청",
                'country':"촉",
                'd_type':"특",
                'skill' : '고유스킬 : 일반 공격 시, 대상이 버프가 있으면 피해량 15% 증가',
                'point' : '스킬사용시 기력소모량 : 53',
                'skill_b' : 'B 스킬 : 공격력의 300%로 가장 먼 적 1명 타격',
                'skill_a' : 'A 스킬 : 대상의 체력비율이 더 높으면 공격력의 200%로 추가 타격',
                'skill_s' : 'S 스킬 : 대상에게 5초간 화염 부여 (초당 최대 체력의 6% 피해)'
            },
            {
                'name' : "제갈량",
                'info' : "[3슬롯 / 황속성 / 책략병 / 촉나라 / 가까운 적 / 사거리 : 20 ]",
                'color':"황",
                'country':"촉",
                'd_type':"책",
                'love'  : ["수어지교","량재녀모"],
                'skill' : '고유스킬 : 동일한 속성의 아군이 피해를 받으면 자신의 스킬피해량 0.5%씩 누적 증가(최대 60%)',
                'point' : '스킬사용시 기력소모량 : 74',
                'skill_b' : 'B 스킬 : 공격력의 190%로 모든 적 타격',
                'skill_a' : 'A 스킬 : 대상이 속성이 다르면 대상의 모든방어력 12초간 50% 감소',
                'skill_s' : 'S 스킬 : 적용중인 버프(디버프 포함)가 3개 이상인 모든 대상에게 8초간 혼란 부여'
            },
            {
                'name' : "장비",
                'info' : "[3슬롯 / 황속성 / 창병 / 촉나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"황",
                'country':"촉",
                'd_type':"창",
                'love'  : ["도원결의"],
                'skill' : '고유스킬 : 치명타로 인한 추가 피해를 무시하며 치명타를 받으면 최대체력이 0.5%씩 누적 증가(최대 25%)',
                'point' : '스킬사용시 기력소모량 : 68',
                'skill_b' : 'B 스킬 : 공격력의 255%로 가장 가까운 적 1명과 그와 인접한 모든 적 타격 후 넉백',
                'skill_a' : 'A 스킬 : 12초간 물리방어력 70% 증가',
                'skill_s' : 'S 스킬 : 12초간 자신에게 디버프면역 부여'
            },
            {
                'name' : "관우",
                'info' : "[3슬롯 / 적속성 / 창병 / 촉나라 / 가까운 적 / 사거리 : 8 ]",
                'color':"적",
                'country':"촉",
                'd_type':"창",
                'love'  : ["도원결의","오관참육창"],
                'skill' : '고유스킬 : 일반 공격 시, 대상의 물리방어력 4%씩 누적 감소 (최대 60%)',
                'point' : '스킬사용시 기력소모량 : 50',
                'skill_b' : 'B 스킬 : 공격력의 280%로 가장 가까운 적 1명 타격',
                'skill_a' : 'A 스킬 : 자신의 물리공격력 12초간 65% 증가',
                'skill_s' : 'S 스킬 : 대상이 디버프를 가지고 있으면 공격력의 130% x (디버프 수 x 0.75)로 방어무시 추가 타격(최대 적용 디버프 3개)'
            },
            {
                'name' : "조운",
                'info' : "[3슬롯 / 적속성 / 창병 / 촉나라 / 가까운 적 / 사거리 : 8 ]",
                'color':"적",
                'country':"촉",
                'd_type':"창",
                'love'  : ["상산 조자룡"],
                'skill' : '고유스킬 : 일반 공격 시, 대상이 가진 버프 중 1개를 동일하게 얻는다 (버프시간이 초기값으로 적용)',
                'point' : '스킬사용시 기력소모량 : 56',
                'skill_b' : 'B 스킬 : 공격력의 260%로 가장 가까운 적 2명 타격',
                'skill_a' : 'A 스킬 : 타격한 대상에게 12초간 상흔 부여',
                'skill_s' : 'S 스킬 : 모든 근접 공격 아군의 물리공격력 12초간 35% 증가'
            },
            {
                'name' : "능통",
                'info' : "[1슬롯 / 적속성 / 책략병 / 오나라 / 가장 먼 적 / 사거리 : 28 ]",
                'color':"적",
                'country':"오",
                'd_type':"책",
                'skill' : '고유스킬 : 표식이 있는 대상을 일반 공격 시 피해량의 30%로 추가 타격',
                'point' : '스킬사용시 기력소모량 : 56',
                'skill_b' : 'B 스킬 : 가장 먼 적 1명에게 표식을 12초간 부여',
                'skill_a' : 'A 스킬 : 12초간 공격속도 80% 증가',
                'skill_s' : 'S 스킬 : 표식이 있는 적이 죽으면 처치한 아군에게 공격력의 120%로 8초간 부여'
            },
            {
                'name' : "손상향",
                'info' : "[1슬롯 / 청속성 / 특수병 / 오나라 / 가장 먼 적 / 사거리 : 30 ]",
                'color':"청",
                'country':"오",
                'd_type':"특",
                'skill' : '고유스킬 : 체력이 30% 이하면, 공격력 25% 증가',
                'point' : '스킬사용시 기력소모량 : 55',
                'skill_b' : 'B 스킬 : 공격력의 270%로 가장 먼 적 2명 타격',
                'skill_a' : 'A 스킬 : 대상과 속성이 다르면 대상에게 12초간 기절 부여',
                'skill_s' : 'S 스킬 : 대상의 공격력 20초간 30% 감소'
            },
            {
                'name' : "소교",
                'info' : "[1슬롯 / 황속성 / 책략병 / 오나라 / 가까운 적 / 사거리 : 20 ]",
                'color':"황",
                'country':"오",
                'd_type':"책",
                'love'  : ["강동이교"],
                'skill' : '고유스킬 : 6초마다 물리방어력과 책략방어력의 합의 8%만큼 가장 가까운 아군 2명을 회복',
                'point' : '스킬사용시 기력소모량 : 70',
                'skill_b' : 'B 스킬 : 물리방어력과 책략방어력 합의 130% 만큼 모든 아군 체력 회복',
                'skill_a' : 'A 스킬 : 모든 아군의 모든방어력 12초간 40% 증가',
                'skill_s' : 'S 스킬 : 모든 아군이 가진 디버프를 각자 6~6개 만큼 랜덤 제거'
            },
            {
                'name' : "대교",
                'info' : "[2슬롯 / 황속성 / 책략병 / 오나라 / 가까운 적 / 사거리 : 20 ]",
                'color':"황",
                'country':"오",
                'd_type':"책",
                'love'  : ["강동이교"],
                'skill' : '고유스킬 : 스킬 피해를 받으면, 공격력의 85% 만큼 체력비율이 가장 낮은 아군 1명 체력 회복',
                'point' : '스킬사용시 기력소모량 : 50',
                'skill_b' : 'B 스킬 : 공격력의 350% 만큼 체력비율이 가장 낮은 아군 1명의 체력 회복',
                'skill_a' : 'A 스킬 : 체력비율이 가장 낮은 아군 1명의 물리방어력 12초간 70% 증가',
                'skill_s' : 'S 스킬 : 체력비율이 가장 낮은 아군 1명에게 대상의 최대 체력의 60% 만큼의 보호막을 12초간 부여'
            },
            {
                'name' : "손권",
                'info' : "[2슬롯 / 적속성 / 책략병 / 오나라 / 가까운 적 / 사거리 : 8 ]",
                'color':"적",
                'country':"오",
                'd_type':"책",
                'skill' : '고유스킬 : 피격 시 20% 확률로 모든 아군 책략병이 각자 최대 체력의 3%만큼 회복',
                'point' : '스킬사용시 기력소모량 : 58',
                'skill_b' : 'B 스킬 : 공격력의 200%로 인접한 모든 적 타격',
                'skill_a' : 'A 스킬 : 타격된 대상의 모든 방어력 12초간 30% 감소',
                'skill_s' : 'S 스킬 : 모든 아군 책략병의 책략공격력과 물리방어력을 12초간 25% 증가'
            },
            {
                'name' : "여몽",
                'info' : "[2슬롯 / 청속성 / 특수병 / 오나라 / 가장 먼 적 / 사거리 : 37 ]",
                'color':"청",
                'country':"오",
                'd_type':"특",
                'love'  : ["오하아몽"],
                'skill' : '고유스킬 : 5회 이상 일반 공격한 대상에게 주는 피해량 1.5배 증가',
                'point' : '스킬사용시 기력소모량 : 67',
                'skill_b' : 'B 스킬 : 공격력의 270%로 가장 먼 적 1명과 그와 인접한 모든 적 타격',
                'skill_a' : 'A 스킬 : 대상을 이기는 상성이면 공격력의 180%로 추가 타격',
                'skill_s' : 'S 스킬 : 대상의 공격타입이 물리이면 공격력의 180%로 추가 타격'
            },
            {
                'name' : "황개",
                'info' : "[2슬롯 / 황속성 / 특수병 / 오나라 / 가까운 적 / 사거리 : 5 ]",
                'color':"황",
                'country':"오",
                'd_type':"특",
                'skill' : '고유스킬 : 적용받는 버프 1개당 모든방어력 20%씩 증가',
                'point' : '스킬사용시 기력소모량 : 57',
                'skill_b' : 'B 스킬 : 공격력의 280%로 인접한 적 중에 체력비율이 가장 높은 1명 타격 후 뒤로 크게 넉백',
                'skill_a' : 'A 스킬 : 대상의 이동속도 15초간 70% 감소',
                'skill_s' : 'S 스킬 : 시전자 최대 체력의 50% 만큼 가장 가까운 아군 1명과 자신의 체력 회복'
            },
            {
                'name' : "감녕",
                'info' : "[3슬롯 / 황속성 / 특수병 / 오나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"황",
                'country':"오",
                'd_type':"특",
                'love'  : ["담소자약"],
                'skill' : '고유스킬 : 스킬을 사용하면, 대상 바로 뒤로 이동',
                'point' : '스킬사용시 기력소모량 : 58',
                'skill_b' : 'B 스킬 : 공격력의 300%로 체력비율이 가장 낮은 적 1명 타격',
                'skill_a' : 'A 스킬 : 8초간 공격속도 100% 증가',
                'skill_s' : 'S 스킬 : 스킬로 적을 죽이면 100% 확률로 스킬 한 번 더 발동'
            },
            {
                'name' : "주유",
                'info' : "[3슬롯 / 황속성 / 책략병 / 오나라 / 가까운 적 / 사거리 : 19 ]",
                'color':"황",
                'country':"오",
                'd_type':"책",
                'love'  : ["오하아몽","담소자약"],
                'skill' : '고유스킬 : 일반 공격시, 대상의 최대체력이 더 높으면 20% 확률로 3초간 화염 부여(초당 최대 체력의 1% 피해)',
                'point' : '스킬사용시 기력소모량 : 71',
                'skill_b' : 'B 스킬 : 공격력의 220%로 모든 적 타격',
                'skill_a' : 'A 스킬 : 대상과 속성이 다르면 대상이 가진 버프를 각각 6~6개 만큼 랜덤 제거',
                'skill_s' : 'S 스킬 : 대상을 이기는 상성이면 5초간 화염 부여 (초당 최대 체력의 2% 피해)'
            },
            {
                'name' : "태사자",
                'info' : "[3슬롯 / 청속성 / 특수병 / 오나라 / 가까운 적 / 사거리 : 7 ]",
                'color':"청",
                'country':"오",
                'd_type':"특",
                'skill' : '고유스킬 : 10초마다 자신의 최대체력의 5% 만큼 회복',
                'point' : '스킬사용시 기력소모량 : 65',
                'skill_b' : 'B 스킬 : 공격력의 180%로 랜덤 적 6회 타격(중복 공격 허용)',
                'skill_a' : 'A 스킬 : 대상의 모든 공격력 10초간 50% 감소',
                'skill_s' : 'S 스킬 : 공격력의 200% 만큼 체력 회복'
            },
            {
                'name' : "공손찬",
                'info' : "[1슬롯 / 청속성 / 창병 / 군웅 / 가까운 적 / 사거리 : 7 ]",
                'color':"청",
                'country':"군",
                'd_type':"창",
                'love'  : ["상산 조자룡"],
                'skill' : '고유스킬 : 일반 공격 시, 대상의 공격속도 3% 씩 누적 감소 (최대39%)',
                'point' : '스킬사용시 기력소모량 : 54',
                'skill_b' : 'B 스킬 : 공격력의 280%로 가까운 적 1명 타격',
                'skill_a' : 'A 스킬 : 대상의 공격속도와 이동속도가 12초간 70% 감소',
                'skill_s' : 'S 스킬 : 대상을 제외한 모든 적의 공격속도와 이동속도가 12초간 40% 감수'
            },
            {
                'name' : "안량",
                'info' : "[1슬롯 / 적속성 / 검병 / 군웅 / 가까운 적 / 사거리 : 5 ]",
                'color':"적",
                'country':"군",
                'd_type':"검",
                'love'  : ["하북대장군"],
                'skill' : '고유스킬 : 체력 회복 시, 회복량 2배 증가',
                'point' : '스킬사용시 기력소모량 : 57',
                'skill_b' : 'B 스킬 : 공격력의 255%로 가까운적 2명 타격',
                'skill_a' : 'A 스킬 : 12초간 물리방어력 70% 증가',
                'skill_s' : 'S 스킬 : 자신이 가진 디버프를 6~6개 만큼 랜덤 제거'
            },
            {
                'name' : "원소",
                'info' : "[1슬롯 / 적속성 / 검병 / 군웅 / 가까운 적 / 사거리 : 7 ]",
                'color':"적",
                'country':"군",
                'd_type':"검",
                'love'  : ["하북대장군", "원가형제"],
                'skill' : '고유스킬 : 체력이 40% 이하이면, 물리방어력 30% 증가',
                'point' : '스킬사용시 기력소모량 : 54',
                'skill_b' : 'B 스킬 : 공격력의 255%로 가장 가까운 적 2명 타격',
                'skill_a' : 'A 스킬 : 시전자 공격력의 62%만큼 가까운 아군 1명과 자신의 책략방어력 12초간 증가',
                'skill_s' : 'S 스킬 : 대상이 검병 또는 특수병이면 공격력의 200%로 추가 타격'
            },
            {
                'name' : "원술",
                'info' : "[1슬롯 / 청속성 / 책략병 / 군웅 / 가까운 적 / 사거리 : 18 ]",
                'color':"청",
                'country':"군",
                'd_type':"책",
                'love'  : ["원가형제"],
                'skill' : '고유스킬 : 5초 이상 아무런 피해를 받지 않는다면 가장 낮은 기력 5회복 (5초마다 반복)',
                'point' : '스킬사용시 기력소모량 : 61',
                'skill_b' : 'B 스킬 : 12초간 공격력 70% 증가',
                'skill_a' : 'A 스킬 : 공격력의 270% 만큼 가까운 아군 2명과 자신의 체력 회복',
                'skill_s' : 'S 스킬 : 자신의 속성과 다른 기력 20 충전'
            },
            {
                'name' : "축융",
                'info' : "[1슬롯 / 적속성 / 특수병 / 군웅 / 가까운 적 / 사거리 : 17 ]",
                'color':"적",
                'country':"군",
                'd_type':"특",
                'skill' : '고유스킬 : 일반 공격 시, 대상이 상태이상이면 5초간 상흔 부여',
                'point' : '스킬사용시 기력소모량 : 51',
                'skill_b' : 'B 스킬 : 공격력의 240%로 랜덤 적 3명 타격',
                'skill_a' : 'A 스킬 : 대상과 속성이 같으면 12초간 상흔 부여',
                'skill_s' : 'S 스킬 : 아군 특수병의 치명타확률 15초간 62% 증가'
            },
            {
                'name' : "문추",
                'info' : "[2슬롯 / 청속성 / 검병 / 군웅 / 가까운 적 / 사거리 : 5 ]",
                'color':"청",
                'country':"군",
                'd_type':"검",
                'love'  : ["하북대장군"],
                'skill' : '고유스킬 : 넉백에 면역, 넉백을 받을 때마다 모든방어력 5%씩 누적 증가',
                'point' : '스킬사용시 기력소모량 : 66',
                'skill_b' : 'B 스킬 : 모든 아군의 물리방어력 12초간 40% 증가',
                'skill_a' : 'A 스킬 : 공격력의 255%로 가장 가까운 적 2명 타격',
                'skill_s' : 'S 스킬 : 공격력이 가장 높은 적 2명에게 12초간 기절 부여'
            },
            {
                'name' : "장각",
                'info' : "[2슬롯 / 청속성 / 책략병 / 군웅 / 가까운 적 / 사거리 : 20 ]",
                'color':"청",
                'country':"군",
                'd_type':"책",
                'skill' : '고유스킬 : 20초마다 랜덤 적 한 명을 대상으로 스킬 시전',
                'point' : '스킬사용시 기력소모량 : 61',
                'skill_b' : 'B 스킬 : 공격력의 200%로 랜덤 적 3명 타격',
                'skill_a' : 'A 스킬 : 대상의 이동속도 12초간 50% 감소',
                'skill_s' : 'S 스킬 : 대상에게 각각 45% 확률로 12초간 혼란 부여'
            },
            {
                'name' : "여포",
                'info' : "[3슬롯 / 황속성 / 창병 / 군웅 / 가까운 적 / 사거리 : 8 ]",
                'color':"황",
                'country':"군",
                'd_type':"창",
                'love'  : ["폐월과 봉선"],
                'skill' : '고유스킬 : 체력이 60% 이하일 때 피해를 받으면, 받을 때마다 공격력이 1%씩 누적 증가(최대30%)',
                'point' : '스킬사용시 기력소모량 : 53',
                'skill_b' : 'B 스킬 : 12초간 공격력의 70% 증가',
                'skill_a' : 'A 스킬 : 12초간 공격속도와 이동속도 70% 증가',
                'skill_s' : 'S 스킬 : 스킬 지속시간 6초 증가'
            },
            {
                'name' : "초선",
                'info' : "[3슬롯 / 적속성 / 책략병 / 군웅 / 가까운 적 / 사거리 : 19 ]",
                'color':"적",
                'country':"군",
                'd_type':"책",
                'love'  : ["폐월과 봉선"],
                'skill' : '고유스킬 : 전투 시작 시 보호막이 없는 모든 아군에게 8초간 1의 보호막 부여(이후 아군이 스킬을 5회 사용시마다 반복)',
                'point' : '스킬사용시 기력소모량 : 50',
                'skill_b' : 'B 스킬 : 체력비율이 가장 낮은 아군 1명에게 10초간 지속 회복 부여(초당 공격력의 59% 회복)',
                'skill_a' : 'A 스킬 : 버프를 가장 많이 보유한 적군 1명의 공격력 12초간 40% 감소',
                'skill_s' : 'S 스킬 : 체력비율이 가장 낮은 아군 1명의 최대체력을 16초간 공격력의 75%만큼 증가'
            }
        ]

        this.default_love_cnt_info = { "도원결의"    : "3" ,
                       "상산 조자룡" : "2" ,
                       "맹덕과 봉효" : "2" ,
                       "오하아몽"    : "2" ,
                       "하북대장군"  : "3" ,
                       "강동이교"    : "2" ,
                       "담소자약"    : "2" ,
                       "하후형제"    : "2" ,
                       "수어지교"    : "2" ,
                       "왕좌지재"    : "2" ,
                       "오관참육창"  : "2" ,
                       "원가형제"    : "2" ,
                       "량재녀모"    : "2" ,
                       "폐월과 봉선" : "2"
                     };

        this.default_love_info = {  "도원결의"    : "유비, 관우, 장비의 체력이 15% 증가" ,
                       "상산 조자룡" : "공손찬, 조운의 무력이 10 증가" ,
                       "맹덕과 봉효" : "조조, 곽가의 통솔력이 10 증가" ,
                       "오하아몽"    : "주유, 여몽의 지력이 10 증가" ,
                       "하북대장군"  : "원소, 문추, 안량의 물리공격력이 15% 증가" ,
                       "강동이교"    : "대교, 소교의 지력이 10 증가" ,
                       "담소자약"    : "감녕, 주유의 물리방어력이 10% 증가" ,
                       "하후형제"    : "하후돈, 하후연의 물리공격력이 10% 증가" ,
                       "수어지교"    : "유비, 제갈량의 지력이 10 증가" ,
                       "왕좌지재"    : "조조, 순욱의 책략방어력이 10% 증가" ,
                       "오관참육창"  : "조조, 관우의 무력이 10 증가" ,
                       "원가형제"    : "원소, 원술의 물리방어력이 10% 증가" ,
                       "량재녀모"    : "제갈량, 황월영의 책략방어력이 10% 증가" ,
                       "폐월과 봉선" : "초선, 여포의 순발력이 10 증가"
        };

        this.select_Btn = document.querySelectorAll('input');

        this.reset_Btn = document.querySelectorAll('.js_reset');

        this.result_member_txt = document.querySelector('.type1');
        this.result_organization_txt = document.querySelector('.type2');
        this.result_member_skill_txt = document.querySelector('.type3');

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
    }

    mount(){
        let _self = this;
        this.select_Btn.forEach((_e)=>{
            _e.addEventListener('click', function(){
                
                let _name = this.getAttribute('data-name');
                let _idx = _self.default_member_info.findIndex(function(item) {return item.name === _name});
                
                
                console.log();

                let selectTarget = {
                    name : _self.default_member_info[_idx].name,
                    color : _self.default_member_info[_idx].color,
                    country : _self.default_member_info[_idx].country,
                    type : _self.default_member_info[_idx].d_type,
                    love : _self.default_member_info[_idx].love,
                    info : _self.default_member_info[_idx].info,
                    skill : _self.default_member_info[_idx].skill,
                    point : _self.default_member_info[_idx].point,
                    skill_b : _self.default_member_info[_idx].skill_b,
                    skill_a : _self.default_member_info[_idx].skill_a,
                    skill_s : _self.default_member_info[_idx].skill_s
                }
                
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
        });

        this.reset_Btn.forEach((_e)=>{
            _e.addEventListener('click', function(){
                _self._reset();
            })
        })

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

        let _a = document.createElement('li'),
            _a_n = document.createElement('span'),
            _a_n_t = document.createTextNode(_name),
            _a_i = document.createTextNode(_info);

        let _b = document.createElement('li'),
            _b_n = document.createElement('span'),
            _b_n_t = document.createTextNode(_name),
            _s = document.createTextNode(_skill),
            _s_p = document.createTextNode(_skill_p),
            _s_b = document.createTextNode(_skill_b),
            _s_a = document.createTextNode(_skill_a),
            _s_s = document.createTextNode(_skill_s);

        _a_n.appendChild(_a_n_t);
        _a.appendChild(_a_n);
        _a.appendChild(_a_i);
        
        _b_n.appendChild(_b_n_t);
        _b.appendChild(_b_n);
        _b.appendChild(_s);
        _b.appendChild(document.createElement('br'));
        _b.appendChild(_s_p);
        _b.appendChild(document.createElement('br'));
        _b.appendChild(_s_b);
        _b.appendChild(document.createElement('br'));
        _b.appendChild(_s_a);
        _b.appendChild(document.createElement('br'));
        _b.appendChild(_s_s);

        this.result_member_txt.appendChild(_a);
        this.result_member_skill_txt.appendChild(_b);
    }

    _del_member(){
        let _name = this.current_select_member.name;
        let _idx = this.select_member.findIndex(function(item) {return item.name === _name});
        this.select_member.splice(_idx, 1);

        this.result_member_txt.querySelectorAll('li').forEach((_e)=>{
            if(_e.childNodes[0].textContent == _name){
                _e.remove();
            }
        });
        this.result_member_skill_txt.querySelectorAll('li').forEach((_e)=>{
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

            let _a = document.createElement('li'),
                _a_t = document.createTextNode(_txt);
                
            _a.appendChild(_a_t);
            this.result_organization_txt.appendChild(_a);
            //console.log(_txt);
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
            this.result_organization_txt.querySelectorAll('li').forEach((_e)=>{
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

        this.result_member_txt.innerHTML = "";
        this.result_organization_txt.innerHTML = "";
        this.result_member_skill_txt.innerHTML = "";

        this.select_Btn.forEach((_e)=>{
            if(_e.checked){
                _e.checked = false;
            }
        });
    }
}

$(function(){
    new set().mount()
})