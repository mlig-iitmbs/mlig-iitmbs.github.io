const r=document.querySelectorAll(".tab-btn"),l={advisor:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Mr. Piyush Wairale</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Instructor, BS DS; CPOC, AWS Academy, IIT Madras</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4"><i>Sir is a teaching fellow at our BS Program. He's a Google and Microsoft-Learn certified AI educator. He's completed his MTech from IITM. We are grateful to have him as our advisor. He has offered guidance and support to many of our initiatives - LogicLooM, ML Challenge.</i></p>
      </div>
    `,leads:`
<div class="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center w-80 
            hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden group">
  
  <div class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-200 to-transparent 
              rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
  <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-bl from-purple-300 to-transparent 
              rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
  
  <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22150%22><path d=%22M75 0a75 75 0 0 1 0 150A75 75 0 0 1 75 0z%22 stroke=%22%23a855f7%22 stroke-width=%221%22 fill=%22none%22/></svg>')] bg-center bg-contain bg-no-repeat"></div>
<img src="https://mlig-iitmbs.github.io/archive/people/somsubhra.png"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" />
  <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300 relative z-10">Somsubhra De</h4>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 relative z-10">Core (Events), Lead</p>
</div>

<div class="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center w-80 
            hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden group">
  
  <div class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-200 to-transparent 
              rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
  <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-bl from-purple-300 to-transparent 
              rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

  <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22150%22><path d=%22M75 0a75 75 0 0 1 0 150A75 75 0 0 1 75 0z%22 stroke=%22%23a855f7%22 stroke-width=%221%22 fill=%22none%22/></svg>')] bg-center bg-contain bg-no-repeat"></div>
<img src="https://mlig-iitmbs.github.io/archive/people/anirban.jpg"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" />
  <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300 relative z-10">Anirban Mandal</h4>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 relative z-10">DyCore, Events (Outreach)</p>
</div>

    `,coordinators:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
      <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" />
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Chirantan Chakraborty</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Support-ops (Wayanad House)</p>
      </div>
    `,volunteers:`
       <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" />
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Ashwani Maurya</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Multimedia volunteer (Wayanad House)</p>
      </div>
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
       <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" /> 
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Siddharth Dadhich</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Volunteer (Wayanad House)</p>
      </div>
    `,othercontributors:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
       alt=""
       class="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700 relative z-10" />
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Pritesh Gupta</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">SEC member</p>
      </div>
    `};function a(t){const e=document.getElementById("team-cards");e.innerHTML=l[t],r.forEach(o=>o.classList.remove("active-tab")),document.getElementById(`${t}-btn`).classList.add("active-tab")}a("leads");r.forEach(t=>{t.addEventListener("click",e=>{a(e.target.id.replace("-btn",""))})});
