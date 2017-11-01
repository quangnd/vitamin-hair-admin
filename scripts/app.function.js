/**
 * Created by sony on 4/12/2017.
 */
function color(mark) {
    var color = '';
    if (mark == '0') {
        color = "#ffffff";
    }
    if (mark == '1') {
        color = "#000000";
    }
    if (mark == '2') {
        color = "#8c8a8d";
    }
    if (mark == '3') {
        color = "#ffffff";
    }
    if (mark == '4') {
        color = "#fe0000";
    }
    if (mark == '5') {
        color = "#ff8a00";
    }
    if (mark == '6') {
        color = "#ffff00";
    }
    if (mark == '7') {
        color = "#8cff01";
    }
    if (mark == '8') {
        color = "#00ff00";
    }
    if (mark == '9') {
        color = "#01ff8d";
    }
    if (mark == 'a' || mark == 'A') {
        color = "#00ffff";
    }
    if (mark == 'b' || mark == 'B') {
        color = "#008aff";
    }
    if (mark == 'c' || mark == 'C') {
        color = "#0000fe";
    }
    if (mark == 'd' || mark == 'D') {
        color = "#8c00ff";
    }
    if (mark == 'e' || mark == 'E') {
        color = "#ff00fe";
    }
    if (mark == 'f' || mark == 'F') {
        color = "#ff008c";
    }
    return color;
}

function get_class_name(character) {
    var char = parseInt(character);
    switch (char) {
        case 0:
        case 1:
        case 2:
        case 3:
            char = 'Phù Thủy';
            break;
        case 16:
        case 17:
        case 18:
        case 19:
            char = 'Chiến Binh';
            break;
        case 32:
        case 33:
        case 34:
        case 35:
            char = 'Thiên Nữ';
            break;
        case 48:
        case 49:
        case 50:
            char = 'Đấu Sĩ';
            break;
        case 64:
        case 65:
        case 66:
            char = 'Chúa Tể';
            break;
        case 80:
        case 81:
        case 82:
        case 83:
            char = 'Thuật Sĩ';
            break;
        case 96:
        case 97:
        case 98:
            char = 'Thiết Binh';
            break;
        default:
            char = 'Không rõ';
    }
    return char;
}

function get_map_name(MapNumber) {
    switch (MapNumber) {
        case 0:
            MapNumber = 'Lorencia';
            break;
        case 1:
            MapNumber = 'Dungeon';
            break;
        case 2:
            MapNumber = 'Davias';
            break;
        case 3:
            MapNumber = 'Noria';
            break;
        case 4:
            MapNumber = 'LostTower';
            break;
        case 5:
            MapNumber = 'Exile';
            break;
        case 6:
            MapNumber = 'Stadium';
            break;
        case 7:
            MapNumber = 'Atlans';
            break;
        case 8:
            MapNumber = 'Tarkan';
            break;
        case 10:
            MapNumber = 'Icarus';
            break;
        case 11:
            MapNumber = 'BloodCastle 1';
            break;
        case 12:
            MapNumber = 'BloodCastle 2';
            break;
        case 13:
            MapNumber = 'BloodCastle 3';
            break;
        case 14:
            MapNumber = 'BloodCastle 4';
            break;
        case 15:
            MapNumber = 'BloodCastle 5';
            break;
        case 16:
            MapNumber = 'BloodCastle 6';
            break;
        case 17:
            MapNumber = 'BloodCastle 7';
            break;
        case 52:
            MapNumber = 'BloodCastle 8';
            break;
        case 9:
            MapNumber = 'DevilSquare 1-2-3-4';
            break;
        case 32:
            MapNumber = 'Devil Square 5-6-7';
            break;
        case 35:
            MapNumber = 'Devil Square';
            break;
        case 18:
            MapNumber = 'ChaosCastle 1';
            break;
        case 19:
            MapNumber = 'ChaosCastle 2';
            break;
        case 20:
            MapNumber = 'ChaosCastle 3';
            break;
        case 21:
            MapNumber = 'ChaosCastle 4';
            break;
        case 22:
            MapNumber = 'ChaosCastle 5';
            break;
        case 23:
            MapNumber = 'ChaosCastle 6';
            break;
        case 53:
            MapNumber = 'ChaosCastle 7';
            break;
        case 24:
            MapNumber = 'Kalima 1';
            break;
        case 25:
            MapNumber = 'Kalima 2';
            break;
        case 26:
            MapNumber = 'Kalima 3';
            break;
        case 27:
            MapNumber = 'Kalima 4';
            break;
        case 28:
            MapNumber = 'Kalima 5';
            break;
        case 29:
            MapNumber = 'Kalima 6';
            break;
        case 36:
            MapNumber = 'Kalima 7';
            break;
        case 30:
            MapNumber = 'Valley Of Loren';
            break;
        case 31:
            MapNumber = 'Land Of Trials';
            break;
        case 33:
            MapNumber = 'Aida';
            break;
        case 34:
            MapNumber = 'CryWolf';
            break;
        case 37:
            MapNumber = 'Kantru 1';
            break;
        case 38:
            MapNumber = 'Kantru 2';
            break;
        case 39:
            MapNumber = 'Kantru Ref';
            break;
        case 40:
            MapNumber = 'Silent Map';
            break;
        case 41:
            MapNumber = 'Balgass Barrack';
            break;
        case 42:
            MapNumber = 'Balgass Refuge';
            break;
        case 45:
            MapNumber = 'Illusion Temple 1';
            break;
        case 46:
            MapNumber = 'Illusion Temple 2';
            break;
        case 47:
            MapNumber = 'Illusion Temple 3';
            break;
        case 48:
            MapNumber = 'Illusion Temple 4';
            break;
        case 49:
            MapNumber = 'Illusion Temple 5';
            break;
        case 50:
            MapNumber = 'Illusion Temple 6';
            break;
        case 51:
            MapNumber = 'Elbeland';
            break;
        case 56:
            MapNumber = 'Swamp Of Calmness';
            break;
        case 57:
            MapNumber = 'Raklion';
            break;
        case 58:
            MapNumber = 'Raklion BOSS';
            break;
        case 62:
            MapNumber = 'Santa Town';
            break;
        case 63:
            MapNumber = 'Vulcanus';
            break;
        case 64:
            MapNumber = 'Duel Arena';
            break;
        case 65:
            MapNumber = 'Doppel Ganger-A';
            break;
        case 66:
            MapNumber = 'Doppel Ganger-B';
            break;
        case 67:
            MapNumber = 'Doppel Ganger-C';
            break;
        case 68:
            MapNumber = 'Doppel Ganger-D';
            break;
        case 69:
            MapNumber = 'Empire Guardian-A';
            break;
        case 70:
            MapNumber = 'Empire Guardian-B';
            break;
        case 71:
            MapNumber = 'Empire Guardian-C';
            break;
        case 72:
            MapNumber = 'Empire Guardian-D';
            break;
        case 79:
            MapNumber = 'Market Loren';
            break;
        default:
            MapNumber = 'Chưa xác định MAP';
    }
    return MapNumber;
}

function get_link_avatar_character(character) {
    var path = 'assets/images/characters/';
    var link = '';
    var char = parseInt(character);
    switch (char) {
        case 0:
        case 1:
        case 2:
        case 3:
            link = path + 'dw.jpg';
            break;
        case 16:
        case 17:
        case 18:
        case 19:
            link = path + 'dk.jpg';
            break;
        case 32:
        case 33:

        case 34:
        case 35:
            link = path + 'elf.jpg';
            break;
        case 48:

        case 49:
        case 50:
            link = path + 'mg.jpg';
            break;
        case 64:

        case 65:
        case 66:
            link = path + 'dl.jpg';
            break;
        case 80:

        case 81:

        case 82:
        case 83:
            link = path + 'sm.jpg';
            break;
        case 96:

        case 97:
        case 98:
            link = path + 'rf.jpg';
            break;
        default:
            link = path + 'rf.jpg';
    }
    return link;
}

function get_char(name) {
    var charList = JSON.parse(sessionStorage.getItem(LOCALSTORAGE_CHARLIST));
    var obj = charList.filter(function (obj) {
        return obj.Name === name;
    })[0];

    console.log(obj);
    return obj;
}

function update_character(name, char) {
    var charList = JSON.parse(sessionStorage.getItem(LOCALSTORAGE_CHARLIST));
    for (var i = 0; i < charList.length; i++) {
        if (charList[i].Name === name) {
            charList[i] = char;
            // console.log('char list', charList[i]);
        }
    }
    sessionStorage.setItem(LOCALSTORAGE_CHARLIST, JSON.stringify(charList));
}

function get_list_char() {
    var charList = JSON.parse(sessionStorage.getItem(LOCALSTORAGE_CHARLIST));
    // console.log(charList);
    var list = [];
    for (var i = 0; i < charList.length; i++) {
        var data = {
            name: charList[i].Name
        };
        list.push(data);
    }
    // console.log(list);
    return charList;
}

function get_seal_item(seal_item) {
    var SCFSealItem_info = '';
    switch (parseInt(seal_item)) {
        case 6699:
            SCFSealItem_info = "Bùa tăng Exp";
            break;

        case 6700:
            SCFSealItem_info = "Bùa Thiên Sứ";
            break;

        case 6701:
            SCFSealItem_info = "Bùa không tăng Exp";
            break;

        case 6749:
            SCFSealItem_info = "Bùa tăng Exp Master";
            break;

        default :
            SCFSealItem_info = "None";
    }

    return SCFSealItem_info;
}

function set_header() {
    return config = {
        headers : {
            'LOGIN-TOKEN': JSON.parse(sessionStorage.getItem(LOCALSTORAGE_USER)).login_token
        }
    };
}

// $("div.alert").delay(3000).slideUp();