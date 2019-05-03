var subject_name = 'OX 퀴즈';
var subject_code = 'gino01';
var chasi_num = '01';
var maxPage = 1; //총 페이지 갯수
var move_value = [1]; /* 인덱스 넘어갈 페이지 번호 */
var down_file = ''; // 다운로드자료 파일 이름
var headerStr = '';
var menuStr = '';
var controlStr = '';
var learningMapStr = '';
var page_title_list = [];

page_title_list[0] = ['OX 퀴즈', ''];

headerStr += '<div class="title"></div>';
headerStr += '<p class="subject"></p>';

menuStr += '<div id="menu_open"></div>';
menuStr += '<div class="box box1">';
menuStr += '    <div class="title"><p>학습하기</p></div>';
menuStr += '   <ul class="items">';
menuStr += '        <li id="index-move1"><p>경영철학의 개념과 경영목표의 수립</p></li>';
menuStr += '   </ul>';
menuStr += '</div>';

learningMapStr += '<div id="learning_map_wrap">';
learningMapStr += '    <div id="learning_map">';
learningMapStr += '        <div id="learning_map_close"></div>';
learningMapStr += '        <dl id="list1">';
learningMapStr += '        	   <dt><p>훈련기관 운영</p></dt>';
learningMapStr += '        	   <dd id="chasi01"><p>01. 기관의 비전 및 목표수립</p></dd>';
learningMapStr += '        </dl>';
learningMapStr += '    </div>';
learningMapStr += '</div>';

controlStr += '<div id="quickBubble"></div>';
controlStr += '<div class="control_wrap">';
//controlStr += '    <div id="area_watermark"></div>';
controlStr += '    <div id="area_sub">';
controlStr += '    </div>';
controlStr += '    <div id="area_bar">';
controlStr += '        <div id="bar_display_bg"><div id="bar_display_mask"><div id="bar_display_fill"></div></div></div>';
controlStr += '        <div id="bar_event"></div>';
controlStr += '        <div id="bar_pointer"></div>';
controlStr += '        <div id="quickMark"></div>';
controlStr += '    </div>';
controlStr += '    <div id="area_time">';
controlStr += '        <div id="cTime">00:00</div>';
controlStr += '        <div id="slice">/</div>';
controlStr += '        <div id="tTime">00:00</div>';
controlStr += '    </div>';
controlStr += '    <div id="area_controls">';
controlStr += '        <div class="btn_wrap play">';
controlStr += '            <button id="btn_play"></button>';
controlStr += '            <div class="btn_bubble">재생</div>';
controlStr += '        </div>';
controlStr += '        <div class="btn_wrap pause">';
controlStr += '            <button id="btn_pause"></button>';
controlStr += '            <div class="btn_bubble">일시정지</div>';
controlStr += '        </div>';
controlStr += '        <div class="btn_wrap replay">';
controlStr += '            <button id="btn_replay"></button>';
controlStr += '            <div class="btn_bubble">다시보기</div>';
controlStr += '        </div>';
controlStr += '        <div class="btn_wrap script">';
controlStr += '            <button id="btn_script"></button>';
controlStr += '            <div class="btn_bubble">자막보기</div>';
controlStr += '        </div>';
controlStr += '        <div class="btn_wrap sound">';
controlStr += '            <button id="btn_sound"><span id="sound_mute"></span></button>';
controlStr += '            <div class="btn_bubble">소리 끔</div>';
controlStr += '            <div id="sound_wave">';
controlStr += '                <div id="sound_display_bg"><div id="sound_display_mask"><div id="sound_display_fill"></div></div></div>';
controlStr += '                <div id="sound_event"></div>';
controlStr += '                <div id="sound_pointer"></div>';
controlStr += '            </div>';
controlStr += '        </div>';
controlStr += '        <div id="area_speed">';
controlStr += '            <div id="display_speed">×1.0</div>';
controlStr += '            <ul id="speed_list">';
controlStr += '                <li class="btn_speed" data-speed="0.8">×0.8</li>';
controlStr += '                <li class="btn_speed" data-speed="1.0">×1.0</li>';
controlStr += '                <li class="btn_speed" data-speed="1.5">×1.5</li>';
controlStr += '                <li class="btn_speed" data-speed="2.0">×2.0</li>';
controlStr += '            </ul>';
controlStr += '        </div>';
controlStr += '    </div>';
controlStr += '    <div id="area_movePage">';
controlStr += '        <div id="btn_prev"></div>';
controlStr += '        <div id="currentPage"></div>';
controlStr += '        <div id="slice">/</div>';
controlStr += '        <div id="totalPage"></div>';
controlStr += '        <div id="btn_next"></div>';
controlStr += '    </div>';
controlStr += '    <div id="next_bubble"></div>'
controlStr += '</div>';