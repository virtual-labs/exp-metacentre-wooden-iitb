let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Metacentre and stability of wooden block</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function internal_calculation1() {
    h_a1 = 0;
    y_a1 = 0;
    z_a1 = 0;
    hw_a1 = 0;
    ab_a1 = 0;
    ag_a1 = 0;
    bg_a1 = 0;
    I_a1 = 0;
    v_a1 = 0;
    gm_a1 = 0;
    h_a1 = parseFloat(random(0.5, 1.5).toFixed(1));
    y_a1 = parseFloat((sp_gra * 1000 * g * l_a1 * w_a1 * h_a1).toFixed(3));
    z_a1 = parseFloat((1000 * g * l_a1 * w_a1).toFixed(3));
    hw_a1 = parseFloat((y_a1 / z_a1).toFixed(3));
    ab_a1 = parseFloat((hw_a1 / 2).toFixed(3));
    ag_a1 = parseFloat((h_a1 / 2).toFixed(3));
    bg_a1 = parseFloat((ag_a1 - ab_a1).toFixed(3));
    I_a1 = parseFloat(((l_a1 * Math.pow(w_a1, 3)) / 12).toFixed(3));
    v_a1 = parseFloat((l_a1 * w_a1 * hw_a1).toFixed(3));
    gm_a1 = parseFloat((I_a1 / v_a1 - bg_a1).toFixed(3));
    console.log('l = ', l_a1);
    console.log('w = ', w_a1);
    console.log('h = ', h_a1);
    console.log('y = ', y_a1);
    console.log('z = ', z_a1);
    console.log('hw = ', hw_a1);
    console.log('ab = ', ab_a1);
    console.log('ag = ', ag_a1);
    console.log('bg = ', bg_a1);
    console.log('I = ', I_a1);
    console.log('v = ', v_a1);
    console.log('gm = ', gm_a1);
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <p style="text-align:left;">
         A block of wood of specific gravity ${sp_gra} floats in water.
      </p>
      <p style="text-align:left;">
         Determine the meta-centric height of the block if its size is ${l_a1}m &times; ${w_a1}m &times; ${h_a1}m  
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
      <div id="act1-y-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               weight of wood(y) =
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-y-inp' class='form-control fs-16px' /> <span style="display:contents;">N
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_y();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function verify_y() {
    let inp = (document.getElementById('act1-y-inp'));
    console.log(y_a1);
    if (!verify_values(parseFloat(inp.value), y_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-y-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         weight of wood(y) = ${y_a1} N
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_z_div();'>Next</button>
   `;
}
function load_z_div() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
      <br>
      <p>
         weight of water displaced = &rho;<sub>w</sub> &times; g &times; l &times; w &times; h<sub>w</sub>
      </p>
      <div id="act1-z-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               weight of water displaced = zh<sub>w</sub> = 
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-z-inp' class='form-control fs-16px' /><span style="display:contents;">hw</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_z();'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_z() {
    let inp = (document.getElementById('act1-z-inp'));
    console.log(z_a1);
    if (!verify_values(parseFloat(inp.value), z_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-z-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      weight of water displaced = zh<sub>w</sub> = ${z_a1}h<sub>w</sub>
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act1-btn7" onclick='load_hw_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_hw_div() {
    let btn = (document.getElementById('act1-btn7'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p>
      weight of water displaced = weight of wood
   </p>
   <p>
      ${z_a1}h<sub>w</sub> = y
   </p>
   <div id="act1-hw-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ h_w = \\frac{y}{z} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-hw-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_hw();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_hw() {
    let inp = (document.getElementById('act1-hw-inp'));
    console.log(hw_a1);
    if (!verify_values(parseFloat(inp.value), hw_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-hw-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h_w = \\frac{y}{z} = ${hw_a1} \\ m$$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_ab_ag_bg_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_ab_ag_bg_div() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div id="act1-ab-ag-bg-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$AB = \\frac{h_w}{2} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-ab-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$AG = \\frac{h}{2} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-ag-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$BG = AG - AB = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-bg-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_ab_ag_bg();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_ab_ag_bg() {
    let ab_inp = (document.getElementById('act1-ab-inp'));
    let ag_inp = (document.getElementById('act1-ag-inp'));
    let bg_inp = (document.getElementById('act1-bg-inp'));
    console.log(ab_a1, ag_a1, bg_a1);
    if (!verify_values(parseFloat(ab_inp.value), ab_a1)) {
        ab_inp.style.border = '1px solid red';
        alert('Incorrect AB value');
        return;
    }
    else {
        ab_inp.style.border = '1px solid #ced4da';
        ab_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ag_inp.value), ag_a1)) {
        ag_inp.style.border = '1px solid red';
        alert('Incorrect AG value');
        return;
    }
    else {
        ag_inp.style.border = '1px solid #ced4da';
        ag_inp.disabled = true;
    }
    if (!verify_values(parseFloat(bg_inp.value), bg_a1)) {
        bg_inp.style.border = '1px solid red';
        alert('Incorrect BG value');
        return;
    }
    else {
        bg_inp.style.border = '1px solid #ced4da';
        bg_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-ab-ag-bg-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$AB = \\frac{h_w}{2} = ${ab_a1} \\ m$$
         $$AG = \\frac{h}{2} = ${ag_a1} \\ m$$
         $$BG = AG - AB = ${bg_a1} \\ m $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='load_inertia_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Moment of Inertia(I)
   </p>
   <div id="act1-inertia-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ I = \\frac{bd^3}{12} = \\frac{lw^3}{12} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_i();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i() {
    let inp = (document.getElementById('act1-i-inp'));
    console.log(I_a1);
    if (!verify_values(parseFloat(inp.value), I_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            I = \\frac{bd^3}{12} = \\frac{lw^3}{12} = ${I_a1} \\ m^4
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn4" onclick='load_volume_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_volume_div() {
    let btn = (document.getElementById('act1-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Volume of wood in water
   </p>
   <div id="act1-volume-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ \∀ = l \× w \× h_w = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-volume-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_volume();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_volume() {
    let inp = (document.getElementById('act1-volume-inp'));
    console.log(v_a1);
    if (!verify_values(parseFloat(inp.value), v_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-volume-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \∀ = l \× w \× h_w = ${v_a1} \\ m^3
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn5" onclick='load_gm_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_gm_div() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Meta centric height
   </p>
   <div id="act1-gm-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$GM = \\frac{I}{\∀} - BG = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-gm-inp' class='form-control fs-16px' /><span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_gm();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_gm() {
    let inp = (document.getElementById('act1-gm-inp'));
    console.log(gm_a1);
    if (!verify_values(parseFloat(inp.value), gm_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-gm-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            GM = \\frac{I}{\∀} - BG = ${gm_a1} \\ m
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn6" onclick='load_question();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_question() {
    let btn = (document.getElementById('act1-btn6'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div id="act1-q-box-div">
   
   </div>
   `;
    let ques = `Comment on the stability.`;
    let opt = ['Stable', 'Unstable'];
    ans_a1 = gm_a1 < 0 ? '2' : '1';
    let box = (document.getElementById('act1-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a1, box, 'act1-q-box', move_to_act2);
    question.load_question();
    let que = (document.querySelector('#act1-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function move_to_act2() {
    let div = (document.getElementById('act1-div'));
    let text = ans_a1 === '1' ? 'stable' : 'unstable';
    alert(`You are correct, it is ${text}.`);
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' id="act1-btn8" onclick='activity2();'>Next</button>
   `;
}
activity1();
//# sourceMappingURL=activity1.js.map