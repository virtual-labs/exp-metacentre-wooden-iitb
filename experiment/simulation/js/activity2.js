function internal_calculation2() {
    y_a2 = 0;
    z_a2 = 0;
    hw_a2 = 0;
    ab_a2 = 0;
    ag_a2 = 0;
    bg_a2 = 0;
    I_a2 = 0;
    v_a2 = 0;
    gm_a2 = 0;
    h_a2 = h_a1;
    y_a2 = parseFloat((sp_gra * 1000 * g * l_a2 * w_a2 * h_a2).toFixed(3));
    z_a2 = parseFloat((1000 * g * l_a2 * w_a2).toFixed(3));
    hw_a2 = parseFloat((y_a2 / z_a2).toFixed(3));
    ab_a2 = parseFloat((hw_a2 / 2).toFixed(3));
    ag_a2 = parseFloat((h_a2 / 2).toFixed(3));
    bg_a2 = parseFloat((ag_a2 - ab_a2).toFixed(3));
    I_a2 = parseFloat(((l_a2 * Math.pow(w_a2, 3)) / 12).toFixed(3));
    v_a2 = parseFloat((l_a2 * w_a2 * hw_a2).toFixed(3));
    gm_a2 = parseFloat((I_a2 / v_a2 - bg_a2).toFixed(3));
    console.log('l = ', l_a2);
    console.log('w = ', w_a2);
    console.log('h = ', h_a2);
    console.log('y = ', y_a2);
    console.log('z = ', z_a2);
    console.log('hw = ', hw_a2);
    console.log('ab = ', ab_a2);
    console.log('ag = ', ag_a2);
    console.log('bg = ', bg_a2);
    console.log('I = ', I_a2);
    console.log('v = ', v_a2);
    console.log('gm = ', gm_a2);
}
function activity2() {
    let btn = (document.getElementById('act1-btn8'));
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <p style="text-align:left;">
         A block of wood of specific gravity ${sp_gra} floats in water.
      </p>
      <p style="text-align:left;">
         Determine the meta-centric height of the block if its size is ${l_a2}m &times; ${w_a2}m &times; ${h_a2}m  
      </p>
      <br>
      <img width="40%" src="./images/fig.png" alt="">
      <br>
      <br>
      <p style="text-align:left;">
         Let depth of immersion is h<sub>w</sub> .
      </p>
      <p>
         weight of wood (y) = specific gravity &times; 1000 &times; g &times; l &times; w &times; h
      </p>
      <div id="act2-y-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               weight of wood(y) =
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-y-inp' class='form-control fs-16px' /> <span style="display:contents;">N
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_y_a2();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function verify_y_a2() {
    let inp = (document.getElementById('act2-y-inp'));
    console.log(y_a2);
    if (!verify_values(parseFloat(inp.value), y_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-y-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         weight of wood(y) = ${y_a2} N
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_z_div_a2();'>Next</button>
   `;
}
function load_z_div_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
      <br>
      <p>
         weight of water displaced = &rho;<sub>w</sub> &times; g &times; l &times; w &times; h<sub>w</sub>
      </p>
      <div id="act2-z-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               weight of water displaced = zh<sub>w</sub> =
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-z-inp' class='form-control fs-16px' /><span style="display:contents;">hw</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_z_a2();'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_z_a2() {
    let inp = (document.getElementById('act2-z-inp'));
    console.log(z_a2);
    if (!verify_values(parseFloat(inp.value), z_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-z-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      weight of water displaced = zh<sub>w</sub> = ${z_a2}h<sub>w</sub>
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn7" onclick='load_hw_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_hw_div_a2() {
    let btn = (document.getElementById('act2-btn7'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p>
      weight of water displaced = weight of wood
   </p>
   <p>
      ${z_a2}h<sub>w</sub> = y
   </p>
   <div id="act2-hw-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ h_w = \\frac{y}{z} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-hw-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_hw_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_hw_a2() {
    let inp = (document.getElementById('act2-hw-inp'));
    console.log(hw_a2);
    if (!verify_values(parseFloat(inp.value), hw_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-hw-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h_w = \\frac{y}{z} = ${hw_a2} \\ m$$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_ab_ag_bg_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_ab_ag_bg_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div id="act2-ab-ag-bg-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$AB = \\frac{h_w}{2} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-ab-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$AG = \\frac{h}{2} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-ag-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$BG = AG - AB = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-bg-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_ab_ag_bg_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_ab_ag_bg_a2() {
    let ab_inp = (document.getElementById('act2-ab-inp'));
    let ag_inp = (document.getElementById('act2-ag-inp'));
    let bg_inp = (document.getElementById('act2-bg-inp'));
    console.log(ab_a2, ag_a2, bg_a2);
    if (!verify_values(parseFloat(ab_inp.value), ab_a2)) {
        ab_inp.style.border = '1px solid red';
        alert('Incorrect AB value');
        return;
    }
    else {
        ab_inp.style.border = '1px solid #ced4da';
        ab_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ag_inp.value), ag_a2)) {
        ag_inp.style.border = '1px solid red';
        alert('Incorrect AG value');
        return;
    }
    else {
        ag_inp.style.border = '1px solid #ced4da';
        ag_inp.disabled = true;
    }
    if (!verify_values(parseFloat(bg_inp.value), bg_a2)) {
        bg_inp.style.border = '1px solid red';
        alert('Incorrect BG value');
        return;
    }
    else {
        bg_inp.style.border = '1px solid #ced4da';
        bg_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-ab-ag-bg-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$AB = \\frac{h_w}{2} = ${ab_a2} \\ m$$
         $$AG = \\frac{h}{2} = ${ag_a2} \\ m$$
         $$BG = AG - AB = ${bg_a2} \\ m $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='load_inertia_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div_a2() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Moment of Inertia(I)
   </p>
   <div id="act2-inertia-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ I = \\frac{bd^3}{12} = \\frac{lw^3}{12} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_i_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i_a2() {
    let inp = (document.getElementById('act2-i-inp'));
    console.log(I_a2);
    if (!verify_values(parseFloat(inp.value), I_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            I = \\frac{bd^3}{12} = \\frac{lw^3}{12} = ${I_a2} \\ m^4
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn4" onclick='load_volume_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_volume_div_a2() {
    let btn = (document.getElementById('act2-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Volume of wood in water
   </p>
   <div id="act2-volume-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ \∀ = l \× w \× h_w = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-volume-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_volume_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_volume_a2() {
    let inp = (document.getElementById('act2-volume-inp'));
    console.log(v_a2);
    if (!verify_values(parseFloat(inp.value), v_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-volume-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \∀ = l \× w \× h_w = ${v_a2} \\ m^3
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn5" onclick='load_gm_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_gm_div_a2() {
    let btn = (document.getElementById('act2-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Meta centric height
   </p>
   <div id="act2-gm-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$GM = \\frac{I}{\∀} - BG = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-gm-inp' class='form-control fs-16px' /><span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_gm_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_gm_a2() {
    let inp = (document.getElementById('act2-gm-inp'));
    console.log(gm_a2);
    if (!verify_values(parseFloat(inp.value), gm_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-gm-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            GM = \\frac{I}{\∀} - BG = ${gm_a2} \\ m
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn6" onclick='load_question_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_question_a2() {
    let btn = (document.getElementById('act2-btn6'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div id="act2-q-box-div">
   
   </div>
   `;
    let ques = `Comment on the stability.`;
    let opt = ['Stable', 'Unstable'];
    ans_a2 = gm_a2 < 0 ? '2' : '1';
    let box = (document.getElementById('act2-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a2, box, 'act2-q-box', success_func1_a2);
    question.load_question();
    let que = (document.querySelector('#act2-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function success_func1_a2() {
    let div = (document.getElementById('act2-div'));
    let text = ans_a2 === '1' ? 'stable' : 'unstable';
    alert(`You are correct, it is ${text}.`);
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' id="act2-btn8" onclick='load_stable_ques_a2();'>Next</button>
   `;
}
function load_stable_ques_a2() {
    let btn = document.getElementById('act2-btn8');
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div id="act2-stable-q-box-div">
   
   </div>
   `;
    let ques = `Which is more stable?`;
    let opt = [
        `<div>
      <div>
         size = ${l_a1} &times; ${w_a1} &times; ${h_a1}
      </div>
      <img width="70%" src="./images/fig.png" alt="">
      <p>
         GM = ${gm_a1}
      </p>
   </div>`,
        `<div>
      <div>
         size = ${l_a2} &times; ${w_a2} &times; ${h_a2}
      </div>
      <img width="70%" src="./images/fig.png" alt="">
      <p>
         GM = ${gm_a2}
      </p>
   </div>`,
    ];
    more_stable = gm_a1 < gm_a2 ? '2' : '1';
    let q_box = (document.getElementById('act2-stable-q-box-div'));
    let question = new Question_Options(ques, opt, more_stable, q_box, 'act2-stable-q-box', move_to_act3);
    question.load_question();
    let que = (document.querySelector('#act2-stable-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function move_to_act3() {
    let div = (document.getElementById('act2-div'));
    alert('You are correct');
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' id="act2-btn9" onclick='activity3();'>Next</button>
   `;
}
//# sourceMappingURL=activity2.js.map