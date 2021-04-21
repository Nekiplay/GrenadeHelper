UI.AddTextbox('Login');
UI.AddTextbox('Password');
UI.AddLabel('Grenade Helper 2.0');
UI.AddHotkey('Activate helper');
UI.AddMultiDropdown('Type', ['Grenades', 'Wallbangs']);
UI.AddDropdown('Render mode', ['Only visible', 'Distance']);
UI.AddSliderInt('Render Distance', 0, 10000);
UI.AddLabel('  ');
UI.AddLabel('Locations manager');
UI.AddCheckbox('Adder custom locations');
UI.AddDropdown('Weapon type:', ['Molotov', 'High explosive grenade', 'Smoke', 'Flashbang', 'wallbang'], 1);
UI.AddTextbox('Name:');
UI.AddDropdown('Move:', ['Throw', 'Runthrow', 'Jumpthrow', 'RunJumpthrow', 'Half throw', 'Jump+Half throw', 'Runleft', 'Runright', 'Runleft jump', 'Runright jump', 'wallbang'], 1);
UI.AddCheckbox('Fakelag off');
UI.AddSliderInt('Ticks:', 0, 200);
UI.AddSliderInt('Ticks to back:', 0, 200);
UI.AddSliderFloat('x', -100000, 100000);
UI.AddSliderFloat('y', -100000, 100000);
UI.AddSliderFloat('z', -100000, 100000);
UI.AddSliderFloat('pitch', -90, 90);
UI.AddSliderFloat('yaw', -180, 180);
UI.AddCheckbox('Set location');
UI.AddCheckbox('Teleport');
UI.AddCheckbox('Print location');
UI.AddLabel('    ');
UI.AddLabel('Design');
UI.AddDropdown('Style', ['Default', 'Outline'], 1);
UI.AddDropdown('Icon position', ['Before location name', 'After location name'], 1);
UI.AddCheckbox('Custom color');
UI.AddColorPicker('Background color');
UI.AddColorPicker('Outline color');
UI.AddColorPicker('Text color');
UI.AddColorPicker('Icon color');
UI.AddColorPicker('Line color');
UI.AddLabel('======================');
var weapon_console_name = {
    "incendiary grenade": 'incendiary grenade',
    "high explosive grenade": 'hegrenade',
    "molotov": 'molotov',
    "smoke grenade": 'smoke grenade',
    "flashbang": 'flashbang'
};
var wallbang_console_name = {
    "awp": 'wallbang',
    "scar 20": 'wallbang',
    "g3sg1": 'wallbang',
    "ssg 08": 'wallbang',
    "desert eagle": 'wallbang',
    "r8 revolver": 'wallbang'
};
var console_wallbang_grenades = {
    "molotov": true,
    "hegrenade": true,
    "smoke grenade": true,
    "flashbang": true,
    "wallbang": true,
    "weapon_console_name": true,
    "all_console_name": true,
    "v1pix": true,
    "robert": true,
    "Envy": true,
    "Dorian": true,
    "Mased": true,
    "grandmemo": true,
    "xux": true,
    "": true,
    "compin": true,
    "Lazzep": true,
    "nefro": true,
    "hell": true,
    "shanty": true,
    "Nitraitor": true,
    "PikkeR": true,
    "Jester": true,
    "goldness": true,
    "Mayor": true,
    "trill": true,
    "FENDIGLOCK": true,
    "SAVAGE": true,
    "frunza": true,
    "EDGARIX": true,
    "rallen": true,
    "zap": 'true',
    "Iroxy": true,
    "sharkyy": true,
    "proxin": true,
    "bigboss": true,
    "hidfid": true,
    "ogog": true,
    "legend": true,
    "Jasper": true,
    "S0lut1on": true
};
var all_console_name = {
    "incendiary grenade": 'incendiary grenade',
    "high explosive grenade": 'hegrenade',
    "molotov": 'molotov',
    "smoke grenade": 'smoke grenade',
    "flashbang": 'flashbang',
    "awp": 'wallbang',
    "scar 20": 'wallbang',
    "g3sg1": 'wallbang',
    "ssg 08": 'wallbang',
    "desert eagle": 'wallbang',
    "r8 revolver": 'wallbang'
};
var off = {};

function helpersetup() {
    var _0x771bx7 = Render.AddFont('Verdana', 7, 100);
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Render mode') == 0) {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Render Distance', 0)
    } else {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Render Distance', 1)
    };
    var _0x771bx8 = World.GetMapName(),
        _0x771bx9 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Fakelag off'),
        _0x771bxa = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Weapon type:'),
        _0x771bxb = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Name:'),
        _0x771bxc = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Move:'),
        _0x771bxd = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ticks:');
    var _0x771bxe = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Login');
    var _0x771bxf = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Password');
    if (_0x771bxa == 0) {
        grenadeddd = 'molotov'
    } else {
        if (_0x771bxa == 1) {
            grenadeddd = 'hegrenade'
        } else {
            if (_0x771bxa == 2) {
                grenadeddd = 'smoke grenade'
            } else {
                if (_0x771bxa == 3) {
                    grenadeddd = 'flashbang'
                } else {
                    if (_0x771bxa == 4) {
                        grenadeddd = 'wallbang'
                    }
                }
            }
        }
    };
    if (_0x771bx9) {
        fakelag = '"fakelag_off"'
    } else {
        fakelag = '"fakelag_on"'
    };
    if (_0x771bxc == 0) {
        moveddd = 'Throw';
        tickstoback = '';
        tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
    } else {
        if (_0x771bxc == 1) {
            moveddd = 'Runthrow';
            tickstoback = '';
            tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
            UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
        } else {
            if (_0x771bxc == 2) {
                moveddd = 'Jumpthrow';
                tickstoback = '';
                tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
                UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
            } else {
                if (_0x771bxc == 3) {
                    moveddd = 'RunJumpthrow';
                    tickstoback = '';
                    tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
                    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
                } else {
                    if (_0x771bxc == 4) {
                        moveddd = 'Half throw';
                        tickstoback = '';
                        tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
                        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
                    } else {
                        if (_0x771bxc == 5) {
                            moveddd = 'Jump+Half throw';
                            tickstoback = '';
                            tickst = _0x771bxd + ', ' + fakelag + ', "", [-999999.0, -999999.0, -999999.0]';
                            UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
                        } else {
                            if (_0x771bxc == 6) {
                                moveddd = 'Runleft';
                                tickstoback = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:');
                                tickst = _0x771bxd + ', ' + fakelag + ', ' + tickstoback + ', [-999999.0, -999999.0, -999999.0]';
                                UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 1)
                            } else {
                                if (_0x771bxc == 7) {
                                    moveddd = 'Runright';
                                    tickstoback = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:');
                                    tickst = _0x771bxd + ', ' + fakelag + ', ' + tickstoback + ', [-999999.0, -999999.0, -999999.0]';
                                    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 1)
                                } else {
                                    if (_0x771bxc == 8) {
                                        moveddd = 'Runleft jump';
                                        tickstoback = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:');
                                        tickst = _0x771bxd + ', ' + fakelag + ', ' + tickstoback + ', [-999999.0, -999999.0, -999999.0]';
                                        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 1)
                                    } else {
                                        if (_0x771bxc == 9) {
                                            moveddd = 'Runright jump';
                                            tickstoback = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:');
                                            tickst = _0x771bxd + ', ' + fakelag + ', ' + tickstoback + ', [-999999.0, -999999.0, -999999.0]';
                                            UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 1)
                                        } else {
                                            if (_0x771bxc == 10) {
                                                moveddd = 'wallbang';
                                                tickst = 0;
                                                UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'x', 0);
    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'y', 0);
    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'z', 0);
    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'pitch', 0);
    UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'yaw', 0);
    var _0x771bx10 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'x');
    var _0x771bx11 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'y');
    var _0x771bx12 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'z') - 63;
    var _0x771bx13 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'z');
    var _0x771bx14 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'pitch');
    var _0x771bx15 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'yaw');
    var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    var _0x771bx17 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Type');
    var _0x771bx18 = [0, 0, 0, 125];
    var _0x771bx19 = [155, 0, 0, 255];
    var _0x771bx1a = [155, 0, 0, 255];
    var _0x771bx1b = [155, 0, 0, 255];
    var _0x771bx1c = [UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'x'), UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'y'), UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'z')];
    var _0x771bx1d = [UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'pitch'), UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'yaw'), 0];
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Set location')) {
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'x', Entity.GetEyePosition(Entity.GetLocalPlayer())[0]);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'y', Entity.GetEyePosition(Entity.GetLocalPlayer())[1]);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'z', Entity.GetEyePosition(Entity.GetLocalPlayer())[2]);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'pitch', Local.GetViewAngles()[0]);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'yaw', Local.GetViewAngles()[1]);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Set location', 0)
    };
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Teleport')) {
        Cheat.ExecuteCommand('setpos' + ' ' + _0x771bx10 + ' ' + _0x771bx11 + ' ' + _0x771bx12);
        Cheat.ExecuteCommand('setang' + ' ' + _0x771bx14 + ' ' + _0x771bx15);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Teleport', 0)
    };
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Adder custom locations')) {
        var _0x771bx1e = Render.WorldToScreen([UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'x'), UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'y'), UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'z') - 63]);
        if (all_console_name[weapon]) {
            var _0x771bx1f = calc_dist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), _0x771bx1c);
            var _0x771bx20 = angle_to_vec(_0x771bx14, _0x771bx15);
            angle_to_vec22 = Render.WorldToScreen([UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'x') + _0x771bx20[0] * 400, UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'y') + _0x771bx20[1] * 400, UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'z') + _0x771bx20[2] * 400]);
            var _0x771bx21 = Render.TextSizeCustom(_0x771bxb + ' [Temporary]   ', _0x771bx7);
            Render.FilledRect(_0x771bx1e[0] + 8, _0x771bx1e[1] - _0x771bx21[1] / 1.5, _0x771bx21[0] + 34, _0x771bx21[1] + 8, _0x771bx18);
            Render.StringCustom(_0x771bx1e[0] + 19, _0x771bx1e[1] - 7, 6, get_icon(weapon), _0x771bx1a, 6);
            Render.StringCustom(_0x771bx1e[0] + 31, _0x771bx1e[1] - 6, 6, '|', _0x771bx1a, 8);
            Render.StringCustom(_0x771bx1e[0] + 36, _0x771bx1e[1] - 4, 0, _0x771bxb + ' [Temporary]', [0, 0, 0, 255], _0x771bx7);
            Render.StringCustom(_0x771bx1e[0] + 35, _0x771bx1e[1] - 5, 0, _0x771bxb + ' [Temporary]', _0x771bx19, _0x771bx7);
            if (_0x771bx1f > 70 == false) {
                Render.FilledRect(angle_to_vec22[0] - 10, angle_to_vec22[1] - _0x771bx21[1] / 1 + 3, _0x771bx21[0] > _0x771bx21[0] ? _0x771bx21[0] + 7 : _0x771bx21[0] + 32, _0x771bx21[1] > _0x771bx21[1] ? _0x771bx21[1] + 8 : _0x771bx21[1] + 8, _0x771bx18);
                Render.StringCustom(angle_to_vec22[0] + 12, angle_to_vec22[1] - 8, 6, '|', _0x771bx1a, 8);
                Render.StringCustom(angle_to_vec22[0] + 18, angle_to_vec22[1] - 4, 0, _0x771bxb + ' [Temporary]', [0, 0, 0, 255], _0x771bx7);
                Render.StringCustom(angle_to_vec22[0] + 17, angle_to_vec22[1] - 5, 0, _0x771bxb + ' [Temporary]', _0x771bx19, _0x771bx7);
                Render.FadedCircle(angle_to_vec22[0], angle_to_vec22[1], 8, Math.abs(angle_to_vec22[0] - Render.GetScreenSize()[0] / 2) + Math.abs(angle_to_vec22[1] - Render.GetScreenSize()[1] / 2) <= 3 ? [0, 255, 0, 100] : [255, 0, 0, 255]);
                Render.FilledCircle(angle_to_vec22[0], angle_to_vec22[1], 7, [0, 0, 0, 70]);
                Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, angle_to_vec22[0], angle_to_vec22[1], _0x771bx1b)
            }
        }
    };
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Custom color')) {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Background color', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Outline color', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Text color', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Icon color', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Line color', 1)
    } else {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Background color', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Outline color', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Text color', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Icon color', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Line color', 0)
    };
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Print location')) {
        Cheat.PrintColor([140, 185, 40, 255], '[GH v2] Your nade:\n');
        Cheat.PrintColor([200, 155, 25, 255], '["' + _0x771bx8 + '", ' + '[' + _0x771bx10 + ', ' + _0x771bx11 + ', ' + _0x771bx13 + '], [' + _0x771bx14 + ', ' + _0x771bx15 + ', 0], ' + '"' + grenadeddd + '", "' + _0x771bxb + '", "' + moveddd + '", ' + tickst + '],\n');
        Cheat.PrintChat('[GH v2] Your nade:');
        Cheat.PrintChat('["' + _0x771bx8 + '", ' + '[' + _0x771bx10 + ', ' + _0x771bx11 + ', ' + _0x771bx13 + '], [' + _0x771bx14 + ', ' + _0x771bx15 + ', 0], ' + '"' + grenadeddd + '", "' + _0x771bxb + '", "' + moveddd + '", ' + tickst + '],');
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Print location', 0);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Adder custom locations', 0)
    };
    if ((_0x771bxf == '') && (console_wallbang_grenades[_0x771bxe])) {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Login', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Password', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Grenade Helper 2.0', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Activate helper', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Type', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', '  ', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Locations manager', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Adder custom locations', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Weapon type:', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Name:', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Move:', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Fakelag off', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks:', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Set location', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Teleport', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Print location', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', '    ', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Design', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Style', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Icon position', 1)
    } else {
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Login', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Password', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Grenade Helper 2.0', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Activate helper', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Type', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', '  ', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Locations manager', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Adder custom locations', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Weapon type:', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Name:', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Move:', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Fakelag off', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks:', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Ticks to back:', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Set location', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Teleport', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Print location', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', '    ', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Design', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Style', 0);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Icon position', 0);
        UI.SetValue('Misc', 'JAVASCRIPT', 'Script items', 'Custom color', 0)
    }
}

function shadow(_0x771bx10, _0x771bx11, _0x771bx23, _0x771bx24, _0x771bx25, _0x771bx7, _0x771bx26, _0x771bx27) {
    if (_0x771bx25) {
        Render.StringCustom(_0x771bx10 + ((_0x771bx27 / 7)), _0x771bx11 + ((_0x771bx27 / 7)), _0x771bx23, _0x771bx24, [0, 0, 0, _0x771bx26[3]], _0x771bx7);
        Render.StringCustom(_0x771bx10, _0x771bx11, _0x771bx23, _0x771bx24, _0x771bx26, _0x771bx7)
    } else {
        Render.StringCustom(_0x771bx10 + ((_0x771bx27 / 7)), _0x771bx11 + ((_0x771bx27 / 7)), _0x771bx23, _0x771bx24, [0, 0, 0, _0x771bx26[3]], _0x771bx27);
        Render.StringCustom(_0x771bx10, _0x771bx11, _0x771bx23, _0x771bx24, _0x771bx26, _0x771bx27)
    }
}
Render.FadedCircle = function (_0x771bx24, _0x771bx28, _0x771bx29, _0x771bx2a) {
    var _0x771bx2b = _0x771bx2a[3] / _0x771bx29;
    var _0x771bx2c = 0;
    for (; _0x771bx2c <= _0x771bx29; _0x771bx2c++) {
        Render.FilledCircle(_0x771bx24, _0x771bx28, _0x771bx2c, [_0x771bx2a[0], _0x771bx2a[1], _0x771bx2a[2], _0x771bx2a[3] - _0x771bx2b * _0x771bx2c])
    }
};
_locations = require('v3_helper.data');
var locations = _locations.locations;
var map_cache = [];
var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
if (weapon == 'incendiary grenade' || weapon == '>:B59;L >;>B>20') { /* Molotov */
    weapon = 'molotov'
};
if (weapon == 'K<>20O 3@0=0B0') /* Smoke */
{
	weapon = 'smoke grenade'
}
if (weapon == 'A:>;>G=0O 3@0=0B0') /* HE */
{
	weapon = 'high explosive grenade'
}
map_cache = locations.filter(function (_0x771bx2f) {
    return _0x771bx2f[0] == World.GetMapName() && _0x771bx2f[3].toLowerCase() == weapon_console_name[weapon]
});

function get_icon(_0x771bx31) {
    var _0x771bx32 = '';
    switch (_0x771bx31) {
    case 'high explosive grenade':
        _0x771bx32 = 'I';
        break;
    case 'smoke grenade':
        _0x771bx32 = 'J';
        break;
    case 'molotov':
        _0x771bx32 = 'K';
        break;
    case 'incendiary grenade':
        _0x771bx32 = 'K';
        break;
    case 'ssg 08':
        _0x771bx32 = 'S';
        break;
    case 'awp':
        _0x771bx32 = 'S';
        break;
    case 'r8 revolver':
        _0x771bx32 = 'S';
        break;
    case 'desert eagle':
        _0x771bx32 = 'S';
        break;
    case 'g3sg1':
        _0x771bx32 = 'S';
        break;
    case 'scar 20':
        _0x771bx32 = 'S';
        break;
    default:
        _0x771bx32 = '';
        break
    };
    return _0x771bx32
}

function check_visibility() {
    if (map_cache.length == 0 || World.GetServerString() == '') {
        return
    };
    var _0x771bx34 = Entity.GetLocalPlayer();
    eye_angles = Local.GetViewAngles();
    head = Entity.GetProp(_0x771bx34, 'CBasePlayer', 'm_vecOrigin');
    offset = Entity.GetProp(_0x771bx34, 'CBasePlayer', 'm_vecViewOffset[2]');
    head = vector_add(head, [0, 0, offset[0]]);
    for (var _0x771bx35 in map_cache) {
        var _0x771bx36 = Trace.Line(_0x771bx34, head, map_cache[_0x771bx35][1]);
        if (map_cache[_0x771bx35][16] == undefined) {
            map_cache[_0x771bx35].push(_0x771bx36[1] == 1)
        } else {
            map_cache[_0x771bx35][16] = _0x771bx36[1] == 1
        }
    }
}
Cheat.RegisterCallback('CreateMove', 'check_visibility');
var alpha_main = 0;
var alpha_text = 0;
var alpha_second = 0;

function animate_alpha() {
    var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (all_console_name[weapon] != undefined) {
        if (alpha_main < 255) {
            alpha_main = alpha_main + 12.75
        };
        if (alpha_second < 122) {
            alpha_second = alpha_second + 6.1
        }
    } else {
        alpha_second = 0;
        alpha_main = 0
    }
}
Render.Filled3DCircle = function (_0x771bx3b, _0x771bx3c, _0x771bx3d, _0x771bx3e, _0x771bx3f, _0x771bx40) {
    var _0x771bx41, _0x771bx42;
    _0x771bx3d = _0x771bx3d < 361 && _0x771bx3d || 360;
    _0x771bx3d = _0x771bx3d > -1 && _0x771bx3d || 0;
    _0x771bx3e += 1;
    for (rot = _0x771bx3e; rot < _0x771bx3d + _0x771bx3e + 1; rot += _0x771bx3e * 8) {
        rot_r = rot * (Math.PI / 180);
        line_x = _0x771bx3c * Math.cos(rot_r) + _0x771bx3b[0], line_y = _0x771bx3c * Math.sin(rot_r) + _0x771bx3b[1];
        var _0x771bx43 = Render.WorldToScreen([line_x, line_y, _0x771bx3b[2]]);
        var _0x771bx44 = Render.WorldToScreen([_0x771bx3b[0], _0x771bx3b[1], _0x771bx3b[2]]);
        if (_0x771bx44[0] != null && _0x771bx43[0] != null && _0x771bx41 != null) {
            Render.Polygon([
                [_0x771bx43[0], _0x771bx43[1]],
                [_0x771bx41, _0x771bx42],
                [_0x771bx44[0], _0x771bx44[1]]
            ], _0x771bx40);
            Render.Line(_0x771bx43[0], _0x771bx43[1], _0x771bx41, _0x771bx42, _0x771bx3f)
        };
        _0x771bx41 = _0x771bx43[0], _0x771bx42 = _0x771bx43[1]
    }
};
var print = false;
function draw() {
    var _0x771bxe = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Login');
    var _0x771bxf = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Password');
    if ((_0x771bxf == '') && (console_wallbang_grenades[_0x771bxe])) {
        var _0x771bx17 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Type');
        var _0x771bx46 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Style');
        var _0x771bx47 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Icon position');
        var _0x771bx7 = Render.AddFont('Verdana', 7, 100);
        var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
        if (_0x771bx17 == 1) {
            type_mode = weapon_console_name
        } else {
            if (_0x771bx17 == 2) {
                type_mode = wallbang_console_name
            } else {
                if (_0x771bx17 == 3) {
                    type_mode = all_console_name
                } else {
                    type_mode = off
                }
            }
        };
        if (weapon == 'incendiary grenade' || weapon == '>:B59;L >;>B>20') { /* Molotov */
            weapon = 'molotov'
        };
		if (weapon == 'K<>20O 3@0=0B0') /* Smoke */
		{
			weapon = 'smoke grenade'
		}
		if (weapon == 'A:>;>G=0O 3@0=0B0') /* HE */
		{
			weapon = 'high explosive grenade'
		}
		if (print == false)
		{
			Cheat.Print(weapon + "\n");
			print = true;
		}
        map_cache = locations.filter(function (_0x771bx48) {
            return _0x771bx48[0] == World.GetMapName() && _0x771bx48[3].toLowerCase() == type_mode[weapon]
        });
        if (map_cache.length == 0) {
            return
        };
        var _0x771bx35;
        for (_0x771bx35 in map_cache) {
            var _0x771bx1f = calc_dist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), map_cache[_0x771bx35][1]);
            var _0x771bx1e = Render.WorldToScreen([map_cache[_0x771bx35][1][0], map_cache[_0x771bx35][1][1], map_cache[_0x771bx35][1][2] - 63]);
            if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Render mode') == 0) {
                if (!map_cache[_0x771bx35][16]) {
                    continue
                }
            } else {
                if (_0x771bx1f > UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Render Distance')) {
                    continue
                }
            };
            if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Custom color')) {
                var _0x771bx19 = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Text color')
            } else {
                var _0x771bx19 = [107, 117, 255, 255]
            };
            if (_0x771bx1f > 450 == false) {
                rPairs = Render.TextSizeCustom(map_cache[_0x771bx35][4], _0x771bx7);
                var alpha_text = _0x771bx19[3]
            } else {
                var alpha_text = 0;
                rPairs = [-12, 13]
            };
            if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Custom color')) {
                var _0x771bx19 = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Text color');
                var _0x771bx18 = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Background color');
                var _0x771bx49 = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Outline color');
                var _0x771bx1a = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Icon color');
                var _0x771bx1b = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Line color');
                var _0x771bx4a = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Icon color')
            } else {
                var _0x771bx19 = [107, 117, 255, alpha_text];
                var _0x771bx18 = [4, 4, 4, alpha_second];
                var _0x771bx49 = [255, 255, 255, alpha_main];
                var _0x771bx1a = [107, 117, 255, alpha_main];
                var _0x771bx1b = [255, 255, 255, 255];
                var _0x771bx4a = [107, 117, 255, alpha_text]
            };
            var _0x771bx20 = angle_to_vec(map_cache[_0x771bx35][2][0], map_cache[_0x771bx35][2][1]);
            var _0x771bx4b = map_cache[_0x771bx35][1];
            _0x771bx20 = Render.WorldToScreen([_0x771bx4b[0] + _0x771bx20[0] * 400, _0x771bx4b[1] + _0x771bx20[1] * 400, _0x771bx4b[2] + _0x771bx20[2] * 400]);
            if (_0x771bx46 == 0 && _0x771bx47 == 0) {
                Render.FilledRect(_0x771bx1e[0] + 8, _0x771bx1e[1] - rPairs[1] / 1.5, rPairs[0] + 34, rPairs[1] + 8, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                Render.StringCustom(_0x771bx1e[0] + 19, _0x771bx1e[1] - 7, 6, get_icon(weapon), [_0x771bx1a[0], _0x771bx1a[1], _0x771bx1a[2], alpha_main], 6);
                Render.StringCustom(_0x771bx1e[0] + 31, _0x771bx1e[1] - 7, 6, '|', [_0x771bx4a[0], _0x771bx4a[1], _0x771bx4a[2], alpha_text], 8);
                if (_0x771bx1f > 67 == false) {
                    if (!wallbang_console_name[weapon]) {
                        const _0x771bx4c = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 0.5)) % (Math.PI * 2))) * 255;
                        var _0x771bx4d = [map_cache[_0x771bx35][9][0], map_cache[_0x771bx35][9][1], map_cache[_0x771bx35][9][2] - 63];
                        var _0x771bx4e = Render.WorldToScreen(_0x771bx4d);
                        Render.StringCustom(_0x771bx4e[0], _0x771bx4e[1] - 52, 6, get_icon(weapon), [255, 255, 255, _0x771bx4c], 5);
                        Render.Filled3DCircle(_0x771bx4d, 45, 360, 0, [225, 225, 225, 235], 1 ? [255, 255, 255, 255] : [255, 255, 255, 200])
                    };
                    Render.FilledRect(_0x771bx20[0] - 10, _0x771bx20[1] - rPairs[1] / 1 + 3, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 32, rPairs[1] > rPairs[1] ? rPairs[1] + 8 : rPairs[1] + 8, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                    Render.StringCustom(_0x771bx20[0] + 12, _0x771bx20[1] - 8, 6, '|', _0x771bx1a, 8);
                    Render.StringCustom(_0x771bx20[0] + 18, _0x771bx20[1] - 4, 0, map_cache[_0x771bx35][4], [0, 0, 0, alpha_text], _0x771bx7);
                    Render.StringCustom(_0x771bx20[0] + 17, _0x771bx20[1] - 5, 0, map_cache[_0x771bx35][4], _0x771bx19, _0x771bx7);
                    Render.FadedCircle(_0x771bx20[0], _0x771bx20[1], 8, Math.abs(_0x771bx20[0] - Render.GetScreenSize()[0] / 2) + Math.abs(_0x771bx20[1] - Render.GetScreenSize()[1] / 2) <= 3 ? [0, 255, 0, 100] : [255, 0, 0, 255]);
                    Render.FilledCircle(_0x771bx20[0], _0x771bx20[1], 7, [0, 0, 0, 70]);
                    Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x771bx20[0], _0x771bx20[1], _0x771bx1b)
                }
            } else {
                if (_0x771bx46 == 0 && _0x771bx47 == 1) {
                    Render.FilledRect(_0x771bx1e[0] + 31, _0x771bx1e[1] - rPairs[1] / 1.5, rPairs[0] + 32, rPairs[1] + 8, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                    Render.StringCustom(_0x771bx1e[0] + rPairs[0] + 52, _0x771bx1e[1] - 7, 6, get_icon(weapon), [_0x771bx1a[0], _0x771bx1a[1], _0x771bx1a[2], alpha_main], 6);
                    Render.StringCustom(_0x771bx1e[0] + rPairs[0] + 41, _0x771bx1e[1] - 7, 6, '|', [_0x771bx4a[0], _0x771bx4a[1], _0x771bx4a[2], alpha_text], 8);
                    if (_0x771bx1f > 67 == false) {
                        if (!wallbang_console_name[weapon]) {
                            const _0x771bx4c = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 0.5)) % (Math.PI * 2))) * 255;
                            var _0x771bx4d = [map_cache[_0x771bx35][9][0], map_cache[_0x771bx35][9][1], map_cache[_0x771bx35][9][2] - 63];
                            var _0x771bx4e = Render.WorldToScreen(_0x771bx4d);
                            Render.StringCustom(_0x771bx4e[0], _0x771bx4e[1] - 52, 6, get_icon(weapon), [255, 255, 255, _0x771bx4c], 5);
                            Render.Filled3DCircle(_0x771bx4d, 45, 360, 0, [225, 225, 225, 235], 1 ? [255, 255, 255, 255] : [255, 255, 255, 200])
                        };
                        Render.FilledRect(_0x771bx20[0] - 10, _0x771bx20[1] - rPairs[1] / 1 + 3, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 32, rPairs[1] > rPairs[1] ? rPairs[1] + 8 : rPairs[1] + 8, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                        Render.StringCustom(_0x771bx20[0] + 12, _0x771bx20[1] - 8, 6, '|', _0x771bx1a, 8);
                        Render.StringCustom(_0x771bx20[0] + 18, _0x771bx20[1] - 4, 0, map_cache[_0x771bx35][4], [0, 0, 0, alpha_text], _0x771bx7);
                        Render.StringCustom(_0x771bx20[0] + 17, _0x771bx20[1] - 5, 0, map_cache[_0x771bx35][4], _0x771bx19, _0x771bx7);
                        Render.FadedCircle(_0x771bx20[0], _0x771bx20[1], 8, Math.abs(_0x771bx20[0] - Render.GetScreenSize()[0] / 2) + Math.abs(_0x771bx20[1] - Render.GetScreenSize()[1] / 2) <= 3 ? [0, 255, 0, 100] : [255, 0, 0, 255]);
                        Render.FilledCircle(_0x771bx20[0], _0x771bx20[1], 7, [0, 0, 0, 70]);
                        Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x771bx20[0], _0x771bx20[1], _0x771bx1b)
                    }
                } else {
                    if (_0x771bx46 == 1 && _0x771bx47 == 0) {
                        Render.RoundRect(_0x771bx1e[0] + 7, _0x771bx1e[1] - rPairs[1] / 1.5, rPairs[0] + 32, 21, 3.25, _0x771bx49);
                        Render.FilledRoundRect(_0x771bx1e[0] + 8, _0x771bx1e[1] - rPairs[1] / 1.5 + 2, rPairs[0] + 30, 18, 2.25, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                        Render.StringCustom(_0x771bx1e[0] + 19, _0x771bx1e[1] - 7, 6, get_icon(weapon), [_0x771bx1a[0], _0x771bx1a[1], _0x771bx1a[2], alpha_main], 6);
                        Render.StringCustom(_0x771bx1e[0] + 31, _0x771bx1e[1] - 7, 6, '|', [_0x771bx4a[0], _0x771bx4a[1], _0x771bx4a[2], alpha_text], 8);
                        if (_0x771bx1f > 67 == false) {
                            if (!wallbang_console_name[weapon]) {
                                const _0x771bx4c = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 0.5)) % (Math.PI * 2))) * 255;
                                var _0x771bx4d = [map_cache[_0x771bx35][9][0], map_cache[_0x771bx35][9][1], map_cache[_0x771bx35][9][2] - 63];
                                var _0x771bx4e = Render.WorldToScreen(_0x771bx4d);
                                Render.StringCustom(_0x771bx4e[0], _0x771bx4e[1] - 52, 6, get_icon(weapon), [255, 255, 255, _0x771bx4c], 5);
                                Render.Filled3DCircle(_0x771bx4d, 45, 360, 0, [225, 225, 225, 235], 1 ? [255, 255, 255, 255] : [255, 255, 255, 200])
                            };
                            Render.RoundRect(_0x771bx20[0] - 10, _0x771bx20[1] - rPairs[1] / 1.5 - 1, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 32, 22, 3.25, _0x771bx49);
                            Render.FilledRoundRect(_0x771bx20[0] - 9, _0x771bx20[1] - rPairs[1] / 1.5, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 30, 19, 2.25, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                            Render.StringCustom(_0x771bx20[0] + 12, _0x771bx20[1] - 8, 6, '|', _0x771bx1a, 8);
                            Render.StringCustom(_0x771bx20[0] + 18, _0x771bx20[1] - 4, 0, map_cache[_0x771bx35][4], [0, 0, 0, alpha_text], _0x771bx7);
                            Render.StringCustom(_0x771bx20[0] + 17, _0x771bx20[1] - 5, 0, map_cache[_0x771bx35][4], _0x771bx19, _0x771bx7);
                            Render.FadedCircle(_0x771bx20[0], _0x771bx20[1], 8, Math.abs(_0x771bx20[0] - Render.GetScreenSize()[0] / 2) + Math.abs(_0x771bx20[1] - Render.GetScreenSize()[1] / 2) <= 3 ? [0, 255, 0, 100] : [255, 0, 0, 255]);
                            Render.FilledCircle(_0x771bx20[0], _0x771bx20[1], 7, [0, 0, 0, 70]);
                            Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x771bx20[0], _0x771bx20[1], _0x771bx1b)
                        }
                    } else {
                        if (_0x771bx46 == 1 && _0x771bx47 == 1) {
                            Render.RoundRect(_0x771bx1e[0] + 30, _0x771bx1e[1] - rPairs[1] / 1.5, rPairs[0] + 32, 21, 3.25, _0x771bx49);
                            Render.FilledRoundRect(_0x771bx1e[0] + 31, _0x771bx1e[1] - rPairs[1] / 1.5 + 2, rPairs[0] + 30, 18, 2.25, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                            Render.StringCustom(_0x771bx1e[0] + rPairs[0] + 51, _0x771bx1e[1] - 7, 6, get_icon(weapon), [_0x771bx1a[0], _0x771bx1a[1], _0x771bx1a[2], alpha_main], 6);
                            Render.StringCustom(_0x771bx1e[0] + rPairs[0] + 41, _0x771bx1e[1] - 7, 6, '|', [_0x771bx4a[0], _0x771bx4a[1], _0x771bx4a[2], alpha_text], 8);
                            if (_0x771bx1f > 67 == false) {
                                if (!wallbang_console_name[weapon]) {
                                    const _0x771bx4c = Math.sin(Math.abs(-Math.PI + (Globals.Curtime() * (1 / 0.5)) % (Math.PI * 2))) * 255;
                                    var _0x771bx4d = [map_cache[_0x771bx35][9][0], map_cache[_0x771bx35][9][1], map_cache[_0x771bx35][9][2] - 63];
                                    var _0x771bx4e = Render.WorldToScreen(_0x771bx4d);
                                    Render.StringCustom(_0x771bx4e[0], _0x771bx4e[1] - 52, 6, get_icon(weapon), [255, 255, 255, _0x771bx4c], 5);
                                    Render.Filled3DCircle(_0x771bx4d, 45, 360, 0, [225, 225, 225, 235], 1 ? [255, 255, 255, 255] : [255, 255, 255, 200])
                                };
                                Render.RoundRect(_0x771bx20[0] - 10, _0x771bx20[1] - rPairs[1] / 1.5 - 1, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 32, 22, 3.25, _0x771bx49);
                                Render.FilledRoundRect(_0x771bx20[0] - 9, _0x771bx20[1] - rPairs[1] / 1.5, rPairs[0] > rPairs[0] ? rPairs[0] + 7 : rPairs[0] + 30, 19, 2.25, [_0x771bx18[0], _0x771bx18[1], _0x771bx18[2], alpha_second]);
                                Render.StringCustom(_0x771bx20[0] + 12, _0x771bx20[1] - 8, 6, '|', _0x771bx1a, 8);
                                Render.StringCustom(_0x771bx20[0] + 18, _0x771bx20[1] - 4, 0, map_cache[_0x771bx35][4], [0, 0, 0, alpha_text], _0x771bx7);
                                Render.StringCustom(_0x771bx20[0] + 17, _0x771bx20[1] - 5, 0, map_cache[_0x771bx35][4], _0x771bx19, _0x771bx7);
                                Render.FadedCircle(_0x771bx20[0], _0x771bx20[1], 8, Math.abs(_0x771bx20[0] - Render.GetScreenSize()[0] / 2) + Math.abs(_0x771bx20[1] - Render.GetScreenSize()[1] / 2) <= 3 ? [0, 255, 0, 100] : [255, 0, 0, 255]);
                                Render.FilledCircle(_0x771bx20[0], _0x771bx20[1], 7, [0, 0, 0, 70]);
                                Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x771bx20[0], _0x771bx20[1], _0x771bx1b)
                            }
                        }
                    }
                }
            };
            Render.StringCustom(_0x771bx1e[0] + 37, _0x771bx1e[1] - 4, 0, map_cache[_0x771bx35][4], [0, 0, 0, alpha_text], _0x771bx7);
            Render.StringCustom(_0x771bx1e[0] + 36, _0x771bx1e[1] - 5, 0, map_cache[_0x771bx35][4], [_0x771bx19[0], _0x771bx19[1], _0x771bx19[2], alpha_text], _0x771bx7)
        }
    }
}
Render.FilledRoundRect = function (_0x771bx10, _0x771bx11, _0x771bx4f, _0x771bx50, _0x771bx51, _0x771bx26) {
    Render.Line(_0x771bx10, _0x771bx11 + _0x771bx50, _0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx50, _0x771bx26);
    Render.Line(_0x771bx10, _0x771bx11 + _0x771bx51, _0x771bx10, _0x771bx11 + _0x771bx50, _0x771bx26);
    Render.Line(_0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx51, _0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx50 + 1, _0x771bx26);
    Render.Line(_0x771bx10 + _0x771bx51, _0x771bx11, _0x771bx10 + _0x771bx4f - 2, _0x771bx11, _0x771bx26);
    Render.FilledRect(_0x771bx10 + 1, _0x771bx11 + 1, _0x771bx4f - 1, _0x771bx50 - 1, _0x771bx26)
};
Render.RoundRect = function (_0x771bx10, _0x771bx11, _0x771bx4f, _0x771bx50, _0x771bx51, _0x771bx26) {
    Render.Line(_0x771bx10, _0x771bx11 + _0x771bx50, _0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx50, _0x771bx26);
    Render.Line(_0x771bx10, _0x771bx11 + _0x771bx51, _0x771bx10, _0x771bx11 + _0x771bx50, _0x771bx26);
    Render.Line(_0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx51, _0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx50 + 1, _0x771bx26);
    Render.Line(_0x771bx10, _0x771bx11 + _0x771bx51, _0x771bx10 + _0x771bx51, _0x771bx11, _0x771bx26);
    Render.Line(_0x771bx10 + _0x771bx51, _0x771bx11, _0x771bx10 + _0x771bx4f - _0x771bx51, _0x771bx11, _0x771bx26);
    Render.Line(_0x771bx10 + _0x771bx4f - _0x771bx51, _0x771bx11, _0x771bx10 + _0x771bx4f, _0x771bx11 + _0x771bx51, _0x771bx26)
};

function fix_move(_0x771bx53, _0x771bx54, _0x771bx55) {
    var _0x771bx56 = function (_0x771bx31) {
        return _0x771bx31 / 180 * Math.PI
    };
    var _0x771bx57, _0x771bx58, _0x771bx59;
    if (_0x771bx54[1] < 0) {
        _0x771bx57 = 360 + _0x771bx54[1]
    } else {
        _0x771bx57 = _0x771bx54[1]
    };
    if (_0x771bx53[1] < 0) {
        _0x771bx58 = 360 + _0x771bx53[1]
    } else {
        _0x771bx58 = _0x771bx53[1]
    };
    if (_0x771bx58 < _0x771bx57) {
        _0x771bx59 = Math.abs(_0x771bx58 - _0x771bx57)
    } else {
        _0x771bx59 = 360 - Math.abs(_0x771bx57 - _0x771bx58)
    };
    return [Math.cos(_0x771bx56(_0x771bx59)) * _0x771bx55[0] + Math.cos(_0x771bx56(_0x771bx59 + 90)) * _0x771bx55[1], Math.sin(_0x771bx56(_0x771bx59)) * _0x771bx55[0] + Math.sin(_0x771bx56(_0x771bx59 + 90)) * _0x771bx55[1], 0]
}

function move_forward(_0x771bx5b) {
    var _0x771bx5c = Local.GetViewAngles();
    var _0x771bx5d = [450, 0, 0];
    var _0x771bx5e = fix_move(_0x771bx5b, _0x771bx5c, _0x771bx5d);
    UserCMD.SetMovement(_0x771bx5e)
}

function move_forward_back(_0x771bx5b, _0x771bx60, _0x771bx61) {
    var _0x771bx5c = Local.GetViewAngles();
    var _0x771bx62 = _0x771bx60 ? _0x771bx61 : -_0x771bx61;
    var _0x771bx5d = [_0x771bx62, 0, 0];
    var _0x771bx5e = fix_move(_0x771bx5b, _0x771bx5c, _0x771bx5d);
    UserCMD.SetMovement(_0x771bx5e)
}

function move_sideways(_0x771bx5b, _0x771bx60, _0x771bx61) {
    var _0x771bx5c = Local.GetViewAngles();
    var _0x771bx62 = _0x771bx60 ? _0x771bx61 : -_0x771bx61;
    var _0x771bx5d = [0, _0x771bx62, 0];
    var _0x771bx5e = fix_move(_0x771bx5b, _0x771bx5c, _0x771bx5d);
    UserCMD.SetMovement(_0x771bx5e)
}
var delays = [];

function Delay(_0x771bx66, _0x771bx67, _0x771bx68) {
    this.delay = _0x771bx66;
    this.resume = Globals.Curtime() + _0x771bx66;
    this.func = _0x771bx67;
    this.times = 0;
    this.max = _0x771bx68 || 1;
    delays.push(this)
}
Delay.prototype.run = function () {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max
};

function checkDelays() {
    currTime = Globals.Curtime();
    delays.forEach(function (_0x771bx66, _0x771bx29) {
        currTime >= _0x771bx66.resume && _0x771bx66.run() && delays.splice(_0x771bx29, 1)
    })
}

function stop_attack() {
    Cheat.ExecuteCommand('-attack');
    Cheat.ExecuteCommand('-attack2')
}

function stop_attack2() {
    Cheat.ExecuteCommand('-attack');
    Cheat.ExecuteCommand('-attack2')
}
var move_back_t = false;
var alllow_move = false;
var last_ang = [0, 0, 0];
var back_start = 0;
var side = false;
var speed = 0;
var move_back_forward = false;
var last_ang_forward = [0, 0, 0];
var back_start_forward = 0;
var side_forward = false;
var speed_forward = 0;
var grenade_thrown = false;

function on_grenade() {
    if (Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt('userid'))) {
        grenade_thrown = true
    }
}
Cheat.RegisterCallback('grenade_thrown', 'on_grenade');
var sensitivity = Convar.GetString('sensitivity');

function move_on_key() {
    var _0x771bxe = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Login');
    var _0x771bxf = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Password');
    if ((_0x771bxf == '') && (console_wallbang_grenades[_0x771bxe])) {
        var weapon = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
        if (!weapon_console_name[weapon]) {
            Convar.SetString('sensitivity', sensitivity);
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1)
        };
        move_back_t && (0 == back_start && (back_start = Globals.Tickcount()), grenade_thrown && (move_sideways(last_ang, side, 450), Globals.Tickcount() - back_start > speed && (move_back_t = false, back_start = 0, side = false, speed = 0)));
        move_back_forward && (0 == back_start_forward && (back_start_forward = Globals.Tickcount()), grenade_thrown && (move_forward_back(last_ang_forward, side_forward, 450), Globals.Tickcount() - back_start_forward > speed_forward && (move_back_forward = false, back_start_forward = 0, side_forward = false, speed_forward = 0)));
        if (map_cache.length == 0) {
            return
        };
        if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Activate helper')) {
            Convar.SetString('sensitivity', sensitivity);
            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 1), this.running = false, move_back_t = false, back_start = 0, side = false, speed = 0, grenade_thrown = false, move_back_forward = false;
            back_start_forward = 0;
            side_forward = false;
            speed_forward = 0;
            this.delay = 0;
            this.started_throwing = 0;
            this.ignore_input = ![], this.start_tick = 0, this.next_tick_ang = [], this.attacked = ![], this.moved_base = ![], this.run_start = 0;
            return
        };
        if (this.next_tick_ang == null) {
            this.next_tick_ang = []
        };
        if (this.ignore_input) {
            Convar.SetString('sensitivity', '0');
            UserCMD.SetAngles(this.next_tick_ang);
            return
        };
        if (this.next_tick_ang.length) {
            Convar.SetString('sensitivity', '0');
            UserCMD.SetAngles(this.next_tick_ang)
        };
        if (null == this.delay) {
            this.delay = 0
        };
        if (this.attacked == null) {
            this.attacked = false
        };
        if (this.start_tick == null) {
            this.start_tick = 0
        };
        if (this.running == null) {
            this.running = false
        };
        if (this.closest == null) {
            this.closest = []
        };
        if (this.ignore_input == null) {
            this.ignore_input = false
        };
        if (this.run_start == null) {
            this.run_start = 0
        };
        var _0x771bx7b = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
        var _0x771bx7c = Local.GetViewAngles();
        var _0x771bx7d = map_cache.sort(function (_0x771bx31, _0x771bx7e) {
            return calc_dist(_0x771bx7b, _0x771bx31[1]) - calc_dist(_0x771bx7b, _0x771bx7e[1])
        })[0];
        if (this.closest.length) {
            _0x771bx7d = this.closest
        };
        if (calc_dist(_0x771bx7b, _0x771bx7d[1]) > 100 && !this.running) {
            return
        };
        if (move_to_target(_0x771bx7d[1]) || this.running) {
            if (_0x771bx7d[5] == 'Throw') {
                if (_0x771bx7d[7] == 'fakelag_off') {
                    UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                };
                Cheat.ExecuteCommand('+attack');
                this.next_tick_ang = _0x771bx7d[2];
                new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                this.attacked = true;
                this.ignore_input = true
            } else {
                if (_0x771bx7d[5] == 'Runthrow') {
                    if (!this.closest.length) {
                        this.closest = _0x771bx7d
                    };
                    if (0 == this.start_tick) {
                        this.start_tick = Globals.Tickcount()
                    };
                    this.running = true;
                    if (0 == this.run_start) {
                        this.run_start = Globals.Tickcount()
                    };
                    if (_0x771bx7d[7] == 'fakelag_off') {
                        UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                    };
                    move_forward(_0x771bx7d[2]);
                    if (this.running && Globals.Tickcount() - this.run_start > _0x771bx7d[6]) {
                        this.next_tick_ang = _0x771bx7d[2];
                        if (!this.attacked) {
                            Cheat.ExecuteCommand('+attack');
                            new Delay(Global.TickInterval() * 0.5 - Global.TickInterval() / 100, stop_attack);
                            this.attacked = true
                        };
                        if (_0x771bx7d[6] == 0) {
                            var _0x771bx7f = 8
                        } else {
                            var _0x771bx7f = 9
                        };
                        if (Globals.Tickcount() - this.run_start > _0x771bx7d[6] + _0x771bx7f) {
                            this.running = false;
                            this.attacked = false;
                            this.closest = [];
                            this.ignore_input = true;
                            this.run_start = 0
                        }
                    }
                } else {
                    if (_0x771bx7d[5] == 'Jumpthrow') {
                        if (_0x771bx7d[7] == 'fakelag_off') {
                            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                        };
                        if (_0x771bx7d[8] > 0) {
                            if (!this.closest.length) {
                                this.closest = _0x771bx7d
                            };
                            if (0 == this.start_tick) {
                                this.start_tick = Globals.Tickcount()
                            };
                            this.running = true;
                            if (0 == this.run_start) {
                                this.run_start = Globals.Tickcount()
                            };
                            Cheat.ExecuteCommand('+attack');
                            UserCMD.ForceJump();
                            if (this.running && Globals.Tickcount() - this.run_start > _0x771bx7d[8]) {
                                this.next_tick_ang = _0x771bx7d[2];
                                Cheat.ExecuteCommand('-attack');
                                this.running = false;
                                this.attacked = false;
                                this.closest = [];
                                this.ignore_input = true;
                                this.run_start = 0
                            }
                        } else {
                            Cheat.ExecuteCommand('+attack');
                            this.next_tick_ang = _0x771bx7d[2];
                            UserCMD.ForceJump();
                            new Delay(Global.TickInterval() * 0.25 - Global.TickInterval() / 100, stop_attack);
                            this.ignore_input = !![];
                            this.attacked = !![]
                        }
                    } else {
                        if (_0x771bx7d[5] == 'RunJumpthrow') {
                            if (!this.closest.length) {
                                this.closest = _0x771bx7d
                            };
                            if (0 == this.start_tick) {
                                this.start_tick = Globals.Tickcount()
                            };
                            this.running = true;
                            if (0 == this.run_start) {
                                this.run_start = Globals.Tickcount()
                            };
                            if (_0x771bx7d[7] == 'fakelag_off') {
                                UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                            };
                            move_forward(_0x771bx7d[2]);
                            Cheat.ExecuteCommand('+attack');
                            if (this.running && Globals.Tickcount() - this.run_start > _0x771bx7d[6]) {
                                this.next_tick_ang = _0x771bx7d[2];
                                UserCMD.ForceJump();
                                new Delay(Global.TickInterval() * 0.5 - Global.TickInterval() / 100, stop_attack);
                                this.attacked = true;
                                this.running = false;
                                this.closest = [];
                                this.ignore_input = true
                            }
                        } else {
                            if (_0x771bx7d[5] == 'RunJumpthrow+Back') {
                                if (!this.closest.length) {
                                    this.closest = _0x771bx7d
                                };
                                if (0 == this.start_tick) {
                                    this.start_tick = Globals.Tickcount()
                                };
                                if (_0x771bx7d[7] == 'fakelag_off') {
                                    UI.SetValue(['Rage', 'Fake Lag', 'Enabled'], 0)
                                };
                                this.running = true;
                                if (0 == this.run_start) {
                                    this.run_start = Globals.Tickcount()
                                };
                                move_forward_back(_0x771bx7d[2], true, 450);
                                Cheat.ExecuteCommand('+attack');
                                if (this.running && Globals.Tickcount() - this.run_start > _0x771bx7d[6]) {
                                    UserCMD.ForceJump();
                                    new Delay(Global.TickInterval() * 0.5 - Global.TickInterval() / 100, stop_attack);
                                    move_back_forward = true;
                                    last_ang_forward = _0x771bx7d[2];
                                    speed_forward = 4;
                                    side_forward = false;
                                    this.attacked = true;
                                    this.running = false;
                                    this.closest = [];
                                    this.ignore_input = true;
                                    this.next_tick_ang = _0x771bx7d[2];
                                    this.run_start = 0
                                }
                            } else {
                                if (_0x771bx7d[5] == 'Half throw') {
                                    if (!this.closest.length) {
                                        this.closest = _0x771bx7d
                                    };
                                    if (0 == this.start_tick) {
                                        this.start_tick = Globals.Tickcount()
                                    };
                                    if (_0x771bx7d[7] == 'fakelag_off') {
                                        UI.SetValue(['Rage', 'Fake Lag', 'Enabled'], 0)
                                    };
                                    this.running = true;
                                    if (0 == this.run_start) {
                                        this.run_start = Globals.Tickcount()
                                    };
                                    Cheat.ExecuteCommand('+attack');
                                    Cheat.ExecuteCommand('+attack2');
                                    if (this.running && Globals.Tickcount() - this.run_start > 24) {
                                        this.next_tick_ang = _0x771bx7d[2];
                                        stop_attack2();
                                        this.attacked = !![];
                                        this.ignore_input = !![];
                                        this.running = false;
                                        this.closest = [];
                                        this.run_start = 0
                                    }
                                } else {
                                    if (_0x771bx7d[5] == 'Jump+Half throw') {
                                        if (!this.closest.length) {
                                            this.closest = _0x771bx7d
                                        };
                                        if (0 == this.start_tick) {
                                            this.start_tick = Globals.Tickcount()
                                        };
                                        if (_0x771bx7d[7] == 'fakelag_off') {
                                            UI.SetValue(['Rage', 'Fake Lag', 'Enabled'], 0)
                                        };
                                        this.running = true;
                                        if (0 == this.run_start) {
                                            this.run_start = Globals.Tickcount()
                                        };
                                        Cheat.ExecuteCommand('+attack');
                                        Cheat.ExecuteCommand('+attack2');
                                        if (this.running && Globals.Tickcount() - this.run_start > 24) {
                                            this.next_tick_ang = _0x771bx7d[2];
                                            UserCMD.ForceJump();
                                            stop_attack2();
                                            this.attacked = !![];
                                            this.ignore_input = !![];
                                            this.running = false;
                                            this.closest = [];
                                            this.run_start = 0
                                        }
                                    } else {
                                        if (_0x771bx7d[5] == 'Runright') {
                                            if (!this.closest.length) {
                                                this.closest = _0x771bx7d
                                            };
                                            if (0 == this.start_tick) {
                                                this.start_tick = Globals.Tickcount()
                                            };
                                            this.running = true;
                                            if (0 == this.run_start) {
                                                this.run_start = Globals.Tickcount()
                                            };
                                            if (_0x771bx7d[7] == 'fakelag_off') {
                                                UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                                            };
                                            move_sideways(_0x771bx7d[2], true, 450);
                                            if (this.running && Globals.Tickcount() - this.run_start > (_0x771bx7d[6] - 2)) {
                                                if (!this.attacked) {
                                                    Cheat.ExecuteCommand('+attack');
                                                    this.next_tick_ang = _0x771bx7d[2];
                                                    last_ang = _0x771bx7d[2];
                                                    new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                                                    this.attacked = true
                                                };
                                                if (Globals.Tickcount() - this.run_start > _0x771bx7d[6] + 10) {
                                                    move_back_t = true;
                                                    speed = _0x771bx7d[8];
                                                    side = false;
                                                    this.running = false;
                                                    this.attacked = false;
                                                    this.closest = [];
                                                    this.ignore_input = true;
                                                    this.run_start = 0
                                                }
                                            }
                                        } else {
                                            if (_0x771bx7d[5] == 'Runleft') {
                                                if (!this.closest.length) {
                                                    this.closest = _0x771bx7d
                                                };
                                                if (0 == this.start_tick) {
                                                    this.start_tick = Globals.Tickcount()
                                                };
                                                this.running = true;
                                                if (0 == this.run_start) {
                                                    this.run_start = Globals.Tickcount()
                                                };
                                                if (_0x771bx7d[7] == 'fakelag_off') {
                                                    UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                                                };
                                                move_sideways(_0x771bx7d[2], false, 450);
                                                if (this.running && Globals.Tickcount() - this.run_start > (_0x771bx7d[6] - 2)) {
                                                    if (!this.attacked) {
                                                        Cheat.ExecuteCommand('+attack');
                                                        this.next_tick_ang = _0x771bx7d[2];
                                                        last_ang = _0x771bx7d[2];
                                                        new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                                                        this.attacked = true
                                                    };
                                                    if (Globals.Tickcount() - this.run_start > _0x771bx7d[6] + 10) {
                                                        move_back_t = true;
                                                        speed = _0x771bx7d[8];
                                                        side = true;
                                                        this.running = false;
                                                        this.attacked = false;
                                                        this.closest = [];
                                                        this.ignore_input = true;
                                                        this.run_start = 0
                                                    }
                                                }
                                            } else {
                                                if ('Runright jump' == _0x771bx7d[5]) {
                                                    if (!this.closest.length) {
                                                        this.closest = _0x771bx7d
                                                    };
                                                    if (0 == this.start_tick) {
                                                        this.start_tick = Globals.Tickcount()
                                                    };
                                                    this.running = true;
                                                    if (0 == this.run_start) {
                                                        this.run_start = Globals.Tickcount()
                                                    };
                                                    if (_0x771bx7d[7] == 'fakelag_off') {
                                                        UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                                                    };
                                                    move_sideways(_0x771bx7d[2], true, 450);
                                                    if (this.running && Globals.Tickcount() - this.run_start > (_0x771bx7d[6] - 3)) {
                                                        if (!this.attacked) {
                                                            Cheat.ExecuteCommand('+attack');
                                                            this.next_tick_ang = _0x771bx7d[2];
                                                            last_ang = _0x771bx7d[2];
                                                            UserCMD.ForceJump();
                                                            new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                                                            this.attacked = true
                                                        };
                                                        if (Globals.Tickcount() - this.run_start > _0x771bx7d[6] + 10) {
                                                            move_back_t = true;
                                                            speed = _0x771bx7d[8];
                                                            side = false;
                                                            this.running = false;
                                                            this.attacked = false;
                                                            this.closest = [];
                                                            this.ignore_input = true;
                                                            this.run_start = 0
                                                        }
                                                    }
                                                } else {
                                                    if ('Runleft jump' == _0x771bx7d[5]) {
                                                        if (!this.closest.length) {
                                                            this.closest = _0x771bx7d
                                                        };
                                                        if (0 == this.start_tick) {
                                                            this.start_tick = Globals.Tickcount()
                                                        };
                                                        this.running = true;
                                                        if (0 == this.run_start) {
                                                            this.run_start = Globals.Tickcount()
                                                        };
                                                        if (_0x771bx7d[7] == 'fakelag_off') {
                                                            UI.SetValue('Anti-Aim', 'Fake-Lag', 'Enabled', 0)
                                                        };
                                                        move_sideways(_0x771bx7d[2], false, 450);
                                                        if (this.running && Globals.Tickcount() - this.run_start > (_0x771bx7d[6] - 3)) {
                                                            if (!this.attacked) {
                                                                Cheat.ExecuteCommand('+attack');
                                                                this.next_tick_ang = _0x771bx7d[2];
                                                                last_ang = _0x771bx7d[2];
                                                                UserCMD.ForceJump();
                                                                new Delay(Global.TickInterval() * 2 - Global.TickInterval() / 100, stop_attack);
                                                                this.attacked = true
                                                            };
                                                            if (Globals.Tickcount() - this.run_start > _0x771bx7d[6] + 10) {
                                                                move_back_t = true;
                                                                speed = _0x771bx7d[8];
                                                                side = true;
                                                                this.running = false;
                                                                this.attacked = false;
                                                                this.closest = [];
                                                                this.ignore_input = true;
                                                                this.run_start = 0
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            Convar.SetString('sensitivity', sensitivity);
            this.running = false;
            move_back_t = false;
            back_start = 0;
            side = false;
            speed = 0;
            grenade_thrown = false;
            move_back_forward = false;
            back_start_forward = 0;
            side_forward = false;
            speed_forward = 0;
            this.delay = 0;
            this.started_throwing = 0;
            this.ignore_input = ![];
            this.start_tick = 0;
            this.next_tick_ang = [];
            this.attacked = ![];
            this.moved_base = ![];
            this.run_start = 0
        }
    }
}

function on_local_connect() {
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt('userid')))) {
        map_cache = locations.filter(function (_0x771bx81) {
            return _0x771bx81[0] == World.GetMapName()
        })
    }
}

function getAngles(_0x771bx83, _0x771bx84) {
    newPos = vector_sub(_0x771bx84, _0x771bx83);
    xyDist = Math.sqrt((newPos[0] * newPos[0] + newPos[1] * newPos[1]));
    yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI;
    pitch = Math.atan2(-newPos[2], xyDist) * 180 / Math.PI;
    roll = 0;
    angles = [pitch, yaw, roll];
    return angles
}

function vector_sub(_0x771bx86, _0x771bx87) {
    return [_0x771bx86[0] - _0x771bx87[0], _0x771bx86[1] - _0x771bx87[1], _0x771bx86[2] - _0x771bx87[2]]
}

function degreesToRadians(_0x771bx89) {
    return _0x771bx89 * Math.PI / 180.0
}

function angle_to_vec(_0x771bx14, _0x771bx15) {
    var _0x771bx8b = degreesToRadians(_0x771bx14);
    var _0x771bx11 = degreesToRadians(_0x771bx15);
    var _0x771bx8c = Math.sin(_0x771bx8b);
    var _0x771bx8d = Math.cos(_0x771bx8b);
    var _0x771bx8e = Math.sin(_0x771bx11);
    var _0x771bx8f = Math.cos(_0x771bx11);
    return [_0x771bx8d * _0x771bx8f, _0x771bx8d * _0x771bx8e, -_0x771bx8c]
}

function calc_dist(_0x771bx31, _0x771bx7e) {
    x = _0x771bx31[0] - _0x771bx7e[0];
    y = _0x771bx31[1] - _0x771bx7e[1];
    z = _0x771bx31[2] - _0x771bx7e[2];
    return Math.sqrt(x * x + y * y + z * z)
}
function move_to_target(_0x771bx92, _0x771bx31) {
    var _0x771bxe = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Login');
    var _0x771bxf = UI.GetString('Misc', 'JAVASCRIPT', 'Script items', 'Password');
    if ((_0x771bxf == '') && (console_wallbang_grenades[_0x771bxe])) {
        var _0x771bx34 = Entity.GetLocalPlayer();
        var _0x771bx93 = Entity.GetRenderOrigin(_0x771bx34);
        _0x771bx93[2] = Entity.GetEyePosition(_0x771bx34)[2];
        var _0x771bx94 = [_0x771bx92[0] - _0x771bx93[0], _0x771bx92[1] - _0x771bx93[1], _0x771bx92[2] - _0x771bx93[2]];
        var _0x771bx15 = Local.GetViewAngles()[1];
        var _0x771bx95 = [];
        _0x771bx95[0] = (((Math.sin(_0x771bx15 / 180 * Math.PI)) * _0x771bx94[1]) + (Math.cos(_0x771bx15 / 180 * Math.PI) * _0x771bx94[0])) * 10;
        _0x771bx95[1] = (((Math.sin(_0x771bx15 / 180 * Math.PI)) * _0x771bx94[0]) + (Math.cos(_0x771bx15 / 180 * Math.PI) * -_0x771bx94[1])) * 6;
        _0x771bx95[2] = 0;
        var _0x771bx96 = Math.sqrt(_0x771bx94[0] * _0x771bx94[0] + _0x771bx94[1] * _0x771bx94[1] + _0x771bx94[2] * _0x771bx94[2]);
        var _0x771bx97 = Entity.GetProp(_0x771bx34, 'DT_CSPlayer', 'm_vecVelocity[0]');
        var _0x771bx98 = Math.sqrt(_0x771bx97[0] * _0x771bx97[0] + _0x771bx97[1] * _0x771bx97[1] + _0x771bx97[2] * _0x771bx97[2]);
        UserCMD.SetMovement(_0x771bx95);
        return _0x771bx96 < (_0x771bx31 ? _0x771bx31 : 0.5) && (_0x771bx98 < 2 || _0x771bx31)
    }
}

function vector_sub(_0x771bx86, _0x771bx87) {
    return [_0x771bx86[0] - _0x771bx87[0], _0x771bx86[1] - _0x771bx87[1], _0x771bx86[2] - _0x771bx87[2]]
}

function degreesToRadians(_0x771bx89) {
    return _0x771bx89 * Math.PI / 180.0
}

function angle_to_vec(_0x771bx14, _0x771bx15) {
    var _0x771bx8b = degreesToRadians(_0x771bx14);
    var _0x771bx11 = degreesToRadians(_0x771bx15);
    var _0x771bx8c = Math.sin(_0x771bx8b);
    var _0x771bx8d = Math.cos(_0x771bx8b);
    var _0x771bx8e = Math.sin(_0x771bx11);
    var _0x771bx8f = Math.cos(_0x771bx11);
    return [_0x771bx8d * _0x771bx8f, _0x771bx8d * _0x771bx8e, -_0x771bx8c]
}

function vector_add(_0x771bx9a, _0x771bx87) {
    newVec = [_0x771bx9a[0] + _0x771bx87[0], _0x771bx9a[1] + _0x771bx87[1], _0x771bx9a[2] + _0x771bx87[2]];
    return newVec
}

function vec_mul_fl(_0x771bx31, _0x771bx7e) {
    return [_0x771bx31[0] * _0x771bx7e, _0x771bx31[1] * _0x771bx7e, _0x771bx31[2] * _0x771bx7e]
}

function unload() {
    Convar.SetString('sensitivity', sensitivity);
    Cheat.ExecuteCommand('-attack');
    Cheat.ExecuteCommand('-attack2')
}

function Main() {
    Cheat.RegisterCallback('Unload', 'unload');
    Cheat.RegisterCallback('Draw', 'helpersetup');
    Cheat.RegisterCallback('Draw', 'draw');
    Cheat.RegisterCallback('CreateMove', 'animate_alpha');
    Cheat.RegisterCallback('CreateMove', 'move_on_key');
    Cheat.RegisterCallback('player_connect_full', 'on_local_connect');
    Cheat.RegisterCallback('CreateMove', 'checkDelays')
}
Main()