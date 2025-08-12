const a=document.querySelectorAll(".tab-btn"),o={advisor:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Mr. Piyush Wairale</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Instructor, BS DS; CPOC, AWS Academy, IIT Madras</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4"><i>Sir is a teaching fellow at our BS Program. He's a Google and Microsoft-Learn certified AI educator. He's completed his MTech from IITM. We are grateful to have him as our advisor. Though not actively associated with the ML Series, he offers guidance and support to many of our initiatives - LogicLooM, ML Challenge.</i></p>
      </div>
    `,leads:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Somsubhra De</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Core (Events)</p>
      </div>
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Advait Vats</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Core (Events)</p>
      </div>
    `,coordinators:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Anirban Mandal</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Core (Outreach)</p>
      </div>
    `,volunteers:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Chirantan Chakraborty</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Lead Volunteer (Support-Ops)</p>
      </div>
       <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Ashwin Maurya</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Volunteer (Multimedia)</p>
      </div>
       <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Sujith Sai</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Volunteer (Multimedia)</p>
      </div>
    `,othercontributors:`
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">RajyaLakshmi Jampani</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">DATA101 initiative</p>
      </div>
      <div class="team-member bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-300">Pritesh Gupta</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Support</p>
      </div>
    `};function r(t){const e=document.getElementById("team-cards");e.innerHTML=o[t],a.forEach(s=>s.classList.remove("active-tab")),document.getElementById(`${t}-btn`).classList.add("active-tab")}r("leads");a.forEach(t=>{t.addEventListener("click",e=>{r(e.target.id.replace("-btn",""))})});
