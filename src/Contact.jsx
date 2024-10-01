function Contact() {

     let heading = "contact app"
     let listofcontact = [
      {
         name:"nayan",
         Number:9009388091,
      },



      {
         name:"newnumber",
         Number:9009059655,
      },




      {
         name:"papa",
         Number:7999022168,
      },





      {
         name:"darpan",
         Number:9111946697,
      },



      {
         name:"sys",
         Number:7666589990,
      },

     ]
   return (
      <div>

         <p className="text-4xl mt-4 ml-10  text-blue-500 text-center"><b><u>
            {heading}
            </u></b></p>

         <section className="flex justify-center">



            <div className="h-[500px] w-[500px] bg-[#6EE0fB] mt-20">


               <input className="h-10 w-96 bg-slate-700 rounded-md ml-12 mt-4 hover:drop-shadow-2xl " type="text" placeholder="SEARCH" />

               <i class="fa-solid fa-magnifying-glass text-3xl ml-3 mt-2 hover:border-e-orange-300"></i>


               <ul>



                 {
                  listofcontact.map(c=> <li key={c.Number} className="bg-gray-50 rounded-lg p-1 w-[380px] ml-12 mt-3">

                     <p className="ml-5 text-sm">{c.name}  </p>
                     <p className="ml-5 text-xl">{c.Number}</p>

                  </li>)
                 }


               </ul>



            </div>



            <div className="h-[500px] w-[500px] bg-[#391E6B] mt-20">


               <p className="text-3xl text-center m-5 text-white">
                  <b>  Add  New</b>
               </p>


               <input className="ml-24 h-[30px] w-[250px] mt-16 rounded-sm" type="text" placeholder="Name" /> <br />


               <input className=" ml-24 h-[30px] w-[250px] mt-4 rounded-sm" type="text" placeholder="Number" /> <br />


               <button className="rounded-lg bg-sky-900 h-9 w-20 ml-48 mt-10"><p className="text-white">Add Both</p></button>


            </div>


         </section>
      </div>
   )
}
export default Contact