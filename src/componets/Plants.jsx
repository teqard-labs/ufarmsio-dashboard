import React, { Component } from 'react';
import Navbar from './Navbar';
import Lettuce from './media/lettuce.jpg'

export default class Plants extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div>
                <div>
            <Navbar />
            </div>
            <div className="mx-72 my-24 h-1/2 w-3/5 grid grid-cols-3 gap-x-10 place-items-center text-gray-900">
<div>
    
<a href="/ufarmsio-dashboard/dashboard"><img src={Lettuce} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/></a> 
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Lettuce</h4>
 
  
    
  </div>
 </div>
  
</div>
<div>
    
    <a href="/ufarmsio-dashboard/dashboard"><img src={Lettuce} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/></a>  

 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Brocolli</h4>
 
   
  </div>
 </div>
  
</div>
<div>
    
<a href="/ufarmsio-dashboard/dashboard"><img src={Lettuce} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/></a>  
  
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Kale</h4>
 
 
 
  </div>
 </div>
  
</div>

  </div>
            </div>
         );
    }
}