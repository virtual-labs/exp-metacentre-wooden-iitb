var chart;
function activity3() {
    let btn = (document.getElementById('act2-btn9'));
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act3-div'>
      <h3>Activity 3</h3>
      <p>Plot graph </p>
      <br>
      <canvas id="myChart">
      
      </canvas>
      <br>
      <button class='btn btn-info btn-sm std-btn' id='act3-btn1' onclick='load_ques_a3();'>Next</button>
   </div>`;
    maindiv.innerHTML += text;
    draw_plot();
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
}
function draw_plot() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = 'white';
    // ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: h_ar,
            datasets: [
                {
                    label: 'GM',
                    data: M,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Meta-centric height in meters',
                        font: { size: 14, weight: 'bold' },
                    },
                    ticks: {
                        format: {
                            maximumFractionDigits: 4,
                            minimumFractionDigits: 4,
                        },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Height in meters',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `Meta Centre vs Height of Block`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
function internal_calculation3() {
    meta_cen_height = 0;
    for (let i = 0.5; i <= 1.5; i += 0.02) {
        let y = sp_gra * 1000 * g * l_a1 * w_a1 * i;
        let z = 1000 * g * l_a1 * w_a1;
        let hw = y / z;
        let ab = hw / 2;
        let ag = i / 2;
        let bg = ag - ab;
        let I = (l_a1 * Math.pow(w_a1, 3)) / 12;
        let v = l_a1 * w_a1 * hw;
        let gm = I / v - bg;
        h_ar.push(parseFloat(i.toFixed(2)));
        M.push(parseFloat(gm.toFixed(4)));
        M_abs.push(parseFloat(Math.abs(gm).toFixed(4)));
    }
    meta_cen_height = h_ar[M_abs.indexOf(Math.min(...M_abs))];
}
function load_ques_a3() {
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <div id="act3-meta-centric-height-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-6">
            What is the height of the block representing neutral condition?
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act3-height-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_height();'>Verify</button>
   </div>
   `;
    draw_plot();
}
function verify_height() {
    let inp = (document.getElementById('act3-height-inp'));
    console.log(meta_cen_height);
    if (!verify_values(parseFloat(inp.value), meta_cen_height)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-meta-centric-height-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      Height of the block representing neutral condition is ${meta_cen_height}m
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn2" onclick='exp_complete();'>Next</button>
   `;
}
function exp_complete() {
    let btn = document.getElementById('act3-btn2');
    btn && btn.remove();
    alert('Experiment Completed');
}
//# sourceMappingURL=activity3.js.map