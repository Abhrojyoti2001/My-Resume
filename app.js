function login(){
    window.open('page.html?page=Dashboard','_blank');
    window.close();
}
function htmlControlFunction(page_name){
    let text;
    switch (page_name){
                case 'Profile':
                    text = `<div class="card">
                                <div class="card-body" style="padding: 30px;">
                                    <legend style="margin-bottom: 12px;"><u>Personal Dossier: </u></legend>
                                    <p class="font-Azeret_Mono">Father’s Name:  <span>Amit Kumar Chatterjee</span><br>     
                                        Mother’s Name: <span>Sonali Chatterjee</span><br>
                                        Date of Birth: <span>21<sup>st</sup> August, 2001</span><br>
                                        Gender: <span>Male</span><br>
                                        Permanent Address:  <span>Arunalaya, Bakultala-Lane, Ramrajatala, P.O- Santragachi, Howrah, West Bengal, Pin.- 711104 near by </span><a href="https://www.google.com/maps/place/Nabadiganta+(New+Star+Club)/@22.5902464,88.3034225,20.5z/data=!4m5!3m4!1s0x3a02786b2034222b:0xadb281157ef440!8m2!3d22.5902799!4d88.3033491" target="_blank">New-Star Club</a><br>    
                                        State: <span>West Bengal</span><br>
                                        Nationality: <span>Indian</span><br>
                                        Religion: <span>Hindu</span><br>
                                        Blood Group: <span>O+</span><br>
                                        Any Physical Challenges: <span>No</span><br>
                                        Marital Status: <span>Single</span><br>
                                        Languages Known: <span>English, Bengali and Hindi</span>
                                    </p>
                                </div>
                            </div>"`;
                    document.getElementById('container-2nd-row').innerHTML = text;break;
                case 'Education':
                    text = ``;document.getElementById('').innerHTML = text;break;
                case 'Experience':
                    text = ``;document.getElementById('').innerHTML = text;break;
                case 'Training':
                    text = ``;document.getElementById('').innerHTML = text;break;
                case 'Projects':
                    text = ``;document.getElementById('').innerHTML = text;break;
                case 'Extra-Curricular':
                    text = ``;document.getElementById('').innerHTML = text;break;
                case 'Achivements':
                    text = ``;document.getElementById('').innerHTML = text;
            }
}
function logout(){
    if (confirm("Are you sure to want to log out?")){
        window.open('login.html','_blank');
        window.close();
    }else {
        pass;
    }
}
