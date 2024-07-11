
function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    
    if (!weight || !height) {
        alert('Please enter both height and weight.');
        return;
    }
    if ((weight < 10 || weight > 300) || (height < 10 || height > 300)) {
        alert('Please enter weight & height between 10-300.');
        return;
    }
    let temp = weight / ((height / 100) ** 2);
    let bmi=temp.toFixed(2);
    let category = '';
    let bgColor = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        bgColor = 'text-warning';
        bgImage='https://imgs.search.brave.com/RlGNUcFuAgfLxZ_OcA20-EuGRtQUOWSsNg6GOITELvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivd29tYW4tbG9v/c2UtY2xvdGhlcy1h/ZnRlci13ZWlnaHQt/bG9zcy1oZWFsdGh5/LWxpZmVzdHlsZS1j/b25jZXB0LWZ1bGwt/bGVuZ3RoLXZlY3Rv/ci1pbGx1c3RyYXRp/b25fNDgzNjktNDM5/NDYuanBnP3NpemU9/NjI2JmV4dD1qcGc'
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        bgColor = 'text-success';
        bgImage='https://img.freepik.com/free-vector/hand-drawn-strong-man-cartoon-illustration_52683-117786.jpg?t=st=1720525903~exp=1720529503~hmac=2a23b2f0d5a33ba4723086f0f9362cd225147f57947e76300995adfbe9d5febb&w=740'
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        bgColor = 'text-danger';
        bgImage='https://imgs.search.brave.com/53J2H78TCBG-xxMysClVTj2JhsvHV_6fuchjyBRwtBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vODk4NjE1/OC82NjQ2NC92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzY2NDY0OTcw/Ni1zdG9jay1pbGx1/c3RyYXRpb24tZmF0/LW1hbi1zdGFuZHMt/aXNvbGF0ZWQtd2hp/dGUuanBn'

    } else {
        category = 'Obese';
        bgColor = 'text-danger';
        bgImage='https://img.freepik.com/free-vector/obesity-problem-overweight-man-medical-consultation-diagnostics-negative-impact-obesity-humans-health-internal-organs-vector-isolated-concept-metaphor-illustration_335657-1305.jpg?size=626&ext=jpg&ga=GA1.1.804963107.1720418249&semt=ais_hybrid'  
    }
        
        document.getElementById("card").innerHTML=`
<div class="container">
            <div class="row d-flex">
                <div class="col-md-6 d-flex align-items-stretch" style="padding: 5px; box-sizing: border-box;">
                    <div class="side-image" style="background-image: url('${bgImage}'); background-size: cover; width: 100%;"></div>
                </div>
                <div class="col-md-6 right d-flex flex-column justify-content-center" style="padding: 5px; box-sizing: border-box;">
                    <div class="input-box">
                        <h4 class="text-center">BMI Calculator</h4>
                        <h5 class="input-box text-center ${bgColor}">${category}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-center">Your BMI IS <span class="fw-bold">${bmi}</span></li>
                        </ul>
                        <details class="align-items-center mb-2" onclick="toggleRowHeight(this)">
                            <summary>Details</summary>
                            <div class="justify-content-center align-items-left">
                                This BMI chart shows your BMI result of <span class="fw-bold">${bmi}</span> as a cross in the <span class="fw-bold">${category}</span> area.
                            </div>
                            <p class="mt-2"><small>The chart is a horizontal bar divided into 4 areas.</small></p>
                            <ul class="fw-light m-2">
                                <li><span class="fw-semibold">Underweight:</span> A BMI of 18.4 and below is classed as underweight.</li>
                                <li><span class="fw-semibold">Healthy:</span> A BMI of 18.5 to 22.9 is classed as a healthy weight.</li>
                                <li><span class="fw-semibold">Overweight:</span> A BMI of 23 to 27.4 is classed as overweight.</li>
                                <li><span class="fw-semibold">Obese:</span> A BMI of 27.5 or more is classed as obese.</li>
                            </ul>
                        </details>
                        <div class="input-field">
                            <button type="button" class="resetbutton" onclick="reset()">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>


        `   
}
function reset(){
    window.location.reload()
}