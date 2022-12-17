import "./sidebar.css";
import {
  Widgets,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  FoodBank,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { LocationOn, Call } from "@material-ui/icons";

export default function Sidebar() {
  const name = window.localStorage.getItem("name");
  return (
   <div class="flex flex-col w-80 h-max px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
         
      <div class="relative mt-3">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>

        <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
      </div>
      
      <div class="bg-white dark:bg-gray-900">
    <div class="container px-1 pt-8 pb-4 mx-auto">

       
          <div class="flex gap-3">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
            <div class="w-35 h-fit px-7 py-3 space-y-1 text-center border-2 border-gray-700 rounded-lg dark:border-gray-700 hover:bg-slate-100	">

              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABmUlEQVRoge2YvUsDQRDF391FNMaQwlgIKpaCh4UiooiKhYUg5i9IbNRCsLbTMmBpUtmItY0Eey0OCVpJCDYiqJBCLGKCNrk7GxVPEjN7H6wH8+t2d3b3PWaHgQVCjiK8YyU3Cg3HAGzYVhqn22X/ZdFRhaJX82loKAIYBzABRb1GKrcRiDIitAws7cfQHc0DyABAdGAQAPD+9PgVcQSzYwuFzbcANP5JhBQV61qGjYyiaUjoY98GOnuTqJZuYJvmGtTGGYCTALU2hV4DqYO9vrnF3Ug87phu1Gp4Lt8DyWG/NBnI6rPUYKEi7j98sJvNV+5eRY5pT1Yn66I9IZELd0q25zkBhAxY9RfR8wOHlKrJi6oBYCZgLb8xruYTbWuB1AcUBZZ3PcKQ7iQXS6sCDorK+hBJm1gn/oewAdm47gP1y6Jj3DM95es6ldBngA3IhvuAbNiAbLgPyIYNyIb7gGzYgGzIfcD3zyufCH0G2IBs3P+N3p47xyMLrdcoMT/XBAh9BtiAbNzXgMs369v+T0KfATbAMAzjiQ/T+W02XseO4wAAAABJRU5ErkJggg=="></img>
              

                <p class="font-medium text-gray-500 dark:text-gray-300">PG</p>

               
              </div>
            </a>
            
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-7 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

              <img src="data:image/png;base64,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"></img>
              

                <p class="font-medium text-gray-500 dark:text-gray-300">PG</p>

               
              </div>
              </a>
    
          </div>
          
        </div>
        <div class="container px-1 py-0 mx-auto my-0">

       
          <div class="flex gap-3">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-7 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

              <img src="data:image/png;base64,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"></img>
              

                <p class="font-medium text-gray-500 dark:text-gray-300">PG</p>

               
              </div>
              </a>
            
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-7 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

              <img src="data:image/png;base64,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"></img>
              

                <p class="font-medium text-gray-500 dark:text-gray-300">PG</p>

               
              </div>
              </a>
    
          </div>
          
    </div>
</div>

 

    <div class="flex flex-col justify-between flex-1 mt-8">
        <nav>
            <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Dashboard</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Accounts</span>
            </a>

         

          

            <hr class="my-6 border-gray-200 dark:border-gray-600" />

         

         
        </nav>

        <a href="#" class="flex items-center px-4 -mx-2">
            <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
        </a>
         <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Accounts</span>
            </a>
    </div>
</div>
  );
}
